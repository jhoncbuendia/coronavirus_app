const express = require('express')
const app = express()
var cors = require('cors')
const statisticRouter = require('./statistic/statistic.router')
const exceptionMiddleware = require('./middleware/exception.middleware')
const authenticationMiddleware = require('./middleware/authentication.middleware')
const port = 8080

/* app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, PUT, DELETE, GET, OPTIONS");
    next();
}); */

app.use(cors({
    origin: 'http://127.0.0.1:5500'
  }));

app.use(authenticationMiddleware.jwt)

app.get('/', (req, res) => res.send('Welcome to Coronavirus App'))

app.use('/statistic', statisticRouter)

app.use(exceptionMiddleware.apiExceptionHandler)

app.listen(port, () => console.log(`Coronavirus App listening at http://localhost:${port}`))