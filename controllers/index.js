const router = require('express').Router();
const authController = require('./users/authController')
const session = require('express-session')


router.get('/', (req, res) => {
  try {
    res.render('index', { layout: 'main'});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



//bs added------
const doctor = require('./doctor');
//localhost:3001/doctor
router.use('/doctor', doctor);
//bs added------

// mb added------
const patientList = require('./patientList');
//  localhost:3001/patients
router.use('/patientList', patientList);


// const newpatient = require('./newpatient');
// router.get('/newpatient', newpatient);


router.get('/signup', authController.signup_get);
router.post('/signup', authController.signup_post);
router.get('/login', authController.login_get);
router.post('/login', authController.login_post);

module.exports = router;




