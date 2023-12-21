
import { TbPhoneCall } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import useAuth from "../Hooks.jsx/useAuth";
import logo from '../../../assets/logo/logo.png';


const Navbar = () => {
    const { user, UserLogout } = useAuth();

    const hangellogout = () => {
        UserLogout()
            .then(res => {
                console.log(res.user)
            }).catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            <div className="navbar font-medium  text-[#999] px-14 h-[60px] bg-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <NavLink to="/"> <li><a>Home</a></li></NavLink>
                            <NavLink to="/shop"> <li><a>Shop</a></li></NavLink>

                            <NavLink to="/cart"> <li><a>My Cart</a></li></NavLink>
                            <NavLink to="/daseboard/task"> <li><a>Daseboard</a></li></NavLink>
                            {
                                user ? <button onClick={hangellogout}><li><a>logout</a></li></button> : <NavLink to="/login"><li><a>Login</a></li></NavLink>
                            }

                        </ul>
                    </div>
                    <img src={logo} className="w-24 h-12 rounded-full" alt="" />
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <NavLink to="/"> <li><a>Home</a></li></NavLink>
                            <NavLink to="/shop"> <li><a>Shop</a></li></NavLink>

                            <NavLink to="/cart"> <li><a>My Cart</a></li></NavLink>
                            <NavLink to="/daseboard/task"> <li><a>Daseboard</a></li></NavLink>

                        </ul>
                    </div>

                </div>
                <div className="navbar-end ">

                    <div className="hidden lg:block">
                        {
                            user ? <button className="btn btn-sm " onClick={hangellogout}><a>Logout</a></button > : <NavLink to="/login"><button className="btn btn-sm"> <a>Login</a></button></NavLink>
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;