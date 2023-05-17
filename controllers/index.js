const router = require('express').Router();

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
router.get('/',(req,res)=>{
  res.render('index',{layout:'main'});

})
module.exports = router;
