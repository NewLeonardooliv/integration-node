require('dotenv/config');

import express from "express";
import { router } from "./routes";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

app.listen(process.env.PORT, () => console.log(`Servidor Online - localhost:${process.env.PORT}`));
