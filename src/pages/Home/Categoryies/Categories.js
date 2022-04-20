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
              cName={"Sofa"}
              icon={<ChairIcon fontSize="large" />}
            />
            <CategoryCart
              cName={"Center Table"}
              icon={<TableBarIcon fontSize="large" />}
            />
            <CategoryCart
              cName={"Divan"}
              icon={<ChairIcon fontSize="large" />}
            />
            <CategoryCart
              cName={"TV Cabinet"}
              icon={<ChairIcon fontSize="large" />}
            />
            <CategoryCart
              cName={"Open Shelves"}
              icon={<KitchenIcon fontSize="large" />}
            />
            <CategoryCart
              cName={"Dining chair"}
              icon={<ChairIcon fontSize="large" />}
            />
            <CategoryCart
              cName={"Dinner Wagon"}
              icon={<TableBarIcon fontSize="large" />}
            />
            <CategoryCart cName={"Bed"} icon={<BedIcon fontSize="large" />} />
            <CategoryCart
              cName={"Dressing Table"}
              icon={<TableBarIcon fontSize="large" />}
            />
            <CategoryCart
              cName={"Wardrobe"}
              icon={<BedIcon fontSize="large" />}
            />
            <CategoryCart
              cName={"Wardrobe"}
              icon={<BedIcon fontSize="large" />}
            />
            <CategoryCart
              cName={"Reading Table"}
              icon={<TableRestaurantIcon fontSize="large" />}
            />
            <CategoryCart
              cName={"Door"}
              icon={<SensorDoorIcon fontSize="large" />}
            />
            <CategoryCart
              cName={"Kitchen"}
              icon={<CountertopsIcon fontSize="large" />}
            />
            <CategoryCart
              cName={"Office"}
              icon={<ChairAltIcon fontSize="large" />}
            />
            <CategoryCart
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
