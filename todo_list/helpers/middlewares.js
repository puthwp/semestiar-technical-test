function checkRequestNewItem(req, res, next) {
    const { title, user_id } = req.body
    if (title && user_id) {
        next()
    } else {
        res.status(400).json({ description: "todo title is requires" })
    }

}

function checkToken(req, res, next) {
    const { token } = req.header.token
    if (!token) {
        res.status(204).json({ description: "token is requires" })
        return
    }
    next()
}

function checkUpdateItem(req, res, next) {
    const { id } = req.params.id
    if (!id) {
        res.status(202).json({ description: "id is requires" })
        return
    }
    next()
}

function chekcUserFields(req, res, next) {
    const { name, phone } = req.body
    if (!name || name.length === 0) {
        res.status(202).json({ description: "user name is requires" })
        return
    }
    if (!phone || phone.length !== 10) {
        res.status(202).json({ description: "phone number is empty or incorrect" })
        return
    }
    next()
}

module.exports = {
    checkRequestNewItem,
    checkToken,
    checkUpdateItem,
    chekcUserFields
}