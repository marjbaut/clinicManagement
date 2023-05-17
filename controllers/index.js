const router = require('express').Router();
const authController = require('./users/authController')


router.get('/', (req, res)=> {
  res.render('index', {layout:'main'});
})

//bs added------
const doctor = require('./doctor');
//localhost:3001/doctor
router.use('/doctor', doctor);
//bs added------

// mb added------
const patientList = require('./patientList');
//  localhost:3001/patients
router.use('/patientList', patientList);

//mb-------



router.get('/signup', authController.signup_get);
router.post('/signup', authController.signup_post);
router.get('/login', authController.login_get);
router.post('/login', authController.login_post);
router.get('/',(req,res)=>{
  res.render('index',{layout:'main'});

});

module.exports = router;
// GET all patients
// router.get('/', async (req, res) => {
//   try {
//     const patientsData = await Patient.findAll();
//     const patients = patientsData.map(patient => patient.get({ plain: true }));
//     res.render('patients', { patients });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });



// GET all patients
// router.get('/', async (req, res) => {
//   try {
//     const patientsData = await Patient.findAll();
//     const patients = patientsData.map(patient => patient.get({ plain: true }));
//     res.render('patients', { patients });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/', (req, res)=> {
  res.render('index', {layout:'main'});
})




