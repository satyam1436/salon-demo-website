import { Link } from "react-router-dom";

const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Team", href: "/team" },
    { name: "Contact", href: "/contact" },
];

function Footer() {
    return (
        <footer className="bg-black px-6 py-16 text-white lg:px-8 lg:py-20">
            <div className="mx-auto max-w-7xl">

                {/* Main Footer */}
                <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-2 lg:grid-cols-4">

                    {/* Brand */}
                    <div className="lg:col-span-1">

                        <Link
                            to="/"
                            className="text-2xl font-semibold tracking-wide"
                        >
                            ✦ LuxeCut
                        </Link>

                        <p className="mt-5 max-w-xs text-sm leading-6 text-white/45">
                            Premium hair, beauty and grooming services
                            designed around your personal style.
                        </p>

                        <Link
                            to="/booking"
                            className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm transition duration-300 hover:bg-white hover:text-black"
                        >
                            Book Appointment
                            <span>→</span>
                        </Link>

                    </div>


                    {/* Quick Links */}
                    <div>

                        <h3 className="text-sm font-medium uppercase tracking-wider text-white/40">
                            Explore
                        </h3>

                        <div className="mt-5 flex flex-col gap-3">

                            {quickLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className="w-fit text-sm text-white/65 transition duration-300 hover:text-white"
                                >
                                    {link.name}
                                </Link>
                            ))}

                        </div>

                    </div>


                    {/* Contact */}
                    <div>

                        <h3 className="text-sm font-medium uppercase tracking-wider text-white/40">
                            Contact
                        </h3>

                        <div className="mt-5 flex flex-col gap-3 text-sm text-white/65">

                            <a
                                href="tel:+919876543210"
                                className="transition hover:text-white"
                            >
                                +91 98765 43210
                            </a>

                            <a
                                href="mailto:hello@luxecut.in"
                                className="transition hover:text-white"
                            >
                                hello@luxecut.in
                            </a>

                            <p className="max-w-xs leading-6">
                                Baridih, Jamshedpur,
                                <br />
                                Jharkhand, India
                            </p>

                        </div>

                    </div>


                    {/* Opening Hours */}
                    <div>

                        <h3 className="text-sm font-medium uppercase tracking-wider text-white/40">
                            Opening Hours
                        </h3>

                        <div className="mt-5 space-y-3 text-sm">

                            <div className="flex justify-between gap-6 text-white/65">
                                <span>Mon – Sat</span>
                                <span>10 AM – 8 PM</span>
                            </div>

                            <div className="flex justify-between gap-6 text-white/65">
                                <span>Sunday</span>
                                <span>11 AM – 6 PM</span>
                            </div>

                        </div>

                    </div>

                </div>


                {/* Bottom Footer */}
                <div className="flex flex-col gap-5 pt-7 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">

                    <p>
                        {/* © 2026 LuxeCut Studio. All rights reserved. */}
                        © 2026 LuxeCut Studio
                        <br />
                        Concept website for demonstration purposes
                    </p>

                    <div className="flex gap-5">

                        <a
                            href="#"
                            className="transition hover:text-white"
                        >
                            Instagram
                        </a>

                        <a
                            href="#"
                            className="transition hover:text-white"
                        >
                            Facebook
                        </a>

                    </div>

                </div>

            </div>
        </footer>
    );
}

export default Footer;