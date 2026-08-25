import stylist1 from "../assets/images/salon/team/stylist-01.jpg"
import stylist2 from "../assets/images/salon/team/stylist-02.jpg"
import stylist3 from "../assets/images/salon/team/stylist-03.jpg"
import stylist4 from "../assets/images/salon/team/stylist-04.jpg"
import SalonTeam from "../assets/images/salon/team/salonTeam.jpg"

const team = [
    {
        name: "Rahul Sharma",
        role: "Senior Hair Stylist",
        specialty: "Precision Cuts & Styling",
        experience: "8+ Years",
        image:
            stylist2,
    },
    {
        name: "Priya Mehta",
        role: "Beauty Specialist",
        specialty: "Facial & Beauty Care",
        experience: "6+ Years",
        image:
            stylist1,
    },
    {
        name: "Aman Verma",
        role: "Grooming Expert",
        specialty: "Beard & Men's Grooming",
        experience: "7+ Years",
        image:
            stylist3,
    },
    {
        name: "Neha Kapoor",
        role: "Hair Color Specialist",
        specialty: "Color & Hair Treatments",
        experience: "5+ Years",
        image:
            stylist4,
    },
];

function TeamPage() {
    return (
        <main className="bg-white text-black">

            {/* Hero */}
            <section className="bg-black px-6 pb-24 pt-40 text-white lg:px-8 lg:pb-32">
                <div className="mx-auto max-w-7xl">

                    <p className="text-sm uppercase tracking-[0.3em] text-white/45">
                        Our Team
                    </p>

                    <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight sm:text-6xl md:text-7xl">
                        Meet the experts
                        <br />
                        <span className="text-white/35">
                            behind your style.
                        </span>
                    </h1>

                    <p className="mt-7 max-w-xl text-base leading-7 text-white/55 sm:text-lg">
                        Passionate professionals with the experience,
                        creativity and care to make every appointment count.
                    </p>

                </div>
            </section>


            {/* Team Grid */}
            <section className="px-6 py-24 lg:px-8 lg:py-32">

                <div className="mx-auto max-w-7xl">

                    <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2">

                        {team.map((member) => (
                            <article key={member.name} className="group">

                                {/* Image */}
                                <div className="aspect-[4/5] overflow-hidden bg-gray-100">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        loading="lazy"
                                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                    />
                                </div>

                                {/* Info */}
                                <div className="border-b border-black/10 py-6">

                                    <div className="flex items-start justify-between gap-4">

                                        <div>
                                            <h2 className="text-2xl font-medium">
                                                {member.name}
                                            </h2>

                                            <p className="mt-1 text-sm text-black/50">
                                                {member.role}
                                            </p>
                                        </div>

                                        <span className="text-xs uppercase tracking-wider text-black/35">
                                            {member.experience}
                                        </span>

                                    </div>

                                    <div className="mt-6 flex items-center justify-between">

                                        <p className="text-sm text-black/60">
                                            {member.specialty}
                                        </p>

                                        <a
                                            href="#"
                                            className="flex h-9 w-9 items-center justify-center rounded-full border border-black/15 text-xs transition duration-300 hover:bg-black hover:text-white"
                                        >
                                            IG
                                        </a>

                                    </div>

                                </div>

                            </article>
                        ))}

                    </div>

                </div>

            </section>


            {/* Founder Section */}
            <section className="bg-[#f5f3ef] px-6 py-24 lg:px-8 lg:py-32">

                <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">

                    <div className="aspect-[4/5] overflow-hidden">
                        <img
                            src={SalonTeam}
                            alt="LuxeCut team"
                            loading="lazy"
                            className="h-full w-full object-cover"
                        />
                    </div>

                    <div>

                        <p className="text-sm uppercase tracking-[0.3em] text-black/40">
                            The LuxeCut Approach
                        </p>

                        <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
                            Great results come from
                            <br />
                            <span className="text-black/35">
                                great relationships.
                            </span>
                        </h2>

                        <div className="mt-8 space-y-5 text-base leading-7 text-black/60">

                            <p>
                                We don't believe in one-size-fits-all styling.
                                Every client has a different personality, lifestyle
                                and idea of what makes them feel confident.
                            </p>

                            <p>
                                That's why our stylists take the time to understand
                                you before recommending a service or creating a look.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* CTA */}
            <section className="px-6 py-24 text-center lg:px-8 lg:py-32">

                <p className="text-sm uppercase tracking-[0.3em] text-black/40">
                    Meet Your Stylist
                </p>

                <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold sm:text-5xl md:text-6xl">
                    Find your perfect
                    <br />
                    <span className="text-black/35">
                        style partner.
                    </span>
                </h2>

                <a
                    href="/#booking"
                    className="mt-9 inline-flex rounded-full bg-black px-8 py-4 text-sm font-medium text-white transition hover:scale-105"
                >
                    Book Appointment →
                </a>

            </section>

        </main>
    );
}

export default TeamPage;