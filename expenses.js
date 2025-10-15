const service = require('../service/expenses.js')
const getControl = (req,res)=>{
    service.expensesget(req,res)
}
const postControl = (req,res)=>{
    service.expensespost(req,res)
}
const deleteControl = (req,res)=>{
    service.expensesdelete(req,res)
}
module.exports = {getControl,postControl,deleteControl}