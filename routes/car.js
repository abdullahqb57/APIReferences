const express = require('express');
const router = express.Router();
const Car = require('../models/car');
const Seller = require('../models/seller');

router.route('/:sid').get(async(req,res,next)=>{
    const{sid} = req.params;
    const seller = await Seller.findById(sid).populate('cars',"name year -id");
    res.json(seller)
})