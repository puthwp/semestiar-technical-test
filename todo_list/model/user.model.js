const path = '../data/users.json'
let rawData = require(path)
let users = rawData.users

const helper = require('../../helpers.js')

function createUser(data) {

}

function updateUser(data) {

}

function auth(phone, token){
    return users.filter(user => user.phone === phone && user.token === md5(token))
}

module.exports = {
    createUser,
    updateUser,
    auth
}