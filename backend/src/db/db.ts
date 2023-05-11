import { Pool } from "pg";

export const db = new Pool({
  host: "localhost",
  port: 5432,
  database: "pos_with_react",
  user: "postgres",
  password: "waihsu",
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});
