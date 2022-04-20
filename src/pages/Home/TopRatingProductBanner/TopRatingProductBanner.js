import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";

const TopRatingProductBanner = () => {
  const [topRatedProduct, setTopRatedProduct] = useState({});
  useEffect(() => {
    fetch("http://localhost:5000/popular-raging-product")
      .then((res) => res.json())
      .then((data) => setTopRatedProduct(data));
  }, []);
  if (!topRatedProduct?._id) {
    return (
      <div
        style={{ minHeight: "70vh" }}
        className="flex my-5 justify-center items-center"
      >
        <div style={{ minHeight: "70vh" }} className="w-1/2 bg-slate-100"></div>
        <div
          style={{ minHeight: "70vh" }}
          className="w-1/2 bg-slate-200 flex justify-center items-center"
        >
          <CircularProgress />
        </div>
      </div>
    );
  }
  return (
    <div style={{ minHeight: "450px" }} className="flex my-5">
      <div className="w-1/2 bg-slate-100 flex justify-center items-center">
        <div className="w-1/2">
          <p className="text-2xl font-bold">{topRatedProduct.text}</p>
          <button className="border rounded p-1 border-gray-500 bg-gray-200 text-gray-500">
            See More...
          </button>
        </div>
      </div>
      <div className="w-1/2 bg-slate-200">
        <img
          style={{ minHeight: "450px" }}
          src={topRatedProduct.imgLink}
          alt=""
        />
      </div>
    </div>
  );
};

export default TopRatingProductBanner;
