const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const { cloudinary } = require('../utils/cloudinary');
const APIfeatures = require('../utils/APIfeatures');
const User = require('../models/User');
const Request = require('../models/Request');
const auth = require('../middleware/auth');
const { v4 } = require('uuid');

/**
 * @route    #reqtype: POST | #endpoint: api/requests
 * @desc     Create a request
 * @access   Private
 */
router.post(
  '/',
  auth,
  check('name', 'Text is required to be between 2 to 40 characters').isLength({
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
  check('category', 'Category is required').notEmpty(),
  check('phoneNumber', 'Phone Number is required').isLength({
    min: 11,
    max: 12,
  }),

  async (req, res) => {
    const {
      name,
      category,
      description,
      phoneNumber,
      imagesConatiner,
    } = req.body;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      let imagesURLs = [];

      if (imagesConatiner.length > 0) {
        for (let i = 0; i < imagesConatiner.length; i++) {
          let uploadResponse = await cloudinary.uploader.upload(
            imagesConatiner[i],
            {
              upload_preset: 'lebanon-freecycle-requests',
              crop: 'scale',
              quality: 'auto:eco',
              fetch_format: 'jpg',
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
              format: 'jpg',
              folder: 'requests',
              public_id: `lfc_${req.user.id}_request_${v4()}`,
            }
          );
          imagesURLs.push({ imageURL: uploadResponse.secure_url });
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
    // http://localhost:5000/api/requests?page=2
    // http://localhost:5000/api/requests?name=admin&status=Available&category=Books and Educational Supplies&page=1

    const features = new APIfeatures(Request.find(), req.query)
      .partialSearch()
      .filtering()
      .paginating();

    const requests = await features.query;

    const getAllFilteredRequests = new APIfeatures(Request.find(), req.query)
      .partialSearch()
      .filtering();

    let allRequests = await getAllFilteredRequests.query;
    let totalRequests = allRequests.length;

    res.json({
      totalRequests: totalRequests,
      requests,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('500 Internal server error');
  }
});

/********************************************************************************* */
// Used for testing partial search separatly
// router.get('/partial/search', async (req, res) => {
//   try {
//     const features = new APIfeatures(Request.find(), req.query).partialSearch();
//     const requests = await features.query;

//     let allRequests = await features.query;
//     let totalRequests = allRequests.length;

//     res.json({
//       totalRequests: totalRequests,
//       requests,
//     });
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('500 Internal server error');
//   }
// });

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
  auth,
  check('name', 'Text is required to be between 2 to 40 characters').isLength({
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
  check('category', 'Category is required').notEmpty(),
  check('phoneNumber', 'Phone Number is required').isLength({
    min: 11,
    max: 12,
  }),

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

      requestFields.user = {
        id: req.user.id,
        fullname: user.fullname,
        username: user.username,
        avatar: user.avatar,
      };

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

    const requestLikes = request.likes.length;

    await request.remove();
    await user.save();

    // If the request had any likes, decrement this ammount from the total user likes
    if (requestLikes > 0) {
      await user.updateOne({
        $inc: {
          likes: -requestLikes,
        },
      });
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

/************************************************************/
/**
 * @route    #reqtype: PUT | #endpoint: api/requests/like/request/:id/requestor/:userId
 * @desc     Like & Unlike a Request
 * @access   Private
 */
router.put('/like/request/:id/requestor/:userId', auth, async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).select('-password');
    const request = await Request.findById(req.params.id);

    // Handle user incase it does not exists
    if (!user) {
      // Check if a donation owner exists with the provided userId
      return res.status(404).json({ msg: 'User was not found' });
    }

    // Handle donation incase it does not exists
    if (!request) {
      // Check if a requests exists with the provided ID
      return res.status(404).json({ msg: 'Request was not found' });
    }

    // Check if the request has already been liked
    if (
      request.likes.filter((like) => like.user.toString() === req.user.id)
        .length > 0
    ) {
      request.likes.splice(
        request.likes.findIndex((like) => like.user.toString() === req.user.id),
        1
      );
      await request.save();
      await user.updateOne({
        $inc: {
          likes: -1,
        },
      });
      return res.json(request.likes);
    }

    request.likes.unshift({ user: req.user.id });
    await request.save();
    await user.updateOne({
      $inc: {
        likes: +1,
      },
    });
    res.json(request.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('500 Internal server error');
  }
});

module.exports = router;
