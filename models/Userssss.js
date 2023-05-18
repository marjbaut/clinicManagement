const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');
const MedicalStaff = require('./MedicalStaff');

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
     
      
    },
    medicalStaffId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'medicalStaff',
        key: 'id',
      },
      
    },
    email: {
      type: DataTypes.STRING,
      allowNull: [false, 'Please enter an email'],
      unique: [true, 'Email exists'],
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
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
    modelName: 'user',
  }
);

User.associate = (models) => {
  User.belongsTo(models.MedicalStaff);
};

module.exports = User;
