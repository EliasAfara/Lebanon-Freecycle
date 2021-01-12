const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const normalizeUrl = require('normalize-url');

const User = require('../models/User');
const auth = require('../middleware/auth');

/**
 * @route    Put | #endPoint: /api/profile/update
 * @desc     Update User profile
 * @access   Private (Token Needed)
 */
router.put(
  '/update',
  auth,
  check(
    'fullname',
    'Full Name should be between 2-30 Characters long.'
  ).isLength({
    min: 2,
    max: 30,
  }),
  check('username', 'Username is required.').notEmpty(),
  check('username', 'Username should be at least 5 Characters long.').isLength({
    min: 5,
  }),
  check('email', 'Please include a valid email.').isEmail().normalizeEmail(),
  check('bio', 'Bio should be at most 255 Characters long.').isLength({
    max: 255,
  }),

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
    if (username) profileFields.username = username.toLowerCase();
    if (email) profileFields.email = email;
    if (bio) profileFields.bio = bio;

    // Build socail object
    profileFields.social = {};
    if (twitter)
      profileFields.social.twitter = normalizeUrl(twitter, {
        forceHttps: true,
      });
    if (facebook)
      profileFields.social.facebook = normalizeUrl(facebook, {
        forceHttps: true,
      });
    if (instagram)
      profileFields.social.instagram = normalizeUrl(instagram, {
        forceHttps: true,
      });

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
    const usernameLowerCase = req.params.username.toLowerCase();
    const user = await User.findOne({ username: usernameLowerCase });

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
/**
 * @route    Put | #endPoint: /api/profile/update/password
 * @desc     Update User password
 * @access   Private (Token Needed)
 */
router.put(
  '/update/password',
  auth,
  check('oldPassword', 'Old Password is required.').notEmpty(),
  check('newPassword', 'New Password is required.').notEmpty(),
  check('confirmNewPassword', 'Confirm New Password is required.').notEmpty(),
  check(
    'newPassword',
    'New Password should be at least 6 characters long.'
  ).isLength({ min: 6 }),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // 400 Bad Request
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const { oldPassword, newPassword, confirmNewPassword } = req.body;

    try {
      // See if user already exists
      let user = await User.findById(req.user.id);

      const match = await bcrypt.compareSync(oldPassword, user.password);

      if (!match) {
        return res.status(400).json({
          errors: [
            {
              msg: 'Old Password is incorrect.',
              param: 'oldPassword',
              location: 'body',
            },
          ],
        });
      }

      if (newPassword !== confirmNewPassword) {
        return res.status(400).json({
          errors: [
            { msg: 'New Password and Confirm new password does not match.' },
          ],
        });
      }
      const saltRounds = 10;
      const salt = await bcrypt.genSalt(saltRounds);
      const password = await bcrypt.hash(newPassword, salt);

      if (user && match) {
        // Update user password
        user = await User.findOneAndUpdate(
          { _id: req.user.id },
          { password: password },
          { new: true }
        );
        return res.json(user);
      }
    } catch (err) {
      console.log(err.message);
      res.status(500).send('500 Internal Server Error');
    }
  }
);

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
