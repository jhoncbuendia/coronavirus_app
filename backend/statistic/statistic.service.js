const axios = require('axios');

class StatisticService {

    getStatisticByCountry(country) {
        return axios.get(`http://corona-api.com/countries/${country}`)
    }
}

module.exports = new StatisticService()