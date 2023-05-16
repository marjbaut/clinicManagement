const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Appointment extends Model { }

Appointment.init(
{
id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    },
patient_id: {
    type: DataTypes.INT,
    allowNull: false,
    references:{
        model:'patient',
        user: 'id',
        },
    },
doctor_id:{
    type: DataTypes.INT,
    allowNull: false,
    references:{
        model:'medicalStaff',
        user: 'id',
        },
    },
date:{
    type:DataTypes.DATE,
    allowNull: false,
    },
time:{
    type:DataTypes.TIME,
    allowNull: false,
    },
appointment_type:{
    type: DataTypes.STRING,
    allowNull: false,
    },
notes:{
    type: DataTypes.TEXT,
    allowNull: true,
    },
},
{
    sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'appointment',
});
module.exports = Appointment;