import React, { useContext } from "react";
import Layout from "../../components/Layout";
import OrderDetail from "../../components/OrderDetail";
import { ShoppingCartContext } from "../../context";
import OrderSummary from "../../components/OrderSummary";

function MyOrders(){
    const {
        orders,
        formatPrice
    } = useContext(ShoppingCartContext);
    const [selectedOrder, setSelectedOrder] = React.useState(null);

    return(
        <Layout>
            <div className="flex flex-col gap-4 pt-12">
                {orders.map((order, index) => (
                    <OrderSummary setSelectedOrder={setSelectedOrder} key={index} order={order} />
                ))}
            </div>
            {selectedOrder && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex items-center justify-center z-50">
                    <OrderDetail closeModal={() => setSelectedOrder(null)} order={selectedOrder} />
                </div>
            )}
        </Layout>
    );
}

export { MyOrders };