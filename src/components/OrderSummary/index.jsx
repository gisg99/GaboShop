import React, { useContext } from "react";
import { ShoppingCartContext } from "../../context";

export default function OrderSummary({ order, setSelectedOrder }) {
    const { formatPrice } = useContext(ShoppingCartContext);

    const formatDate = (date) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
        return new Date(date).toLocaleDateString('es-ES', options);
    }

    return (
        <div onClick={() => setSelectedOrder(order)} className="flex flex-col p-4 border-2 border-white rounded-xl gap-4 items-center justify-center text-white cursor-pointer">
            <h3>Fecha: {formatDate(order.date)}</h3>
            <h3>Total: {formatPrice(order.total)}</h3>
        </div>
    );
}