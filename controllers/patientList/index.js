const router = require("express").Router();
const {Patient, MedicalStaff, Appointment, Specialty} = require ('../../models');
//localhost:3001/patientList
router.get('/', async (req, res) => {
  try {
  const patientData = await Patient.findAll();
  const patientmap = patientData.map((content)=> content.get({plain: true}))
  // const cleanPatientData = patientData.get({plain: true});
  console.log('data', patientmap);
  res.render('patientList', {patientmap});
  } catch (err) {
    res.status(400).json(err);
  }
});

  //localhost:3001/patientList/:patient_id
router.get('/:patient_id', async(req,res)=> {

    const patientData = await Patient.findByPk(req.params.patient_id, {
        include:[{model : MedicalStaff},{model: Appointment}]
    });
    const nicePatientData = patientData.get({plain: true});
    console.log('nice data', nicePatientData);
    res.render('patientChart',nicePatientData);
});
router.post('/:patient_id', async(req,res)=>{
  console.log(`${req.method} request received`)
// const newNote = await Appointment.findByPk({
//     attributes: [notes]
// });

});
// router.get('/', (req, res) =>{
//   let data =  fs.readFileSync('./db/db.json', 'utf8' );
//   res.json(JSON.parse(data))
// });
  
module.exports = router;