import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ContentHeader from "../../../shared/ContentHeader/ContentHeader";
import CircularProgress from "@mui/material/CircularProgress";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import useAuth from "../../../../hooks/useAuth";
const stripePromise = loadStripe(
  "pk_test_51JvxRrJrOw8AwYdoeZz0oO67fzKI5fY7nujL6usSSSIOQDVBdfu62MomrJMPOvGKkYADomOCRGQkT4qaNCDcDmL100YsopSpXm"
);

const Pay = () => {
  const { productId, orderId } = useParams();
  const [product, setProduct] = useState({});
  const [orderDetails, setOrderDetails] = useState({});
  const { user } = useAuth();

  useEffect(() => {
    axios
      .get(`https://salam-furniture-mart.herokuapp.com/product/${productId}`)
      .then((res) => {
        if (res.status === 200) {
          setProduct(res.data);
        }
      })
      .catch((error) => {});
  }, [productId]);
  useEffect(() => {
    axios
      .get(
        `https://salam-furniture-mart.herokuapp.com/my-orders/get/${orderId}`
      )
      .then((res) => {
        if (res.status === 200) {
          setOrderDetails(res.data);
        }
      })
      .catch((error) => {});
  }, [orderId]);

  return (
    <div className="">
      {product?.pName && orderDetails.price ? (
        <>
          <ContentHeader
            hText={`Pay for ${product.pName} -- ID: ${product.pId} -- Price: $${product.pPrice}`}
            dText="Your product delivery process will start after pay"
          />
          <div>
            <Elements stripe={stripePromise}>
              <CheckoutForm
                paymentData={{
                  pId: product.pId,
                  pName: product.pName,
                  userEmail: orderDetails.email,
                  pPrice: product.pPrice,
                  orderId: orderId,
                }}
              />
            </Elements>
          </div>
        </>
      ) : (
        <div
          style={{ minHeight: "50vh" }}
          className="flex justify-center items-center"
        >
          <CircularProgress></CircularProgress>
        </div>
      )}
    </div>
  );
};

export default Pay;
