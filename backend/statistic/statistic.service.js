const axios = require('axios');

class StatisticService {

    getStatisticByCountry() {
        return axios.get('http://corona-api.com/countries/CO')
    }
}

module.exports = new StatisticService()