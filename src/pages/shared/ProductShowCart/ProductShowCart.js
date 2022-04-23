import { Paper, Rating } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const ProductShowCart = ({ imgLink, ratingValue, productId }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 400,
          height: 350,
        },
      }}
    >
      <Paper elevation={0}>
        <div className="relative">
          <div className="flex justify-center" style={{ height: "300px" }}>
            <img style={{ height: "300px" }} src={imgLink} alt="img" />
          </div>
          <div className="absolute top-1 right-1">
            <Rating
              name="half-rating-read"
              value={ratingValue}
              precision={0.5}
              readOnly
            />
          </div>
          <div className="flex flex-row items-center justify-between px-4 py-2">
            <p className="text-xl font-bold">
              <span className="text-sm text-gray-400 font-normal">
                Product Id:{" "}
              </span>{" "}
              {productId}
            </p>
            <Link
              className="px-3 border rounded bg-orange-500 text-white py-1"
              to={`/product/${productId}`}
            >
              Explore
            </Link>
          </div>
        </div>
      </Paper>
    </Box>
  );
};

export default ProductShowCart;
