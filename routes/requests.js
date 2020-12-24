const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Request = require('../models/Request');
const auth = require('../middleware/auth');

/**
 * @route    #reqtype: POST | #endpoint: api/requests
 * @desc     Create a request
 * @access   Private
 */
router.post(
  '/',
  [
    auth,
    [
      check(
        'name',
        'Text is required to be between 2 to 40 characters'
      ).isLength({
        min: 2,
        max: 40,
      }),
      check(
        'description',
        'Description is required to be between 5 to 255 characters'
      ).isLength({
        min: 5,
        max: 255,
      }),
      check('category', 'Category is required').not().isEmpty(),
      check('phoneNumber', 'Phone Number is required').isLength({
        min: 11,
        max: 12,
      }),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select('-password');

      const newRequest = new Request({
        name: req.body.name,
        category: req.body.category,
        description: req.body.description,
        phoneNumber: req.body.phoneNumber,
        fullname: user.fullname,
        username: user.username,
        avatar: user.avatar,
        user: req.user.id, // we want user id
      });

      const request = await newRequest.save();

      res.json(request);

      if (user) {
        // Update user requests array
        const requestID = request._id;

        user = await User.findOneAndUpdate(
          { _id: req.user.id },
          { requests: requestID },
          { new: true }
        );
        return res.json(user);
      }
    } catch (err) {
      console.error(err.message);
      res.status(500).send('500 Internal server error');
    }
  }
);

/********************************************************************************* */

/**
 * @route    #reqtype: GET | #endpoint: api/requests
 * @desc     Get all Posts
 * @access   Public
 */
// Get All in descending or ascendoing order { limit 10 per page }
router.get('/', async (req, res) => {
  try {
    const requests = await Request.find().limit(10).sort({ date: -1 }); // Display most recent post first
    res.json(requests);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('500 Internal server error');
  }
});

// Filtering: find({ status: /Completed$/ })
/********************************************************************************* */

/**
 * @route    #reqtype: GET | #endpoint: api/posts/:id
 * @desc     Get all requests by username
 * @access   Private
 */
router.get('/:username', async (req, res) => {
  try {
    const usernameLowerCase = req.params.username.toLowerCase();
    const user = await User.findOne({ username: usernameLowerCase });
    const userId = user._id;

    const requests = await Request.find({ user: userId })
      .limit(10)
      .sort({ date: -1 });

    // Handle request does not exists
    if (!requests) {
      // Check if a request exists with the provided ID
      return res.status(404).json({ msg: 'No requests were not found' });
    }
    res.json(requests);
  } catch (err) {
    if (err.message === "Cannot read property '_id' of null") {
      return res.status(404).json({ msg: 'User was not found' });
    }

    res.status(500).send('500 Internal server error');
  }
});
/********************************************************************************* */

// Get a single request by ID
/**
 * @route    #reqtype: GET | #endpoint: api/posts/:id
 * @desc     get post by ID
 * @access   Private
 */
// router.get('/:id', async (req, res) => {
//   try {
//     const post = await Post.findById(req.params.id);

//     // Handle post does not exists
//     if (!post) {
//       // Check if a posts exists with the provided ID
//       return res.status(404).json({ msg: 'Post was not found' });
//     }
//     res.json(post);
//   } catch (err) {
//     console.error(err.message);
//     if (err.kind === 'ObjectId') {
//       // Not formatedd Post ID, random id gives this error
//       // Without this if statement, we will get a server error for random ID's which is wrong
//       return res.status(404).json({ msg: 'Post was not found' });
//     }
//     res.status(500).send('500 Internal server error');
//   }
// });

// Update

// Delete

// Update Status

// Filters
/**
 *  Get by date
 *  Get by status
 */

module.exports = router;
