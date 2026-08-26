import { Link } from "react-router-dom";

function ContactPage() {
    return (
        <main className="bg-white text-black">

            {/* Hero */}
            <section className="bg-black px-6 pb-24 pt-40 text-white lg:px-8 lg:pb-32">
                <div className="mx-auto max-w-7xl">

                    <p className="text-sm uppercase tracking-[0.3em] text-white/45">
                        Get In Touch
                    </p>

                    <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight sm:text-6xl md:text-7xl">
                        We'd love to
                        <br />
                        <span className="text-white/35">
                            hear from you.
                        </span>
                    </h1>

                    <p className="mt-7 max-w-xl text-base leading-7 text-white/55 sm:text-lg">
                        Have a question, want to know more about our services,
                        or simply want to say hello? We're here for you.
                    </p>

                </div>
            </section>


            {/* Contact Information + Form */}
            <section className="px-6 py-24 lg:px-8 lg:py-32">

                <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:gap-24">

                    {/* Contact Info */}
                    <div>

                        <p className="text-sm uppercase tracking-[0.3em] text-black/40">
                            Contact Details
                        </p>

                        <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
                            Let's talk about
                            <br />
                            <span className="text-black/35">
                                your next visit.
                            </span>
                        </h2>


                        <div className="mt-12 space-y-8">

                            {/* Phone */}
                            <div>
                                <p className="text-xs uppercase tracking-widest text-black/35">
                                    Phone
                                </p>

                                <a
                                    href="tel:+919876543210"
                                    className="mt-2 block text-lg transition hover:text-black/50"
                                >
                                    +91 98765 43210
                                </a>
                            </div>


                            {/* Email */}
                            <div>
                                <p className="text-xs uppercase tracking-widest text-black/35">
                                    Email
                                </p>

                                <a
                                    href="mailto:hello@luxecut.in"
                                    className="mt-2 block text-lg transition hover:text-black/50"
                                >
                                    hello@luxecut.in
                                </a>
                            </div>


                            {/* Address */}
                            <div>
                                <p className="text-xs uppercase tracking-widest text-black/35">
                                    Address
                                </p>

                                <p className="mt-2 max-w-sm text-lg leading-7">
                                    Baridih, Jamshedpur,
                                    <br />
                                    Jharkhand, India
                                </p>
                            </div>


                            {/* Opening Hours */}
                            <div>
                                <p className="text-xs uppercase tracking-widest text-black/35">
                                    Opening Hours
                                </p>

                                <div className="mt-3 max-w-sm space-y-2 text-sm text-black/60">
                                    <div className="flex justify-between border-b border-black/10 pb-2">
                                        <span>Monday – Saturday</span>
                                        <span>10 AM – 8 PM</span>
                                    </div>

                                    <div className="flex justify-between">
                                        <span>Sunday</span>
                                        <span>11 AM – 6 PM</span>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>


                    {/* Contact Form */}
                    <div className="bg-[#f5f3ef] p-7 sm:p-10 lg:p-12">

                        <div>
                            <p className="text-sm uppercase tracking-widest text-black/40">
                                Send an Enquiry
                            </p>

                            <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
                                How can we help?
                            </h2>
                        </div>


                        <form className="mt-10 space-y-6">

                            {/* Name */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="mb-2 block text-sm font-medium"
                                >
                                    Your Name
                                </label>

                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full border-b border-black/20 bg-transparent px-0 py-3 text-sm outline-none transition placeholder:text-black/30 focus:border-black"
                                />
                            </div>


                            {/* Phone */}
                            <div>
                                <label
                                    htmlFor="phone"
                                    className="mb-2 block text-sm font-medium"
                                >
                                    Phone Number
                                </label>

                                <input
                                    id="phone"
                                    type="tel"
                                    placeholder="Enter your phone number"
                                    className="w-full border-b border-black/20 bg-transparent px-0 py-3 text-sm outline-none transition placeholder:text-black/30 focus:border-black"
                                />
                            </div>


                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-2 block text-sm font-medium"
                                >
                                    Email Address
                                </label>

                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full border-b border-black/20 bg-transparent px-0 py-3 text-sm outline-none transition placeholder:text-black/30 focus:border-black"
                                />
                            </div>


                            {/* Message */}
                            <div>
                                <label
                                    htmlFor="message"
                                    className="mb-2 block text-sm font-medium"
                                >
                                    Message
                                </label>

                                <textarea
                                    id="message"
                                    rows="4"
                                    placeholder="Tell us how we can help..."
                                    className="w-full resize-none border-b border-black/20 bg-transparent px-0 py-3 text-sm outline-none transition placeholder:text-black/30 focus:border-black"
                                />
                            </div>


                            {/* Submit */}
                            <button
                                type="submit"
                                className="mt-3 inline-flex items-center gap-3 rounded-full bg-black px-7 py-3.5 text-sm font-medium text-white transition duration-300 hover:scale-105"
                            >
                                Send Enquiry
                                <span>→</span>
                            </button>

                        </form>

                    </div>

                </div>

            </section>


            {/* Map */}
            <section className="px-6 pb-24 lg:px-8 lg:pb-32">

                <div className="mx-auto max-w-7xl">

                    <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

                        <div>
                            <p className="text-sm uppercase tracking-[0.3em] text-black/40">
                                Find Us
                            </p>

                            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                                Visit LuxeCut Studio
                            </h2>
                        </div>

                        <a
                            href="https://www.google.com/maps"
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm font-medium underline underline-offset-4"
                        >
                            Get Directions →
                        </a>

                    </div>


                    {/* Temporary Map */}
                    <div className="h-[400px] overflow-hidden bg-[#f5f3ef] sm:h-[500px]">

                        <iframe
                            title="LuxeCut Studio Location"
                            src="https://www.google.com/maps?q=Jamshedpur,Jharkhand&output=embed"
                            className="h-full w-full border-0 grayscale"
                            loading="lazy"
                        />

                    </div>

                </div>

            </section>


            {/* CTA */}
            <section className="bg-black px-6 py-24 text-center text-white lg:px-8 lg:py-32">

                <p className="text-sm uppercase tracking-[0.3em] text-white/40">
                    Ready to Visit?
                </p>

                <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold sm:text-5xl md:text-6xl">
                    Your next look
                    <br />
                    <span className="text-white/35">
                        is just a booking away.
                    </span>
                </h2>

                <Link to="/booking" className="mt-9 inline-flex rounded-full bg-black px-8 py-4 text-sm font-medium text-white transition hover:scale-105">
                    Book Appointment →
                </Link>

            </section>

        </main>
    );
}

export default ContactPage;