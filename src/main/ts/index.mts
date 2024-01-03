import { app } from "./server.mjs";

app.listen(process.env.EXPRESS_PORT, () => {
    // Remove production check once/if dev and prod runs can be separated
    if (process.env.NODE_ENV === "development" || process.env.NODE_ENV === "production")
    {
        console.log(`Express server listening on port http://localhost:${process.env.EXPRESS_PORT}`);
    }
});
