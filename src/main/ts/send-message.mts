import { Request, Response } from "express";

export const sendMessage = async (req: Request, res: Response) =>
{
    const { name, email, phoneNumber, message } = req.body;

    console.log(`name: ${name}\nemail: ${email}\nphoneNumber: ${phoneNumber}\nmessage: ${message}`);

    res.json({message: "Message sent"});
};

export default sendMessage;
