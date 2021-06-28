const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res) => {
    res.send('Hello there from express')
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})