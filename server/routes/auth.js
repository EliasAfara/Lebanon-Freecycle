import express from 'express';

const router = express.Router();

import User from '../models/User.js';
import auth from '../middleware/auth.js';

/**
 * @route    GET | #endPoint: /api/auth
 * @desc     Get user by token
 * @access   Public (No token needed)
 */
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password'); // Getting the user data without the password
    res.json(user);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('500 Internal server error');
  }
});

export default router;
