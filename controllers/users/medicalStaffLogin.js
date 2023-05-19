//login function that utilizes bcrypt for password comparison and interacts with a MedicalStaff model

const bcrypt = require('bcrypt');
const MedicalStaff = require('../../models/MedicalStaff');

const login = async (email, password) => {
  const foundUser = await MedicalStaff.findOne({ where: {email: email }});
  if (foundUser) {
    const auth = await bcrypt.compare(password, foundUser.password);
    if (auth) {
      return foundUser;
    } else {
      throw new Error('Incorrect password');
    }
  } else {
    throw new Error('User not found');
  }
};

module.exports = login;