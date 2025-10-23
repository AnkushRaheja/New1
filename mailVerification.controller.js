import nodemailer from "nodemailer";


export const  mailVerification = async ({email,otp},res)=>{

    try {

        const transporter = nodemailer.createTransport({
            service:'gmail',
            port: 465,
            secure:true,
            auth: {
              user: process.env.MAIL,
              pass: process.env.MAIL_PASS,
            },
          });
    
          const info = await transporter.sendMail({
            from: process.env.MAIL, 
            to: email, 
            subject: "OTP", 
            // text: "Hello world?",
            html: `Your One-Time Password (OTP) for mail verification is:<br/><b>${otp}</b>`, 
          });

          res.status(200).json({message:'Success'});
        
    } catch (error) {
        console.log(error);
        res.status(400).json({message:'Error'});
    }
};
