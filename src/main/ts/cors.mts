import cors from "cors";
import "dotenv/config";

const corsConfig = Object.freeze({
    origin: process.env.NODE_ENV === "development" || process.env.CLIENT_ORIGIN,
    optionsSuccessStatus: 200
});

export const configuredCors = cors(corsConfig);

export default configuredCors;
