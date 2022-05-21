import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import ItemListContainer from "./components/Header/ItemListContainer";
import ItemList from "./components/Header/ItemList";
import ItemDetailContainer from "../src/components/Item/ItemDetailContainer";
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
          <Route exact path = '/' element={<Home />} />
          <Route exct path="/Productos" element={<ProductList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
