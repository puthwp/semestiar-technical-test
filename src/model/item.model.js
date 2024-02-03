const path = '../data/items.json'
let items = require(path)

const helper = require('../../helpers.js')

function createItem(data) {
    return new Promise((resolve, reject) => {
        const newItem = {
            id: "",
            title: "",
            user_id: "",
            priority: "",
            due_date: ""
        }
        items.push(newItem)
        helper.writeJsonFile(path, items)
        resolve(newItem)
    })
}

function getItems() {
    return new Promise((resolve, reject) => {
        if (items.length === 0) {
            reject({
                messege: 'no items',
                status: 202
            })
        }
        resolve(items)
    })
}

function updateItem(item, data) {

}

function deleteItem(id) {
    return new Promise((resolve, reject) => {
        helper.findItem(id, items)
        .then(() => {
            updateItems = items.filter(p => p.id !== id)
            helper.writeJsonFile(path, updateItems)
            resolve()
        })
        .catch(e => reject(e))
    })
}

module.exports = {
    createItem,
    getItems,
    updateItem,
    deleteItem,
}