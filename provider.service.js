
import providerModel from "../model/provider.js";

const createProvider = async ({BuisnessName, PhoneNo, email, buildingNo, pincode, street, landmark, AadhaarNo, PANno, accountHolderName, accountNo, UPIid})=>{

    if (!BuisnessName || !PhoneNo || !email || !pincode || !street || !AadhaarNo || !accountHolderName || !UPIid) {

        throw new Error("All fields are compulsory");
        
    }
    
    const provider= providerModel.create({
        BuisnessName,
        contact:{
            PhoneNo,
            email
        },
        address:{
            buildingNo,
            pincode,
            street,
            landmark
        },
        AadhaarNo,
        PANno,
        accountHolderName,
        accountNo,
        UPIid
    });

    return provider;
}

export default createProvider;