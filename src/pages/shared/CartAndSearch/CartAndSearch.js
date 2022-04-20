import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartAndSearch = () => {
  return (
    <div className="flex justify-between order-2 lg:order-3">
      <div className="px-3 text-gray-700">
        <SearchIcon fontSize="large" />
      </div>
      <div className="px-3 text-gray-700">
        <ShoppingCartIcon fontSize="large" />
      </div>
    </div>
  );
};

export default CartAndSearch;
