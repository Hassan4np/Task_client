
import { GoHome } from "react-icons/go";

const HeaderBannar = ({ imgg,title }) => {
    return (
        <div style={{ backgroundImage: `url(${imgg})` }} className="h-28 w-full flex bg-cover items-center">
            <div className="flex ml-[300px]">
                <div className="flex">
                    {/* <GoHome className="text-gray-500 mr-3  text-2xl" /> */}
                    {/* <p className="text-lg text-gray-500 mr-3">></p> */}
                </div>
                <h1 className=" mt-1 text-green-500">{title}</h1>
                
            </div>
        </div>
    );
};

export default HeaderBannar;