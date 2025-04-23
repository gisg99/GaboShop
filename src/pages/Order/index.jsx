import React, { useContext } from "react";
import Layout from "../../components/Layout";
import CartItem from "../../components/CartItem";
import { ShoppingCartContext } from "../../context";
import { useNavigate } from "react-router-dom";

function Order(){
    const { 
        cartItems,
        formatPrice,
        generateOrder
     } = useContext(ShoppingCartContext);
    const navigate = useNavigate()

    return(
        <Layout>
            <div className="flex flex-col items-center justify-center gap-4 text-white">
                <h1 className="text-4xl font-bold mb-4">Tu carrito</h1>
                <div className="flex flex-col gap-4 items-center">
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
                        <button onClick={() => {generateOrder(); navigate('/success')}} className="px-4 py-2 w-full bg-[#2b0c68] text-white flex gap-2 justify-center rounded-full transition-all ease-out duration-500 cursor-pointer hover:bg-[#6200ca]">
                            <span>Pagar</span>
                        </button>
                    }
                </div>
            </div>
        </Layout>
    );
}

export { Order };