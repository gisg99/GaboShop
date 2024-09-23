import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { ShoppingCartContext } from "../../context"

const NavBar = () => {
    const { count } = useContext(ShoppingCartContext)
    const activeStyle = 'bg-white text-black py-1 px-3 rounded-full'
    return(
        <nav className="fixed top-0 z-10 w-svw p-8 flex justify-between items-center bg-gabo text-white">
            <ul className="flex items-center gap-2">
                <li>
                    <h5 className="quantico text-extra font-bold text-3xl">💎GaboShop</h5>
                </li>
                <li>
                    <NavLink
                        to='/'
                        className={({ isActive }) => 
                        {return isActive ? activeStyle : 'py-1 px-3 rounded-full hover:bg-white hover:text-black'}
                        }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/nike'
                        className={({ isActive }) => 
                        {return isActive ? activeStyle : 'py-1 px-3 rounded-full hover:bg-white hover:text-black'}
                    }>
                        Nike
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/adidas'
                        className={({ isActive }) => 
                        {return isActive ? activeStyle : 'py-1 px-3 rounded-full hover:bg-white hover:text-black'}
                    }>
                        Adidas
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/puma'
                        className={({ isActive }) => 
                        {return isActive ? activeStyle : 'py-1 px-3 rounded-full hover:bg-white hover:text-black'}
                    }>
                        Puma
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-1">
                <li className="text-white/60">
                    gisgarci99@gmail.com
                </li>
                <li>
                    <NavLink
                        to='/my-orders'
                        className={({ isActive }) => 
                        {return isActive ? activeStyle : 'py-1 px-3 rounded-full hover:bg-white hover:text-black'}
                    }>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/account'
                        className={({ isActive }) => 
                        {return isActive ? activeStyle : 'py-1 px-3 rounded-full hover:bg-white hover:text-black'}
                    }>
                        Account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/sign-in'
                        className={({ isActive }) => 
                        {return isActive ? activeStyle : 'py-1 px-3 rounded-full hover:bg-white hover:text-black'}
                    }>
                        Sign in
                    </NavLink>
                </li>
                <li>
                    🛒{count}
                </li>
            </ul>
        </nav>
    )
}

export default NavBar