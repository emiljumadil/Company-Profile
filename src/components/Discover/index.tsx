"use client"

const services = [
    {
        title: "Air Freight",
        description: "Efficient air freight solutions, ensuring swift and reliable global cargo transport with ABF Logistics. Your goods, our priority.",
        variantService: [{
            firstService: "General Cargo",
            secondService: "Special Cargo",
            thirdService: "InterModel Transportation"
        }]
    },
    {
        title: "Land Freight",
        description: "We provide reliable, affordable, and on-time land freight solutions for your shipments. Your cargo's journey, our responsibility.",
        variantService: [{
            firstService: "Less-than-Truck Load",
            secondService: "Full Truck Load",
            thirdService: "Intermodal Transport"
        }]
    },
    {
        title: "Sea Freight",
        description: "Seamless sea freight services, connecting your cargo to the world's oceans. We offer reliable sea freight services for your maritime transport.",
        variantService: [{
            firstService: "Less-than-Container Load",
            secondService: "Full Container Load",
            thirdService: "Intermodal Transport"
        }]
    },
]

interface IDetailProps {
    firstService: string;
    secondService: string;
    thirdService: string;
}

const Discover: React.FC = () => {
    return (
        <div className="py-12" style={{ backgroundColor: "#F8F8F8" }}>
            <div className="mx-12 flex items-center justify-between">
                <div className="flex flex-col w-2/3">
                    <div className="font-semibold text-5xl">Discover What We <a className="text-[#109cc7]">Offer</a></div>
                    <h1 className="text-lg">
                        Find out all about the services we provide at ABF Logistics.
                        From moving goods worldwide to secure warehousing solutions, we’ve got you covered.
                    </h1>
                </div>
                <button type="button" className="bg-gray-800 text-white px-6 py-2 h-12 rounded-full flex items-center">
                    <span className="button">EXPLORE MORE</span>
                    <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 20 20" stroke="currentColor">
                        <path stroke-linecap="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
            <div className="flex h-100 justify-between mx-12 mt-8 gap-5">
                {services.map((item, index) => {
                    return (
                        <div className="border-2 w-4/12 cursor-pointer hover:bg-[url('https://abffreightsolution.com/wp-content/uploads/2021/06/service-bg-1.jpg')] hover:text-white p-4 rounded-lg" key={index}>
                            <h3 className="font-bold text-xl mb-4">{item.title}</h3>
                            <p>{item.description}</p>
                            {item.variantService.map((detail: IDetailProps, idx: number) => {
                                return (
                                    <ul className="mt-2 list-disc ml-4" key={idx}>
                                        <li className="my-4 text-lg">{detail.firstService}</li>
                                        <li className="my-4 text-lg">{detail.secondService}</li>
                                        <li className="my-4 text-lg">{detail.thirdService}</li>
                                    </ul>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Discover;