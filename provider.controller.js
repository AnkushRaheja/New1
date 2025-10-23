import providerModel from "../model/provider.js";
import createProvider from "../services/provider.service.js";
import {validationResult} from "express-validator";
import {mailVerification} from "./mailVerification.controller.js"

export const registerProvider = async (req,res) =>{

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({errors:errors.array()});
    }

    const {BuisnessName,contact,address,AadhaarNo,PANno,accountHolderName,accountNo,UPIid} = req.body;

    const ifAlredyExist = await providerModel.findOne({AadhaarNo});

    if (ifAlredyExist) {
        return res.status(400).json({message:'Provider alredy exists'});
    }

    const otp = `${Math.floor(1000+Math.random()*9000)}`

    await mailVerification(contact.email,otp);

    const provider = await createProvider({
        BuisnessName,
        PhoneNo:contact.PhoneNo,
        email:contact.email,
        buildingNo:address.buildingNo,
        pincode:address.pincode,
        street:address.street,
        landmark:address.landmark,
        AadhaarNo,
        PANno,
        accountHolderName,
        accountNo,
        UPIid
    });
    // const token = await provider.generateAuthToken();

    res.status(200).json({provider});
}

export const loginProvider = async(req,res) =>{

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {

        const {BuisnessName,contact} = req.body;

        const provider = providerModel.findOne({"contact.email":contact.email},{BuisnessName})

        if (!provider & !BuisnessName) {
            return res.status(404).json({ error: "Provider not found" });
        }

        res.status(200).json({message:'verified provider'});
        
    } catch (error) {
        return res.status(400).json({message:error.message});
    }
}