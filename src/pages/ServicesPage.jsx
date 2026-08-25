const categories = [
    {
        title: "Hair Services",
        description: "Precision cuts, styling and treatments tailored to you.",
        services: [
            {
                name: "Classic Haircut",
                description: "Clean, precise haircut tailored to your face shape.",
                price: "₹300",
                duration: "30 min",
            },
            {
                name: "Hair Styling",
                description: "Professional styling for everyday or special occasions.",
                price: "₹500",
                duration: "45 min",
            },
            {
                name: "Hair Spa",
                description: "Deep nourishment and repair for healthier hair.",
                price: "₹800",
                duration: "60 min",
            },
            {
                name: "Hair Color",
                description: "Professional color service with personalized consultation.",
                price: "₹1,500",
                duration: "90 min",
            },
        ],
    },
    {
        title: "Grooming",
        description: "Sharp, clean and effortless grooming services.",
        services: [
            {
                name: "Beard Styling",
                description: "Trim, shape and finish for a defined look.",
                price: "₹200",
                duration: "20 min",
            },
            {
                name: "Beard Spa",
                description: "Relaxing treatment for softer and healthier facial hair.",
                price: "₹350",
                duration: "30 min",
            },
            {
                name: "Head Massage",
                description: "Relaxing scalp massage designed to help you unwind.",
                price: "₹300",
                duration: "30 min",
            },
            {
                name: "Grooming Package",
                description: "Complete haircut, beard styling and head massage.",
                price: "₹1,000",
                duration: "90 min",
            },
        ],
    },
    {
        title: "Skin & Beauty",
        description: "Refreshing treatments designed to help you feel your best.",
        services: [
            {
                name: "Classic Facial",
                description: "Refreshing facial treatment for clean, glowing skin.",
                price: "₹600",
                duration: "45 min",
            },
            {
                name: "Deep Clean Facial",
                description: "Deep cleansing treatment for refreshed skin.",
                price: "₹900",
                duration: "60 min",
            },
            {
                name: "Face Cleanup",
                description: "Quick cleansing treatment for a fresh appearance.",
                price: "₹400",
                duration: "30 min",
            },
            {
                name: "Bridal Grooming",
                description: "Personalized grooming package for your special day.",
                price: "₹2,500",
                duration: "120 min",
            },
        ],
    },
];

function ServicesPage() {
    return (
        <main className="bg-white text-black">

            {/* Hero */}
            <section className="bg-black px-6 pb-24 pt-40 text-white lg:px-8 lg:pb-32">

                <div className="mx-auto max-w-7xl">

                    <p className="text-sm uppercase tracking-[0.3em] text-white/45">
                        Our Services
                    </p>

                    <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight sm:text-6xl md:text-7xl">
                        Everything you need
                        <br />
                        <span className="text-white/35">
                            to look your best.
                        </span>
                    </h1>

                    <p className="mt-7 max-w-xl text-base leading-7 text-white/55 sm:text-lg">
                        From everyday grooming to complete transformations,
                        discover services designed around your style.
                    </p>

                </div>

            </section>


            {/* Categories */}
            <section className="px-6 py-24 lg:px-8 lg:py-32">

                <div className="mx-auto max-w-7xl space-y-24">

                    {categories.map((category, categoryIndex) => (
                        <div key={category.title}>

                            {/* Category Header */}
                            <div className="grid gap-6 border-b border-black/10 pb-8 md:grid-cols-3">

                                <div>
                                    <span className="text-sm text-black/35">
                                        0{categoryIndex + 1}
                                    </span>

                                    <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                                        {category.title}
                                    </h2>
                                </div>

                                <p className="max-w-md text-sm leading-6 text-black/50 md:col-span-2 md:self-end">
                                    {category.description}
                                </p>

                            </div>


                            {/* Services */}
                            <div className="mt-8 divide-y divide-black/10">

                                {category.services.map((service, index) => (
                                    <div
                                        key={service.name}
                                        className="group grid gap-5 py-7 transition duration-300 md:grid-cols-12 md:items-center"
                                    >

                                        {/* Number */}
                                        <div className="text-sm text-black/30 md:col-span-1">
                                            {String(index + 1).padStart(2, "0")}
                                        </div>

                                        {/* Name */}
                                        <div className="md:col-span-4">
                                            <h3 className="text-xl font-medium transition group-hover:translate-x-1 sm:text-2xl">
                                                {service.name}
                                            </h3>
                                        </div>

                                        {/* Description */}
                                        <div className="text-sm leading-6 text-black/50 md:col-span-4">
                                            {service.description}
                                        </div>

                                        {/* Duration */}
                                        <div className="text-sm text-black/40 md:col-span-1">
                                            {service.duration}
                                        </div>

                                        {/* Price */}
                                        <div className="text-lg font-medium md:col-span-2 md:text-right">
                                            {service.price}
                                        </div>

                                    </div>
                                ))}

                            </div>

                        </div>
                    ))}

                </div>

            </section>


            {/* Packages */}
            <section className="bg-[#f5f3ef] px-6 py-24 lg:px-8 lg:py-32">

                <div className="mx-auto max-w-7xl">

                    <div className="max-w-2xl">

                        <p className="text-sm uppercase tracking-[0.3em] text-black/40">
                            Signature Packages
                        </p>

                        <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
                            More value.
                            <br />
                            <span className="text-black/35">
                                More confidence.
                            </span>
                        </h2>

                    </div>


                    <div className="mt-14 grid gap-4 md:grid-cols-3">

                        {/* Package 1 */}
                        <div className="bg-black p-8 text-white lg:p-10">
                            <p className="text-sm text-white/40">
                                Essential
                            </p>

                            <h3 className="mt-8 text-2xl font-medium">
                                Fresh Look
                            </h3>

                            <p className="mt-4 text-sm leading-6 text-white/50">
                                Haircut + Beard Styling
                            </p>

                            <div className="mt-10">
                                <span className="text-3xl font-semibold">
                                    ₹450
                                </span>
                            </div>

                            <a
                                href="/booking"
                                className="mt-8 inline-flex rounded-full border border-white/20 px-5 py-3 text-sm transition hover:bg-white hover:text-black"
                            >
                                Book Package →
                            </a>
                        </div>


                        {/* Package 2 */}
                        <div className="bg-white p-8 lg:p-10">
                            <p className="text-sm text-black/40">
                                Popular
                            </p>

                            <h3 className="mt-8 text-2xl font-medium">
                                Complete Grooming
                            </h3>

                            <p className="mt-4 text-sm leading-6 text-black/50">
                                Haircut + Beard + Head Massage
                            </p>

                            <div className="mt-10">
                                <span className="text-3xl font-semibold">
                                    ₹750
                                </span>
                            </div>

                            <a
                                href="/booking"
                                className="mt-8 inline-flex rounded-full border border-black px-5 py-3 text-sm transition hover:bg-black hover:text-white"
                            >
                                Book Package →
                            </a>
                        </div>


                        {/* Package 3 */}
                        <div className="bg-white p-8 lg:p-10">
                            <p className="text-sm text-black/40">
                                Premium
                            </p>

                            <h3 className="mt-8 text-2xl font-medium">
                                Luxe Experience
                            </h3>

                            <p className="mt-4 text-sm leading-6 text-black/50">
                                Hair Spa + Facial + Grooming
                            </p>

                            <div className="mt-10">
                                <span className="text-3xl font-semibold">
                                    ₹1,800
                                </span>
                            </div>

                            <a
                                href="/booking"
                                className="mt-8 inline-flex rounded-full border border-black px-5 py-3 text-sm transition hover:bg-black hover:text-white"
                            >
                                Book Package →
                            </a>
                        </div>

                    </div>

                </div>

            </section>


            {/* CTA */}
            <section className="px-6 py-24 text-center lg:px-8 lg:py-32">

                <p className="text-sm uppercase tracking-[0.3em] text-black/40">
                    Find Your Service
                </p>

                <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold sm:text-5xl md:text-6xl">
                    Ready to book
                    <br />
                    <span className="text-black/35">
                        your appointment?
                    </span>
                </h2>

                <a
                    href="/booking"
                    className="mt-9 inline-flex rounded-full bg-black px-8 py-4 text-sm font-medium text-white transition hover:scale-105"
                >
                    Book Appointment →
                </a>

            </section>

        </main>
    );
}

export default ServicesPage;