import { useContext } from "react";
import { ShoppingCartContext } from "../../context";
import { ShoppingCartIcon, PlusIcon } from "@heroicons/react/24/outline"

const ProductDetail = () => {
    const { 
        count,
        setCount,
        productDetail,
        setProductDetail
    } = useContext(ShoppingCartContext)

    return (
        productDetail != null && (
            <aside className={"h-svh w-[360px] flex flex-col items-start fixed bg-white text-black top-0 left-0 z-30 p-8 pt-16 pb-40 mt-[100px] gap-4 overflow-y-auto"}>
                <PlusIcon onClick={() => setProductDetail(null)} className="absolute top-4 right-4 h-9 w-9 p-2 rounded-full rotate-45 cursor-pointer hover:bg-black hover:text-white"/>
                <h1>{productDetail.title}</h1>
                <img src={productDetail.image} alt="Imagen del producto"/>
                <p>{productDetail.description}</p>
                <span className="font-semibold text-3xl">${productDetail.price}</span>
                <div onClick={() => setCount(count + 1)} className="px-4 py-2 bg-[#2b0c68] text-white flex gap-2 rounded-full transition-all ease-out duration-500 cursor-pointer hover:bg-[#6200ca]">
                    <ShoppingCartIcon className="h-6 w-6 inline-block"/>
                    <span>Agregar al carrito</span>
                </div>
            </aside>
        )
    )
}

export default ProductDetail;