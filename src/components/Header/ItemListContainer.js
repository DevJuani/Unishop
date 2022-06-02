import React from 'react';
import {products} from './../../data/products';
import ItemList from './ItemList';
    const ItemListContainer = (props, id) => {
        const [productos, setProducts] = React.useState([]);
        const [loading, setLoading] = React.useState(true);

        const getProducts = () =>{
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(products);
                }, 2000)
            })
        }
        React.useEffect(() => {
            getProducts().then((products) => {
                setProducts(products);
                setLoading(false);
                console.log(products);
            })
        },);
        return (
            loading? <h1>Cargando...</h1> : <ItemList products={productos} />
        )
    }
export default ItemListContainer;