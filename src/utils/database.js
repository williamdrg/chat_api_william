const { Sequelize } = require('sequelize')
require('dotenv').config()

const db = new Sequelize({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  username: process.env.DB_USERNAME,
  dialect: "postgres",
  logging: false,
  // dialectOptions: { ssl: { require: true, rejectUnauthorized: false}}
})

module.exports = db