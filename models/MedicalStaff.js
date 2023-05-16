const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class MedicalStaff extends Model { }
const bcrypt = require('bcrypt');

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
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      // must be longer than 8 characters
      validate: {
        len: [8],
      },
    },
    phone_number:{
        type: DataTypes.STRING,
        allowNull:false,
        validate: {
            len: [10],
          },
        },

    role:{
        type: DataTypes.STRING,
         allowNull: false,
        },
    specialist_id:{
        type: DataTypes.INTEGER,
        allowNull: false, 
        references:{
            model:'specialty',
            user: 'id',
            },
        },
    },
    {
        hooks: {
          beforeCreate: async (newUserData) => {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
          },
          beforeUpdate: async (updatedUserData) => {
            if (updatedUserData.password) {
            updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
            }
            return updatedUserData;
          },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'medicalStaff',
      }
);

module.exports = MedicalStaff;
