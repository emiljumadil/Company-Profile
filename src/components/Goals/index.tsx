"use client"

const achievementList = [
    {
        title: "Plan Efficient",
        desc: "Optimize modes of transportation for cost-effective and timely deliveries."
    },
    {
        title: "Secure Cargo",
        desc: "Make sure that goods are properly packaged and protected during transit."
    },
    {
        title: "Real-time Tracking",
        desc: "Use advanced tracking systems for better visibility and control over shipments."
    },
    {
        title: "Partnership with Supplier",
        desc: "Build strong connections to ensure dependable and punctual deliveries."
    },
]

const Goals: React.FC = () => {
    return (
        <div className="mx-12">
            <div className="w-1/2 mx-auto text-center my-8">
                <h1 className="font-semibold text-5xl">Steps to Achieve <a className="text-[#109cc7]">Success</a></h1>
                <div>There is no one-size-fits-all formula for success, but if you follow these steps, you will be well on your way to achieving your goals.</div>
            </div>
            <div className="flex mb-8">
                {achievementList.map((item, index) => {
                    return (
                        <div className="flex flex-col justify-center items-center text-center" key={index}>
                            <div className="border-2 p-8 w-2/6 h-auto rounded-full flex justify-center bg-[#003B49] text-white hover:shadow-2xl">{index + 1}</div>
                            <div className="p-4">
                                <h1 className="text-xl font-semibold mb-2">{`${index + 1}. ${item.title}`}</h1>
                                <h1>{item.desc}</h1>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>


    );
};

export default Goals;