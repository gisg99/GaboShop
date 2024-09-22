import { useState, useEffect } from "react"
import Card from "../../components/Card"
import Layout from "../../components/Layout"

function Home(){
    const [items, setItems] = useState(null)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((data) => setItems(data))
        console.log(items);
        
    }, [])
    return(
        <Layout>
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