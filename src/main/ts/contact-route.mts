import { sendMessage } from "./send-message.mjs";
import { configuredCors } from "./cors.mjs";
import { Router } from "express";

export const contactRouter = Router();

contactRouter.post("/contact", configuredCors, sendMessage);

export default contactRouter;
