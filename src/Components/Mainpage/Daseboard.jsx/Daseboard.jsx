
import HeaderBannar from '../Global/HeaderBannar';

import { Link, Outlet } from 'react-router-dom';
import { FaUser  } from 'react-icons/fa';
import { MdLocalPostOffice, MdOutlineDragHandle } from "react-icons/md";


import { IoIosLogOut} from "react-icons/io";
import { IoCreate } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import useAuth from '../Hooks.jsx/useAuth';

const Daseboard = () => {
    const {UserLogout} = useAuth();
    const hangellogout=()=>{
        UserLogout()
        .then(res=>{
            console.log(res.user)
        }).catch(error=>{
            console.log(error)
        })
    }
    return (
        <div className='min-h-[400px]'>
            <div className='flex'>
                <div className='min-h-[418px] py-2  w-80 px-5 h-[48px]'>
                      <div >
                            <ul className="menu p-2">
                                <li className=" border bg-white rounded-md font-normal text-[#666]  text-base"><Link to="/daseboard/userhome"><CgProfile />MyProfile</Link></li>
                            </ul>
                            <ul className="menu p-2">
                                <li className=" border bg-white rounded- font-normal text-[#666]  text-base"><Link to="/daseboard/addtask"><IoCreate />Create task</Link></li>
                            </ul>
                            <ul className="menu p-2">
                                <li className=" border bg-white rounded- font-normal text-[#666]  text-base"><Link to="/daseboard/task"><MdLocalPostOffice />My task</Link></li>
                            </ul>
                            <ul className="menu p-2">
                                <li className=" border bg-white rounded- font- text-[#666]  text-base"><Link to="/daseboard/setting"><FaUser />User type</Link></li>
                            </ul>
                            <ul className="menu p-2">
                                <li className=" border bg-white rounded- font- text-[#666]  text-base"><Link to="/daseboard/setting"><MdOutlineDragHandle />drag-and-drop</Link></li>
                            </ul>
                        </div>
                    <ul className="menu p-2" onClick={hangellogout}>
                        <li className=" border bg-white rounded-md  text-base text-[#]"><button><IoIosLogOut />Logout</button></li>
                    </ul>
                </div>
                <div className='my-5 w-4/5'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>

    );
};

export default Daseboard;