
const Addtask = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const dec = form.dec.value;
        const priority = form.priority.value;
        const date = form.date.value;
        const taskinfo ={
            title,dec,priority,date
        }
        console.log(taskinfo)
    }
    return (
        <div >
            <form onSubmit={handleSubmit} className="p-10 w-full border  flex-1 bg-green-100 rounded-xl " data-aos="flip-left">
            <h1 className="text-4xl text-center py-5 font-bold">Add Contant</h1>
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
                                <select className="select select-bordered  w-full " name="priority">
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

export default Addtask;