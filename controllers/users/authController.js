const MedicalStaff = require('../../models/MedicalStaff')
const login = require('./login');
const router = require('express').Router();
const { SequelizeStore } = require('connect-session-sequelize');

const sequelize = require('../../config/connection');



module.exports.signup_get = (req, res) => {
    res.render('signup');
}
module.exports.login_get = (req, res) => {
    res.render('login');
}



// ___________________________________________________________________________________________ SIGNUP POST
module.exports.signup_post = async (req, res) => {
    const { first_name, last_name, gender, phone_number, role, email, password } = req.body;
    try {
       
        const medicalstaff = await MedicalStaff.create({ first_name, last_name, gender, phone_number, role, email, password });
        res.status(201).json(medicalstaff)
    } catch (err) {
        console.log(err);
        res.status(400).send('error, user was not not created')
    }
}

const redirect = () => {
    res.redirect('/doctor')
}

// ___________________________________________________________________________________________ SIGNUP POST

// ___________________________________________________________________________________________ LOGIN POST





exports.login_post = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await login(email, password);
    req.session.save(() => {
      req.session.user = user;

      res.status(200).json(dbUserData);
    });

    if (req.headers.accept.includes('application/json')) {
      res.json({ redirect: `/doctor` });
      // Send a JSON response with the redirect URL
    } else {
      console.log("redirecting to")
      res.redirect('/doctor'); // Redirect to the doctor page for non-API requests
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
  
  
// ___________________________________________________________________________________________ LOGIN POST


