import { app } from "./server.mjs";

app.listen(process.env.EXPRESS_PORT, () => console.log(`Express server listening on port ${process.env.EXPRESS_PORT}`));
