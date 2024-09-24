import { useState, useEffect } from "react"
import Card from "../../components/Card"
import Layout from "../../components/Layout"
import ProductDetail from "../../components/ProductDetail"

function Home(){
    const [items, setItems] = useState(null)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((data) => setItems(data))
    }, [])
    return(
        <Layout>
            { items && <ProductDetail product={items[0]}/>}
            <div className="grid grid-cols-4 gap-x-4 gap-y-20 py-20 bg-black px-4">
                {
                    items && items.map((item) => (
                        <Card key={item.id} item={item} />
                    ))
                }
            </div>
        </Layout>
    );
}

export { Home }