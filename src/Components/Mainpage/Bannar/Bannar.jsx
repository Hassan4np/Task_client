
import { Link } from "react-router-dom";
import p1 from "../../../assets/img/taskmanagement.jpeg"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Bannar = () => {
    useEffect(()=>{
        AOS.init({duration:2000});
    },[])
    return (
        <div>
            <div className="hero min-h-[550px] bg-opacity-30" style={{ backgroundImage: `url(${p1})` }}>
              
                <div className=" text-neutral-content ml-">
                    <div className="text-white" data-aos="flip-up">
                        <h1 className="mb-5 text-5xl font-bold">Wellcome</h1>
                        <p className="mb-5 w-[50%] ">Efficient task management maximizes productivity. Prioritize, schedule, and track tasks using apps like Trello or Asana to streamline workflows and achieve goals effectively.</p>
                      <Link to={`/daseboard/task`}><button className="btn bg-gray-300 font-bold">Let’s Explore</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bannar;