import { FaEye } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../Hooks.jsx/useAuth";
import { FaEyeSlash } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { toast } from "react-toastify";



const Signin = () => {
    const { UserLogin,UserGoogleLogin } = useAuth();
    const [error, seterror] = useState();
    const [show, setshow] = useState(false)
    const loc = useLocation();
    const navigate = useNavigate();
    const handlelogin = (e) => {
        e.preventDefault();
        const from = e.target;
        const email = from.email.value;
        const password = from.password.value;
        console.log(email, password)
        seterror('')
        UserLogin(email, password)
            .then(res => {
                console.log(res.user)
                toast.success('Successfully Login')
                navigate(loc.state ? loc.state : '/')

            }).catch(error => {
                seterror(error.message)
            })
    }
    const hendlegoogle=()=>{
        UserGoogleLogin()
        .then(res=>{
            console.log(res.user)
            navigate(loc.state ? loc.state : '/')
        }).catch(error=>{
            console.log(error)
            seterror(error.message)

        })


    }
    return (
        <div>
            <div>
                <div className="hero-content">

                    <div className="card shrink-0 w-full h-[450px] md:w-[520px] md:h-[450px] shadow-2xl  bg-[#F2F2F2] mt-5">
                        <h1 className="text-3xl text-center font-semibold pt-3">Login</h1>
                        <button onClick={hendlegoogle} className="px-8 mt-2">
                            <div className='flex justify-center items-center h-10 rounded-md border-2 p-2 bg-gray-400'>
                                <div className='flex space-x-2'>
                                    <FcGoogle className='mt-1 text-2xl' ></FcGoogle>
                                    <p className='text-xl font-bold'>Google</p></div>
                            </div>
                        </button>
                        <form className="card-body -mt-5" onSubmit={handlelogin} >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control relative ">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={`${show ? 'text' : 'password'}`} placeholder="password" name="password" className="input input-bordered" required />
                                {
                                    show ? <FaEye onClick={() => setshow(!show)} className="absolute top-14 right-4"></FaEye> :
                                        <FaEyeSlash onClick={() => setshow(!show)} className="absolute top-14 right-4"></FaEyeSlash>
                                }

                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>

                                </label>
                                {
                                    error && <p className="text-[14px] font-normal text-red-500 ml-1">{error}</p>

                                }
                            </div>
                            <div className="form-control">
                                <button className="btn bg-green-500 text-white">Login</button>
                            </div>
                            <p className="text-[#666] text-[14px] font-normal text-center">Don’t have account?<Link to="/signup"><span className="text-base font-normal text-green-500 ml-1">Register</span></Link></p>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;
