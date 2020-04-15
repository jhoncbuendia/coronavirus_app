const StatisticService = require('./statistic.service')

class StatisticController {
    
    getStatisticByCountry(country) {
        return StatisticService.getStatisticByCountry(country)
    }
}

module.exports = new StatisticController()
