import { transporter } from "./node-mailer-transporter.mjs";
import { Request, Response } from "express";

export const sendMessage = async (req: Request, res: Response) =>
{
    const { name, email, phoneNumber, message } = req.body;

    const emailData = {
        from: process.env.GMAIL_USER,
        to: process.env.GMAIL_USER,
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
};

export default sendMessage;
