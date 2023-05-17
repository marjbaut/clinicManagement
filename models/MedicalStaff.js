const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./User');
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
      allowNull: false,
      references: {
        model: 'specialty',
        key: 'id',  // <-- should be 'key', not 'user'
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'medicalstaff',
  }
);

MedicalStaff.belongsTo(User, { foreignKey: 'userId' });

module.exports = MedicalStaff;
