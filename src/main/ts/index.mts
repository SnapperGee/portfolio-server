import { app } from "./server.mjs";
import "dotenv/config";

if (process.env.NODE_ENV === "development")
{
    app.listen(process.env.EXPRESS_PORT, () =>
    {
        console.log(`Express server listening on http://localhost:${process.env.EXPRESS_PORT}`);
    });
}
else
{
    app.listen(process.env.EXPRESS_PORT);
}
