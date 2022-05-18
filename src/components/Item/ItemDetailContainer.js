import React from 'react';
import {products} from './../../data/products';
import ItemDetail from './ItemDetail';
    const ItemDetailContainer = (props) => {
        const [productos, setItems] = React.useState([]);
        const [loading, setLoading] = React.useState(true);

        const getProducts = () =>{
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(products);
                }, 4000)
            })
        }
        React.useEffect(() => {
            getProducts().then((products) => {
                setItems(products);
                setLoading(false);
            })
        },);
        return (
            loading? <h1>Cargando Detalles de productos...</h1> :<ItemDetail products={productos}/>
        )
    }
export default ItemDetailContainer;