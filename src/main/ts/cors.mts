import cors from "cors";
import "dotenv/config";

const corsConfig = Object.freeze({
    origin: process.env.CLIENT_ORIGIN || true,
    optionsSuccessStatus: 200
});

export const configuredCors = cors(corsConfig);

export default configuredCors;
