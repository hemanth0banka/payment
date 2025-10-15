const service = require('../service/pro.js')
const getControl = async (req,res)=>{
    try
    {
        let d = await service.getService()
        res.status(200).json({
            message : 'list of users spent',
            data : d
        })
    }
    catch(e)
    {
        res.status(500).json({
            message : 'an error occured',
            data : e
        })
    }
}
module.exports = {getControl}