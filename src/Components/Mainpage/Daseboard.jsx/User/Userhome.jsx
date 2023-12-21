
import useAuth from '../../Hooks.jsx/useAuth';

const Userhome = () => {
    const { user } = useAuth();
    console.log(user)
    return (
        <div className=' ml-20 py-5'>
            <div className=''>
                <div className="avatar">
                    <div className="w-24 rounded-full">
                        {/* <img src={user?.photoURL} /> */}
                        <img src={user?.photoURL} ></img>
                    </div>
                </div>
                <h1 className='ml-5 text-2xl font-bold '>{user?.displayName}</h1>
            </div>
        </div>
    );
};

export default Userhome;