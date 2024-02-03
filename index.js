const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(morgan('tiny'))

app.get('/',(req,res) => {
    res.json({ mess: "Yo"})
})

app.listen('1337')

