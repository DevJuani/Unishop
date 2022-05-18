import Item from './Item';
import { products } from '../../data/products';
const ItemList = ({products}) => {
    return (
        <div className="row">
            {products?.map(product => (
                <Item key={product.id} product={product} />
            ))}
        </div>
    );
}
export default ItemList;