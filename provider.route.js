import express from "express";
import {body} from "express-validator";
import { registerProvider,loginProvider } from "../controller/provider.controller.js";
import { mailVerification } from "../controller/mailVerification.controller.js";


const router=express.Router();

router.post('/register',[
        body('BuisnessName').isLength({min:3}).withMessage("Name should be atleast 3 characters long"),
        body('contact.PhoneNo').isNumeric().isLength({min:10,max:10}).withMessage("Enter valid  mobile number"),
        body('contact.email').isEmail().withMessage("enter valid email id"),
        body('address.buildingNo').isNumeric().withMessage('enter valid number'),
        body('address.pincode').isNumeric().isLength({min:6,max:6}).withMessage("enter valid pincode"),
        body('address.street'),
        body('address.landmark'),
        body('AadhaarNo').isLength({min:12,max:12}).withMessage('Enter valid aadhaar card Number'),
        body('PANno'),
        body('accountHolderName'),
        body('accountNo'),
        body('UPIid')

    ],
        registerProvider
)

router.post('/mailVerification',[
     body('BuisnessName').isLength({min:3}).withMessage("Name should be atleast 3 characters long"),
    body('contact.email').isEmail().withMessage("enter valid email id"),
],
    mailVerification
);

router.get('/login',[
    body('BuisnessName').isLength({min:3}).withMessage("Name should be atleast 3 characters long"),
        body('contact.email').isEmail().withMessage("enter valid email id"),
    ],
        loginProvider
);

export default router;