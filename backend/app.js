const express = require('express')
const app = express()
var cors = require('cors')
const statisticRouter = require('./statistic/statistic.router')
const exceptionMiddleware = require('./middleware/exception.middleware')
const authenticationMiddleware = require('./middleware/authentication.middleware')
const port = 8080

app.use(cors())

app.use(authenticationMiddleware.jwt)

app.get('/', (req, res) => res.send('Welcome to Coronavirus App'))

app.use('/statistic', statisticRouter)

app.use(exceptionMiddleware.apiExceptionHandler)

app.listen(port, () => console.log(`Coronavirus App listening at http://localhost:${port}`))