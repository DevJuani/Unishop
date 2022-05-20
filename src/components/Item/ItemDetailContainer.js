import React from 'react';
import {products} from './../../data/products';
import ItemDetail from './ItemDetail';


    const ItemDetailContainer = (props) => {
        const [data, setData] = React.useState([]);
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
                setData(products);
                setLoading(false);
            })
        },);
        return (
            loading? <h1>Cargando Detalles de productos...</h1> :<ItemDetail products={data}/>
        )
    }
export default ItemDetailContainer;