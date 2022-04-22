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
import AboutUs from "./pages/AboutUs/AboutUs";
import useFirebase from "./hooks/useFirebase";

function App() {
  const { isAdmin } = useFirebase();
  console.log(isAdmin);
  return (
    <AllProviders>
      <BrowserRouter>
        <TopBar />
        <Header></Header>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route exact path="product/:id" element={<ProductShow />}></Route>
          <Route exact path="products/:type" element={<ProductsShow />}></Route>
          <Route path="dashboard" element={<DashboardHome />}>
            {isAdmin.isAdmin === true && (
              <Route path="link1" element={<AboutUs />}></Route>
            )}
            <Route path="link2" element={<Home />}></Route>
          </Route>
          <Route exact path="login" element={<Login />}></Route>
          <Route exact path="register" element={<Register />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </AllProviders>
  );
}

export default App;
