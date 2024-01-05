import { createTransport } from "nodemailer";
import "dotenv/config";

// export const transporter = createTransport({
//     service: "gmail",
//     secure: true,
//     auth: {
//         type: "OAuth2",
//         user: process.env.GMAIL_USER,
//         clientId: process.env.CLIENT_ID,
//         clientSecret: process.env.CLIENT_SECRET,
//         refreshToken: process.env.REFRESH_TOKEN,
//         accessToken: process.env.ACCESS_TOKEN,
//     },
//     authMethod: "OAUTH2"
// });

// export const transporter = createTransport({
//     service: "hotmail",
//     secure: false,
//     auth: {
//         user: process.env.OUTLOOK_ADDRESS,
//         pass: process.env.OUTLOOK_PW
//     }
// });

console.log(`\n\n\n${process.env.OUTLOOK_ADDRESS}\n${process.env.OUTLOOK_PW}\n\n\n`);

export const transporter = createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.OUTLOOK_ADDRESS,
        pass: process.env.OUTLOOK_PW
    }
});

// export const transporter = createTransport(
//     `smtp://${process.env.GMAIL_ADDRESS}:${process.env.GMAIL_PW}@smtp.gmail.com:587`
// );

export default transporter;
