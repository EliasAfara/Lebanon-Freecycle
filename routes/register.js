const express = require('express');
const gravatar = require('gravatar');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');

/**
 * @route    POST | #endPoint: /api/register
 * @desc     Register User
 * @access   Public (No token needed)
 */
router.post(
  '/',
  [
    check(
      'fullname',
      'Full Name is required to be between 2-30 characters'
    ).isLength({
      min: 2,
      max: 30,
    }),
    check(
      'user_name',
      'Username is required to be at least 5 characters'
    ).isLength({
      min: 5,
    }),
    check('email', 'Please include a valid email.').isEmail().normalizeEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters.'
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // 400 Bad Request
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const { fullname, user_name, email, password } = req.body;

    try {
      const username = user_name.toLowerCase();
      // username validation
      // Usernames can only use letters, numbers, underscores and periods.
      let user_username = await User.findOne({ username });

      if (user_username) {
        return res.status(400).json({
          errors: [{ msg: 'Username already in use.', param: 'user_name' }],
        });
      }

      if (!/^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/.test(username)) {
        return res.status(400).json({
          errors: [
            {
              msg:
                'Usernames can only use letters, numbers, underscores and periods.',
              param: 'user_name',
            },
          ],
        });
      }

      // See if user already exists
      let user = await User.findOne({ email });

      if (user) {
        return res.status(400).json({
          errors: [{ msg: 'E-mail already in use.', param: 'email' }],
        });
      }

      // Get users gravatar
      const avatar = gravatar.url(email, {
        s: '200', // image size
        r: 'pg', // no 18+ images
        d: 'mm', // default image
      });

      // creates a new user instance (does not save)
      user = new User({
        fullname,
        username,
        email,
        avatar,
        password,
      });

      // create salt to do hashing
      const salt = await bcrypt.genSalt(10);

      // Encrypt password with bycript and store it in user password
      user.password = await bcrypt.hash(password, salt);

      // Save user to database
      await user.save();

      // Return jsonwebtoken (when user registers, he will be logged in instantly and that get done using jsonwebtoken)

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.log(err.message);
      res.status(500).send('500 Internal Server Error');
    }
  }
);

module.exports = router;
