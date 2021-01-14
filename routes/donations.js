const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const { cloudinary } = require('../utils/cloudinary');
const APIfeatures = require('../utils/APIfeatures');
const User = require('../models/User');
const Donation = require('../models/Donation');
const auth = require('../middleware/auth');
const { v4 } = require('uuid');

/**
 * @route    #reqtype: POST | #endpoint: api/donations
 * @desc     Create a donation
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
  check('locationName', 'Location is required').notEmpty(),
  check('address', 'Location is required').notEmpty(),

  async (req, res) => {
    const {
      name,
      category,
      description,
      phoneNumber,
      address,
      locationName,
      longitude,
      latitude,
      district,
      googleMapLink,
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
              upload_preset: 'lebanon-freecycle-donations',
              crop: 'scale',
              quality: 'auto:eco',
              fetch_format: 'webp',
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
              format: 'webp',
              folder: 'donations',
              public_id: `lfc_${req.user.id}_donation_${v4()}`,
            }
          );
          imagesURLs.push({ imageURL: uploadResponse.secure_url });
        }
      } else {
        return res.status(400).json({
          errors: [{ msg: 'A donation image is required' }],
        });
      }

      let user = await User.findById(req.user.id).select('-password');

      const newDonation = new Donation({
        name,
        category,
        description,
        phoneNumber,
        address,
        location: {
          locationName: locationName,
          longitude: longitude,
          latitude: latitude,
          district: district,
          googleMapLink: googleMapLink,
        },
        images: imagesURLs,
        user: {
          id: req.user.id,
          fullname: user.fullname,
          username: user.username,
          avatar: user.avatar,
        },
      });

      const donation = await newDonation.save();

      user.donations.unshift({ donation: donation._id });
      await user.save();

      return res.json(donation);
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
 * @route    #reqtype: GET | #endpoint: api/donations
 * @desc     Get all donations
 * @access   Public
 */
// Get All in descending or ascendoing order { limit 10 per page }
router.get('/', async (req, res) => {
  try {
    //http://localhost:5000/api/donations?page=2

    const features = new APIfeatures(Donation.find(), req.query)
      .filtering()
      .paginating();
    const donations = await features.query;

    const getAllFiltereddonations = new APIfeatures(
      Donation.find(),
      req.query
    ).filtering();

    let allDonations = await getAllFiltereddonations.query;
    let totalDonations = allDonations.length;

    res.json({
      totalDonations: totalDonations,
      donations,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('500 Internal server error');
  }
});

/********************************************************************************* */

/**
 * @route    #reqtype: GET | #endpoint: api/donations/:id
 * @desc     Get all donations for user
 * @access   Private
 */
router.get('/user', async (req, res) => {
  try {
    /**
     * @examples
     * http://localhost:5000/api/donations/?user.username=elias
     * http://localhost:5000/api/donations/user/?user.username=elias&status=Completed
     * param: user.username | Value: elias
     * param: status        | Value: Completed
     */
    const features = new APIfeatures(Donation.find(), req.query).filtering();

    const donations = await features.query.sort({ date: -1 });

    // Handle donation does not exists
    if (!donations) {
      // Check if a donation exists with the provided ID
      return res.status(404).json({ msg: 'No donations were not found' });
    }
    // { results: donations.length, donations }
    res.json(donations);
  } catch (err) {
    res.status(500).send('500 Internal server error');
  }
});
/********************************************************************************* */

// Get a single donation by ID
/**
 * @route    #reqtype: GET | #endpoint: api/donations/single/:id
 * @desc     Get donation by ID
 * @access   Public
 */
router.get('/single/:id', async (req, res) => {
  try {
    const donation = await Donation.findById(req.params.id);

    // Handle donation does not exists
    if (!donation) {
      // Check if a donations exists with the provided ID
      return res.status(404).json({ msg: 'donation was not found' });
    }
    res.json(donation);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      // Not formated donation ID, random id gives this error
      // Without this if statement, we will get a server error for random ID's which is wrong
      return res.status(404).json({ msg: 'donation was not found' });
    }
    res.status(500).send('500 Internal server error');
  }
});

/**
 * @route    #reqtype: PUT | #endpoint: api/donations/:id
 * @desc     Update a donation
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
  check('locationName', 'Location is required').notEmpty(),
  check('address', 'Location is required').notEmpty(),

  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select('-password');

      const {
        name,
        category,
        description,
        phoneNumber,
        address,
        locationName,
        longitude,
        latitude,
        district,
        googleMapLink,
      } = req.body;

      const donationFields = {};
      if (name) donationFields.name = name;
      if (category) donationFields.category = category;
      if (description) donationFields.description = description;
      if (phoneNumber) donationFields.phoneNumber = phoneNumber;
      if (address) donationFields.address = address;

      donationFields.location = {
        locationName: locationName,
        longitude: longitude,
        latitude: latitude,
        district: district,
        googleMapLink: googleMapLink,
      };

      donationFields.user = {
        id: req.user.id,
        fullname: user.fullname,
        username: user.username,
        avatar: user.avatar,
      };

      const donation = await Donation.findOneAndUpdate(
        { _id: req.params.id },
        { $set: donationFields },
        { new: true }
      );

      await donation.save();

      res.json(donation);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('500 Internal server error');
    }
  }
);

/**
 * @route    #reqtype: PUT | #endpoint: api/donations/:id/:status
 * @desc     Update a donation status
 * @access   Private
 */
router.put('/:id/:status', auth, async (req, res) => {
  try {
    const donation = await Donation.findOneAndUpdate(
      { _id: req.params.id },
      { status: req.params.status },
      { new: true }
    );

    await donation.save();

    res.json(donation);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('500 Internal server error');
  }
});

/**
 * @route    #reqtype: DELETE | #endpoint: api/donations/:id
 * @desc     Delete a donation by ID
 * @access   Private
 */
router.delete('/:id', auth, async (req, res) => {
  try {
    const donation = await Donation.findById(req.params.id);
    let user = await User.findById(req.user.id).select('-password');

    // Handle donation does not exists
    if (!donation) {
      // Check if a donations exists with the provided ID
      return res.status(404).json({ msg: 'donation was not found' });
    }

    if (donation.user.id.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    // remove the donation from user donations array
    user.donations = user.donations.filter(
      (donationObj) => donationObj.donation.toString() !== req.params.id
    );

    await donation.remove();
    await user.save();

    res.json({ msg: 'donation was removed successfuly!' });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'donation not found' });
    }
    res.status(500).send('500 Internal server error');
  }
});

module.exports = router;
