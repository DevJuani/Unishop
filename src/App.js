import Navbar from "./components/Header/Navbar";
import ItemListContainer from "./components/Header/ItemListContainer";
import Item from "./components/Header/Item";
import ItemCount from "./components/Header/ItemCount";
function App() {
  return (
    <>
      <div className="App">
        <Navbar />
      </div>
      <div className="container">
        <ItemListContainer greeting="Bienvenido a Unishop" />
      </div>
      <div className="container">
        <ItemCount stock={10} initial={0} onAdd={() => {}} />
      </div>
    </>
  );
}

export default App;
