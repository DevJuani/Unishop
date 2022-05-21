import ItemListContainer from "../../components/Header/ItemListContainer";
import ItemDetailContainer from "../../components/Item/ItemDetailContainer";
export default function ProductList(){
    return(
        <div>
            <h1>Product List</h1>
            <ItemListContainer/>
            <ItemDetailContainer/>
        </div>
    )
}