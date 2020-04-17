const express = require('express')
const app = express()
const statisticRouter = require('./statistic/statistic.router')
const exceptionMiddleware = require('./middleware/exception.middleware')
const authenticationMiddleware = require('./middleware/authentication.middleware')
const port = 8080

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authorization");
    next();
});

app.use(authenticationMiddleware.jwt)

app.get('/', (req, res) => res.send('Welcome to Coronavirus App'))

app.use('/statistic', statisticRouter)

app.use(exceptionMiddleware.apiExceptionHandler)

app.listen(port, () => console.log(`Coronavirus App listening at http://localhost:${port}`))