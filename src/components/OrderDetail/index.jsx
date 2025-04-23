import React, { useContext } from "react";
import { ShoppingCartContext } from "../../context";

export default function OrderDetail({ order, closeModal }) {
    const { formatPrice } = useContext(ShoppingCartContext);

    const formatDate = (date) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
        return new Date(date).toLocaleDateString('es-ES', options);
    }

    return (
        <div className="flex flex-col gap-4 items-center justify-center text-white">
        <h1 className="text-4xl font-bold mb-4">Detalles de la orden</h1>
        <div className="flex flex-col gap-4 items-center">
            <h3>Fecha: {formatDate(order.date)}</h3>
            {order.items.map((item, index) => (
                <div key={index} className="flex gap-2 w-full">
                <h3>{item.title} <b>{formatPrice(item.price)}</b> x{item.quantity}</h3>
                </div>
            ))}
            <h3>Total: {formatPrice(order.total)}</h3>
            <button onClick={closeModal} className="px-4 py-2 w-full bg-[#2b0c68] text-white flex gap-2 justify-center rounded-full transition-all ease-out duration-500 cursor-pointer hover:bg-[#6200ca]">Cerrar</button>
        </div>
        </div>
    );
}