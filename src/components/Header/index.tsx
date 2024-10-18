"use client"

import Link from "next/link";

const Headers: React.FC = () => {

    return (
        <header className="pt-2 mx-12 pb-2 flex justify-between items-center h-100">
            <img src="https://abffreightsolution.com/wp-content/uploads/2021/06/ABF-logo-web-02.png" height={70} width={140} alt='header-image' />
            <div className="pr-24 flex space-x-14 ">
                <Link href="/">Home</Link>
                <Link href="/aboutPage">About</Link>
                <Link href='/contacts'>Contacs</Link>
            </div>
        </header >
    );
};

export default Headers;