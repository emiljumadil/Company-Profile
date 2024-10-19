"use client"

const Values: React.FC = () => {
    return (
        <div className="relative overflow-hidden" style={{ background: '#003B49' }}>
            <div className="flex items-center relative z-10">
                <div className="ml-12 w-2/3">
                    <h1 className="font-semibold text-5xl text-white py-6">Our Values & <a className="text-[#109cc7]"> Commitment</a></h1>
                    <p className="text-white text-lg">At ABF Logistics, we stand by our core principles.
                        We are dedicated to giving the best possible customer service with responsibility and a strong commitment to sustainability.
                        These values drive our business and define our promise to you.
                    </p>
                    <ul className="text-white list-disc ml-4">
                        <li className="my-4 text-lg font-semibold">TeamWork</li>
                        <li className="my-4 text-lg font-semibold">Responsibility</li>
                        <li className="my-4 text-lg font-semibold">Sustainability</li>
                    </ul>
                </div>
                <div>
                    <img src="https://abffreightsolution.com/wp-content/uploads/2023/09/bg-section-4-1.png" alt="" />
                </div>
            </div>

        </div>


    );
};

export default Values;