import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import PasswordIcon from "@mui/icons-material/Password";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import GoogleLogin from "../shared/GoogleLogin/GoogleLogin";

const Login = () => {
  const { signInWithEmailPass, setUser, setError, setIsLoading } = useAuth();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const location = useLocation();
  const navigate = useNavigate();
  const redirectUri = location?.state?.from || "/home";
  const handleLoginData = (e, type) => {
    switch (type) {
      case "email":
        const tempEmail = { ...loginData };
        tempEmail.email = e.target.value;
        setLoginData({ ...tempEmail });
        break;
      case "pass":
        const tempPass = { ...loginData };
        tempPass.password = e.target.value;
        setLoginData({ ...tempPass });
        break;
      default:
        break;
    }
  };
  const handleLogin = () => {
    if (loginData.email && loginData.password) {
      setIsLoading(true);
      signInWithEmailPass(loginData.email, loginData.password)
        .then((userCredential) => {
          setUser(userCredential.user);
          navigate(redirectUri);
        })
        .catch((error) => setError(error.code))
        .finally(() => setIsLoading(false));
    }
  };
  return (
    <div
      style={{ minHeight: "70vh", fontFamily: "roboto" }}
      className="flex justify-center items-center"
    >
      <div
        style={{
          minWidth: "350px",
          minHeight: "400px",
          backgroundColor: "#EAEAEA",
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
              onChange={(e) => handleLoginData(e, "email")}
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <PasswordIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              type={"password"}
              id="input-with-sx-password"
              label="Password"
              variant="standard"
              onChange={(e) => handleLoginData(e, "pass")}
            />
          </Box>
          <div className="mt-10">
            <Button onClick={handleLogin} variant="outlined" size="small">
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
        <GoogleLogin />
      </div>
    </div>
  );
};

export default Login;
