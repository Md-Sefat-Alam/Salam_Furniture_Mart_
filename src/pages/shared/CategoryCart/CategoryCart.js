import { Paper } from "@mui/material";
import React from "react";

const CategoryCart = ({ cName, icon }) => {
  return (
    <Paper
      className="flex flex-col justify-evenly items-center cursor-pointer hover:-translate-y-1 hover:bg-gray-200"
      elevation={0}
    >
      <div>{icon}</div>
      <div>{cName}</div>
    </Paper>
  );
};

export default CategoryCart;
