const sequelize = require('../config/connection');
const { Patient } = require('../models/Patient');

console.log('Seeding data...');

const patientData = [
  {
    mrn: 12345,
    first_name: 'John',
    last_name: 'Doe',
    date_of_birth: '1980-01-01',
    gender: 'Male',
    address: '123 Main St, Anytown, USA',
    phone_number: '555-555-5555',
    email: 'johndoe@example.com',
    medical_notes: 'None',
  },
  {
    mrn: 67890,
    first_name: 'Jane',
    last_name: 'Smith',
    date_of_birth: '1990-01-01',
    gender: 'Female',
    address: '456 Elm St, Anytown, USA',
    phone_number: '555-555-5555',
    email: 'janesmith@example.com',
    medical_notes: 'Allergies: peanuts',
  },
];

const seedPatients = async () => {
  await sequelize.sync({ force: false });

  await Patient.bulkCreate(patientData);

  process.exit(0);
};

seedPatients();

module.exports = seedPatients;
