const { randomUUID } = require('crypto')
const fs = require('fs')

const currentDate = () => new Date().toDateString()


function writeJsonFile(file, content) {
    fs.writeFileSync(file, JSON.stringify(content), 'utf-8', (e) => {
        if (e) {
            console.log("##### ERROR ######")
            console.log(e)
        }
    })
}

function findItem(id, items) {
    return items.filter(item => item.id === id)
}

function getUserId(phone, users) {
    const foundUser = users.filter(user => user.phone === phone)[0]
    if (foundUser) {
        return foundUser.user_id
    }
    return randomUUID()
}

module.exports = {
    currentDate,
    writeJsonFile,
    findItem,
    getUserId
}