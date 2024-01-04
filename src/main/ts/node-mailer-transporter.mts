import { createTransport } from "nodemailer";
import "dotenv/config";

export const transporter = createTransport({
    service: "gmail",
    secure: true,
    auth: {
        type: "OAuth2",
        user: process.env.GMAIL_USER,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: process.env.ACCESS_TOKEN,
    },
    authMethod: "OAUTH2"
});

export default transporter;
