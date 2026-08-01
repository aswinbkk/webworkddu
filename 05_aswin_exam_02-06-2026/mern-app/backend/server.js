import { config } from "dotenv";
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import router from "./routes/userRouter.js";

config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use("/users", router);

await connectDB();

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});