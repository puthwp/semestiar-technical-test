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
    return items.filter(item => item.id !== id)
}

module.exports = {
    currentDate,
    writeJsonFile,
    findItem
}