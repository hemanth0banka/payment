const {DataTypes} = require('sequelize')
const sequelize = require('../db.js')
const data = sequelize.define('data',{
    amount : {
        type : DataTypes.INTEGER
    },
    description : {
        type : DataTypes.STRING
    },
    category : {
        type : DataTypes.STRING
    }
})
module.exports = data