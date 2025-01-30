const express = require('express');
const router = express.Router();
const userModel = require('../models/user.model.js');


router.get('/get-users', async (req, res) => {
    try{
        const userData =await userModel.find();

        return res.status(200).send({message : "Data fetched sucessfully", data : userData});
    }catch(er){
        res.status(500).send({message : "Internal server error", error : er.message})
    }
})


module.exports = router;