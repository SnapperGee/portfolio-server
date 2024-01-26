/**
 * This module contains the {@link sendMessage} controller used to send an email
 * when the contact form is submitted on the client side.
 * @module send-message
 */

import { transporter } from "./node-mailer-transporter.mjs";
import { Request, Response } from "express";
import "dotenv/config";

/**
 * The controller function used to send an email when the contact form is submitted on the client side.
 *
 * @param req The request object.
 * @param res The response object.
 */
export const sendMessage = async (req: Request, res: Response) =>
{
    const { name, email, phoneNumber, message } = req.body;

    if (name && message && (email || phoneNumber))
    {
        const emailData = {
            from: process.env.OUTLOOK_ADDRESS,
            to: process.env.GMAIL_ADDRESS,
            subject: `Portfolio inquiry from ${name}`,
            text: `From: ${name}${email ? `\nemail: ${email}` : ""}${phoneNumber ? `\ntel: ${phoneNumber}` : ""}\n\n${message}`
        };

        transporter.sendMail(emailData, (error) => {
            if (error)
            {
                res.status(400).json({error});
            }
            else
            {
                res.json({message: "Message sent"});
            }
        });
    }
    else
    {
        res.status(400).json({error: "Missing required field(s)", data: req.body});
    }

};

export default sendMessage;
