import React from "react";

const CartContext = React.createContext();
const {Provider} = CartContext;

const CartProvider = ({children}) => {
    const [cart, setCart] = React.useState([]);

    //addToCart
    const addToCart = (item) => {
        setCart([...cart, item]);
        console.log(cart);
    }

    //removeFromCart
    const removeFromCart = (product) => {

    }

    //clearCart
    const clearCart = () => {
        setCart([]);
    }

    //isInCart
    const isInCart = (id) => {
        
    }

    return (
        <Provider value={{
            cart,
            addToCart,
            removeFromCart,
            clearCart,
            isInCart
        }}>
            {children}
        </Provider>
    )
}

export {CartContext, CartProvider};