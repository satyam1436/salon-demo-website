import { Link } from "react-router-dom";

function BookingCTA() {
    return (
        <section
            id="booking"
            className="bg-[#f5f3ef] px-6 py-24 text-black lg:px-8 lg:py-32"
        >
            <div className="mx-auto max-w-5xl text-center">

                {/* Small Heading */}
                <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-black/45">
                    Your Next Look Awaits
                </p>

                {/* Main Heading */}
                <h2 className="mx-auto max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
                    Ready for a
                    <br />
                    <span className="text-black/35">
                        new look?
                    </span>
                </h2>

                {/* Description */}
                <p className="mx-auto mt-7 max-w-xl text-base leading-7 text-black/55 sm:text-lg">
                    Book your appointment today and let our experts
                    create a style that's uniquely yours.
                </p>

                {/* CTA */}
                <div className="mt-9">
                    <Link to="/booking" className="inline-flex items-center gap-3 rounded-full bg-black px-8 py-4 text-sm font-medium text-white transition duration-300 hover:scale-105 hover:bg-black/85">
                        Book Appointment
                        <span>→</span>
                    </Link>
                </div>

                {/* Additional Info */}
                <p className="mt-7 text-xs uppercase tracking-wider text-black/35">
                    Walk-ins welcome · Appointments recommended
                </p>

            </div>
        </section>
    );
}

export default BookingCTA;