

const UserType = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold text-center py-5">Peroples</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 py-16 px-3 md:px-2 lg:px-0">
                <div className="p-2 border px-4 bg-gray-200 rounded-lg h-[170px]">
                    <h1 className="text-2xl font-normal text-black mb-1">Banker</h1>
                    <p  > Embrace digital evolution, optimize user experience, and prioritize security to cultivate trust. Seamlessly connect with clients through innovative banking solutions.</p>
                </div>
                <div className="p-2 border px-4 bg-gray-200 rounded-lg">
                    <h1 className="text-2xl font-normal text-black mb-1">developers</h1>
                    <p >As a developer, seize the chance to craft compelling website content. Utilize your skills to communicate effectively, create engaging user experiences, and drive impactful interactions</p>
                </div>
                <div className="p-2 border px-4 bg-gray-200 rounded-lg h-[170px]">
                    <h1 className="text-2xl font-normal text-black mb-1">Designer</h1>
                    <p  >Seek talented designers to craft captivating content for our website. Showcase creativity, enhance user experience, and communicate our brand's essence effectively in every design element</p>
                </div>
                <div className="p-2 border px-4 bg-gray-200 rounded-lg">
                    <h1 className="text-2xl font-normal text-black mb-1">Corporate professionals</h1>
                    <p > For corporate professionals visiting the website, highlight industry insights, career growth tips, and leadership strategies in your content to captivate and engage this audience effectively</p>
                </div>
            </div>
        </div>
    );
};

export default UserType;