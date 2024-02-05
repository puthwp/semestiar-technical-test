const express = require('express')
const router = express.Router()
const items = require('../model/item.model')
const middle = require('../helpers/middlewares')

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

router.post('/add', middle.checkRequestNewItem, async (req, res) => {
    await items.createItem(req.body)
    .then(item => res.json(item))
    .catch( e => {
        if (e.status) {
            res.status(e.status).json({ description: e.message })
        } else {
            res.status(500).json({ description: e.message })
        }
    })
})

router.post('/', middle.checkRequestNewItem, async (req, res) => {
    await items.getItems(req.token)
    .then(item => res.json(item))
    .catch( e => {
        if (e.status) {
            res.status(e.status).json({ description: e.message })
        } else {
            res.status(500).json({ description: e.message })
        }
    })
})

router.put('/:d', middle.checkUpdateItem, async (req, res) => {
    const id = req.params.id
    const { status, due_date, priority } = req.body

})