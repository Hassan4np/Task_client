

import { Link, useNavigate } from "react-router-dom";
import useAuth from '../Hooks.jsx/useAuth';
import { useState } from 'react';

import { updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';


const Signup = () => {
    const { UserSignup } = useAuth();

    const [error,seterror] = useState('')
    const naavgate = useNavigate()
    const hendleSignup=(e)=>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password)

        if (password.length < 6) {
            seterror("Give 6 Character Password")
            return;
        } else if ( !/[!@#$%^&*()_+{}\[\]:;<>,.?~\\|\-=]/.test(password)) {
            seterror("Give me spical caracter");
            return;
        }else if(!/[A-Z]/.test(password)){
            seterror("Give me captial letter")
            return;
        }
        UserSignup(email,password)
        .then((result)=>{
            console.log(result.user)
            toast.success('Successfully Register')
    
              updateProfile(result.user,{
                displayName:name,
                photoURL:photo,
            })
            naavgate('/login')
        })
        .catch(error=>{
            seterror(error.message)
        })
    
    }

    return (
        <div>
            <div className="hero-content">
                <div className="card shrink-0 w-full h-full md:w-[520px] md:h-full shadow-2xl  bg-[#F2F2F2] mt-5">
                    <h1 className="text-3xl text-center font-semibold pt-3">Create Account</h1>
                    <form className="card-body" onSubmit={hendleSignup}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="test" placeholder="Name" name='name' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="test" placeholder="Photo Url" name='photo' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                           
                            <p className='text-base mt-3'>Have an Account  <Link href="" className='text-green-600' to='/login'>Login</Link></p>
                            {
                                error&&<p className='text-base mt-3 text-red-700'>{error}</p>
                            }
                        </div>
                        <div className="form-control mt-6">
                        <input className='btn btn-success' type="submit" value="Register" />
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Signup;