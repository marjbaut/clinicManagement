const router = require('express').Router();
const { MedicalStaff } = require("../../models");


router.get('/doctor', (req, res) => {
    res.render('doctor');
});


// localhost:3001
router.get('/', async (req, res) => {
    const userData = await MedicalStaff.findAll({
        attributes: [
            'first_name',
            'last_name',
            'gender',
            'email',
            'phone_number',
            'role',
            'specialist_id'
        ]
    });

    const prettyUserData = userData.map((medicalStaff) => medicalStaff.get({plain: true}));
    console.log("NO STAINS!", prettyUserData);
    res.render('doctor', {prettyUserData});


    });

    // localhost:3001/doctor
router.get('/doctor/:doctor_id', async (req, res) => {
    const userData = await User.findByPk(req.params.user_id, {
        attributes: [
            'first_name',
            'last_name',
            'gender',
            'email',
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