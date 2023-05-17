const bcrypt = require('bcrypt');
const User = require('../../models/User');

const login = async (email, password) => {
  const foundUser = await User.findOne({ where: {email: email }
    

})
  if (foundUser) {
    const auth = await bcrypt.compare(password, foundUser.password);
    if (auth) {
        console.log("user found, need to return login")
        // res.redirect('/doctor')
      return foundUser;

    } else {
      throw new Error('Incorrect password');
    }
  } else {
    throw new Error('User not found');
  }
};

module.exports = login;
