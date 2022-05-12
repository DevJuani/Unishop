export default function Item ({product}){
    return(
        <div class="card" >
            <img src="{product.image}" class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{product.name}</h5>
                <p class="card-text">${product.price}, stock:{product.stock}</p>
                <a href="#" >Ver mas</a>
            </div>
        </div>
    )
}
