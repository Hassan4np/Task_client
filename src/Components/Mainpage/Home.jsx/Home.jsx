import Bannar from "../Bannar/Bannar";
import UserType from "../Daseboard.jsx/User/UserType";
import Contact from "./Contact";


const Home = () => {
    return (
        <div className="min-h-[450px]">
            <Bannar></Bannar>
            <UserType></UserType>
            <Contact></Contact>
        </div>
    );
};

export default Home;