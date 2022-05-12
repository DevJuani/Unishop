import {products} from './../../data/products';
import Item from './Item';
export default function ItemList(){
    return (
        <div className="container">
            {products.map(product => (
                    <div key={product.id}>
                        <Item product={product} key = {product.id} />
                </div>
                )
            )}
        </div>
    )
}