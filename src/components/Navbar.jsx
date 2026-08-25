import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Gallery", href: "/gallery" },
        { name: "Team", href: "/team" },
        { name: "Contact", href: "/contact" },
    ];

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">

                {/* Logo */}
                <Link
                    to="/"
                    onClick={closeMenu}
                    className="text-2xl font-semibold tracking-wide text-white"
                >
                    ✦ LuxeCut
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.href}
                            className={({ isActive }) =>
                                `text-sm transition-colors duration-300 ${isActive
                                    ? "text-white"
                                    : "text-gray-300 hover:text-white"
                                }`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>

                {/* Desktop CTA */}
                <Link
                    to="/booking"
                    className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition duration-300 hover:bg-gray-200 md:block"
                >
                    Book Appointment
                </Link>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="relative flex h-10 w-10 items-center justify-center text-white md:hidden"
                    aria-label="Toggle navigation menu"
                    aria-expanded={isOpen}
                    aria-controls="mobile-menu"
                >
                    <span
                        className={`absolute h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? "rotate-45" : "-translate-y-2"
                            }`}
                    />

                    <span
                        className={`absolute h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"
                            }`}
                    />

                    <span
                        className={`absolute h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? "-rotate-45" : "translate-y-2"
                            }`}
                    />
                </button>
            </nav>

            {/* Mobile Menu */}
            <div
                id="mobile-menu"
                className={`overflow-hidden border-t border-white/10 bg-black transition-all duration-500 ease-in-out md:hidden ${isOpen
                        ? "max-h-[500px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
            >
                <div className="px-6 py-6">
                    <div className="flex flex-col gap-5">

                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.href}
                                onClick={closeMenu}
                                className={({ isActive }) =>
                                    `text-sm transition-colors duration-300 ${isActive
                                        ? "text-white"
                                        : "text-gray-300 hover:text-white"
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}

                        {/* Mobile CTA */}
                        <Link
                            to="/booking"
                            onClick={closeMenu}
                            className="mt-2 rounded-full bg-white px-5 py-3 text-center font-medium text-black transition duration-300 hover:bg-gray-200"
                        >
                            Book Appointment
                        </Link>

                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;