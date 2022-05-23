import React from 'react'; 
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
export default function Navbar (){
    return (
        <header className='header'>
            <nav class="navbar navbar-expand-lg" >
                <div class="container-fluid">
                    <a href='/Home'><img className='logo' src = "images/unicorniologo.png" alt = 'logo'/></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item" className='navItem'>
                                <a className='liLink' href="/Home">Inicio</a>
                            </li>
                            <li class="nav-item" className='navItem'>
                                <a className='liLink' href="/Productos">Productos</a>
                            </li>
                            <li className='cartWidget'>
                                <CartWidget/>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}