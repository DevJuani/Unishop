import React, { Fragment } from 'react';
import {products} from './../../data/products';
import ItemList from './ItemList';
    const ItemListContainer = (props) => {
        const [productos, setProducts] = React.useState([]);
        const Promise = () =>{
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(products);
                }, 2000)
            })
        }
        React.useEffect(() => {
            Promise().then((products) => {
                setProducts(productos);
                console.log(products);
            })
        },);
        if (products.length === 0) {
            return <div>Cargando...</div>
        } else {
            return (
                <Fragment>
                    <p>{props.greeting}</p>
                    <ItemList products={products}/>
                </Fragment>
            )
        }
    }
export default ItemListContainer;