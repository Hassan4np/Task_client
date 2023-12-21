import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const My_Task = () => {
    return (
        <div>
            <h1 className="text-center text-2xl font-bold py-5">My Content</h1>
            <div className="" >
                <Tabs className="min-h-[150px]">
                    <TabList >
                        <Tab >My Task</Tab>
                        <Tab>Complted Task</Tab>
                        <Tab>Is ongoing</Tab>
                    </TabList>

                    <TabPanel className="text-start">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 py-5">
                            <div className="card bg-gray-300">
                                <div className="card-body ">
                                    <h1 className="text-2xl font-medium  ">Banker job now here</h1>
                                    <h5 className="text-base font-normal text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Atque aperiam qui sunt iure ea ad fugit? Earum dignissimos quia consequatur!</h5>
                                    <div className="flex justify-between ">
                                        <div className="flex">
                                            <h6 className="mr-5 py-2 px-3 text-white font-bold rounded-lg bg-black">Normal</h6>
                                            <h6 className="py-2 px-3 rounded-lg text-white font-bold bg-black">23-6-23</h6>
                                        </div>
                                    </div>
                                    <div className="card-actions">
                                        <button className="btn btn-sm">Edit</button>
                                        <button className="btn btn-sm">Delete</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card bg-gray-300">
                                <div className="card-body ">
                                    <h1 className="text-2xl font-medium  ">Banker job now here</h1>
                                    <h5 className="text-base font-normal text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Atque aperiam qui sunt iure ea ad fugit? Earum dignissimos quia consequatur!</h5>
                                    <div className="flex justify-between ">
                                        <div className="flex">
                                            <h6 className="mr-5 py-2 px-3 text-white font-bold rounded-lg bg-black">Normal</h6>
                                            <h6 className="py-2 px-3 rounded-lg text-white font-bold bg-black">23-6-23</h6>
                                        </div>
                                    </div>
                                    <div className="card-actions">
                                        <button className="btn btn-sm">Update</button>
                                        <button className="btn btn-sm">Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel className="text-start">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 py-5">
                            <div className="card bg-gray-300">
                                <div className="card-body ">
                                    <h1 className="text-2xl font-medium  ">Banker job now here</h1>
                                    <h5 className="text-base font-normal text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Atque aperiam qui sunt iure ea ad fugit? Earum dignissimos quia consequatur!</h5>
                                    <div className="flex justify-between ">
                                        <div className="flex">
                                            <h6 className="mr-5 py-2 px-3 text-white font-bold rounded-lg bg-black">Normal</h6>
                                            <h6 className="py-2 px-3 rounded-lg text-white font-bold bg-black">23-6-23</h6>
                                        </div>
                                    </div>
                                    <div className="card-actions">
                                        <button className="btn btn-sm">Edit</button>
                                        <button className="btn btn-sm">Delete</button>
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                    </TabPanel>
                    <TabPanel className="text-start">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 py-5">
                            <div className="card bg-gray-300">
                                <div className="card-body ">
                                    <h1 className="text-2xl font-medium  ">Banker job now here</h1>
                                    <h5 className="text-base font-normal text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Atque aperiam qui sunt iure ea ad fugit? Earum dignissimos quia consequatur!</h5>
                                    <div className="flex justify-between ">
                                        <div className="flex">
                                            <h6 className="mr-5 py-2 px-3 text-white font-bold rounded-lg bg-black">Normal</h6>
                                            <h6 className="py-2 px-3 rounded-lg text-white font-bold bg-black">23-6-23</h6>
                                        </div>
                                    </div>
                                    <div className="card-actions">
                                        <button className="btn btn-sm">Edit</button>
                                        <button className="btn btn-sm">Delete</button>
                                    </div>
                                </div>
                            </div>
                          
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
            {/* <div className="space-y-2 border p-5 rounded-lg bg-gray-300 mb-3 ">
                <h1 className="text-3xl font-medium  ">Banker job now here</h1>
                <h5 className="text-lg w-[80%] font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Atque aperiam qui sunt iure ea ad fugit? Earum dignissimos quia consequatur!</h5>
                <div className="flex justify-between ">
                    <div className="flex">
                        <h6 className="mr-5 py-2 px-3 text-white font-bold rounded-lg bg-black">Normal</h6>
                        <h6 className="py-2 px-3 rounded-lg text-white font-bold bg-black">23-6-23</h6>
                    </div>
                    <div>
                        <button className="btn hover:bg-white hover:text-black btn-sm bg-black text-white mr-2">Update</button>
                        <button className="btn bg-black hover:bg-white hover:text-black text-white btn-sm">Delete</button>
                    </div>
                </div>

            </div> */}

        </div>
    );
};

export default My_Task;