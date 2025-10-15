const service = require('../service/pay.js')
const payment = require('../model/payment.js')
const jwt = require('jsonwebtoken')
const processPayment = async (req,res)=>{
    const token = req.headers.authorization?.split(' ')[1]
    const orderId = 'ORDER-' + Date.now();
    const orderAmount = 2000;
    const orderCurrency = "INR";
    const customerId = '1';
    const customerPhone = "9876543210";
    try
    {
        const user = await jwt.verify(token,'securitykey')
        const paymentSessionId = await service.createOrder(
            orderId,
            orderAmount,
            orderCurrency,
            customerId,
            customerPhone
        )
        await payment.create({
            orderId,
            paymentSessionId,
            orderAmount,
            orderCurrency,
            paymentStatus : 'pending',
            userUserId : user.userId
        })
        res.json({paymentSessionId,orderId})
    }
    catch(e)
    {
        res.status(500).send(e)
    }
}
const paymentStatus = async (req,res)=>{
    try
    {
        let orderId = req.params.orderId
        let r = await service.getPaymentStatus(orderId)
        let order = await payment.findOne({
            where : {
                orderId : orderId
            }
        })
        order.paymentStatus = r
        await order.save()
        res.json({ message: 'Payment status updated', status: r });
    }
    catch(e)
    {
        res.status(500).send("error")
    }
}
module.exports = {processPayment,paymentStatus}