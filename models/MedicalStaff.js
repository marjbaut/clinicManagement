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
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [10],
      },
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    specialist_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'specialty',
        key: 'id',  // <-- should be 'key', not 'user'
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [8],
      },
    },

    
  },
  
    {
      hooks: {
        beforeCreate: async (newUserData) => {
          if (newUserData.password) {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
          }
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
      modelName: 'medicalstaff',
    },
  
);


module.exports = MedicalStaff;
