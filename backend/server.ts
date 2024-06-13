const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./routes/routes.ts')

const app = express()

const port = 8000

const corsOptions = {
    origin: `http:localhost/${port}`
}

app.use(cors(corsOptions))

app.use(express.json())

app.use(express.urlencoded({extended: true}))

app.get("/", (req, res) => {
    res.send("Hello world!")
})

app.use('/api/v3', routes)

app.listen(port, () => console.log(`app listening on ${port}`))

