import ItemCount from '../Header/ItemCount';
import {useParams} from 'react-router-dom';
import { products } from '../../data/products';
export default function ItemDetail(){
    const {id} = useParams();
    return(
        <div className='itemDetail'>
            <div className='itemDetail__image'>
                <img src={products[id].image} alt={products[id].name}/>
            </div>
            <div className='itemDetail__info'>
                <h1>{products[id].name}</h1>
                <h2>$ {products[id].price}</h2>
                <p>{products[id].description}</p>
                <ItemCount stock={products[id].stock} initial={1}/>
            </div>
        </div>
    )
}