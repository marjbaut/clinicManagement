const router = require('express').Router();
const { MedicalStaff } = require("../../models");


// router.get('/doctor', (req, res) => {
//     res.render('doctor');
// });


// localhost:3001
router.get('/', async (req, res) => {
    try {
    const doctorData = await MedicalStaff.findAll();
    const doctormap = doctorData.map((doc)=> doc.get({plain: true}))
    
    console.log('data', doctormap);
    res.render('doctorList', {doctormap});
    } catch (err) {
      res.status(400).json(err);
    }
  });

    // localhost:3001/doctor/:doctor_id
router.get('/:doctor_id', async (req, res) => {
    const userData = await MedicalStaff.findByPk(req.params.doctor_id, {
        attributes: [
            'first_name',
            'last_name',
            'gender',
            'phone_number',
            'role',
            'specialist_id'
        ]
    });
    console.log("I PROMISE I'LL MOW THE LAWN", userData);

    const actualUserData = userData.get({ plain: true });
    console.log("SPRING BREAK!", actualUserData);
    res.render('doctor', actualUserData);
});

module.exports = router;