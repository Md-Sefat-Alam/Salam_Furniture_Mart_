import { Button, Container, Rating, TextField } from "@mui/material";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ContentHeader from "../shared/ContentHeader/ContentHeader";
import { Box } from "@mui/system";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import { SupervisedUserCircleOutlined } from "@mui/icons-material";

const ProductShow = () => {
  return (
    <div style={{ minHeight: "80vh" }}>
      <Container>
        <div className="flex justify-center my-10">
          <div style={{ minHeight: "350px" }} className="h-full bg-gray-400">
            <img
              style={{ height: "350px" }}
              src="https://cdn.pixabay.com/photo/2021/08/27/01/33/bedroom-6577523_960_720.jpg"
              alt="img"
            />
          </div>
          <div
            style={{ minHeight: "350px" }}
            className="flex-grow h-full bg-gray-100 p-4 flex items-end"
          >
            <div>
              <h3
                style={{ fontFamily: "roboto" }}
                className="text-3xl text-gray-900"
              >
                Product Name abcd here
              </h3>
              <p className="text-2xl text-gray-500">
                <span>$</span> 530
              </p>
              <p>
                <Rating
                  name="half-rating-read"
                  size="large"
                  value={3.5}
                  precision={0.5}
                  readOnly
                />
              </p>
              <Button variant="outlined">
                <ShoppingCartIcon /> Add to cart
              </Button>
            </div>
          </div>
        </div>
        <div className="py-24" style={{ backgroundColor: "#EEEEEE" }}>
          <ContentHeader
            hText={"Product Details"}
            dText="product details here"
          />
          <div className="flex mb-12 ">
            <div className="w-2/5 bg-gray-300 rounded-md"></div>
            <div>
              <ul
                style={{ fontFamily: "roboto" }}
                className=" list-disc text-gray-500"
              >
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nemo, incidunt?
                </li>
                <li>
                  Tempora laborum non inventore? Amet totam doloremque unde
                  mollitia adipisci!
                </li>
                <li>
                  Aut harum quis porro fugiat officiis deleniti velit, rerum
                  commodi!
                </li>
                <li>
                  Necessitatibus dignissimos facilis quas repellendus, eaque
                  quisquam sunt ad ab.
                </li>
                <li>
                  At adipisci consequuntur tempore ullam, possimus ad numquam
                  perspiciatis laborum.
                </li>
                <li>
                  Tempore soluta dolorem sequi commodi, consequuntur consequatur
                  libero cum exercitationem.
                </li>
                <li>
                  Esse delectus perspiciatis corporis perferendis assumenda
                  earum inventore dolor saepe.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <ContentHeader
            hText={"Add a review for this product"}
            dText="please add your valueable review"
          />
          <div className="flex mb-12 flex-col items-center justify-center">
            <div>
              <Rating
                size="large"
                name="half-rating"
                defaultValue={2.5}
                precision={0.5}
              />
            </div>
            <div>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <SupervisedUserCircleOutlined
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
                <TextField
                  id="input-with-sx-name"
                  label="Name"
                  variant="standard"
                />
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <AttachEmailIcon
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
                <TextField
                  id="input-with-sx-email"
                  label="Email"
                  variant="standard"
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  marginTop: "20px",
                }}
              >
                <DriveFileRenameOutlineIcon
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
                <TextField
                  id="standard-multiline-flexible"
                  label="Text"
                  multiline
                  maxRows={6}
                  variant="standard"
                  defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                />
              </Box>
              <div className="w-full">
                <Button>Submit</Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductShow;
