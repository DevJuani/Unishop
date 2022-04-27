import logounicornio from '../images/unicorniologo.png';
export default function Navbar (){
    return (
        <header className='header'>
            <nav>
                <div>
                    <img className='logo' src = {logounicornio} alt = 'logo'/>
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