import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { db } from "./src/db/db";
dotenv.config();

const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());

app.post("/auth/register", async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) return res.sendStatus(400);
  const text =
    "INSERT INTO users(name, email, password) VALUES ($1, $2, $3) RETURNING *";
  const values = [name, email, password];
  try {
    const result = await db.query(text, values);
    const user = result.rows[0];
    delete user.password;
    res.send(user);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.listen(port, () => {
  console.log("Server Started On Port 5000");
});
