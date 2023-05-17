const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Patient extends Model { }
console.log('Seeding data...Im in patient.js');
Patient.init(
{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        },
    mrn: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        },       
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
         },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        },
    date_of_birth: {
        type:DataTypes.DATE,
        allowNull: false,
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false,
        },
    address: {
        type: DataTypes. STRING,
        allowNull: false,
        },
    phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [10],
          },
        },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
          },
        },

    medical_notes: {
        type: DataTypes.TEXT,
         allowNull: true,
        },
    primary_doctorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'medicalStaff',
            user: 'id',
            },
        },
},

{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'patient',
  }
  
);

module.exports = Patient;
