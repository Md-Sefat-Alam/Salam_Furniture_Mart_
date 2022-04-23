import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import ContentHeader from "../../../shared/ContentHeader/ContentHeader";
import useAuth from "../../../../hooks/useAuth";
import { Link } from "react-router-dom";

const MyOrders = () => {
  const { setError, setMessage, user } = useAuth();
  const [myOrderData, setMyOrderData] = useState([]);
  const [forceUpdate, setForceUpdate] = useState(1);
  useEffect(() => {
    fetch(`http://localhost:5000/my-orders/${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyOrderData(data))
      .catch((error) => setError("Failed to Database Connection Try again"));
  }, [forceUpdate]);

  const handleDelete = (_id) => {
    if (window.confirm("Confirmation Click Ok to Delete")) {
      axios
        .delete(
          `https://action-camera-engin.herokuapp.com/myorders-remove-one/${_id}`
        )
        .then((res) => {
          if (res.status === 200) {
            setForceUpdate(forceUpdate + 1);
            setMessage("Delete Successfull");
          }
        })
        .catch((error) => setError("Database connection problem"));
    }
  };
  return (
    <div>
      <ContentHeader
        hText={"My Orders"}
        dText="View all orders and you can cancle"
      />
      <div style={{ minHeight: "70vh" }} className="w-full py-5">
        <div>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead sx={{ bgcolor: "rgb(229 231 235)" }}>
                <TableRow>
                  <TableCell className="uppercase ">Product Id</TableCell>
                  <TableCell className="uppercase ">Product Name</TableCell>
                  <TableCell className="uppercase ">Product Img</TableCell>
                  <TableCell className="uppercase" align="right">
                    Status
                  </TableCell>
                  <TableCell className="uppercase" align="right">
                    Order Date
                  </TableCell>
                  <TableCell className="uppercase" align="right">
                    Price
                  </TableCell>
                  <TableCell className="uppercase" align="right">
                    Pay Status
                  </TableCell>
                  <TableCell className="uppercase" align="right">
                    Payment
                  </TableCell>
                  <TableCell className="uppercase" align="right">
                    Cancle
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {myOrderData.count > 0 ? (
                  myOrderData.myOrders.map((row) => {
                    const {
                      pId,
                      pName,
                      status,
                      price,
                      imgLink,
                      payStatus,
                      reqDate,
                      reqTime,
                    } = row;
                    return (
                      <TableRow
                        key={pId}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {pId}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {pName}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          <img width={"50px"} src={imgLink} alt="" />
                        </TableCell>
                        <TableCell className="uppercase" align="right">
                          {status}
                        </TableCell>
                        <TableCell className="uppercase" align="right">
                          <p className="text-sm">{reqDate}</p>
                          <p className="text-sm">{reqTime}</p>
                        </TableCell>
                        <TableCell className="uppercase" align="right">
                          {price} $
                        </TableCell>
                        <TableCell className="uppercase" align="right">
                          {payStatus}
                        </TableCell>
                        <TableCell className="uppercase" align="right">
                          <Link
                            className="underline"
                            to={`/dashboard/pay/${pId}`}
                          >
                            Pay Now
                          </Link>
                        </TableCell>
                        <TableCell align="right">
                          <IconButton
                            onClick={() => handleDelete(pId)}
                            aria-label="delete"
                            size="small"
                          >
                            <DeleteIcon
                              className="text-red-400 font-bold text-2xl"
                              fontSize="20px"
                            />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    );
                  })
                ) : (
                  <p className="text-center">You have no orders</p>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
