const fs = require('fs')
const { isFuture, formatISO } = require('date-fns')
const { randomUUID } = require('crypto')

const currentDate = () => formatISO(new Date())


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

function checkConfig(list, item) {
    return list.some(c => c === String(item).toUpperCase())
}

function isLater(date) {
    return isFuture(new Date(date))
}

module.exports = {
    currentDate,
    writeJsonFile,
    findItem,
    getUserId,
    checkConfig,
    isLater
}