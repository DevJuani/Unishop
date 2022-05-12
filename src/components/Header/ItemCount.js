import React from 'react';
export default function ItemCount({stock, initial, onAdd}) {
    const [count, setCount] = React.useState(initial);
    const handleAdd = () => {
        if(count < stock) {
        setCount(count + 1);
        }
    }
    const handleRemove = () => {
        if(count > 0) {
        setCount(count - 1);
        }
    }
    const addToCart = () => {
        setCount(initial); 
        onAdd(count);
    }
    return (
        <div className='itemCount'>
            <div className='itemCount-container'>
                <div className='itemCount-container'>
                    <p className='itemCount-text'>
                        Stock disponible: {stock}
                    </p>
                </div>
                <div className='itemCount-container-buttons'>
                    <p className='itemCountUser'>{count}</p>
                    <button className='itemCountButton' onClick={handleAdd}>+</button>
                    <button className='itemCountButton' onClick={handleRemove}>-</button>
                </div>
                <div>
                    <button className='itemCountButton' onClick={addToCart}>Agregar al carrito</button>
                </div>
            </div>
        </div>
    )
}