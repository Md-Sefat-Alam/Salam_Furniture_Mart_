import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ paymentData }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [process, setProcess] = useState(false);
  const { pPrice: price, userEmail, orderId } = paymentData;
  const [clientSecret, setClientSecret] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://salam-furniture-mart.herokuapp.com/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);
  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();
    setProcess(true);

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
      //   console.log("[error]", error);
    } else {
      setError("");
      //   console.log("[PaymentMethod]", paymentMethod);
    }
    // payment intent
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: userEmail,
          },
        },
      });
    if (intentError) {
      setError(intentError.message);
      setProcess(false);
    } else {
      setError("");
      axios
        .put(
          `https://salam-furniture-mart.herokuapp.com/my-orders/make-payment/${orderId}`,
          {
            ...paymentIntent,
          }
        )
        .then((res) => {
          if (res.status === 200) {
            navigate("/dashboard/myorders");
          }
        })
        .catch((error) => {});
      setProcess(false);
      alert("Payment Successfully");
    }
  };
  return (
    <form style={{ maxWidth: "400px" }} onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      {!process ? (
        <button
          style={{
            border: "1px solid gray",
            borderRadius: "5px",
            padding: "2px 5px",
            marginTop: "20px",
            marginBottom: "20px",
          }}
          type="submit"
          disabled={!stripe}
        >
          Pay ${paymentData.pPrice}
        </button>
      ) : (
        <CircularProgress size={"2rem"} />
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default CheckoutForm;
