import React from "react";
import ItemDetailContainer from "../../components/Item/ItemDetailContainer";
import { useParams } from "react-router-dom";
export default function Product(){
    const {id} = useParams();
    return(
        <div>
            <h1>Product</h1>
            <ItemDetailContainer productId={+id}/>
        </div>
    )
}
