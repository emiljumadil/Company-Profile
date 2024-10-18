// "use client"

import Header from "@/components/Header";
import About from "@/components/About";
import Discover from "@/components/Discover";
import Goals from "@/components/Goals";
import Footer from "@/components/Footer";
import Achievements from "@/components/Achievements";
import Values from "@/components/Values";
import Layer from "../Layer";

const Home: React.FC = () => {
    return (
        <main className="company">
            <Header />
            <Layer />
            <About />
            <Discover />
            <Goals />
            <Values />
            <Achievements />
            <Footer />
        </main>

    );
};

export default Home;
