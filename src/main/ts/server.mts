import { contactRouter } from "./contact-route.mjs";
import { resolve as resolvePath } from "node:path";
import express from "express";
import "dotenv/config";

const REACT_DIR = resolvePath("..", "client", "dist");
const REACT_INDEX_HTML = resolvePath(REACT_DIR, "index.html");

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(REACT_DIR));
app.get("*", (req, res) => res.sendFile(REACT_INDEX_HTML));
app.use(contactRouter);

export default app;
