import salonImage from "../assets/images/salon/hero.jpg"
import { Link } from "react-router-dom";

function AboutPage() {
    return (
        <main className="bg-white text-black">

            {/* Hero */}
            <section className="relative flex min-h-[70vh] items-end overflow-hidden">

                <img
                    src={salonImage}
                    alt="LuxeCut Studio"
                    className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-black/60" />

                <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-40 lg:px-8">

                    <p className="mb-5 text-sm uppercase tracking-[0.3em] text-white/60">
                        About LuxeCut
                    </p>

                    <h1 className="max-w-4xl text-5xl font-semibold leading-tight text-white sm:text-6xl md:text-7xl">
                        More than a salon.
                        <br />
                        <span className="text-white/50">
                            A place to be yourself.
                        </span>
                    </h1>

                </div>
            </section>


            {/* Our Story */}
            <section className="px-6 py-24 lg:px-8 lg:py-32">

                <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:gap-24">

                    <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-black/40">
                            Our Story
                        </p>
                    </div>

                    <div className="max-w-2xl">

                        <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
                            We believe your style should feel like you.
                        </h2>

                        <div className="mt-7 space-y-5 text-base leading-7 text-black/60">

                            <p>
                                LuxeCut Studio was created with a simple idea:
                                great grooming should feel personal, comfortable
                                and effortless.
                            </p>

                            <p>
                                From precision haircuts to complete grooming
                                experiences, our team combines modern techniques
                                with years of experience to create styles that
                                fit each individual.
                            </p>

                            <p>
                                We focus on the details, listen to what our clients
                                want and make every visit an experience worth
                                coming back for.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* Philosophy */}
            <section className="bg-[#f5f3ef] px-6 py-24 lg:px-8 lg:py-32">

                <div className="mx-auto max-w-7xl">

                    <div className="max-w-3xl">

                        <p className="text-sm uppercase tracking-[0.3em] text-black/40">
                            Our Philosophy
                        </p>

                        <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
                            Great style starts with
                            <span className="text-black/35">
                                {" "}great attention.
                            </span>
                        </h2>

                    </div>


                    <div className="mt-16 grid gap-px border border-black/10 bg-black/10 md:grid-cols-3">

                        <div className="bg-[#f5f3ef] p-8 lg:p-10">
                            <span className="text-sm text-black/35">01</span>

                            <h3 className="mt-12 text-2xl font-medium">
                                Listen
                            </h3>

                            <p className="mt-4 text-sm leading-6 text-black/55">
                                We understand what you want before we pick up
                                the scissors.
                            </p>
                        </div>


                        <div className="bg-[#f5f3ef] p-8 lg:p-10">
                            <span className="text-sm text-black/35">02</span>

                            <h3 className="mt-12 text-2xl font-medium">
                                Create
                            </h3>

                            <p className="mt-4 text-sm leading-6 text-black/55">
                                We combine technique and creativity to create
                                a look that works for you.
                            </p>
                        </div>


                        <div className="bg-[#f5f3ef] p-8 lg:p-10">
                            <span className="text-sm text-black/35">03</span>

                            <h3 className="mt-12 text-2xl font-medium">
                                Refine
                            </h3>

                            <p className="mt-4 text-sm leading-6 text-black/55">
                                Every detail matters, from the first consultation
                                to the final finish.
                            </p>
                        </div>

                    </div>

                </div>

            </section>


            {/* Stats */}
            <section className="bg-black px-6 py-20 text-white lg:px-8">

                <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-12 sm:grid-cols-4">

                    <div>
                        <p className="text-4xl font-semibold">5+</p>
                        <p className="mt-2 text-xs uppercase tracking-wider text-white/40">
                            Years Experience
                        </p>
                    </div>

                    <div>
                        <p className="text-4xl font-semibold">10K+</p>
                        <p className="mt-2 text-xs uppercase tracking-wider text-white/40">
                            Happy Clients
                        </p>
                    </div>

                    <div>
                        <p className="text-4xl font-semibold">12</p>
                        <p className="mt-2 text-xs uppercase tracking-wider text-white/40">
                            Expert Stylists
                        </p>
                    </div>

                    <div>
                        <p className="text-4xl font-semibold">25+</p>
                        <p className="mt-2 text-xs uppercase tracking-wider text-white/40">
                            Services
                        </p>
                    </div>

                </div>

            </section>


            {/* CTA */}
            <section className="px-6 py-24 text-center lg:px-8 lg:py-32">

                <p className="text-sm uppercase tracking-[0.3em] text-black/40">
                    Ready when you are
                </p>

                <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold sm:text-5xl md:text-6xl">
                    Your next look
                    <br />
                    <span className="text-black/35">
                        starts here.
                    </span>
                </h2>

                <Link to="/booking" className="mt-9 inline-flex rounded-full bg-black px-8 py-4 text-sm font-medium text-white transition hover:scale-105">
                    Book Appointment
                </Link>

            </section>

        </main>
    );
}

export default AboutPage;