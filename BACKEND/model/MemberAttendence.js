const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const memberAttendenceSchema = new Schema({
    
    nic:{
        type:String,
        required:true
    },

    name:{
        type:String,
        required:true
    },
    
    time:{
        type:String,
        required:true
    },
    
    position:{
        type:String,
        required:true
    }
    
});

module.exports = mongoose.model("MemberAttendence", memberAttendenceSchema);

//members
