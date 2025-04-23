import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
    const [productDetail, setProductDetail] = useState(null)
    const [cartItems, setCartItems] = useState([])
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [orders, setOrders] = useState(localStorage.getItem('orders') ? JSON.parse(localStorage.getItem('orders')) : [])
    const [items, setItems] = useState(null)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((data) => setItems(data))
    }, [])

    const formatPrice = (price) => {
        return price.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        })
    }

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

    const removeCartItem = (item) => {
        if (cartItems.some(cartItem => cartItem.id === item.id)) {
            setCartItems((prevItems) => prevItems.map(cartItem => {
                if (cartItem.id === item.id) {
                    return {...cartItem, quantity: cartItem.quantity - 1}
                }
                return cartItem
            }).filter(cartItem => cartItem.quantity > 0))
        }
    }

    const generateOrder = () => {
        const order = {
            date: new Date(),
            items: cartItems.map(item => ({
                id: item.id,
                title: item.title,
                price: item.price,
                quantity: item.quantity,
            })),
            total: cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
        }

        orders.push(order);
        localStorage.setItem('orders', JSON.stringify(orders));
        setCartItems([]);
    }

    return (
        <ShoppingCartContext.Provider value={{
            items,
            setItems,
            cartItems,
            addItemToCart,
            removeCartItem,
            productDetail,
            setProductDetail,
            isCartOpen,
            setIsCartOpen,
            formatPrice,
            generateOrder,
            orders,
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}