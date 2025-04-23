import { useContext, useEffect } from "react";
import { ShoppingCartContext } from "../../context";
import { ShoppingCartIcon, PlusIcon } from "@heroicons/react/24/outline"
import CartItem from "../CartItem";

const MyCart = () => {
    const {
        cartItems,
        setIsCartOpen,
        formatPrice,
    } = useContext(ShoppingCartContext)

    return (
        <aside className={"h-svh w-[360px] flex flex-col items-start fixed bg-white text-black top-0 right-0 z-30 p-8 pt-16 pb-40 mt-[100px] gap-4 overflow-y-auto"}>
            <PlusIcon onClick={() => setIsCartOpen(null)} className="absolute top-4 right-4 h-9 w-9 p-2 rounded-full rotate-45 cursor-pointer hover:bg-black hover:text-white"/>
            <h1 onClick={() => console.log(cartItems)}>Carrito</h1>
            {cartItems.map((item, index) => (
                <CartItem key={index} item={item} />
            ))}
            <div className="flex justify-between w-full items-center">
                <h3>Total:</h3>
                <h2>{formatPrice(cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0))}</h2>
            </div>
        </aside>
    )
}

export default MyCart;