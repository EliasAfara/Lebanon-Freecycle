const express = require('express');

const router = express.Router();

const User = require('../models/User');
const auth = require('../middleware/auth');

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

module.exports = router;
