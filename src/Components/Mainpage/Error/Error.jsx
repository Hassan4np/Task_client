import error from "../../../assets/pageimg/error.png"


const Error = () => {
    return (
        <div>
           
            <div className="text-center w-1/2 mx-auto">
                <img src={error} alt="" />
                <div>
                    <h1 className="text-4xl font-medium text-black mt-5">Oops! page not found</h1>
                    <p className="text-base font-normal mt-5 text-[#808080]">Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros. Maecenas sagittis tortor at metus mollis</p>
                    <button className="btn bg-[#00B207] px- mt-5 py-3 rounded-3xl text-white">Back to Home</button>
                </div>
            </div>
        </div>
    );
};

export default Error;