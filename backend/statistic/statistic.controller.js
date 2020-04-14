const StatisticService = require('./statistic.service')

class StatisticController {
    
    getStatisticByCountry() {
        return StatisticService.getStatisticByCountry()
    }
}

module.exports = new StatisticController()
