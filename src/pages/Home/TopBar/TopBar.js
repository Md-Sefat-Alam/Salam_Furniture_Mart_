import { Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const TopBar = () => {
  const { user } = useAuth();
  if (user.email) {
    return null;
  }
  return (
    <Container className="bg-gray-100" maxWidth="xl">
      <div className="text-right ">
        <Link className="mx-2" to={"/login"}>
          Login
        </Link>
        <Link className="mx-2" to={"/register"}>
          Register
        </Link>
      </div>
    </Container>
  );
};

export default TopBar;
