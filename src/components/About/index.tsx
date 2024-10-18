"use client"

import Link from "next/link";

const About: React.FC = () => {
    return (
        <div>
            <div className="flex justify-between items-center mx-12">
                <div className="flex flex-col space-y-4 w-1/2">
                    <h1 className="font-semibold text-5xl">Moving Your Goods Around the World <a className="text-[#109cc7]">ABF Logistics</a> </h1>
                    <div>
                        We move the world’s goods, with a passion for excellence.
                        With a team of experts who deliver innovative and reliable solutions, ABF Logistics is committed to providing the highest quality of service to clients at competitive prices.
                        However, we are always looking for new ways to improve our operations.
                    </div>
                    <Link href='/aboutPage'>
                        <button type="button" className="bg-gray-800 text-white px-6 py-2 rounded-full flex items-center w-1/3">
                            <span>MORE ABOUT US</span>
                            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 20 20" stroke="currentColor">
                                <path stroke-linecap="round" stroke-width="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </Link>
                </div>
                <img src="https://abffreightsolution.com/wp-content/uploads/2023/10/About.png" alt="about-image" />
            </div>
        </div >

    );
};

export default About;