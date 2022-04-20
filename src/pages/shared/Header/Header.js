import React from "react";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import CartAndSearch from "../CartAndSearch/CartAndSearch";

const Header = () => {
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
        <div className="order-3 lg:order-2 select-none cursor-pointer">
          <Link to={"/"}>
            <img
              className=""
              style={{ width: "250px" }}
              src="./images/logo/Salam_furniture_logo1.png"
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
