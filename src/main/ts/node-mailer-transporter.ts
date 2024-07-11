/**
 * This module exports a nodemailer transporter object used to send an email
 * for when the contact form is submitted on the client side.
 * @module node-mailer-transporter
 */

import { createTransport } from "nodemailer";

/**
 * A nodemailer transporter object used to send an email for when the contact
 * form is submitted on the client side.
 */
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
