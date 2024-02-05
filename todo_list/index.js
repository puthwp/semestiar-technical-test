const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(morgan('tiny'))
app.use(express.json())
// app.use(express.urlencoded({ extended: true }))
app.use(require('./routes/index.routes'))

app.get('/',(req,res) => {
    res.json({ mess: "server is up and running"})
})

app.listen('1336')

