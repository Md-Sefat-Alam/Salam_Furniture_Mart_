import { Paper } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const CategoryCart = ({ cName, icon, path }) => {
  const navigate = useNavigate();
  return (
    <Paper
      onClick={() => navigate(path)}
      className="flex flex-col justify-evenly items-center cursor-pointer hover:-translate-y-1 hover:bg-gray-200"
      elevation={0}
    >
      <div>{icon}</div>
      <div>{cName}</div>
    </Paper>
  );
};

export default CategoryCart;
