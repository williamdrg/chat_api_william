const express = require('express')
require('dotenv').config()
const initModel = require('./models/initModel')
const db = require('./utils/database')
const apiRoutes = require('./routes/index')
const errorRoutes = require('./routes/errors.routes')

initModel()

const app = express()
app.use(express.json())

apiRoutes(app)
errorRoutes(app)

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log('servidor escuchando')
})