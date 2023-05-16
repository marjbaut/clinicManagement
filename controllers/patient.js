const { Patient, MedicalStaff } = require('../models');

const patientController = {
  async getAllPatients(req, res) {
    try {
      const patients = await Patient.findAll({
        include: [{ model: MedicalStaff, as: 'primaryDoctor' }],
      });
      res.render('patients', { patients });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  async getPatientById(req, res) {
    const { id } = req.params;
    try {
      const patient = await Patient.findOne({
        where: { id },
        include: [{ model: MedicalStaff, as: 'primaryDoctor' }],
      });
      res.render('patient', { patient });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  async addPatient(req, res) {
    const { mrn, firstName, lastName, dob, gender, address, phone, email, notes, primaryDoctorId } = req.body;
    try {
      const patient = await Patient.create({
        mrn,
        first_name: firstName,
        last_name: lastName,
        date_of_birth: dob,
        gender,
        address,
        phone_number: phone,
        email,
        medical_notes: notes,
        primary_doctorId: primaryDoctorId,
      });
      res.status(201).json({ message: 'Patient created', patient });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  async updatePatient(req, res) {
    const { id } = req.params;
    const { mrn, firstName, lastName, dob, gender, address, phone, email, notes, primaryDoctorId } = req.body;
    try {
      const patient = await Patient.update(
        {
          mrn,
          first_name: firstName,
          last_name: lastName,
          date_of_birth: dob,
          gender,
          address,
          phone_number: phone,
          email,
          medical_notes: notes,
          primary_doctorId: primaryDoctorId,
        },
        { where: { id } }
      );
      res.status(200).json({ message: 'Patient updated', patient });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  async deletePatient(req, res) {
    const { id } = req.params;
    try {
      const patient = await Patient.destroy({ where: { id } });
      res.status(200).json({ message: 'Patient deleted', patient });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  },
};

module.exports = patientController;
