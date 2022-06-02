import ProductList from "../ProductList/ProductList";

export default function Home() {
    return (
        <div class="container">
    <div class="bienvenida">
        <h1>Bienvenido a la tienda de productos</h1>
        <img src="images/germanusinger.png" alt="unicornio" />
    </div>
    <div class="ofertas">
        <h1>Ofertas</h1>
        <div class="ofertas-container">
            <ProductList />
        </div>
    </div>
</div>
    )}