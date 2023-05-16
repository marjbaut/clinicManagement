const router = require('express').Router();
// Import patient model
const { Patient } = require('../models/Patient');

router.get('/', (req, res)=> {
  res.render('index', {layout:'main'});
})
// GET all patients
router.get('/', async (req, res) => {
  try {
    const patientsData = await Patient.findAll();
    const patients = patientsData.map(patient => patient.get({ plain: true }));
    res.render('patients', { patients });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET one patient by id
router.get('/:id', async (req, res) => {
  try {
    const patientData = await Patient.findByPk(req.params.id);
    if (!patientData) {
      res.status(404).json({ message: 'No patient found with this id' });
      return;
    }
    const patient = patientData.get({ plain: true });
    res.render('patient', { patient });
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST create new patient
router.post('/', async (req, res) => {
  try {
    const patientData = await Patient.create(req.body);
    res.status(201).json(patientData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// PUT update patient by id
router.put('/:id', async (req, res) => {
  try {
    const patientData = await Patient.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!patientData[0]) {
      res.status(404).json({ message: 'No patient found with this id' });
      return;
    }
    res.status(200).json(patientData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE patient by id
router.delete('/:id', async (req, res) => {
  try {
    const patientData = await Patient.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!patientData) {
      res.status(404).json({ message: 'No patient found with this id' });
      return;
    }
    res.status(200).json(patientData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
