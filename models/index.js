const Patient = require('./Patient');
const Specialty = require('./Specialty');
const Appointment = require('./Appointment');
const MedicalStaff = require('./MedicalStaff');

Patient.hasOne(Appointment,{
  foreignKey:'patient_id'
})
  // One Appointment belongs to one Patient
  Appointment.belongsTo(Patient, {
    foreignKey: 'patient_id'
  })
  // MedicalStaff has many Patient(s)
  MedicalStaff.hasMany(Patient, {
    foreignKey: 'primary_doctorId'
  })
  // Patient belongs to one MedicalStaff
  Patient.belongsTo(MedicalStaff, {
    foreignKey: 'primary_doctorId'
  })
  // // Each MedicalStaff has one Specialty
  MedicalStaff.hasOne(Specialty, {
    foreignKey:'specialist_id'
  })
 
  MedicalStaff.hasOne(Appointment,{
    foreignKey: 'doctor_id'
  })
  Appointment.belongsTo(MedicalStaff,{
    foreignKey: 'doctor_id'
  })


  module.exports = {
    Patient,
    Specialty,
    Appointment,
    MedicalStaff,
  };