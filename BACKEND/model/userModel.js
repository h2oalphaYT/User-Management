import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    FirchName : {
        type : String,
        required : true , 
        
    },
    LastName : {
        type : String,
        required : true , 
        
    },
    Email : {
        type : String,
        required : true , 
        unique : true
    },
    Password : {
        type : String,
        required : true ,        
    },

    
} , {timestamps : true})

const User = mongoose.model('User' , userSchema)

export default User;
