import { Masonry } from "@mui/lab";
import { Button, Container } from "@mui/material";
import React from "react";
import ProductShowCart from "../ProductShowCart/ProductShowCart";

const HomeProduct3Show = ({ data }) => {
  return (
    <Container maxWidth="xl">
      <div className="">
        <Masonry columns={{ xs: 1, sm: 1, md: 2, lg: 3, xl: 3 }} spacing={2}>
          {data.products.map((single) => {
            const { _id, imgLink, pId } = single;
            return (
              <ProductShowCart
                key={_id}
                imgLink={imgLink}
                ratingValue={3.5}
                productId={pId}
              />
            );
          })}
        </Masonry>
        <div className="text-right">
          <Button
            style={{ backgroundColor: "#212121", color: "white" }}
            variant="outlined"
          >
            See More...
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default HomeProduct3Show;
