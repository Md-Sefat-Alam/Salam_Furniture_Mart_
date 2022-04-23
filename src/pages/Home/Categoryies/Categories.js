import { Container, Paper } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ContentHeader from "../../shared/ContentHeader/ContentHeader";
import ChairIcon from "@mui/icons-material/Chair";
import TableBarIcon from "@mui/icons-material/TableBar";
import BedIcon from "@mui/icons-material/Bed";
import CategoryCart from "../../shared/CategoryCart/CategoryCart";
import TableRestaurantIcon from "@mui/icons-material/TableRestaurant";
import SensorDoorIcon from "@mui/icons-material/SensorDoor";
import CountertopsIcon from "@mui/icons-material/Countertops";
import KitchenIcon from "@mui/icons-material/Kitchen";
import ChairAltIcon from "@mui/icons-material/ChairAlt";

const Categories = () => {
  return (
    <div className="py-24" style={{ backgroundColor: "#E2DEA9" }}>
      <ContentHeader
        hText={"All popular categories"}
        dText="Salam Furniture All catagories here"
      />
      <Container maxWidth="xl">
        <div>
          <Box
            className="flex justify-center"
            sx={{
              display: "flex",
              flexWrap: "wrap",
              "& > :not(style)": {
                m: 1,
                width: 128,
                height: 128,
              },
            }}
          >
            <CategoryCart
              path="/products/sofa"
              cName={"Sofa"}
              icon={<ChairIcon fontSize="large" />}
            />
            <CategoryCart
              path="/products/centerTable"
              cName={"Center Table"}
              icon={<TableBarIcon fontSize="large" />}
            />
            <CategoryCart
              path="/products/divan"
              cName={"Divan"}
              icon={<ChairIcon fontSize="large" />}
            />
            <CategoryCart
              path="/products/tvCabinet"
              cName={"TV Cabinet"}
              icon={<ChairIcon fontSize="large" />}
            />
            <CategoryCart
              path="/products/openSelves"
              cName={"Open Shelves"}
              icon={<KitchenIcon fontSize="large" />}
            />
            <CategoryCart
              path="/products/diningChair"
              cName={"Dining chair"}
              icon={<ChairIcon fontSize="large" />}
            />
            <CategoryCart
              path="/products/dinnerWagons"
              cName={"Dinner Wagon"}
              icon={<TableBarIcon fontSize="large" />}
            />
            <CategoryCart
              path="/products/bed"
              cName={"Bed"}
              icon={<BedIcon fontSize="large" />}
            />
            <CategoryCart
              path="/products/dresingTable"
              cName={"Dressing Table"}
              icon={<TableBarIcon fontSize="large" />}
            />
            <CategoryCart
              path="/products/wardrobe"
              cName={"Wardrobe"}
              icon={<BedIcon fontSize="large" />}
            />
            <CategoryCart
              path="/products/readingTable"
              cName={"Reading Table"}
              icon={<TableRestaurantIcon fontSize="large" />}
            />
            <CategoryCart
              path="/products/door"
              cName={"Door"}
              icon={<SensorDoorIcon fontSize="large" />}
            />
            <CategoryCart
              path="/products/kitchen"
              cName={"Kitchen"}
              icon={<CountertopsIcon fontSize="large" />}
            />
            <CategoryCart
              path="/products/office"
              cName={"Office"}
              icon={<ChairAltIcon fontSize="large" />}
            />
            <CategoryCart
              path="/products/executiveTable"
              cName={"Executive Table"}
              icon={<TableRestaurantIcon fontSize="large" />}
            />
          </Box>
        </div>
      </Container>
    </div>
  );
};

export default Categories;
