/**
 * This module routes the api contact POST route to the {@link sendMessage} controller.
 * @module contact-route
 */

import { sendMessage } from "./send-message.js";
import { Router } from "express";

/**
 * A router object for the api contact POST route routed to the {@link sendMessage} controller.
 */
export const contactRouter = Router();

contactRouter.post("/api/contact", sendMessage);

export default contactRouter;
