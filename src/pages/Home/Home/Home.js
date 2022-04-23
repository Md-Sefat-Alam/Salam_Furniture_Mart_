import React, { useEffect, useState } from "react";
import { Masonry } from "@mui/lab";
import { Container } from "@mui/material";
import Button from "@mui/material/Button";
import ContentHeader from "../../shared/ContentHeader/ContentHeader";
import ProductShowCart from "../../shared/ProductShowCart/ProductShowCart";
import Categories from "../Categoryies/Categories";
import TopRatingProductBanner from "../TopRatingProductBanner/TopRatingProductBanner";
import axios from "axios";
import HomeProduct3Show from "../../shared/HomeProduct3Show/HomeProduct3Show";

// https://salam-furniture-mart.herokuapp.com/product/3/bed
const Home = () => {
  const [bedData, setBedData] = useState({});
  const [sofaData, setSofaData] = useState({});
  const [officeData, setOfficeData] = useState({});
  useEffect(() => {
    axios
      .get("https://salam-furniture-mart.herokuapp.com/product/3/bed")
      .then((res) => {
        if (res.status === 200) {
          setBedData(res.data);
        }
      })
      .catch((error) => {})
      .finally(() => {});
  }, []);
  useEffect(() => {
    axios
      .get("https://salam-furniture-mart.herokuapp.com/product/3/sofa")
      .then((res) => {
        if (res.status === 200) {
          setSofaData(res.data);
        }
      })
      .catch((error) => {})
      .finally(() => {});
  }, []);
  useEffect(() => {
    axios
      .get("https://salam-furniture-mart.herokuapp.com/product/3/office")
      .then((res) => {
        if (res.status === 200) {
          setOfficeData(res.data);
        }
      })
      .catch((error) => {})
      .finally(() => {});
  }, []);
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
      {sofaData.count > 0 && (
        <div style={{ backgroundColor: "#EEEEEE" }} className="py-24">
          <ContentHeader
            hText={"Sofa collections"}
            dText="some Sofa collection may you choose it.."
          />
          <HomeProduct3Show data={sofaData} />
        </div>
      )}
      {officeData.count > 0 && (
        <div style={{ backgroundColor: "#E5DCC3" }} className="py-24">
          <ContentHeader
            hText={"Office collections"}
            dText="some office collection may you choose it.."
          />
          <HomeProduct3Show data={officeData} />
        </div>
      )}
      {bedData.count > 0 && (
        <div style={{ backgroundColor: "#FEFBF3" }} className="py-24">
          <ContentHeader
            hText={"BedRoom collections"}
            dText="some bedroom collection may you choose it.."
          />
          <HomeProduct3Show data={bedData} />
        </div>
      )}
    </div>
  );
};

export default Home;
