const express = require('express')
const statisticController = require('./statistic.controller')

const router = express.Router()
router.get('/', function (req, res) {
    statisticController.getStatisticByCountry()
    .then(function(response) {
        res.json(response.data)
    })
    .catch(function (error) {
        console.log(error);
    })
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