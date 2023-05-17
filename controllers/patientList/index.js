const router = require("express").Router();
const {Patient, MedicalStaff, Appointment, Specialty} = require ('../../models');
//localhost:3001/patientList
router.get('/', async (req, res) => {

  const patientData = await Patient.findAll();
  // const nicePatientData = patientData.get({plain: true});
  console.log(' data', patientData);
    res.render('patient',patientData);

});


  //localhost:3001/patientList/:patient_id
router.get('/:patient_id', async(req,res)=> {

    const patientData = await Patient.findByPk(req.params.patient_id, {
        include:[{model : MedicalStaff}
        ,{model: Appointment},
        ]
    });

    const nicePatientData = patientData.get({plain: true});
    console.log('nice data', nicePatientData);
    res.render('patientChart',nicePatientData);
});


module.exports = router;