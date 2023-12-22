import { toast } from "react-toastify";
import useAuth from "../../Hooks.jsx/useAuth";
import useAxousSecret from "../../Hooks.jsx/useAxousSecret";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { data } from "autoprefixer";


const Update = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const axoussecrt = useAxousSecret();
    const { data:item, isLoading, refetch } = useQuery({
        queryKey: ['task', id],
        queryFn: async () => {
            const res = await axoussecrt.get(`/task/${id}`);
            return res.data
        }
    });
    if (isLoading) {
        return <h1 className="text-5xl text-center py-20">Loading</h1>
    }
    console.log(id)
    console.log(item[0])
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const dec = form.dec.value;
        const priority = form.priority.value;
        const date = form.date.value;
        const email = user?.email
        const taskinfo = {
            title, dec, priority, date, email
        }
        console.log(taskinfo)
        axoussecrt.patch(`/task/${id}`, taskinfo)
            .then(res => {
                console.log(res.data)
                if (res.data.acknowledged) {
                    toast.success('Successfully update Task')
                }

            }).catch(error => {
                console.log(error)
            })

    }

    return (
        <div className="py-5">


            <form onSubmit={handleSubmit} className="p-10 w-full border  flex-1 bg-green-100 rounded-xl " data-aos="flip-left">
                <h1 className="text-4xl text-center py-5 font-bold">Update Contant</h1>
                <hr />
                <div className="bg-gradient-to-r   rounded-md p-5">
                    <div className="md:flex lg:space-x-4 gap-1">
                        <div className="form-control md:w-1/2 ">
                            <label className="label">
                                <span className="label-text text-xl font-medium lg:text-2xl">Title</span>
                            </label>
                            <label className="input-group ">
                                <input
                                    type="text"
                                    defaultValue={item[0]?.title}
                                    placeholder="Title"
                                    required name="title"
                                  
                                    className="input input-bordered w-full" />

                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ">
                            <label className="label">
                                <span className="label-text text-xl font-medium  lg:text-2xl">Descriptions</span>
                            </label>
                            <label className="input-group">
                                <input
                                defaultValue={item[0]?.dec}
                                    type="text"
                                    placeholder="Descriptions"
                                    required name="dec"

                                    className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="md:flex lg:space-x-4 gap-1">
                        <div className="form-control md:w-1/2 ">
                            <label className="label">
                                <span className="label-text font-medium   text-xl lg:text-2xl">Date</span>
                            </label>
                            <label className="input-group ">
                                <input
                                    type="date"
                                  
                                    placeholder="Date"
                                    name="date"

                                    className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ">
                            <label className="label">
                                <span className="label-text text-xl font-medium  lg:text-2xl">Priority</span>
                            </label>
                            <label className="input-group">
                                <select className="select select-bordered  w-full" defaultValue={item[0]?.priority} name="priority">
                                    <option disabled selected>Select one</option>
                                    <option>Low</option>
                                    <option>Moderate</option>
                                    <option>High</option>
                                </select>
                            </label>
                        </div>
                    </div>

                    <input type="submit" value="Add Task" className="w-full mt-5 p-3 rounded-lg font-bold text-xl bg-gray-400 text-gradient bg-gradient-to-r " />
                </div>
            </form>
        </div>
    );
};

export default Update;