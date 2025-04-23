import { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
    const [productDetail, setProductDetail] = useState(null)
    const [cartItems, setCartItems] = useState([])
    const [isCartOpen, setIsCartOpen] = useState(false)

    const addItemToCart = (item) => {
        if(cartItems.some(cartItem => cartItem.id === item.id)) {
            setCartItems((prevItems) => prevItems.map(cartItem => {
                if (cartItem.id === item.id) {
                    return {...cartItem, quantity: cartItem.quantity + 1}
                }
                return cartItem
            }))
            return
        }
        setCartItems((prevItems) => [...prevItems, {...item, quantity: 1}])
    }

    const formatPrice = (price) => {
        return price.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        })
    }

    useEffect(() => {
        console.log("NOSIRVETUMAMADA",isCartOpen);
    }, [isCartOpen]);

    return (
        <ShoppingCartContext.Provider value={{
            cartItems,
            addItemToCart,
            productDetail,
            setProductDetail,
            isCartOpen,
            setIsCartOpen,
            formatPrice,
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}