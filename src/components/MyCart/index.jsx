import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCartContext } from "../../context";
import { ShoppingCartIcon, PlusIcon } from "@heroicons/react/24/outline"
import CartItem from "../CartItem";

const MyCart = () => {
    const {
        cartItems,
        setIsCartOpen,
        formatPrice,
    } = useContext(ShoppingCartContext)
    const navigate = useNavigate()


    const goToCheckout = () => {
        setIsCartOpen(false)
        navigate('/order')
    }

    return (
        <aside className={"h-svh w-[360px] flex flex-col items-start fixed bg-white text-black top-0 right-0 z-30 p-8 pt-16 pb-32 mt-[100px] gap-4 overflow-y-auto"}>
            <div className="flex-1 flex flex-col gap-4 max-h-[calc(100vh-200px)] overflow-y-auto">
                <PlusIcon onClick={() => setIsCartOpen(null)} className="absolute top-4 right-4 h-9 w-9 p-2 rounded-full rotate-45 cursor-pointer hover:bg-black hover:text-white"/>
                <h1 onClick={() => console.log(cartItems)}>Carrito</h1>
                {cartItems.map((item, index) => (
                    <CartItem key={index} item={item} />
                ))}
            </div>
            <div className="flex flex-col w-full gap-2 items-center">
                <div className="flex justify-between w-full items-center">
                    <h3>Total:</h3>
                    <h1 className="text-3xl font-medium">{formatPrice(cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0))}</h1>
                </div>
                {cartItems.length > 0 &&
                    <button onClick={() => goToCheckout()} className="px-4 py-2 w-full bg-[#2b0c68] text-white flex gap-2 justify-center rounded-full transition-all ease-out duration-500 cursor-pointer hover:bg-[#6200ca]">
                        <ShoppingCartIcon className="h-6 w-6 inline-block"/>
                        <span>Ir al Checkout</span>
                    </button>
                }
            </div>
        </aside>
    )
}

export default MyCart;