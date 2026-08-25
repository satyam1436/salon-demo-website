const features = [
    {
        number: "01",
        title: "Expert Stylists",
        description:
            "Our experienced professionals understand modern trends while keeping your personal style at the center.",
    },
    {
        number: "02",
        title: "Premium Products",
        description:
            "We use carefully selected professional products to deliver quality results while caring for your hair and skin.",
    },
    {
        number: "03",
        title: "Personalized Experience",
        description:
            "Every appointment starts with understanding what you want, so your service feels truly tailored to you.",
    },
    {
        number: "04",
        title: "Easy Booking",
        description:
            "Choose your service, pick a convenient time and book your appointment without waiting on the phone.",
    },
];

function WhyChooseUs() {
    return (
        <section
            id="why-us"
            className="bg-black px-6 py-24 text-white lg:px-8 lg:py-32"
        >
            <div className="mx-auto max-w-7xl">

                {/* Header */}
                <div className="max-w-3xl">
                    <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-white/45">
                        Why LuxeCut
                    </p>

                    <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
                        A better salon
                        <br />
                        <span className="text-white/35">
                            experience starts here.
                        </span>
                    </h2>
                </div>

                {/* Features */}
                <div className="mt-16 grid border-l border-t border-white/10 sm:grid-cols-2">

                    {features.map((feature) => (
                        <div
                            key={feature.number}
                            className="group border-b border-r border-white/10 p-8 transition-colors duration-500 hover:bg-white hover:text-black sm:p-10 lg:p-12"
                        >

                            {/* Number */}
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-white/35 transition-colors duration-500 group-hover:text-black/40">
                                    {feature.number}
                                </span>

                                <span className="text-xl text-white/30 transition-all duration-500 group-hover:translate-x-1 group-hover:text-black/50">
                                    ↗
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="mt-16 text-2xl font-medium sm:text-3xl">
                                {feature.title}
                            </h3>

                            {/* Description */}
                            <p className="mt-4 max-w-md text-sm leading-6 text-white/50 transition-colors duration-500 group-hover:text-black/60">
                                {feature.description}
                            </p>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default WhyChooseUs;