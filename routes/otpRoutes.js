const express = require('express');
const OtpController = require('../controllers/otpController');
const router = express.Router();

router.get('/get-otp', OtpController.getOtp);
router.post('/validate-otp', OtpController.validateOtp);

module.exports = router;
