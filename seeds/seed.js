const sequelize = require('../config/connection');
const { Specialty, MedicalStaff, Patient } = require('../models');
// Appointment
const specialtyData = require('./specialtyData.json');
const medicalStaffData = require('./medicalStaffData.json');
const patientData = require('./patientData.json');
const appointmentData = require('./appointmentData.json');

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });

    for (const specialty of specialtyData) {
      await Specialty.create({ ...specialty });
    }

    for (const medicalStaff of medicalStaffData) {
      await MedicalStaff.create({ ...medicalStaff });
    }

    for (const patient of patientData) {
      await Patient.create({ ...patient });
    }

    for (const appointment of appointmentData) {
      await Appointment.create({ ...appointment });
    }

    console.log('Database seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
