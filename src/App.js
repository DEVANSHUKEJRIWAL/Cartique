import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from './pages/Home'
import Product from './pages/Product'
import { SnackbarProvider } from "notistack";
import { Slide } from "@mui/material";

const App = () => {
  return (
    <>
      <Router>
        <SnackbarProvider
          TransitionComponent={Slide}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/products/:id" element={<Product/>}/>
            <Route exact path="/cart" element={<Cart />} />
          </Routes>
        </SnackbarProvider>
      </Router>
    </>
  );
};

export default App;
