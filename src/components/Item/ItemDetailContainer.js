import React, { useEffect } from 'react';
import {products} from './../../data/products';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = ({title, productid}) => {
    let itemID = 3;

    const [selected, setSelected] = React.useState({});

    const getItem = () => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products.find((product) => product.id === itemID));
            }, 4000);
        });
        promesa.then(product => {
            setSelected(product);
        });
    };
    useEffect(()=>{
        getItem()},[products.id])
    return (        
        <div className="row">
            <ItemDetail product={selected} />
        </div>
    );
}

export default ItemDetailContainer;
