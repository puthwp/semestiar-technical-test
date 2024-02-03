const express = require('express')
const router = express.Router()
const items = require('../model/item.model')

module.exports = router

router.get('/', async (req, res) => {
    await items.getItems()
    .then(items => res.json(items))
    .catch(e => {
        if (e.status) {
            res.status(e.status).json({ description: e.message })
        } else {
            res.status(500).json({ description: e.message })
        }
    })
})