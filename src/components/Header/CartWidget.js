import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { CartContext } from "../CartContext/CartContext"


export default function CartIcon() {
    const { cart } = React.useContext(CartContext)
    return (
        <div className="divCartWidget" >
            <FontAwesomeIcon className= 'cartWidget'icon={faShoppingCart} />
            <span className="numeritoCart">{cart.length}</span>
        </div>
    )
}