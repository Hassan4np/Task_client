import { MdEmail, MdPhone } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";


const Contact = () => {

    const handleSubmit=()=>{
        //togo
    }
    return (
        <div className="min-h-[450px] py-5 px-5">
            <h1 className="text-4xl text-center font-bold py-5">Contact us</h1>
            <div className="lg:flex ">
                <form onSubmit={handleSubmit} className="p-10 w-full lg:w-1/2 flex-1 " data-aos="flip-left">
                    <div className=" bg-gray-200 rounded-md p-5">
            
                        <div className="md:flex lg:space-x-4 gap-1">
                            <div className="form-control md:w-1/2 ">
                                <label className="label">
                                    <span className="label-text text-xl lg:text-2xl">Enter Name</span>
                                </label>
                                <label className="input-group ">
                                    <input
                                        type="text"
                                        placeholder="name"
                                        required name="name"
                                     
                                        className="input input-bordered w-full" />

                                </label>
                            </div>
                            <div className="form-control md:w-1/2 ">
                                <label className="label">
                                    <span className="label-text text-xl lg:text-2xl">Enter email</span>
                                </label>
                                <label className="input-group">
                                    <input
                                        type="emai"
                                        placeholder="Email"
                                        required name="email"
                                    
                                        className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        <div className="md:flex lg:space-x-4 gap-1">
                            <div className="form-control md:w-1/2 ">
                                <label className="label">
                                    <span className="label-text  text-xl lg:text-2xl">Enter Subject</span>
                                </label>
                                <label className="input-group ">
                                    <input
                                        type="text"
                                        placeholder="Subject"
                                        name="sub"
                                      
                                        className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 ">
                                <label className="label">
                                    <span className="label-text text-xl lg:text-2xl">Enter Phone</span>
                                </label>
                                <label className="input-group">
                                    <input
                                        type="text"
                                        placeholder="Phone"
                                        name="phone"
                                     
                                        className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        <div className="form-control md:full ">
                            <label className="label">
                                <span className="label-text text-xl  lg:text-2xl">Write massage</span>
                            </label>
                            <label className="input-group">
                                <textarea className="textarea textarea-bordered w-full"
                                 name="message"
                          
                                  placeholder="Enter massage"></textarea>
                            </label>
                        </div>
                        <input type="submit" value="Send message" className="w-full mt-5 p-3 rounded-lg font-bold text-xl text-gradient bg-blue-300" />
                    </div>
                </form>
                <div className='flex-1 '  data-aos="flip-right">
                    <div className=' mt-5   lg:mt-20 justify-center items-center ml-10 '>
                        <h1 className="text-3xl font-bold">Get in touch with us</h1>
                        <div className="mt-5 flex border-2 rounded-lg p-3 ">
                            <MdEmail className="text-4xl mt-3 text-gray-500" />
                            <div className="px-4">
                                <h1 className="text-2xl font-bold">Write email</h1>
                                <h5 className="text-lg font-medium">hassan4np@gmail.com</h5>
                            </div>
                        </div>
                        <div className="mt-5 flex border-2 rounded-lg p-3 ">
                            <MdPhone className="text-4xl mt-3  text-gray-500" />
                            <div className="px-4">
                                <h1 className="text-2xl font-bold">Have any question?</h1>
                                <h5 className="text-lg font-medium">+8801723461543</h5>
                            </div>
                        </div>
                        <div className="mt-5 flex border-2 rounded-lg p-3 ">
                            <IoLogoWhatsapp className="text-4xl mt-3  text-gray-500" />
                            <div className="px-4">
                                <h1 className="text-2xl font-bold">Whatsapp</h1>
                                <h5 className="text-lg font-medium">+8801723461543</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;