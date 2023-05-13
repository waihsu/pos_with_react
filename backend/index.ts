import express from "express";
import bcrypt from "bcrypt";
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
  const hashPassword = await bcrypt.hash(password, 10);
  const text =
    "INSERT INTO users(name, email, password) VALUES ($1, $2, $3) RETURNING *";
  const values = [name, email, hashPassword];
  try {
    const result = await db.query(text, values);
    const user = result.rows[0];
    delete user.password;
    res.status(200).json({ user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
});

app.post("/auth/signin", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.sendStatus(400);
  const userResult = await db.query(
    "SELECT password FROM users where email = $1",
    [email]
  );
  if (!userResult.rows.length) return res.sendStatus(401);
  const user = userResult.rows[0];
  const hashedPassword = user.password;
  const isCorrectPassword = await bcrypt.compare(password, hashedPassword);
  return isCorrectPassword ? res.sendStatus(200) : res.sendStatus(401);
});

app.listen(port, () => {
  console.log("Server Started On Port 5000");
});
