const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const auth = require('../middleware/auth');

/**
 * @route    Put | #endPoint: /api/profile/update
 * @desc     Update User profile
 * @access   Private (Token Needed)
 */
router.put(
  '/update',
  [
    auth,
    [
      check(
        'fullname',
        'Full Name should be at least 5 Characters long.'
      ).isLength({
        min: 5,
      }),
      check('username', 'Username is required.').not().isEmpty(),
      check(
        'username',
        'Username should be at least 5 Characters long.'
      ).isLength({
        min: 5,
      }),
      check('email', 'Please include a valid email.')
        .isEmail()
        .normalizeEmail(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // 400 Bad Request
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const {
      fullname,
      username,
      email,
      bio,
      facebook,
      twitter,
      instagram,
    } = req.body;

    // Build profile object
    const profileFields = {};
    if (fullname) profileFields.fullname = fullname;
    if (username) profileFields.username = username;
    if (email) profileFields.email = email;
    if (bio) profileFields.bio = bio;

    // Build socail object
    profileFields.social = {};
    if (twitter) profileFields.social.twitter = twitter;
    if (facebook) profileFields.social.facebook = facebook;
    if (instagram) profileFields.social.instagram = instagram;

    try {
      // See if user already exists
      let profile = await User.findById(req.user.id).select('-password');

      let userEmail = await User.findOne({ email });

      //console.log(userEmail);

      if (userEmail && userEmail.email != email) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'E-mail already in use.' }] });
      }
      // username validation
      // Usernames can only use letters, numbers, underscores and periods.
      let user_username = await User.findOne({ username });

      if (user_username && user_username.username != username) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Username already in use.' }] });
      }

      if (!/^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/.test(username)) {
        return res.status(400).json({
          errors: [
            {
              msg:
                'Usernames can only use letters, numbers, underscores and periods.',
            },
          ],
        });
      }

      if (profile) {
        // Update user profile if user exists
        profile = await User.findOneAndUpdate(
          { _id: req.user.id },
          { $set: profileFields },
          { new: true }
        );
        return res.json(profile);
      }
    } catch (err) {
      console.log(err.message);
      res.status(500).send('500 Internal Server Error');
    }
  }
);
/************************************************************/
/**
 * @route    GET | #endPoint: /api/profile/:username
 * @desc     Get User profile Data according to username in URL
 * @access   Private (Token Needed)
 */
router.get('/:username', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });

    if (!user) {
      return res.status(400).json({ msg: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    console.log(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(400).json({ msg: 'User not found' });
    }
    res.status(500).send('500 Internal server error');
  }
});

/************************************************************/

/**
 * @route    Delete | #endPoint: /api/profile
 * @desc     Delete User profile
 * @access   Private (Token Needed)
 */
router.delete('/', auth, async (req, res) => {
  try {
    // Remove users Donations & Requests
    // await Donations.deleteMany({ user: req.user.id });
    // await Requests.deleteMany({ user: req.user.id });
    //Remove user
    await User.findOneAndRemove({ _id: req.user.id });
    res.json({ msg: 'User was deleted successfuly!' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('500 Internal server error');
  }
});

module.exports = router;
