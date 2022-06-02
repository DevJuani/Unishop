import { NavLink } from "react-router-dom"
export default function Item ({product}){
    return(
        <NavLink to={`/Productos/${product.id}`}>
        <div class="card" >
            <img src={product.image} className= 'productImg' class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{product.name}</h5>
                <p class="card-text">${product.price}</p>
                Ver mas
            </div>
        </div>
        </NavLink>
    )
}
