import * as React from "react";
import { Button, Container, Pagination } from "@mui/material";
import ContentHeader from "../shared/ContentHeader/ContentHeader";
import ProductShowCart from "../shared/ProductShowCart/ProductShowCart";
import { Masonry } from "@mui/lab";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductsShow() {
  const { productType } = useParams();
  const [products, setProducts] = React.useState({});
  React.useEffect(() => {
    axios
      .get(`http://localhost:5000/products/${productType}`)
      .then((res) => {
        if (res.status === 200) {
          setProducts(res.data);
        }
      })
      .catch((error) => {})
      .finally(() => {});
  }, [productType]);
  return (
    <Container maxWidth="xl">
      <div style={{ minHeight: "80vh" }} className="">
        <div className="w-full pb-10">
          <ContentHeader
            hText={productType}
            dText={`all ${productType} products here may you choise`}
          />
          {products.count > 0 && (
            <div className="flex justify-between">
              <div className="px-4">
                <Button>Filter</Button>
              </div>
              <div>
                <Pagination count={10} />
              </div>
            </div>
          )}
          {products.count > 0 ? (
            <Masonry
              columns={{ xs: 1, sm: 1, md: 2, lg: 3, xl: 3 }}
              spacing={2}
            >
              {products.products.map((single) => {
                const { pId, imgLink } = single;
                return (
                  <ProductShowCart
                    key={pId}
                    imgLink={imgLink}
                    ratingValue={3.5}
                    productId={pId}
                  />
                );
              })}
            </Masonry>
          ) : (
            <div
              style={{ minHeight: "60vh" }}
              className="flex justify-center items-center"
            >
              <p className="text-xl text-red-400 font-bold">No Data</p>
            </div>
          )}
          {products.count > 0 && (
            <div className="flex justify-center">
              <div>
                <Pagination count={10} />
              </div>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}

export default ProductsShow;
