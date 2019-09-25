const { Sequelize, Model } = require('sequelize')
const { sequelize } = require('../db')

class User extends Model {
  //
}

User.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  firstName: Sequelize.STRING(64),
  lastName: Sequelize.STRING(64),
  userName: Sequelize.STRING(64),
  password: Sequelize.STRING(128),
  email: Sequelize.STRING(128),
  phone: Sequelize.STRING(64),
  notes: Sequelize.STRING,
}, {
  sequelize,
  tableName: 'users'
})

module.exports = User
