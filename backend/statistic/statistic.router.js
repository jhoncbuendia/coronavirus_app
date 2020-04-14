const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
    res.send('statistics get /')
})

router.post('/', function (req, res) {
    res.send('statistics post /')
})

router.put('/', function (req, res) {
    res.send('statistics put /')
})

router.delete('/', function (req, res) {
    res.send('statistics delete /')
})

router.patch('/', function (req, res) {
    res.send('statistics patch /')
})

module.exports = router