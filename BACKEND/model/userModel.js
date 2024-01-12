const mongoose =  require("mongoose");

const userSchema = new mongoose.Schema({
    FirstName : {
        type : String,
       
        
    },
    LastName : {
        type : String,
       
        
    },
    Email : {
        type : String,
       
        unique : true
    },
    Password : {
        type : String,
              
    },
    MobileNumber : {
        type : String,
              
    },


    
} , {timestamps : true})

const User = mongoose.model('User' , userSchema)

module.exports = User;
