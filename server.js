const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const breadRoutes = require('./routes/bread')

const app = express()

// middlewares
app.use(express.json())
app.use(cors())

// routes
app.use('/breads', breadRoutes)

// db connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));

const PORT = process.env.PORT || 8080

app.listen(PORT, console.log(`listening on the port ${PORT}`))

module.exports = app