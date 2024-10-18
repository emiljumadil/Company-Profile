"use client"

const achivement = [
    {
        total: 300,
        title: "Warehouses Managed",
        desc: "We help you mitigate supply chain disruptions."
    },
    {
        total: 120,
        title: "Supply Engineers",
        desc: "We help you mitigate supply chain disruptions."
    },
    {
        total: 60,
        title: "Countries Covered",
        desc: "We help you mitigate supply chain disruptions."
    },
    {
        total: 600,
        title: "Companies We Help",
        desc: "We help you mitigate supply chain disruptions."
    },
]

const Achievements: React.FC = () => {
    return (
        <div className="bg-[url('https://abffreightsolution.com/wp-content/uploads/2021/06/home1-section-3.png')]" >
            {/* <img src="https://abffreightsolution.com/wp-content/uploads/2021/06/home1-section-3.png" alt="achievements-image"></img> */}
            <div className="flex flex-col justify-center items-center py-8">
                <h1 className="font-semibold text-5xl mb-4"> Our <a className="text-[#109cc7]">Achievements</a> </h1>
                <p className="w-2/3 text-lg">At ABF Logistics, our achievements in the freight and logistics industry are a testament to our global service.
                    We proudly serve clients worldwide, earning fame for our logistics excellence and successful partnerships.
                </p>
            </div>
            <div className="flex gap-5 mx-12 py-12">
                {achivement.map((item)=> {
                    return (
                        <div className="text-center">
                            <div className="text-4xl font-semibold">{`${item.total}+`}</div>
                            <div className="text-lg font-semibold my-2">{item.title}</div>
                            <div>{item.desc}</div>
                        </div>
                    )
                })}
            </div>
        </div>

    );
};

export default Achievements;