import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());

app.post("/auth/register", async (req, res) => {
  console.log(req.body);
  const body = req.body;
  res.status(200).json({ registered: body });
});

app.listen(port, () => {
  console.log("Server Started On Port 5000");
});

