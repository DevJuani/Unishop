import ItemCount from "./ItemCount";
import React from "react";
export default function ItemListContainer() {
    const [count, setCount] = React.useState(0);
    const onAdd = (count) => {
        setCount(count);
    }
    return (
        <div className="container">
            <ItemCount stock={10} initial={1} onAdd={onAdd} />
        </div>
    )
}