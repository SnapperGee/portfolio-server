/**
 * The main module entry point of the server where the express instance is started.
 * @module index
 */

import { app } from "./server.js";

app.listen(process.env.PORT);
