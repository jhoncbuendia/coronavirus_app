const express = require('express')
const app = express()
const port = 8080
const statisticRouter = require('./statistic/statistic.router')

app.get('/', (req, res) => res.send('Welcome to Coronavirus App'))

app.use('/statistic', statisticRouter)

app.listen(port, () => console.log(`Coronavirus App listening at http://localhost:${port}`))