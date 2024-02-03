const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(require('./src/routes/index.routes'))

app.get('/',(req,res) => {
    res.json({ mess: "Yo"})
})

app.listen('1337')

