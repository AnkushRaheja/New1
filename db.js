import mongoose from "mongoose";

function connectDB(){
    mongoose.connect(process.env.DB_CONNECT).then(()=>{
        console.log('Database connected');
    }).catch((err)=>{
        console.log(err);
    })
};

export default connectDB;