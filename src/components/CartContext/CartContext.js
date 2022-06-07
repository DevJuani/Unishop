import React from "react";

const cartContext = React.createContext();
const {Provider} = cartContext;

const CartProvider = ({children}) => {
    const [cart, setCart] = React.useState([]);

    //addToCart
    const addToCart = ({product}) => {
        setCart([...cart, product]);
    }

    //removeFromCart
    const removeFromCart = (product) => {

    }

    //clearCart
    const clearCart = () => {
        setCart([]);
    }

    //isInCart
    const isInCart = (product) => {
        return cart.find(item => item.id === product.id);
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

export {cartContext, CartProvider};