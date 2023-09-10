import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from "./config/connectDB.js";
import Routes from "./routes/routes.js";
const app = express();
const PORT = 8000;
app.use(cors());

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", Routes);
connectDB();

app.listen(PORT, () => {
  console.log(`Server Start on ${PORT}`);
});
