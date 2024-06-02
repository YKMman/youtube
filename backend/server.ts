const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

const port = 8000

const corsOptions = {
    origin: `http:localhost/${port}`
}

app.use(cors(corsOptions))

app.use(express.json())

app.use(express.urlencoded({extended: true}))




