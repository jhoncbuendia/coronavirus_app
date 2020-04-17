const express = require('express')
const statisticController = require('./statistic.controller')

const router = express.Router()
router.get('/:country', async function (req, res, next) {
    
    try {
        const result = await statisticController.getStatisticByCountry(req.params.country)
        res.json(result.data)
    } catch (error) {
        error.code = 422
        next(error)
    }
    
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