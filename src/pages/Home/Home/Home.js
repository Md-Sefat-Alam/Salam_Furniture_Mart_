import React, { useEffect, useState } from "react";
import { Masonry } from "@mui/lab";
import { Container } from "@mui/material";
import Button from "@mui/material/Button";
import ContentHeader from "../../shared/ContentHeader/ContentHeader";
import ProductShowCart from "../../shared/ProductShowCart/ProductShowCart";
import Categories from "../Categoryies/Categories";
import TopRatingProductBanner from "../TopRatingProductBanner/TopRatingProductBanner";
import axios from "axios";

// http://localhost:5000/product/3/bed
const Home = () => {
  const [bedData, setBedData] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:5000/product/3/bed")
      .then((res) => {
        if (res.status === 200) {
          setBedData(res.data);
        }
      })
      .catch((error) => {})
      .finally(() => {});
  }, []);
  console.log(bedData);
  return (
    <div>
      <TopRatingProductBanner />
      <Categories />
      <div style={{ backgroundColor: "#FEFBF3" }} className="py-24">
        <ContentHeader
          hText={"New collections"}
          dText="some new collection may you choose it.."
        />
        <Container maxWidth="xl">
          <div className="">
            <Masonry
              columns={{ xs: 1, sm: 1, md: 2, lg: 3, xl: 3 }}
              spacing={2}
            >
              {[1, 2, 3].map((single) => (
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
      </div>
      <div style={{ backgroundColor: "#EEEEEE" }} className="py-24">
        <ContentHeader
          hText={"Living collections"}
          dText="some living collection may you choose it.."
        />
        <Container maxWidth="xl">
          <div className="">
            <Masonry
              columns={{ xs: 1, sm: 1, md: 2, lg: 3, xl: 3 }}
              spacing={2}
            >
              {[1, 2, 3].map((single) => (
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
      </div>
      <div style={{ backgroundColor: "#E5DCC3" }} className="py-24">
        <ContentHeader
          hText={"Office collections"}
          dText="some office collection may you choose it.."
        />
        <Container maxWidth="xl">
          <div className="">
            <Masonry
              columns={{ xs: 1, sm: 1, md: 2, lg: 3, xl: 3 }}
              spacing={2}
            >
              {[1, 2, 3].map((single) => (
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
      </div>
      {bedData.count > 0 && (
        <div style={{ backgroundColor: "#FEFBF3" }} className="py-24">
          <ContentHeader
            hText={"BedRoom collections"}
            dText="some bedroom collection may you choose it.."
          />
          <Container maxWidth="xl">
            <div className="">
              <Masonry
                columns={{ xs: 1, sm: 1, md: 2, lg: 3, xl: 3 }}
                spacing={2}
              >
                {bedData.products.map((single) => {
                  const { _id, imgLink, pId } = single;
                  console.log(single);
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
        </div>
      )}
    </div>
  );
};

export default Home;
