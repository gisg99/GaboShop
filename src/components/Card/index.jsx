import { useContext } from "react"
import { ShoppingCartContext } from "../../context"
import { PlusIcon } from "@heroicons/react/24/outline"

function Card({ item }) {
  const { count, setCount } = useContext(ShoppingCartContext)
  const {
    setProductDetail
  } = useContext(ShoppingCartContext)
  
  return (
    <div onClick={() => setProductDetail(item)} className="w-56 h-64 overflow-hidden transition-all ease-out duration-200 hover:scale-110 hover:z-20">
        <figure className="relative mb-2 w-full h-4/5 rounded-2xl overflow-hidden">
            <span className="absolute top-2 left-2 px-4 py-1 text-sm bg-blue-900/50 border-2 border-black rounded-full">{item.category}</span>
            <img className="w-full h-full object-cover" src={item.image} alt="Nike Mercurial Zoom Superfly 7 TF"/>
            <div onClick={() => setCount(count + 1)} className="absolute top-2 right-2 h-10 w-10 flex justify-center items-center bg-[#2b0c68] border-2 border-black rounded-full transition-all ease-out duration-500 cursor-pointer hover:bg-[#6200ca] hover:rotate-[90deg]">
                <PlusIcon className="h-4 w-4"/>
            </div>
        </figure>
        <p className="w-full flex justify-between items-center px-2">
            <span>{item.title}</span>
            <span className="font-semibold text-3xl">${item.price}</span>
        </p>
    </div>
  )
}

export default Card