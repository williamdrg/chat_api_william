const express = require('express')
require('dotenv').config()
const initModel = require('./models/initModel')
const db = require('./utils/database')
const apiRoutes = require('./routes/index')
const errorRoutes = require('./routes/errors.routes')
const cors = require('cors')

initModel()

const app = express()
app.use(cors())
app.use(express.json())

db.sync()
.then(() => console.log("Base de datos síncronizada"))
.catch((error) => console.error(error))

apiRoutes(app)
errorRoutes(app)

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log('servidor escuchando')
})