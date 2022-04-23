import {
  Box,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";
import ContentHeader from "../../../shared/ContentHeader/ContentHeader";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

const AddProduct = () => {
  const [typeLoading, setTypeLoading] = useState(false);
  const [values, setValues] = useState({
    pType: "",
    pName: "",
    pId: "",
    pPrice: 0,
    imgLink: "",
    pDescription: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  useEffect(() => {
    if (values.pType) {
      setTypeLoading(true);
      axios
        .get(
          `https://salam-furniture-mart.herokuapp.com/product-count/${values.pType}`
        )
        .then((res) => {
          if (res.status === 200) {
            const { productCount } = res.data;
            const id = `${values.pType}${1000 + productCount + 1}`;
            setValues({
              ...values,
              ["pId"]: id,
            });
          }
        })
        .catch((error) => {})
        .finally(() => setTypeLoading(false));
    }
  }, [values.pType]);
  const handleProductAdd = (e) => {
    e.preventDefault();
    if (values.pType) {
      axios
        .post("https://salam-furniture-mart.herokuapp.com/product", {
          ...values,
          postDate: new Date().toLocaleDateString(),
          postTime: new Date().toLocaleTimeString(),
        })
        .then((res) => {
          if (res.status === 200) {
            setValues({
              pType: "",
              pName: "",
              pId: "",
              pPrice: 0,
              imgLink: "",
              pDescription: "",
            });
            window.alert("Added an product");
            e.target.reset();
          }
        })
        .catch((e) => {});
    }
  };

  return (
    <div>
      <div className="flex justify-center absolute">
        {typeLoading && <CircularProgress />}
      </div>
      <ContentHeader
        hText={"Add an Exciting Product"}
        dText="Please all text field fill by current value"
      />
      <div style={{ margin: "0px auto" }} className="">
        <form
          onSubmit={handleProductAdd}
          style={{ maxWidth: "400px" }}
          className=""
        >
          <div className="py-2 text-gray-400">
            <Box sx={{ minWidth: "100%" }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={values.pType}
                  required
                  label="Age"
                  onChange={handleChange("pType")}
                >
                  <MenuItem value={"office"}>Office</MenuItem>
                  <MenuItem value={"sofa"}>Sofa</MenuItem>
                  <MenuItem value={"bed"}>Bed</MenuItem>
                  <MenuItem value={"dresingTable"}>Dressing Table</MenuItem>
                  <MenuItem value={"readingTable"}>Reading Table</MenuItem>
                  <MenuItem value={"executiveTable"}>Executive Table</MenuItem>
                  <MenuItem value={"door"}>Door</MenuItem>
                  <MenuItem value={"kitchen"}>Kitchen</MenuItem>
                  <MenuItem value={"centerTable"}>Center Table</MenuItem>
                  <MenuItem value={"divan"}>Divan</MenuItem>
                  <MenuItem value={"tvCabinet"}>TV Cabinet</MenuItem>
                  <MenuItem value={"diningChair"}>Dining Chair</MenuItem>
                  <MenuItem value={"wardrobe"}>Wardrobe</MenuItem>
                  <MenuItem value={"openSelves"}>Open Shelves</MenuItem>
                  <MenuItem value={"dinnerWagons"}>Dinner Wagons</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          {/* <div className="py-2 text-gray-400">
            <span>Product id: </span>{" "}
            <span className="font-bold">Bed100001</span>
          </div> */}
          <div className="py-2">
            <TextField
              id="standard-name"
              className="w-full"
              sx={{ width: "100%" }}
              InputProps={{
                readOnly: true,
              }}
              required
              label="Product Id"
              value={values.pId}
              variant="standard"
            />
          </div>
          <div className="py-2">
            <TextField
              id="standard-name"
              className="w-full"
              sx={{ width: "100%" }}
              required
              label="Product Name"
              onChange={handleChange("pName")}
              variant="standard"
            />
          </div>
          <div className="py-2">
            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
              <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                <InputLabel htmlFor="standard-adornment-amount">
                  Amount
                </InputLabel>
                <Input
                  id="standard-adornment-amount"
                  onChange={handleChange("pPrice")}
                  type="number"
                  required
                  startAdornment={
                    <InputAdornment position="start">$</InputAdornment>
                  }
                />
              </FormControl>
            </Box>
          </div>
          <div className="py-2">
            <TextField
              id="standard-name"
              className="w-full"
              sx={{ width: "100%" }}
              label="Image Link"
              required
              type={"url"}
              onChange={handleChange("imgLink")}
              variant="standard"
            />
          </div>
          <Button type="submit" variant="outlined">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
