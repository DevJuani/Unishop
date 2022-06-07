import React from 'react';
import { NavLink } from 'react-router-dom';

export default function ItemCount({stock, initial, onAdd, seConfirma, onSubmit}) {
    const [count, setCount] = React.useState(initial);
    const handleAdd = () => {
        if(count < stock) {
        setCount(count + 1);
        onAdd(count + 1);
        }
    }
    const handleRemove = () => {
        if(count > initial) {
        setCount(count - 1);
        onAdd(count - 1);
        }
    }

    const agregarAlCarrito = () => {
        if(count <= stock) {
            onAdd(count);
            setCount(initial);
            seConfirma();
        }
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
                <div className='itemCount-container-buttons'>
                    <button className='itemCountButton' onClick={agregarAlCarrito}>Agregar al carrito</button>
                    
                </div> 
            </div>
        </div>
    )
}