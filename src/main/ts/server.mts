import { contactRouter } from "./contact-route.mjs";
import express from "express";
import "dotenv/config";

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(contactRouter);

export default app;
