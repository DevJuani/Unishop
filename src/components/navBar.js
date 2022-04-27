import logounicornio from '../images/unicorniologo.png';
export default function Navbar (){
    return (
        <header className='header'>
            <nav>
                <div className='divHeader'>
                    <img className='logo' src = {logounicornio} alt = 'logo'/>
                    <h1>Uni-Store</h1>
                </div>
                <ul className='unorderedList'>
                    <li className='itemLista'>
                        <a href = ''>Inicio</a>
                    </li>
                    <li className='itemLista'>
                        <a href = ''>Productos</a>
                    </li>
                    <li className='itemLista'>
                        <a href = ''>Contacto</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}