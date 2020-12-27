const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Request = require('../models/Request');
const auth = require('../middleware/auth');

class APIfeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filtering() {
    const queryobj = { ...this.queryString };
    // console.log(`Query: ${JSON.stringify(queryobj)}`);
    const excludedfields = ['page', 'sort', 'limit'];
    excludedfields.forEach((el) => delete queryobj[el]);
    let querystr = JSON.stringify(queryobj);
    querystr = querystr.replace(/\b(gte|gt|lt|lte)\b/g, (match) => `$${match}`);
    this.query.find(JSON.parse(querystr)).sort({ date: -1 });
    return this;
  }

  paginating() {
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 10;
    const skip = (page - 1) * limit;
    this.query = this.query.skip(skip).limit(limit);
    return this;
  }
}

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
          { requests: [...user.requests, requestID] },
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
    //http://localhost:5000/api/requests?page=2

    const features = new APIfeatures(Request.find(), req.query)
      .filtering()
      .paginating();
    const requests = await features.query;

    const getAllFilteredRequests = new APIfeatures(
      Request.find(),
      req.query
    ).filtering();

    let allRequests = await getAllFilteredRequests.query;
    let totalPages = allRequests.length;
    // const pagesLimit = 10;
    // let totalPages = Math.ceil(allRequests.length / pagesLimit);

    // const pageNumbers = [];
    // for (let i = 1; i <= totalPages; i++) {
    //   pageNumbers.push(i);
    // }

    res.json({
      totalPages: totalPages,
      requests,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('500 Internal server error');
  }
});

/********************************************************************************* */

/**
 * @route    #reqtype: GET | #endpoint: api/requests/:id
 * @desc     Get all requests for user
 * @access   Private
 */
router.get('/user', async (req, res) => {
  try {
    /**
     * http://localhost:5000/api/requests/?user.username=elias
     * http://localhost:5000/api/requests/user/?user.username=elias&status=Completed
     * param: user.username | Value: elias
     * param: status        | Value: Completed
     */
    const features = new APIfeatures(Request.find(), req.query).filtering();

    const requests = await features.query.sort({ date: -1 });

    // Handle request does not exists
    if (!requests) {
      // Check if a request exists with the provided ID
      return res.status(404).json({ msg: 'No requests were not found' });
    }
    // { results: requests.length, requests }
    res.json(requests);
  } catch (err) {
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

module.exports = router;
