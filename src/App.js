import React from "react";
import Navbar from "./components/Header/Navbar";
import ItemListContainer from "./components/Header/ItemListContainer";
import ItemList from "./components/Header/ItemList";
import ItemDetailContainer from "../src/components/Item/ItemDetailContainer";
function App() {
  return (
    <>
      <div className="App">
        <Navbar />
      </div>
      <div className="container">
        <ItemListContainer/>
      </div>
      <div>
        <ItemList />
      </div>
      <div>
        <ItemDetailContainer />
      </div>
    </>
  );
}

export default App;
