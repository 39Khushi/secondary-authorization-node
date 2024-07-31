function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000);
  }
  
  function isOtpValid(otpRecord) {
    if (!otpRecord) {
      return false;
    }
    return otpRecord.expiresAt > Date.now();
  }
  
  module.exports = { generateOTP, isOtpValid };
  