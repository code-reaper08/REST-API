const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const app = express()
const port = 3000

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser:true},{ useUnifiedTopology: true })
const db = mongoose.connection
db.on('error',(error) => {
    console.error(error)
})
db.once('open', () => {
    console.log("Connected to database")
})

app.use(express.json())

const subscribersRouter = require("./routes/subscribers")
app.use('/subscribers', subscribersRouter)







app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})