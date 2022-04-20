import { CircularProgress, Container } from "@mui/material";
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
      <Container maxWidth="xl">
        <div
          style={{ minHeight: "70vh" }}
          className="flex my-5 justify-center items-center"
        >
          <div
            style={{ minHeight: "70vh" }}
            className="w-1/2 bg-slate-100"
          ></div>
          <div
            style={{ minHeight: "70vh" }}
            className="w-1/2 bg-slate-200 flex justify-center items-center"
          >
            <CircularProgress />
          </div>
        </div>
      </Container>
    );
  }
  return (
    <Container maxWidth="xl">
      <div style={{ minHeight: "450px" }} className="flex mt-5">
        <div className="w-1/2 bg-slate-100 flex justify-center items-center">
          <div className="w-1/2">
            <p className="text-2xl font-bold">{topRatedProduct.text}</p>
            <button
              style={{ backgroundColor: "#06113C" }}
              className="border rounded py-1 px-3 my-3 text-white border-gray-500"
            >
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
    </Container>
  );
};

export default TopRatingProductBanner;
