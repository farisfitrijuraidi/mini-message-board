import express from "express";
import path from "node:path";
import indexRouter from "./routes/indexRouter.js";

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.set("views", path.join(import.meta.dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);

app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log(`Mini Message Board is running on port ${PORT}`);
});
