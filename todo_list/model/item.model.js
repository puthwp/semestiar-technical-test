const path = '../data/items.json'
let items = require(path)
const config = '../data/config.json'
const helper = require('../helpers/helper.js')
const { randomUUID } = require('crypto')
const { add } = require('date-fns')
const { formatISO } = require('date-fns')



function createItem(data) {
    return new Promise((resolve, reject) => {
        const { title, due_date, user_id, } = data
        if (!title || !user_id) {
            reject({ description: "requires title or user ID"})
        }
        const user_due_date = new Date(due_date)
        const newItem = {
            id: String(randomUUID()),
            title: String(title),
            user_id: String(user_id),
            // priority: config.default_values.priority,
            // due_date: add(new Date(), { days: config.default_values.due_date_day })
            created_date: formatISO(new Date())
        }
        // if (priority) {
        //     newItem.priority = priority
        // }

        // if (user_due_date || helper.isLater(user_due_date)) {
        //     newItem.due_date = formatISO(user_due_date)
        // } else {
        //     reject({ description: "due data can not be past" })
        // }
        items.push(newItem)
        helper.writeJsonFile(path, newItem)
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

function updateItem(id, data) {
    return new Promise((resolve, reject) => {
        helper.findItem(id, items)
        .then((item) => {
            const { status, priority, due_date } = data
            if (status) {
                if (!(helper.checkConfig(config.status, status))) {
                    reject("update status not found")
                }
                item.status = status
            }
            if (priority) {
                if (!(helper.checkConfig(config.priority, priority))) {
                    reject("update priority not found")
                }
                item.priority = priority
            }
            if (due_date) {
                if(!(helper.isLater(new Date(due_date)))) {
                    reject("due date is past")
                }
                item.due_date = formatISO(new Date(due_date), { format: 'basic' })
            }
            item.updated_date = helper.currentDate

            updated_items = items.filter(old => old.id !== item.id)
            items.push(item)
            helper.writeJsonFile(path, items)
            resolve()
        })
        .catch(e => reject(e))
    })
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