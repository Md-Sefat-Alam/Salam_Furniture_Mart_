import React from "react";
import Container from "@mui/material/Container";
import { Link, useLocation } from "react-router-dom";
import CartAndSearch from "../CartAndSearch/CartAndSearch";

const Header = () => {
  const location = useLocation();
  if (location.pathname.includes("/admin")) {
    return null;
  }
  return (
    <Container maxWidth="xl">
      <header className="flex flex-col lg:flex-row lg:justify-between items-center">
        <div className="flex items-center">
          <div className="order-1">
            <p className="text-sm">
              <span className="text-gray-500">Phone: </span>
              <span>+8801774199968</span>
            </p>
            <p className="text-sm">
              <span className="text-gray-500">Email: </span>
              <span>salamfurnituremart@gmail.com</span>
            </p>
          </div>
        </div>
        <div
          style={{}}
          className="order-3 lg:order-2 select-none cursor-pointer"
        >
          <Link to={"/"}>
            <img
              className="py-2"
              style={{ width: "200px" }}
              src="https://i.ibb.co/MsDWXFB/Salam-furniture-logo1.png"
              alt="logo"
            />
          </Link>
        </div>
        <CartAndSearch />
      </header>
    </Container>
  );
};

export default Header;
