import { useState, useEffect, useContext } from "react"
import Card from "../../components/Card"
import Layout from "../../components/Layout"
import ProductDetail from "../../components/ProductDetail"
import MyCart from "../../components/MyCart"
import { ShoppingCartContext } from "../../context"

function Home(){
    const { items, isCartOpen } = useContext(ShoppingCartContext)
    const [searchValue, setSearchValue] = useState('')
    const [filteredItems, setFilteredItems] = useState([])

    useEffect(() => {
        if (items) {
            const filtered = items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()) || item.category.toLowerCase().includes(searchValue.toLowerCase()))
            setFilteredItems(filtered)
        }
    }
    , [searchValue, items])

    return(
        <Layout>
            <div className="min-h-[calc(100svh-100px)] min-w-[976px] flex flex-col gap-4 pt-12">
                <input type="text" placeholder="Buscar producto" className="w-full px-4 py-2 rounded-full bg-transparent border-2 text-white border-white mb-4" onChange={(e) => setSearchValue(e.target.value)} />
                { items && <ProductDetail product={items[0]}/>}
                    {
                        filteredItems.length > 0 ? 
                        <div className="grid grid-cols-4 gap-x-4 gap-y-20 py-20 bg-black px-4">
                            {filteredItems.map((item) => (
                                <Card key={item.id} item={item} />
                            ))}
                        </div>
                        :
                        <div className="w-full flex flex-col gap-4 items-center justify-center text-white">
                            <h1 className="text-4xl font-bold mb-4">No hay resultados para tu busqueda</h1>
                            <h3>Intenta buscar otro producto</h3>
                        </div>
                    }
            </div>
        </Layout>
    );
}

export { Home }