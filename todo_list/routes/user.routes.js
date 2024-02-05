const express = require('express')
const router = express.Router()
const user = require('../model/user.model')
const middle = require('../helpers/middlewares')

router.get('/', async (req, res) => {
    await user.getUsers()
    .then(users => res.json(users))
    .catch(e => {
        if (e.status) {
            res.status(e.status).json({ description: e.message })
        } else {
            res.status(500).json({ description: e.message })
        }
    })
})

router.get('/:id',async (req, res)  => {
    const user_id = req.params.id
    await user.getUser(user_id)
    .then(user => res.json(user))
    .catch(e => {
        res.json(e)
        if (e.status) {
            res.status(e.status).json({ description: e.message })
        } else {
            res.status(500).json({ description: e.message })
        }
    })
})

router.post('/add', middle.chekcUserFields, async (req, res) => {
    await user.createUser(req.body)
    .then(user => res.json(user))
    .catch(e => {
        if (e.status) {
            res.status(e.status).json({ description: e.message })
        } else {
            res.status(500).json({ description: e.message })
        }
    })
})

router.put('/:id', async (req, res) => {
    const user_id = req.params.id
    await user.updateUser(user_id, req.body)
    .then(u => res.json(u))
    .catch(e => {
        if (e.status) {
            res.status(e.status).json({ description: e.message })
        } else {
            res.status(500).json({ description: e.message })
        }
    })
})

module.exports = router