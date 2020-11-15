import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from 'config';
import gravatar from 'gravatar';
import pkg from 'express-validator';

const { check } = pkg;
const { validationResult } = pkg;
const router = express.Router();

import User from '../models/User.js';

/**
 * @route    POST | #endPoint: /api/register
 * @desc     Register User
 * @access   Public (No token needed)
 */
router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
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

    const { name, email, password } = req.body;

    try {
      // See if user already exists
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }

      // Get users gravatar
      const avatar = gravatar.url(email, {
        s: '200', // image size
        r: 'pg', // no 18+ images
        d: 'mm', // default image
      });

      // creates a new user instance (does not save)
      user = new User({
        name,
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

export default router;
