
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
import useComplate from '../../Hooks.jsx/useComplate';

const My_Task = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])

    const { user } = useAuth()
    const [ongoing] = useOngoing();
    const [complate] = useComplate();
    const axoussecrt = useAxousSecret();
    const { data, isLoading, refetch } = useQuery({
        queryKey: ['task', user?.email],
        queryFn: async () => {
            const res = await axoussecrt.get(`/task?email=${user?.email}`);
            return res.data
        }
    });

    if (isLoading) {
        return <h1 className="text-5xl text-center py-20">Loading</h1>
    }
    console.log(data)
    console.log(ongoing)
    console.log(complate)
//delete item
    const handleclick = (id) => {
        console.log(id)
        axoussecrt.delete(`/task/${id}`)
            .then(res => {
                console.log(res.data)
                if(res.data.deletedCount>0){
                    toast.success('Item successfully Delete ')
                    refetch()
                }
            }).catch(error => {
                console.log(error)
            })
    };
    const handledeletecompate = (id) => {
        console.log(id)
        axoussecrt.delete(`/complate/task/${id}`)
            .then(res => {
                console.log(res.data)
                if(res.data.deletedCount>0){
                    toast.success('Item successfully Delete ')
                    refetch()
                }
            }).catch(error => {
                console.log(error)
            })
    };
    const handledeleteongoing = (id) => {
        console.log(id)
        axoussecrt.delete(`/ongoing/task/on/${id}`)
            .then(res => {
                console.log(res.data)
                if(res.data.deletedCount>0){
                    toast.success('Item successfully Delete ')
                    refetch()
                }
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
                    refetch()
                }
            }).catch(error => {
                console.log(error)
            })

    }
    const handlecomplate = (item) => {
        console.log(item)
        const iteminfo = {
            title: item?.title,
            dec: item?.dec,
            email: item?.email,
            priority: item?.priority,
            date: item?.date,
            itemid: item?._id
        }
        axoussecrt.post('/task/complate/on', iteminfo)
            .then(res => {
                console.log(res.data.result)
                refetch()
                if (res.data.result.acknowledged) {
                    toast.success('Ongoing task added')
                    refetch()
                }
            }).catch(error => {
                console.log(error)
            })

    }
    const handletogo = (item) => {
        console.log(item)
        const iteminfo = {
            title: item?.title,
            dec: item?.dec,
            email: item?.email,
            priority: item?.priority,
            date: item?.date,
            itemid: item?._id
        }
        axoussecrt.post('/task/complate/on/pre', iteminfo)
            .then(res => {
                console.log(res.data.result)
                refetch()
                if (res.data.result.acknowledged) {
                    toast.success('Ongoing task added')
                    refetch()
                }
            }).catch(error => {
                console.log(error)
            })

    }
    const handlemain = (item) => {
        console.log(item)
        const iteminfo = {
            title: item?.title,
            dec: item?.dec,
            email: item?.email,
            priority: item?.priority,
            date: item?.date,
            itemid: item?._id
        }
        axoussecrt.post('/task/complate/on/pre/main', iteminfo)
            .then(res => {
                console.log(res.data)
                refetch()
                if (res.data.deleteitem.deletedCount>0) {
                    toast.success('Ongoing task added')
                    refetch()
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
                                    <button onClick={() => handledeleteongoing(item?._id)} className="btn bg-black hover:bg-white hover:text-black text-white btn-sm"><MdOutlineDeleteOutline className='text-2xl text-red-500' /></button>
                                </div>
                                <div className='pr-2'>
                                    <button onClick={() => handlemain(item)} className='text-green-400  mr-1 bg-white p-1 rounded-md'><FaArrowLeft /></button>
                                    <button onClick={() => handlecomplate(item)} className='text-green-400 bg-white p-1 rounded-md'><FaArrowRight /></button>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
                <div>
                    <h1 className='text-xl font-bold py-1'>Complate Task</h1>
                    {
                        complate?.map(item => <div key={item?._id} draggable className="space-y-1 border p-2 h-[200px] rounded-lg bg-gray-300 mb-3 " data-aos="flip-left" >
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
                                    <button onClick={() => handledeletecompate(item?._id)} className="btn bg-black hover:bg-white hover:text-black text-white btn-sm"><MdOutlineDeleteOutline className='text-2xl text-red-500' /></button>
                                </div>
                                <div className='pr-2'>
                                    <button onClick={() => handletogo(item)} className='text-green-400 bg-white p-1 rounded-md'><FaArrowLeft /></button>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>

        </div>
    );
};

export default My_Task;