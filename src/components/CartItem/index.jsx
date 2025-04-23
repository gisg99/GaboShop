import React, { useContext } from "react"
import { ShoppingCartContext } from "../../context"
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline"

function Card({ item }) {
  const { addItemToCart, removeCartItem, formatPrice } = useContext(ShoppingCartContext)
  const {
    setProductDetail
  } = useContext(ShoppingCartContext)
  
  return (
    <div className="flex items-center gap-2 w-full p-2 rounded-xl border border-[#D8D8D8] shadow-md">
        <img src={item.image} alt={item.title} className="w-12 h-12 object-contain rounded-xs" />
        <div className="flex flex-col w-full">
            <h3>{item.title}</h3>
            <h5 className="text-[12px] text-[#A7A7A7]">{item.category}</h5>
            <div className="flex justify-between w-full items-center">
                <div className="flex gap-2 items-center">
                    <h3>Cantidad:</h3>
                    <MinusIcon onClick={() => removeCartItem(item)} className="h-6 w-6 p-1 rounded-full cursor-pointer bg-black text-white"/>
                    <h3>{item.quantity}</h3>
                    <PlusIcon onClick={() => addItemToCart(item)} className="h-6 w-6 p-1 rounded-full cursor-pointer bg-black text-white"/>
                </div>
                <h2>{formatPrice(item.price)}</h2>
            </div>
        </div>
    </div>
  )
}

export default Card