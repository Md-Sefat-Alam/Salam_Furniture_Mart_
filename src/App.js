import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AboutUs from "./pages/AboutUs/AboutUs";
import Nav from "./pages/shared/Nav/Nav";
import Header from "./pages/shared/Header/Header";
import Home from "./pages/Home/Home/Home";
import TopBar from "./pages/Home/TopBar/TopBar";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Footer from "./pages/shared/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Header></Header>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route exact path="/aboutus" element={<AboutUs />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/register" element={<Register />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
