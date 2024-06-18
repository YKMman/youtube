const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./routes/routes.js')


const app = express()

const port = 8000

// const corsOptions = {
//     origin: `http://localhost:3000`
// }

app.use(cors())

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req, res) => {
    res.send("Hello world!")
})

app.use("/api/registration", routes)


app.listen(port, () => console.log(`app listening on ${port}`))

