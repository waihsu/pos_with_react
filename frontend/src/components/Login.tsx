import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });

  const signIn = async () => {
    const resp = await fetch("http://localhost:5000/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (resp.ok) {
      navigate("/");
    }
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
      <Button onClick={signIn} variant="contained">
        Login
      </Button>
    </Box>
  );
};

export default Login;
