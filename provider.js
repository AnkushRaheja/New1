import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";

const providerSchema = new mongoose.Schema({
    BuisnessName:{
        type:String,
        required:true,
        minlength:[3,'Buisness name should be atleast 3 characters long']
    },
    contact:{
        PhoneNo:{
            type:Number,
            required:true
        },
        email:{
            type:String,
            required:true,
            unique:true,
            minlength:[3,'Your mail id should be atleast 3 characters long']
        }
    },
    address:{
        buildingNo:{
            type:Number
        },
        pincode:{
            type:Number,
            minlength:[6,'Enter valid pincode'],
            maxlength:[6,'Enter valid pincode'],
            required:true
        },
        street:{
            type:String,
            required:true,
        },
        landmark:{
            type:String,
        }
    },
    AadhaarNo:{
        type:Number,
        unique:true,
        minlength:[12,'your aadhaar number should contain atleast 12 digits'],
        maxlength:12
    },
    PANno:{
        type:String,
        unique:true
    },
    accountHolderName:{
        type:String,
        required:true
    },
    accountNo:{
        type:Number,
        minlength:9,
        maxlength:18
    },
    UPIid:{
        type:String,
        required:true
    }
})

const providerModel=mongoose.model('provider',providerSchema);

export default providerModel;