import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import PasswordIcon from "@mui/icons-material/Password";
import { Link, useNavigate } from "react-router-dom";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import useAuth from "../../hooks/useAuth";
import GoogleLogin from "../shared/GoogleLogin/GoogleLogin";
const axios = require("axios");

const Register = () => {
  const { emailPassRegister, setUser, setError, setIsLoading } = useAuth();
  const navigate = useNavigate();
  const [registerData, setRegisterData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });
  const handleRegisterData = (e, type) => {
    switch (type) {
      case "name":
        const temp = { ...registerData };
        temp.name = e.target.value;
        setRegisterData({ ...temp });
        break;
      case "phone":
        const tempPhone = { ...registerData };
        tempPhone.phone = e.target.value;
        setRegisterData({ ...tempPhone });
        break;
      case "email":
        const tempEmail = { ...registerData };
        tempEmail.email = e.target.value;
        setRegisterData({ ...tempEmail });
        break;
      case "pass":
        const tempPass = { ...registerData };
        tempPass.password = e.target.value;
        setRegisterData({ ...tempPass });
        break;
      default:
        break;
    }
  };
  const handleRegister = () => {
    if (
      registerData.email &&
      registerData.password &&
      registerData.name &&
      registerData.phone
    ) {
      setIsLoading(true);
      emailPassRegister(registerData.email, registerData.password)
        .then((userCredential) => {
          setUser(userCredential.user);
          navigate("/home");
          axios
            .post("http://localhost:5000/userdata", {
              ...registerData,
              role: "user",
            })
            .then((res) => {
              // console.log(res);
            })
            .catch((error) => setError(error));
        })
        .catch((error) => setError(error.code))
        .finally(() => setIsLoading(false));
    } else {
      alert("Enter Text Propar");
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
          backgroundColor: "#EEEEEE",
        }}
        className="rounded"
      >
        <div>
          <h1 className="text-center text-xl my-3 font-bold">Register</h1>
        </div>
        <div className="flex justify-center items-center flex-col">
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <DriveFileRenameOutlineIcon
              sx={{ color: "action.active", mr: 1, my: 0.5 }}
            />
            <TextField
              id="input-with-sx-name"
              label="Name"
              variant="standard"
              onChange={(e) => handleRegisterData(e, "name")}
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <PhoneInTalkIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              id="input-with-sx-phone"
              label="Phone"
              variant="standard"
              onChange={(e) => handleRegisterData(e, "phone")}
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <AttachEmailIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              id="input-with-sx-email"
              label="Email"
              variant="standard"
              type={"email"}
              onChange={(e) => handleRegisterData(e, "email")}
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <PasswordIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              type={"password"}
              id="input-with-sx-password"
              label="Password"
              variant="standard"
              onChange={(e) => handleRegisterData(e, "pass")}
            />
          </Box>
          <div className="mt-10">
            <Button onClick={handleRegister} variant="outlined" size="small">
              Register
            </Button>
            <p className="w-full text-gray-400">
              You have an account?{" "}
              <Link to={"/login"} className="text-green-500">
                login
              </Link>
            </p>
          </div>
        </div>
        <GoogleLogin />
      </div>
    </div>
  );
};

export default Register;
