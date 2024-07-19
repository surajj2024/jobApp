import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import jobApi from "./routes/jobapi.route.js";
import dbConnect from "./dbConnect.js";
dotenv.config();
const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.json());

dbConnect();

app.use("/api/jobs", jobApi);

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
