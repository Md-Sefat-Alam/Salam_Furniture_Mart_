import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import { Box, Button, TextField } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import PasswordIcon from "@mui/icons-material/Password";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div
      style={{ minHeight: "70vh" }}
      className="flex justify-center items-center"
    >
      <div
        style={{
          minWidth: "350px",
          minHeight: "400px",
          backgroundColor: "#EEEEEE",
        }}
        className="rounded"
      >
        <div>
          <h1 className="text-center text-xl my-3 font-bold">Login</h1>
        </div>
        <div className="flex justify-center items-center flex-col">
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              id="input-with-sx-email"
              label="Email"
              variant="standard"
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <PasswordIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              type={"password"}
              id="input-with-sx-password"
              label="Password"
              variant="standard"
            />
          </Box>
          <div className="mt-10">
            <Button variant="outlined" size="small">
              Login
            </Button>
            <p className="w-full text-gray-400">
              You don't have any account?{" "}
              <Link to="/register" className="text-green-500">
                register
              </Link>
            </p>
          </div>
        </div>
        <div className="text-center my-5">
          <button className="border border-black rounded  px-5 py-1 my-4 ">
            <GoogleIcon className="text-red-500" /> Sign in using goole
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
