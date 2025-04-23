import Layout from "../../components/Layout";

function SuccessfulCheckout(){
    return(
        <Layout>
            <div className="flex flex-col items-center justify-center gap-4 text-white">
                <h1 className="text-4xl font-bold mb-4">¡Gracias por tu compra!</h1>
                <h2 className="text-2xl">Tu pedido ha sido procesado con éxito.</h2>
                <p className="text-lg">Podrás encontrar todos los detalles de tu pedido en la página My orders</p>
            </div>
        </Layout>
    );
}

export { SuccessfulCheckout };