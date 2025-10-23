import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import connectDB from "./DataBase/db.js";

import providerRoute from "./routes/provider.route.js"

const app = express();

connectDB();

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("hello");
});

app.use("/provider",providerRoute);



export default app;