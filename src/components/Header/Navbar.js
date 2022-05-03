import React from 'react'; 
import CartWidget from "./CartWidget";
import ItemListContainer from './ItemListContainer';
export default function Navbar (){
    return (
        <header className='header'>
            <nav class="navbar navbar-expand-lg" >
                <div class="container-fluid">
                    <img className='logo' src = "images/unicorniologo.png" alt = 'logo'/>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item" className='navItem'>
                                <a className='liLink' href="#">Inicio</a>
                            </li>
                            <li class="nav-item" className='navItem'>
                                <a className='liLink' href="#">Productos</a>
                            </li>
                            <li className='cartWidget'>
                                <CartWidget/>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <ItemListContainer greeting='Bienvenido a Unishop'/>
        </header>
    );
}