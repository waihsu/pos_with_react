"use client";
import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

const Register = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const register = async () => {
    const resp = await fetch("http://localhost:3000/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
  };

  return (
    <Box
      sx={{
        maxWidth: 700,
        display: "flex",
        flexDirection: "column",
        mx: "auto",
        mt: 10,
        gap: 6,
      }}>
      <TextField
        id="outlined-basic"
        label="Username"
        variant="outlined"
        onChange={(evt) => {
          setUser({ ...user, name: evt.target.value });
        }}
      />
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        onChange={(evt) => {
          setUser({ ...user, email: evt.target.value });
        }}
      />
      <TextField
        type="password"
        id="outlined-basic"
        label="Password"
        variant="outlined"
        onChange={(evt) => {
          setUser({ ...user, password: evt.target.value });
        }}
      />
      <Button onClick={register} variant="contained">
        Register
      </Button>
    </Box>
  );
};

export default Register;
