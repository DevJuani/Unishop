import ItemCount from "./ItemCount";
export default function Item({ item }) {
    return (
        <div className='item'>
            <img src={item.image} alt={item.name} />
            <div className='item-info'>
                <h3>{item.name}</h3>
                <p>{item.price}</p>
                <button>Agregar al carrito</button>
                <ItemCount stock={item.stock} initial={0} onAdd={() => {}} />
            </div>
        </div>
    );
}

