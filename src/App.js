import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./pages/shared/Nav/Nav";
import Header from "./pages/shared/Header/Header";
import Home from "./pages/Home/Home/Home";
import TopBar from "./pages/Home/TopBar/TopBar";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Footer from "./pages/shared/Footer/Footer";
import AllProviders from "./contexts/AllProviders";
import ProductShow from "./pages/ProductShow/ProductShow";
import ProductsShow from "./pages/ProductsShow/ProductsShow";
import DashboardHome from "./pages/Dashboard/DashboardHome/DashboardHome";
import useFirebase from "./hooks/useFirebase";
import AddProduct from "./pages/Dashboard/Admin/AddProduct/AddProduct";
import MyOrders from "./pages/Dashboard/User/MyOrders/MyOrders";
import MakeAdmin from "./pages/Dashboard/Admin/MakeAdmin/MakeAdmin";
import ManageOrders from "./pages/Dashboard/Admin/ManageOrders/ManageOrders";
import AddReview from "./pages/Dashboard/User/AddReview/AddReview";
import Pay from "./pages/Dashboard/User/pay/Pay";
import SelectAddTopRatedProduct from "./pages/Dashboard/Admin/SelectAddTopRatedProduct/SelectAddTopRatedProduct";
import PrivateRoute from "./pages/PrivateRoute/PrivateRoute";
import LoadingProgress from "./pages/LoadingProgress/LoadingProgress";
import { useState } from "react";

function App() {
  const { isAdmin, user } = useFirebase();
  const [isLoadingTemp, setIsLoadingTemp] = useState(true);

  return (
    <AllProviders>
      <BrowserRouter>
        <TopBar />
        <Header setIsLoadingTemp={setIsLoadingTemp}></Header>
        <Nav></Nav>
        <LoadingProgress isLoadingTemp={isLoadingTemp}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route
              exact
              path="product/:productId"
              element={
                <PrivateRoute>
                  <ProductShow />
                </PrivateRoute>
              }
            />
            <Route
              exact
              path="products/:productType"
              element={<ProductsShow />}
            />

            <Route
              path="dashboard"
              element={
                <PrivateRoute user={user} isLoadingTemp={isLoadingTemp}>
                  <DashboardHome />
                </PrivateRoute>
              }
            >
              {isAdmin.isAdmin === true ? (
                <>
                  <Route path="addproduct" element={<AddProduct />} />
                  <Route path="manage-orders" element={<ManageOrders />} />
                  <Route path="make-admin" element={<MakeAdmin />} />
                  <Route path="manage-products" element={<AddProduct />} />
                  <Route
                    path="select-home-slider-item"
                    element={<SelectAddTopRatedProduct />}
                  />
                </>
              ) : (
                <>
                  <Route path="myorders" element={<MyOrders />} />
                  <Route path="add-review" element={<AddReview />} />
                  {/* <Route path="add-review/:id" element={<AddReview />} /> */}
                  <Route path="pay/:productId" element={<Pay />} />
                </>
              )}
              <Route path="link2" element={<Home />} />
            </Route>
            <Route exact path="login" element={<Login />} />
            <Route exact path="register" element={<Register />} />
          </Routes>
        </LoadingProgress>
        <Footer />
      </BrowserRouter>
    </AllProviders>
  );
}

export default App;
