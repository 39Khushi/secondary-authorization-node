const OtpModel = require('../models/otpModel');
const { generateOTP, isOtpValid } = require('../utils/otpUtils');

class OtpController {
  static getOtp(req, res) {
    const otp = generateOTP();
    const otpRecord = {
      otp,
      createdAt: Date.now(),
      expiresAt: Date.now() + 10 * 60 * 1000,
    };
    OtpModel.addOtp(otpRecord);
    res.json({ otp });
  }

  static validateOtp(req, res) {
    const { otp } = req.body;
    const otpRecord = OtpModel.findOtp(Number(otp));
    const isValid = isOtpValid(otpRecord);
    res.json({ isValid });
  }
}

module.exports = OtpController;
