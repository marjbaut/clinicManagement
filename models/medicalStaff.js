const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class MedicalStaff extends Model { }

MedicalStaff.init(
    {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        },
    first_name:{
        type: DataTypes.STRING,
        allowNull: false,
         },
    last_name:{
        type: DataTypes.STRING,
        allowNull: false,
        },
    gender:{
        type: DataTypes.STRING,
        allowNull: false,
        },
    phone_number:{
        type: DataTypes.VARCHAR,
        allowNull:false,
        },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        },
    medical_notes:{
        type: DataTypes.TEXT,
         allowNull: false,
        },
    primary_doctorId:{
        type: DataTypes.INTEGER,
        allowNull: false, 
        references:{
            model:'specialty',
            user: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'medicalStaff'
    }
);

module.exports = MedicalStaff;