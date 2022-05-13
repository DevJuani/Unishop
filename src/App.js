import Navbar from "./components/Header/Navbar";
import ItemListContainer from "./components/Header/ItemListContainer";
import Item from "./components/Header/Item";
import ItemCount from "./components/Header/ItemCount";
import {products} from './data/products';
import ItemList from "./components/Header/ItemList";
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
    </>
  );
}

export default App;
