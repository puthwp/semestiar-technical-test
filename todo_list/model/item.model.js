const path = '../data/items.json'
let items = require(path)
const config = require('../data/config.json')
const helper = require('../helpers/helper.js')
const { randomUUID } = require('crypto')
const { add, formatISO } = require('date-fns')



function createItem(data) {
    return new Promise((resolve, reject) => {
        const { title, due_date, user_id, priority } = data
        const newItem = {
            id: String(randomUUID()),
            title: String(title),
            user_id: String(user_id),
            status: config.defualts.status,
            priority: config.defualts.priority,
            due_date: formatISO(add(new Date(), { days: config.defualts.due_date_day })),
            updated_date: formatISO(new Date()),
            created_date: formatISO(new Date())
        }

        if (priority) {
            newItem.priority = priority
        }

        if (due_date) {
            const user_due_date = new Date(due_date)
            if (user_due_date || helper.isLater(user_due_date)) {
                newItem.due_date = formatISO(user_due_date)
            } else {
                reject({ description: "due data can not be past" })
            }
        }
        items.push(newItem)
        helper.writeJsonFile(path, items)
        resolve(items)
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

function updateItem(id, data) {
    return new Promise((resolve, reject) => {
        findItem(id, items)
            .then((item) => {
                const { status, priority, due_date } = data
                if (status) {
                    if (!(checkConfig(config.status, status))) {
                        reject("update status not found")
                    }
                    item.status = status
                }
                if (priority) {
                    if (!(checkConfig(config.priority, priority))) {
                        reject("update priority not found")
                    }
                    item.priority = priority
                }
                if (due_date) {
                    if (!(isLater(new Date(due_date)))) {
                        reject("due date is past")
                    }
                    item.due_date = formatISO(new Date(due_date), { format: 'basic' })
                }
                item.updated_date = currentDate
                
                updated_items = items.filter(old => old.id !== item.id)
                items.push(item)
                writeJsonFile(path, items)
                resolve()
            })
            .catch(e => reject(e))
    })
}

function deleteItem(id) {
    return new Promise((resolve, reject) => {
        findItem(id, items)
            .then(() => {
                updateItems = items.filter(p => p.id !== id)
                writeJsonFile(path, updateItems)
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