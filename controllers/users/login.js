const bcrypt = require('bcrypt');
const User = require('../../models/User');

const login = async (req, res, next) => {
    const { email, password } = req.body;
    const foundUser = await User.findOne({ where: { email: email } });
    if (foundUser) {
        const auth = await bcrypt.compare(password, foundUser.password);
        if (auth) {
            req.session.user = foundUser; // save the user in the session
            res.redirect('/dashboard'); // redirect the user to the dashboard page
        } else {
            throw new Error('Incorrect password');
        }
    } else {
        throw new Error('User not found');
    }
};

module.exports = login;
