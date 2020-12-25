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
        user: {
          id: req.user.id,
          fullname: user.fullname,
          username: user.username,
          avatar: user.avatar,
        },
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
 * @desc     Get all requests
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
 * @route    #reqtype: GET | #endpoint: api/requests/:id
 * @desc     Get all requests by username
 * @access   Private
 */
router.get('/:username', async (req, res) => {
  try {
    const usernameLowerCase = req.params.username.toLowerCase();
    const user = await User.findOne({ username: usernameLowerCase });
    const userName = user.username;

    const requests = await Request.find({ 'user.username': userName }).sort({
      date: -1,
    });

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
 * @route    #reqtype: GET | #endpoint: api/requests/single/:id
 * @desc     Get request by ID
 * @access   Public
 */
router.get('/single/:id', async (req, res) => {
  try {
    const request = await Request.findById(req.params.id);

    // Handle request does not exists
    if (!request) {
      // Check if a requests exists with the provided ID
      return res.status(404).json({ msg: 'Request was not found' });
    }
    res.json(request);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      // Not formated request ID, random id gives this error
      // Without this if statement, we will get a server error for random ID's which is wrong
      return res.status(404).json({ msg: 'Request was not found' });
    }
    res.status(500).send('500 Internal server error');
  }
});

/**
 * @route    #reqtype: PUT | #endpoint: api/requests/:id
 * @desc     Update a request
 * @access   Private
 */
router.put(
  '/:id',
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

      const { name, category, description, phoneNumber } = req.body;

      const requestFields = {};
      if (name) requestFields.name = name;
      if (category) requestFields.category = category;
      if (description) requestFields.description = description;
      if (phoneNumber) requestFields.phoneNumber = phoneNumber;

      requestFields.user = {};
      requestFields.user.id = req.user.id;
      requestFields.user.fullname = user.fullname;
      requestFields.user.username = user.username;
      requestFields.user.avatar = user.avatar;

      const request = await Request.findOneAndUpdate(
        { _id: req.params.id },
        { $set: requestFields },
        { new: true }
      );

      await request.save();

      res.json(request);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('500 Internal server error');
    }
  }
);

/**
 * @route    #reqtype: DELETE | #endpoint: api/requests/:id
 * @desc     Delete a request by ID
 * @access   Private
 */
router.delete('/:id', auth, async (req, res) => {
  try {
    const request = await Request.findById(req.params.id);

    // Handle request does not exists
    if (!request) {
      // Check if a requests exists with the provided ID
      return res.status(404).json({ msg: 'Request was not found' });
    }

    if (request.user.id.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    } else {
      await request.remove();
    }
    res.json({ msg: 'Request was removed successfuly!' });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Request not found' });
    }
    res.status(500).send('500 Internal server error');
  }
});

// Update Status
/**
 * @route    #reqtype: PUT | #endpoint: api/requests/:id/:status
 * @desc     Update a request status
 * @access   Private
 */
router.put('/:id/:status', auth, async (req, res) => {
  try {
    let status = 'Available';
    if (req.params.status === status) {
      status = 'Completed';
    } else if (req.params.status === 'Completed') {
      status = 'Available';
    }

    const request = await Request.findOneAndUpdate(
      { _id: req.params.id },
      { status: status },
      { new: true }
    );

    await request.save();

    res.json(request);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('500 Internal server error');
  }
});

// Filters
/**
 *  Get by date
 *  Get by status
 */

module.exports = router;
