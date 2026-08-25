import aboutImage from "../assets/images/salon/about.jpg"

function About() {
    return (
        <section
            id="about"
            className="bg-white px-6 py-24 text-black lg:px-8 lg:py-32"
        >
            <div className="mx-auto max-w-7xl">

                <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

                    {/* Image */}
                    <div className="relative">
                        <div className="aspect-[4/5] overflow-hidden">
                            <img
                                src={aboutImage}
                                alt="LuxeCut salon interior"
                                className="h-full w-full object-cover transition duration-700 hover:scale-105"
                            />
                        </div>

                        {/* Experience Badge */}
                        <div className="absolute -bottom-6 -right-4 flex h-28 w-28 flex-col items-center justify-center rounded-full bg-black text-center text-white sm:-right-6">
                            <span className="text-2xl font-semibold">5+</span>
                            <span className="mt-1 text-[10px] uppercase tracking-widest text-white/60">
                                Years
                            </span>
                        </div>
                    </div>

                    {/* Content */}
                    <div>

                        <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-black/45">
                            About LuxeCut
                        </p>

                        <h2 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
                            More than a haircut.
                            <br />
                            <span className="text-black/35">
                                It's your signature.
                            </span>
                        </h2>

                        <div className="mt-8 max-w-xl space-y-5 text-base leading-7 text-black/60">
                            <p>
                                At LuxeCut Studio, we believe great grooming is more
                                than looking good. It's about feeling confident in
                                your own skin.
                            </p>

                            <p>
                                Our team of experienced stylists combines modern
                                techniques with personalized attention to create a
                                look that's uniquely yours.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="mt-12 grid max-w-xl grid-cols-2 border-y border-black/10 py-7 sm:grid-cols-3">

                            {/* Years */}
                            <div className="pr-4">
                                <p className="text-3xl font-semibold">5+</p>
                                <p className="mt-1 text-xs uppercase tracking-wider text-black/45">
                                    Years Experience
                                </p>
                            </div>

                            {/* Clients */}
                            <div className="border-l border-black/10 pl-4 sm:pl-6">
                                <p className="text-3xl font-semibold">10K+</p>
                                <p className="mt-1 text-xs uppercase tracking-wider text-black/45">
                                    Happy Clients
                                </p>
                            </div>

                            {/* Stylists */}
                            <div className="col-span-2 mt-6 border-t border-black/10 pt-6 sm:col-span-1 sm:mt-0 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0">
                                <p className="text-3xl font-semibold">12</p>
                                <p className="mt-1 text-xs uppercase tracking-wider text-black/45">
                                    Expert Stylists
                                </p>
                            </div>

                        </div>

                        {/* CTA */}
                        <a
                            href="#team"
                            className="mt-9 inline-flex items-center gap-3 text-sm font-medium"
                        >
                            Meet Our Team
                            <span className="transition-transform duration-300 hover:translate-x-1">
                                →
                            </span>
                        </a>

                    </div>
                </div>

            </div>
        </section>
    );
}

export default About;