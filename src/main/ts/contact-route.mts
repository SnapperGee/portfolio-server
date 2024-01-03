import { sendMessage } from "./send-message.mjs";
import { Router } from "express";

export const contactRouter = Router();

contactRouter.post("/contact", sendMessage);

export default contactRouter;
