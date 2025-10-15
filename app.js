const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const sequelize = require('./db.js')
const signup = require('./route/signup.js')
const login = require('./route/login.js')
const expenses = require('./route/expenses.js')
const pay = require('./route/pay.js')
const pro = require('./route/pro.js')
const port = 1000
require('./model/model.js')
app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname,'./public')))
app.get('/',(req,res)=>{
    res.status(200).sendFile(path.join(__dirname,'./public','/login','/login.html'))
})
app.get('/home',(req,res)=>{
    res.status(200).sendFile(path.join(__dirname,'./public','/index','/index.html'))
})
app.use('/login',login)
app.use('/signup',signup)
app.use('/expenses',expenses)
app.use('/pay',pay)
app.use('/pro',pro)
app.use((req,res)=>{
    res.status(404).send('page not found ra bachaa...')
})
sequelize.sync({alter:true}).then(()=>{
    app.listen(port,()=>{
    console.log(`Listening at http://localhost/${port}`)})
}).catch(e=>console.log(e))