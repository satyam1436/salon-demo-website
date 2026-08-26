import { Link } from "react-router-dom";

const services = [
    {
        number: "01",
        name: "Haircut",
        description:
            "Precision cuts tailored to your face shape, style and personality.",
        price: "₹300",
        duration: "30 min",
    },
    {
        number: "02",
        name: "Hair Styling",
        description:
            "Signature styling designed for everyday confidence or special occasions.",
        price: "₹500",
        duration: "45 min",
    },
    {
        number: "03",
        name: "Beard Styling",
        description:
            "Expert trimming, shaping and finishing for a clean, defined look.",
        price: "₹200",
        duration: "20 min",
    },
    {
        number: "04",
        name: "Hair Spa",
        description:
            "Deep nourishment and repair treatment for healthier, smoother hair.",
        price: "₹800",
        duration: "60 min",
    },
    {
        number: "05",
        name: "Facial",
        description:
            "Refreshing skincare treatment designed to leave your skin feeling renewed.",
        price: "₹600",
        duration: "45 min",
    },
    {
        number: "06",
        name: "Hair Color",
        description:
            "Professional coloring with a personalized consultation and finish.",
        price: "₹1,500",
        duration: "90 min",
    },
];

function Services() {
    return (
        <section
            id="services"
            className="bg-[#f5f3ef] px-6 py-24 text-black lg:px-8 lg:py-32"
        >
            <div className="mx-auto max-w-7xl">

                {/* Section Header */}
                <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                    <div>
                        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-black/50">
                            What We Offer
                        </p>

                        <h2 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
                            Services designed
                            <br />
                            <span className="text-black/40">around you.</span>
                        </h2>
                    </div>

                    <p className="max-w-sm text-sm leading-6 text-black/60 md:text-right">
                        From everyday grooming to complete transformations,
                        every service is tailored to your individual style.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid gap-px overflow-hidden border border-black/10 bg-black/10 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => (
                        <div
                            key={service.number}
                            className="group bg-[#f5f3ef] p-7 transition-colors duration-300 hover:bg-black hover:text-white sm:p-9"
                        >
                            {/* Number */}
                            <div className="mb-12 flex items-center justify-between">
                                <span className="text-sm text-black/40 transition-colors duration-300 group-hover:text-white/40">
                                    {service.number}
                                </span>

                                <span className="text-xl text-black/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white/60">
                                    ↗
                                </span>
                            </div>

                            {/* Service Name */}
                            <h3 className="text-2xl font-medium sm:text-3xl">
                                {service.name}
                            </h3>

                            {/* Description */}
                            <p className="mt-4 min-h-[72px] text-sm leading-6 text-black/55 transition-colors duration-300 group-hover:text-white/60">
                                {service.description}
                            </p>

                            {/* Price + Duration */}
                            <div className="mt-8 flex items-center justify-between border-t border-black/10 pt-5 transition-colors duration-300 group-hover:border-white/15">
                                <span className="text-lg font-medium">
                                    {service.price}
                                </span>

                                <span className="text-sm text-black/45 transition-colors duration-300 group-hover:text-white/50">
                                    {service.duration}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-10 text-center">
                    <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-black px-6 py-3 text-sm font-medium transition-all duration-300 hover:bg-black hover:text-white">
                        View All Services
                        <span>→</span>
                    </Link>
                </div>

            </div>
        </section>
    );
}

export default Services;