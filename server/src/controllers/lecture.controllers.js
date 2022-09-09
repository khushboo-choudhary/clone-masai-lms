const express = require('express')
const Lecture = require('../models/lecture.models')
const router = express.Router()

router.post("",async(req,res) => {
    try {
        
        const user = await Lecture.create(req.body)
        return res.send(user)

    } catch (error) {
        return res.send(error.message)
    }
})

router.get("",async(req,res) => {
    try {
        const page = req.query.page || 1;
        const size = req.query.size || 5;
        const user = await Lecture.find().skip((page-1)*size).limit(size).lean().exec()
        const totalpage =Math.ceil( await Lecture.find().countDocuments() / size)
        return res.send({user,totalpage})
    

    } catch (error) {
        return res.send(error.message)
    }
})



module.exports = router