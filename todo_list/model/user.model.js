const path = '../data/users.json'
let users = require(path)
const config = require('../data/config.json')

const helper = require('../helpers/helper.js')
const { formatISO } = require('date-fns')
const { randomUUID } = require('crypto')
const { md5 } = require('js-md5')
const { rejects } = require('assert')


function createUser(data) {
    return new Promise((resolve, reject) => {
        const { name, phone, gender, avatar } = data
        if (users.some(u => u.phone === phone)){
            resolve({ description: phone+" phone number is already exits"})
            return
        }
        const newUser = {
            user_id: String(randomUUID()),
            name: name,
            phone: phone,
            gender: gender,
            avatar: config.defualts.avatar,
            created_date: formatISO(new Date()),
            updated_date: formatISO(new Date()),
            token: ""
        }
        if (gender) {
            newUser.gender = gender
        }

        if (avatar) {
            newUser.avatar = avatar
        }
        newUser.token = md5(newUser.user_id + newUser.phone)
        users.push(newUser)
        helper.writeJsonFile(path, users)
        resolve({
            user_id: newUser.user_id, 
            token: newUser.token
        })
    })
}

function getUser(user_id) {
    return new Promise((resolve, reject) => {
        // resolve(users[0])
        resolve(helper.findUserId(user_id, users))
    })
}

function getUsers() {
    return new Promise((resolve, reject) => {
        if (users.length === 0) {
            reject({
                messege: 'no user',
                status: 202
            })
        }
        resolve(users)
    })
}

function updateUser(user_id,data) {
    return new Promise((resolve, reject) => {
        const { user_id, avatar, name } = data
        const usr = helper.findUserId(user_id)
        if (!usr) {
            resolve({ description: "user not found" })
            return
        }
        if (avatar && avatar.length > 0) {
            usr.avatar = avatar
        }
        if (name && name.length > 0 && name < 200) {
            usr.name = name
        }
        usr.updated_date = formatISO(new Date())
        let updatedUsers = users.filter(u => u.user_id !== user_id)
        updatedUsers.push(usr)
        helper.writeJsonFile(path, updateupdatedUsersUser)
        resolve(usr)
    })
}

module.exports = {
    createUser,
    getUsers,
    getUser,
    updateUser
}