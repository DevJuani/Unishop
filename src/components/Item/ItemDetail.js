
export default function ItemDetail ({product}) {
    return (
        <div>
            <img src={product.image} alt={product.name} />
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>{product.price}</p>
        </div>
    )
}