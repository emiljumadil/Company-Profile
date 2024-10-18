"use client"

import Footer from "../Footer";
import Headers from "../Header";

const services = [
    {
        title: "Global Sustainability Market Leader",
        description: "We integrate nwe technological and digital advances to creative value.",
    },
    {
        title: "Relentless Productivity Driver",
        description: "We integrate nwe technological and digital advances to creative value.",
    },
    {
        title: "Pround to deliver excellence. Every Time",
        description: "We integrate nwe technological and digital advances to creative value.",
    },
]

const About: React.FC = () => {
    return (
        <div>
            <Headers />
            <div className="page-header flex items-start justify-start bg-cover bg-no-repeat bg-scroll bg-bottom bg-center bg-[#202020] min-h-[280px] relative" style={{ backgroundImage: "url('https://abffreightsolution.com/wp-content/uploads/2021/06/foreman-control-loading.jpg')" }}>
                <div className="breadcrumbs breadcrumbs-align-right breadcrumbs-inline">
                    <div className="page-header_wrapper">
                        <div className="wgl-container">
                            <div className="page-header_content">
                                <div className="page-header_title text-white text-4xl leading-[60px]">About Us</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <div className="mt-[80px] mb-[80px] px-[80px] flex justify-between items-center mx-12">
                <div className="flex flex-col space-y-4 w-1/2">
                    <h1 className="font-semibold text-5xl">Moving Your Goods Around the World <a className="text-[#109cc7]">ABF Logistics</a> </h1>
                    <div>
                        We move the world’s goods, with a passion for excellence.
                        With a team of experts who deliver innovative and reliable solutions, ABF Logistics is committed to providing the highest quality of service to clients at competitive prices.
                        However, we are always looking for new ways to improve our operations.
                    </div>
                </div>
                <img src="https://abffreightsolution.com/wp-content/uploads/2023/10/About.png" alt="about-image" />
            </div>

            <div className="flex h-100 justify-between mx-12 mt-8 gap-5 mb-8">
                {services.map((item, index) => {
                    return (
                        <div className="border-2 w-4/12 cursor-pointer p-4 rounded-lg hover:bg-[url('https://abffreightsolution.com/wp-content/uploads/2021/06/service-bg-1.jpg')] hover:text-white" key={index}>
                            <h3 className="font-bold text-xl mb-4">{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    )
                })}
            </div>
            <div className="grid grid-cols-2 gap-0">
                <img src="https://abffreightsolution.com/wp-content/uploads/2021/06/driver-holding-clipboard.jpg" alt="about 2-image" className="w-full h-auto" />
                <div style={{ background: '#003B49' }} className="flex flex-col justify-center items-start pl-12" >
                    <h1 className="font-semibold text-3xl text-[#ffffff]">Our Industry-Explicit<a className="text-[#109cc7] ml-2">Competence</a> </h1>
                    <div className="text-[#ffffff] mt-2 text-xl">
                        TransMax has a massive arrangement of transport and arrangement coordinations arrangements.
                    </div>
                    <div className="flex justify-between ml-4 mt-4 w-3/4 h-auto ">
                        <ul className="list-disc">
                            <li className="text-[#ffffff] theme-header-font mb-2 text-lg">Aerospace & Defense</li>
                            <li className="text-[#ffffff] theme-header-font mb-2 text-lg">Automotive</li>
                            <li className="text-[#ffffff] theme-header-font mb-2 text-lg">Cloud Computing</li>
                            <li className="text-[#ffffff] theme-header-font mb-2 text-lg">Fashion & Retail</li>
                            <li className="text-[#ffffff] theme-header-font mb-2 text-lg">Healthcare & Pharma</li>
                            <li className="text-[#ffffff] theme-header-font mb-2 text-lg">Marine Parts</li>
                        </ul>
                        <ul className="list-disc">
                            <li className="text-[#ffffff] theme-header-font mb-2 text-lg">Electronics Industry</li>
                            <li className="text-[#ffffff] theme-header-font mb-2 text-lg">Industrial & Manufacturing</li>
                            <li className="text-[#ffffff] theme-header-font mb-2 text-lg">Semicon & Solar</li>
                            <li className="text-[#ffffff] theme-header-font mb-2 text-lg">Oil & Gas Cargo</li>
                            <li className="text-[#ffffff] theme-header-font mb-2 text-lg">Energy & Chemicals</li>
                            <li className="text-[#ffffff] theme-header-font mb-2 text-lg">Engineering</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div >

    );
};

export default About;