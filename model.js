const users = require('./users.js')
const data = require('./data.js')
const payment = require('./payment.js')

users.hasOne(data)
data.belongsTo(users)

users.hasOne(payment)
payment.belongsTo(users)

module.exports = {users,data}