const router = require("express").Router();
const {Patient, MedicalStaff, Appointment, Specialty} = require ('../../models');
//localhost:3001/patient
router.get('/', (req,res)=> {
    router.get('/', async (req, res) => {
        try {
          const patientData = await Patient.findAll();
          res.status(200).json(patientData)
          res.render('patient',patientData)
        } catch (err) {
          res.status(500).json(err);
        }
      });

});
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