import Hero from "../sections/Hero"
import Services from "../sections/Services";
import About from "../sections/About";
import WhyChooseUs from "../sections/WhyChooseUs";
import Gallery from "../sections/Gallery";
import Team from "../sections/Team";
import Testimonials from "../sections/Testimonials";
import BookingCTA from "../sections/BookingCTA";
import Footer from "../components/Footer";

function Home() {
    return (
        <main>
            <Hero />
            <Services />
            <About />
            <WhyChooseUs />
            <Gallery />
            <Team />
            <Testimonials />
            <BookingCTA />
        </main>
    );
}

export default Home;