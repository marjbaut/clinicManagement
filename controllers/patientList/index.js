const router = require("express").Router();
const { Patient, MedicalStaff, Appointment, Specialty } = require('../../models');
//localhost:3001/patientList
router.get('/', async (req, res) => {
  try {
    const patientData = await Patient.findAll();
    const patientmap = patientData.map((content) => content.get({ plain: true }))
    // const cleanPatientData = patientData.get({plain: true});
    console.log('data', patientmap);
    res.render('patientList', { patientmap });
  } catch (err) {
    res.status(400).json(err);
  }
});

//localhost:3001/patientList/:patient_id
router.get('/:patient_id', async (req, res) => {

  const patientData = await Patient.findByPk(req.params.patient_id, {
    include: [{ model: MedicalStaff }, { model: Appointment }]
  });
  const nicePatientData = patientData.get({ plain: true });
  console.log('nice data', nicePatientData);
  res.render('patientChart', nicePatientData);
});

router.put('/:patient_id', async (req, res) => {
  const patientId = req.params.patient_id;
  const result = await Patient.update({patient_id:patientId },res.body);
  console.log(result);
});

router.put('/patientList/:patient_id', async (req, res) => {
  try {
    const { patient_id } = req.params;
    const { doctorNote } = req.body;
    console.log("do we see id", patient_id);
    console.log('what is doctorNOte', req.body);
    const updatedPatient = await Patient.update(
      { medical_notes: doctorNote },
      { where: { id: patient_id } } // Use 'id' instead of 'patient_id'
    );
    res.status(200).json(updatedPatient);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update medical notes.' });
  }
});
module.exports = router;


router.post('/', async (req, res) => {
  try {
    const newPatient = await Patient.create(req.body);
    res.status(200).json(newPatient);
  } catch (err) {
    res.status(500).json(err);
  }
});
  
module.exports = router;