const bcrypt = require('bcrypt');
const User = require('../../models/User');

const login = async (email, password) => {
  const user = await User.findOne({email});
  if (email) {
    console.log(user instanceof User);
    console.log(user + "exists, moving down...")
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error('incorrect password');
  }
  throw Error('incorrect email');
};

module.exports = login;
