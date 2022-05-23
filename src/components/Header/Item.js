import { NavLink } from "react-router-dom"
export default function Item ({product}){
    return(
        <div class="card" >
            <img src={product.image} className= 'productImg' class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{product.name}</h5>
                <p class="card-text">${product.price}, stock:{product.stock}</p>
                <NavLink to={`/Productos/${product.id}`} class="btn btn-primary">Ver mas</NavLink>
            </div>
        </div>
    )
}
