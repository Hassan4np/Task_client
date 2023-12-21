
import { Link } from "react-router-dom";
import p1 from "../../../assets/img/taskmanagement.jpeg"
const Bannar = () => {
    return (
        <div>
            <div className="hero min-h-[550px] bg-opacity-30" style={{ backgroundImage: `url(${p1})` }}>
              
                <div className=" text-neutral-content ml-">
                    <div className="text-white">
                        <h1 className="mb-5 text-5xl font-bold">Wellcome</h1>
                        <p className="mb-5 w-[50%] ">Efficient task management maximizes productivity. Prioritize, schedule, and track tasks using apps like Trello or Asana to streamline workflows and achieve goals effectively.</p>
                      <Link to={`/daseboard/userhome`}><button className="btn bg-gray-300 font-bold">Let’s Explore</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bannar;