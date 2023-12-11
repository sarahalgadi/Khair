//creating a router to work over here
const express = require('express');
const router = express.Router();
const donationController = require('../controller/donationController');


router.post('/', donationController.addDonation);


module.exports = router;
