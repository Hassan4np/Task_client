
import 'react-tabs/style/react-tabs.css';
import { MdOutlineDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";
import useAxousSecret from '../../Hooks.jsx/useAxousSecret';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../Hooks.jsx/useAuth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import useOngoing from '../../Hooks.jsx/useOngoing';

const My_Task = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])

    const { user } = useAuth()
    const [ongoing] = useOngoing();
    const axoussecrt = useAxousSecret();
    const { data, isLoading, refetch } = useQuery({
        queryKey: ['task', user?.email],
        queryFn: async () => {
            const res = await axoussecrt.get(`/task?email=${user?.email}`);
            return res.data
        }
    });
    // const { data:Ongoing } = useQuery({
    //     queryKey: ['/task/ongoing', user?.email],
    //     queryFn: async () => {
    //         const res = await axoussecrt.get(`/task/ongoing?email=${user?.email}`);
    //         return res.data
    //     }
    // });

    if (isLoading) {
        return <h1 className="text-5xl text-center py-20">Loading</h1>
    }
    console.log(ongoing)
    console.log(data)
    const handleclick = (id) => {
        console.log(id)
        axoussecrt.delete(`/task/${id}`)
            .then(res => {
                console.log(res.data)
                toast.success('Item successfully Delete ')
                refetch()
            }).catch(error => {
                console.log(error)
            })
    };
    const handleongo = (item) => {
        console.log(item)
        const iteminfo = {
            title: item?.title,
            dec: item?.dec,
            email: item?.email,
            priority: item?.priority,
            date: item?.date,
            itemid: item?._id
        }
        axoussecrt.post('/task/ongoing', iteminfo)
            .then(res => {
                console.log(res.data.result)
                refetch()
                if (res.data.result.acknowledged) {
                    toast.success('Ongoing task added')
                }
            }).catch(error => {
                console.log(error)
            })

    }
    return (
        <div className='px-5'>
            <h1 className="text-center text-2xl font-bold py-5">My Content</h1>
            <div className="" >
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 ' >
                <div >
                    <h1 className='text-xl font-bold py-1'>My Task</h1>
                    {
                        data?.map(item => <div key={item?._id} draggable className="space-y-1 border p-2 h-[200px] rounded-lg bg-gray-300 mb-3 " data-aos="flip-left" >
                            <h1 className="text-xl font-medium  ">{item?.title}</h1>
                            <h5 className="text-base w-full h-[70px] font-normal">{item?.dec}
                            </h5>
                            <div className="flex">
                                <h6 className="mr-5 py-1 px-2 text-white text-base rounded-lg bg-black">{item?.priority}</h6>
                                <h6 className="py-1 px-2 rounded-lg text-white  bg-black">{item?.date}</h6>
                            </div>
                            <div className='flex justify-between'>
                                <div>
                                    <Link to={`/daseboard/update/${item?._id}`}><button className="btn hover:bg-white hover:text-black btn-sm bg-black text-white mr-2"><CiEdit className='text-2xl text-green-500' /></button></Link>
                                    <button onClick={() => handleclick(item?._id)} className="btn bg-black hover:bg-white hover:text-black text-white btn-sm"><MdOutlineDeleteOutline className='text-2xl text-red-500' /></button>
                                </div>
                                <div className='pr-2'>
                                    <button onClick={() => handleongo(item)} className='text-green-400 bg-white p-1 rounded-md'><FaArrowRight /></button>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
                <div>
                    <h1 className='text-xl font-bold py-1'>Ongoing Task</h1>
                    {
                        ongoing?.map(item => <div key={item?._id} draggable className="space-y-1 border p-2 h-[200px] rounded-lg bg-gray-300 mb-3 " data-aos="flip-left" >
                            <h1 className="text-xl font-medium  ">{item?.title}</h1>
                            <h5 className="text-base w-full h-[70px] font-normal">{item?.dec}
                            </h5>
                            <div className="flex">
                                <h6 className="mr-5 py-1 px-2 text-white text-base rounded-lg bg-black">{item?.priority}</h6>
                                <h6 className="py-1 px-2 rounded-lg text-white  bg-black">{item?.date}</h6>
                            </div>
                            <div className='flex justify-between'>
                                <div>
                                    <Link to={`/daseboard/update/${item?._id}`}><button className="btn hover:bg-white hover:text-black btn-sm bg-black text-white mr-2"><CiEdit className='text-2xl text-green-500' /></button></Link>
                                    <button onClick={() => handleclick(item?._id)} className="btn bg-black hover:bg-white hover:text-black text-white btn-sm"><MdOutlineDeleteOutline className='text-2xl text-red-500' /></button>
                                </div>
                                <div className='pr-2'>
                                    <button onClick={() => handleongo(item)} className='text-green-400 bg-white p-1 rounded-md'><FaArrowRight /></button>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
                <div>
                    <h1 className='text-xl font-bold py-1'>Complate Task</h1>
                    <div className="space-y-1 border p-2 rounded-lg bg-gray-300 mb-3 h-[200px] " data-aos="flip-right">
                        <h1 className="text-xl font-medium  ">Banker job now here</h1>
                        <h5 className="text-base h-[80px]   font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </h5>
                        <div className=" mt-2 ">
                            <div className="flex">
                                <h6 className="mr-5 py-1 px-2 text-white text-base rounded-lg bg-black">Normal</h6>
                                <h6 className="py-1 px-2 rounded-lg text-white  bg-black">23-6-23</h6>
                            </div>
                            <div>
                                <Link to={`/daseboard/update/}`}><button className="btn hover:bg-white hover:text-black btn-sm bg-black text-white mr-2"><CiEdit className='text-2xl text-green-500' /></button></Link>
                                <button onClick={() => handleclick()} className="btn bg-black hover:bg-white hover:text-black text-white btn-sm"><MdOutlineDeleteOutline className='text-2xl text-red-500' /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default My_Task;