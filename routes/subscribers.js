const express = require('express')
const router = express.Router()

// get
router.get('/', (req,res) => {
    res.send('Hello from main')
})

// getting one
router.get('/:id', (req,res) => {
    res.send(req.params.id)
})

// creating a user
router.post('/', (req,res) => {

})

// Update one
router.patch('/', (req,res) => {

})

// delete one
router.delete('/:id', (req,res) => {

})






module.exports = router