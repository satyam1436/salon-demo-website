import heroImage from "../assets/images/salon/hero.jpg";
import { Link } from "react-router-dom";

function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen overflow-hidden text-white"
        >
            {/* Background Image */}
            <img
                src={heroImage}
                alt="Luxury salon interior"
                className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Content */}
            <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-20 lg:px-8">

                <div className="max-w-3xl">

                    {/* Small Heading */}
                    <p className="mb-5 text-sm font-medium uppercase tracking-[0.35em] text-white/70">
                        Premium Salon & Grooming
                    </p>

                    {/* Main Heading */}
                    <h1 className="text-6xl font-semibold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl">
                        Style.
                        <br />
                        Confidence.
                        <br />
                        <span className="text-white/60">You.</span>
                    </h1>

                    {/* Description */}
                    <p className="mt-8 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
                        Discover premium hair, beauty and grooming services
                        designed around your personal style.
                    </p>

                    {/* Buttons */}
                    <div className="mt-9 flex flex-wrap gap-4">

                        <Link to="/booking" className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition duration-300 hover:scale-105 hover:bg-gray-200">
                            Book Appointment
                        </Link>

                        <Link to="/services" className="rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition duration-300 hover:bg-white hover:text-black">
                            Explore Services
                        </Link>

                    </div>

                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
                <div className="flex flex-col items-center gap-2 text-white/60">
                    <span className="text-[10px] uppercase tracking-[0.3em]">
                        Scroll
                    </span>

                    <div className="h-10 w-px bg-white/40" />
                </div>
            </div>
        </section>
    )
}

export default Hero;