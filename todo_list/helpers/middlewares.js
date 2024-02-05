function checkRequestNewItem(req, res, next) {
    const { title, user_id } = req.body
    // console.log("title: " + title + "# user_id: " + user_id)
    if (title && user_id) {
        next()
    } else {
        res.status(400).json({ description: "todo title is requires" })
    }

}

function checkToken(req, res, next) {
    const { token } = req.header.token
    if (!token) {
        res.status(202).json({ description: "token is requires" })
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

module.exports = {
    checkRequestNewItem,
    checkToken,
    checkUpdateItem
}