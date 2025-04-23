import React, { useContext } from "react"
import { ShoppingCartContext } from "../../context"
import { PlusIcon } from "@heroicons/react/24/outline"

function Card({ item }) {
  const { setCartItems, formatPrice } = useContext(ShoppingCartContext)
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
                <h3>Cantidad: {item.quantity}</h3>
                <h2>{formatPrice(item.price)}</h2>
            </div>
        </div>
    </div>
  )
}

export default Card