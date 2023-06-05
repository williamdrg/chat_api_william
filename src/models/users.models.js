const db = require('../utils/database')
const { DataTypes } = require('sequelize')

const Users = db.define('users', {
  username: {
    type: DataTypes.STRING(30),
    allowNull: false,
    unique: true
  },
  email: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  firstname: {
    type: DataTypes.STRING(30)
  },
  lastname: {
    type: DataTypes.STRING(30)
  },
  avatar:{
    type: DataTypes.STRING,
  }
},
{
  timestamps: false
}
);


module.exports = Users