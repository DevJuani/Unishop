import axios from "axios";
export default function ItemDetail ({products}) {
    axios.get('https://dog.ceo/api/breeds/image/random')
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
    return (
        <div className="row">
            {products?.map(product => (
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">{product.description}</p>
                            <p className="card-text">{product.price}</p>
                            <p className="card-text">{product.stock}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}