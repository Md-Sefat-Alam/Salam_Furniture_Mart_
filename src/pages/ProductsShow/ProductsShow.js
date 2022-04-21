import * as React from "react";
import { Button, Container, Pagination } from "@mui/material";
import ContentHeader from "../shared/ContentHeader/ContentHeader";
import ProductShowCart from "../shared/ProductShowCart/ProductShowCart";
import { Masonry } from "@mui/lab";

function ProductsShow() {
  return (
    <Container maxWidth="xl">
      <div style={{ minHeight: "80vh" }} className="">
        <div className="w-full pb-10">
          <ContentHeader
            hText={"New Products"}
            dText="all new products here may you choise"
          />
          <div className="flex justify-between">
            <div className="px-4">
              <Button>Filter</Button>
            </div>
            <Pagination count={10} />
          </div>
          <Masonry columns={{ xs: 1, sm: 1, md: 2, lg: 3, xl: 3 }} spacing={2}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((single) => (
              <ProductShowCart
                key={single}
                imgLink={
                  "https://cdn.pixabay.com/photo/2021/08/27/01/33/bedroom-6577523_960_720.jpg"
                }
                ratingValue={3.5}
                productId="Bed100001"
              />
            ))}
          </Masonry>
          <div className="flex justify-center">
            <Pagination count={10} />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ProductsShow;
