import { createTransport } from "nodemailer";
import "dotenv/config";

export const transporter = createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.OUTLOOK_ADDRESS,
        pass: process.env.OUTLOOK_PW
    }
});

export default transporter;
