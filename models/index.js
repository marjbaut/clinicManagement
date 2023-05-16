const Patient = require('./Patient');
const Specialty = require('./Specialty');
const Appointment = require('./Appointment');
const MedicalStaff = require('./MedicalStaff');

  // Patient has one Appointment
  Patient.hasOne(Appointment, {
    foreignKey: 'appointment_id'
  })
  // One Appointment belongs to one Patient
  Appointment.belongsTo(Patient, {
    foreignKey: 'patient_id'
  })
  // MedicalStaff has many Patient(s)
  MedicalStaff.hasMany(Patient, {
    foreignKey: 'patient_id'
  })
  // Patient belongs to one MedicalStaff
  Patient.belongsTo(MedicalStaff, {
    foreignKey: 'medicalStaff_id'
  })
  // Each MedicalStaff has one Specialty
  MedicalStaff.hasOne(Specialty, {
    foreignKey:'specialty_id'
  })
  // One Specialty belongs to one MedicalStaff
  Specialty.belongsTo(MedicalStaff, {
    foreignKey: 'medicalStaff_id'
  })


  module.exports = {
    Patient,
    Specialty,
    Appointment,
    MedicalStaff,
  };