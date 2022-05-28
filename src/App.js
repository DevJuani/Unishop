import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import ItemDetail from "./components/Item/ItemDetail";
import Cart from "./view/Cart/Cart";
import Home from "./view/Home/Home";
import ProductList from "./view/ProductList/ProductList";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
      </div>
      <BrowserRouter>
        <Routes>
          <Route exact path ='/' element={<Home />} />
          <Route exct path="/Productos" element={<ProductList />} />
          <Route exact path="/Productos/:id" element={<ItemDetail />} />
          <Route exact path="/Carrito" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
