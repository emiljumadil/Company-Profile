"use client"

import SocialIcons from "./sosialicons";

const Footer: React.FC = () => {
    return (
        <footer className="bg-cover bg-auto background-image py-32 bg-no-repeat flex items-center justify-center bg-[url('https://abffreightsolution.com/wp-content/uploads/2021/06/8.png')]">
            <SocialIcons />
            <div className="flex justify-between mx-12">
                <p className="w-1/3">ABF Logistics is committed to providing the highest quality of service to clients at competitive prices.
                    However, we are always looking for new ways to improve our operations.
                </p>
                <div className="flex flex-col">
                    <h1 className="font-semibold mb-2"> Our Services </h1>
                    <>
                        <div className="mb-2">Air Freight Services</div>
                        <div className="mb-2">Land Freight Services</div>
                        <div className="mb-2">Sea Freight Services</div>
                        <div className="mb-2">Project Cargo Services</div>
                        <div className="mb-2">Warehousing Services</div>
                    </>
                </div>

                <div className="flex flex-col">
                    <h1 className="font-semibold mb-2"> Quick Links </h1>
                    <>
                        <div className="mb-2">About Us</div>
                        <div className="mb-2">Contact Us</div>
                        <div className="mb-2">Blog</div>
                        <div className="mb-2">PDF Profile</div>
                    </>
                </div>

                <div className="flex flex-col">
                    <h1 className="font-semibold mb-2"> Contact Us </h1>
                    <>
                        <div className="mb-2">Address: Behbehani Complex Jaber Al Mubarak Street Floor 7 Office No 11</div>
                        <div className="mb-2">Email: inquiry@abffreightsolution.com</div>
                        <div className="mb-2">Phone: +965 516 44517</div>
                    </>
                </div>
            </div>
        </footer>


    );

};

export default Footer;