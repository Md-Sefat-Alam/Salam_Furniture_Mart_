import { Container } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  if (location.pathname.includes("/dashboard")) {
    return null;
  }
  return (
    <div
      style={{ minHeight: "300px" }}
      className="bg-gray-600 w-full flex flex-col justify-between"
    >
      <Container maxWidth="xl">
        <div></div>
      </Container>
      <div className="text-center bg-black">
        <p className="text-white">
          &copy; Right All Reserved By Salam Furniture Mart
        </p>
      </div>
    </div>
  );
};

export default Footer;
