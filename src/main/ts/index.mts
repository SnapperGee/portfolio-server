import { app } from "./server.mjs";

app.listen(process.env.EXPRESS_PORT, () => {
    if (process.env.NODE_ENV === "development")
    {
        console.log(`Express server listening on port http://localhost:${process.env.EXPRESS_PORT}`);
    }
});
