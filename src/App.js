import Navbar from "./components/Header/Navbar";
import ItemListContainer from "./components/Header/ItemListContainer";
import ItemList from "./components/Header/ItemList";
import ItemDetail from "../src/components/Item/ItemDetail";
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
      <div>
        <ItemDetail />
      </div>
    </>
  );
}

export default App;
