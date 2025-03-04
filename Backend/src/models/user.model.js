const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name : {type : String , required :true},
    email : {type:String , required :true},
    password : {type:String , required :true},
    profilePicture:{type:String,default:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'},
    dateJoined : {type : Date, default : Date.now},
})


module.exports = mongoose.model('users', userSchema);