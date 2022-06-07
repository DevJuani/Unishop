import React from 'react';
import { NavLink } from 'react-router-dom';
import ItemCount from '../Header/ItemCount';
import {useParams} from 'react-router-dom';
import { products } from '../../data/products';
import { cartContext } from '../CartContext/CartContext';
import Item from '../Header/Item';


export default function ItemDetail({product}){
    const {addToCart} = React.useContext(cartContext);
    const {id} = useParams();
    
    const [cantidad, setCantidad] = React.useState(1);
    const [confirmar, setConfirmar] = React.useState(false);

    const onAdd = (cant) => {
        setCantidad(cant)
        console.log(cant)
    }
    const seConfirma = () => {
        setConfirmar(true);
    }

    return(
        <div className='itemDetail'>
            <div className='itemDetail__image'>
                <img src={products[id].image} alt={products[id].name}/>
            </div>
            <div className='itemDetail__info'>
                <h1>{products[id].name}</h1>
                <h2>$ {products[id].price}</h2>
                <p>{products[id].description}</p>
                {confirmar === true ? <NavLink to={'/Carrito'}><button type='submit'>Ir al carrito</button></NavLink> :
                <ItemCount stock={products[id].stock} initial={1} onAdd={onAdd} seConfirma={seConfirma} onSubmit={addToCart}/>}
            </div>
        </div>
    )
}