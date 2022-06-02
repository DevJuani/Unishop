import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { cartContext } from "../CartContext/CartContext"


export default function CartIcon() {
    const { cart } = React.useContext(cartContext)
    return (
        <div className="divCartWidget" >
            <FontAwesomeIcon className= 'cartWidget'icon={faShoppingCart} />
            <span className="numeritoCart">{cart.length}</span>
        </div>
    )
}