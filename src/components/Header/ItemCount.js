import React from 'react';
export default function ItemCount({stock, initial, onAdd}) {
    const [count, setCount] = React.useState(initial);
    const handleAdd = () => {
        if(count <= stock) {
        setCount(count + 1);
        onAdd(count + 1);
        }
    }
    const handleRemove = () => {
        if(count > 0) {
        setCount(count - 1);
        onAdd(count - 1);
        }
    }
    return (
        <div className='itemCount'>
            <div className='itemCount-container'>
                <div className='itemCount-container-stock'>
                    <p>{count}</p>
                </div>
                <div className='itemCount-container-buttons'>
                    <button className='itemCount-container-buttons-add' onClick={handleAdd}>+</button>
                    <button className='itemCount-container-buttons-remove' onClick={handleRemove}>-</button>
                </div>
            </div>
        </div>
    )
}