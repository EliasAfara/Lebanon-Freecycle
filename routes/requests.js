const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const { cloudinary } = require('../utils/cloudinary');
const User = require('../models/User');
const Request = require('../models/Request');
const auth = require('../middleware/auth');
const { v4 } = require('uuid');

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
    const {
      name,
      category,
      description,
      phoneNumber,
      image1,
      image2,
      image3,
    } = req.body;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      let imagesURLs = [];
      let counter = 0;
      if (image1 !== '') {
        counter++;
      }
      if (image2 !== '') {
        counter++;
      }
      if (image3 !== '') {
        counter++;
      }

      if (counter !== 0) {
        for (let i = 0; i < counter; i++) {
          if (i === 0) {
            const uploadResponseOne = await cloudinary.uploader.upload(image1, {
              upload_preset: 'lebanon-freecycle-requests',
              crop: 'scale',
              quality: 'auto:eco',
              fetch_format: 'auto',
              responsive_breakpoints: {
                create_derived: true,
                bytes_step: 20000,
                min_width: 200,
                max_width: 700,
                transformation: {
                  crop: 'fill',
                  aspect_ratio: '16:9',
                  gravity: 'auto',
                },
              },
              folder: 'Requests',
              public_id: `lfc_${req.user.id}_request_${v4()}`,
            });
            imagesURLs.push({ imageURL: uploadResponseOne.secure_url });
          }
          if (i === 1) {
            const uploadResponseTwo = await cloudinary.uploader.upload(image2, {
              upload_preset: 'lebanon-freecycle-requests',
              crop: 'scale',
              quality: 'auto:eco',
              fetch_format: 'auto',
              responsive_breakpoints: {
                create_derived: true,
                bytes_step: 20000,
                min_width: 200,
                max_width: 700,
                transformation: {
                  crop: 'fill',
                  aspect_ratio: '16:9',
                  gravity: 'auto',
                },
              },
              folder: 'Requests',
              public_id: `lfc_${req.user.id}_request_${v4()}`,
            });
            imagesURLs.push({ imageURL: uploadResponseTwo.secure_url });
          }
          if (i === 2) {
            const uploadResponseThree = await cloudinary.uploader.upload(
              image3,
              {
                upload_preset: 'lebanon-freecycle-requests',
                crop: 'scale',
                quality: 'auto:eco',
                fetch_format: 'auto',
                responsive_breakpoints: {
                  create_derived: true,
                  bytes_step: 20000,
                  min_width: 200,
                  max_width: 700,
                  transformation: {
                    crop: 'fill',
                    aspect_ratio: '16:9',
                    gravity: 'auto',
                  },
                },
                folder: 'Requests',
                public_id: `lfc_${req.user.id}_request_${v4()}`,
              }
            );
            imagesURLs.push({ imageURL: uploadResponseThree.secure_url });
          }
        }
      }

      let user = await User.findById(req.user.id).select('-password');

      const newRequest = new Request({
        name: name,
        category: category,
        description: description,
        phoneNumber: phoneNumber,
        images: imagesURLs,
        user: {
          id: req.user.id,
          fullname: user.fullname,
          username: user.username,
          avatar: user.avatar,
        },
      });

      const request = await newRequest.save();

      user.requests.unshift({ request: request._id });
      await user.save();

      return res.json(request);
    } catch (err) {
      console.error(err);
      if (err.message.includes('File size too large.')) {
        return res.status(400).json({
          errors: [
            { msg: 'Image is too large. Maximum size allowed is 10 MB' },
          ],
        });
      }
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
    let totalRequests = allRequests.length;

    let filterQueryString = req.query;
    let statusFilter = '';
    // TODO
    if (Object.keys(filterQueryString).length > 0) {
      if (filterQueryString.status === 'Available') {
        statusFilter = 'Available';
      } else if (filterQueryString.status === 'Completed') {
        statusFilter = 'Completed';
      }
    }

    res.json({
      totalRequests: totalRequests,
      statusFilter: statusFilter,
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
    const request = await Request.findOneAndUpdate(
      { _id: req.params.id },
      { status: req.params.status },
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
    let user = await User.findById(req.user.id).select('-password');

    // Handle request does not exists
    if (!request) {
      // Check if a requests exists with the provided ID
      return res.status(404).json({ msg: 'Request was not found' });
    }

    if (request.user.id.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    // remove the request from user requests array
    user.requests = user.requests.filter(
      (requestObj) => requestObj.request.toString() !== req.params.id
    );

    await request.remove();
    await user.save();

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
