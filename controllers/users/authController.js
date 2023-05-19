const MedicalStaff = require('../../models/MedicalStaff')
const login = require('./medicalStaffLogin');
const router = require('express').Router();
const sequelize = require('../../config/connection');
const { SequelizeStore } = require('connect-session-sequelize');
const bcrypt = require('bcrypt');

module.exports.signup_get = (req, res) => {
  res.render('signup');
}
module.exports.login_get = (req, res) => {
  res.render('login');
}

// ___________________________________________________________________________________________ SIGNUP POST


module.exports.signup_post = async (req, res) => {
  try {
    const { first_name, last_name, gender, phone_number, role, email, password } = req.body;

    const existingUser = await MedicalStaff.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'User with the specified email already exists.' });
    }

    const medicalStaff = await MedicalStaff.create({ first_name, last_name, gender, phone_number, role, email, password });
    res.status(201).json(medicalStaff);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while creating the user.' });
  }
};


// ___________________________________________________________________________________________ LOGIN POST

exports.login_post = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await login(email, password);
    req.session.save(() => {
      req.session.user = user;
    });
    if (req.headers.accept.includes('application/json')) {
      res.json({ redirect: `/doctor/` + user.id });
    } else {
      console.log(user)
      res.redirect('/doctor/' + user.id);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


