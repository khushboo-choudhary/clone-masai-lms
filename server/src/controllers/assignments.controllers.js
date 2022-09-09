const express = require('express')

const Assignment = require('../models/assignments.models')

const router = express.Router()

router.post("",async(req,res) => {
    try {
        
        const user = await Assignment.create(req.body)
        return res.send(user)

    } catch (error) {
        return res.send(error.message)
    }
})

router.get("",async(req,res) => {
    try {
        const page = req.query.page || 1;
        const size = req.query.size || 5;
        const  user = await Assignment.find().skip((page-1)*size).limit(size).lean().exec()
        const totalpage =Math.ceil( await Assignment.find().countDocuments() / size)
        return res.send({user,totalpage})

    } catch (error) {
        return res.send(error.message)
    }
})



module.exports = router