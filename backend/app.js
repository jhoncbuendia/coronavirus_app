const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => res.send('Welcome to Coronavirus App'))

app.listen(port, () => console.log(`Coronavirus App listening at http://localhost:${port}`))