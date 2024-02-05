const fs = require('fs')
const { isFuture, formatISO } = require('date-fns')


const currentDate = () => formatISO(new Date())


function writeJsonFile(file, content) {
    const path = file.replace('../','./')
    fs.writeFileSync(path, JSON.stringify(content), 'utf-8', (e) => {
        if (e) {
            console.log("##### ERROR ######")
            console.log(e)
        }
    })
}

function findItem(id, items) {
    return items.filter(item => item.id === id)
}

function findUserId(user_id, users) {
    return users.filter(u => u.user_id === user_id)
}

function findUserPhone(phone, users) {
    return users.filter(user => user.phone === phone)
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
    checkConfig,
    isLater,
    findUserPhone,
    findUserId
}