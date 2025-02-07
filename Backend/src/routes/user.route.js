const express = require('express');
const router = express.Router();
const userModel = require('../models/user.model.js');
const upload=require('../middlewares/multer.js')

router.get('/get-users', async (req, res) => {
    try{
        const userData =await userModel.find();

        return res.status(200).send({message : "Data fetched sucessfully", data : userData});
    }catch(er){
        res.status(500).send({message : "Internal server error", error : er.message})
    }
})

router.post('/create-user', upload.single("profilePicture"), async (req, res) => {
    try {
        const profilePictureUrl = req.file
            ? `http://localhost:8080/uploads/${req.file.filename}`
            : undefined;
        const userData = new userModel({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            profilePicture: profilePictureUrl || undefined, 
        })
        userData.save()
        res.status(200).json({message:"user created successfully",success:true})
    }catch(er){
        alert(er)
        res.status(500).json({message:"Internal server error",success:false})
    }
    }
)

module.exports = router;