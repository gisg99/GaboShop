import { createContext, useState } from "react";

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
    const [count, setCount] = useState(0)
    const [productDetail, setProductDetail] = useState(null)

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            productDetail,
            setProductDetail
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}