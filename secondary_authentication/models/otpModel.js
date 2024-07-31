const fs = require('fs');
const path = require('path');
const otpStorePath = path.join(__dirname, '..', 'otpStore.json');

class OtpModel {
  static readOtps() {
    try {
      return JSON.parse(fs.readFileSync(otpStorePath, 'utf8') || '[]');
    } catch (error) {
      return [];
    }
  }

  static writeOtps(otps) {
    fs.writeFileSync(otpStorePath, JSON.stringify(otps, null, 2));
  }

  static addOtp(otpRecord) {
    const otps = this.readOtps();
    otps.push(otpRecord);
    this.writeOtps(otps);
  }

  static findOtp(otp) {
    const otps = this.readOtps();
    return otps.find((record) => record.otp === otp);
  }
}

module.exports = OtpModel;
