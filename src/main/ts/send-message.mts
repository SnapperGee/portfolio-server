import { transporter } from "./node-mailer-transporter.mjs";
import { Request, Response } from "express";
import "dotenv/config";

export const sendMessage = async (req: Request, res: Response) =>
{
    const { name, email, phoneNumber, message } = req.body;

    if (name && message && (email || phoneNumber))
    {
        const emailData = {
            from: process.env.OUTLOOK_ADDRESS,
            to: process.env.GMAIL_ADDRESS,
            subject: `Portfolio inquiry from ${name}`,
            text: message,
            html: `<p>From: ${name}${email ? `<br>email: ${email}` : ""}${phoneNumber ? `<br>tel: ${phoneNumber}` : ""}<br><br>${message}</p>`,
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
