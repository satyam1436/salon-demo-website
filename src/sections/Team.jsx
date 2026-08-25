import stylist1 from "../assets/images/salon/team/stylist-01.jpg"
import stylist2 from "../assets/images/salon/team/stylist-02.jpg"
import stylist3 from "../assets/images/salon/team/stylist-03.jpg"

const team = [
    {
        name: "Rahul Sharma",
        role: "Senior Hair Stylist",
        image:
            stylist2,
        instagram: "#",
    },
    {
        name: "Priya Mehta",
        role: "Beauty Specialist",
        image:
            stylist1,
        instagram: "#",
    },
    {
        name: "Aman Verma",
        role: "Grooming Expert",
        image:
            stylist3,
        instagram: "#",
    },
];

function Team() {
    return (
        <section
            id="team"
            className="bg-white px-6 py-24 text-black lg:px-8 lg:py-32"
        >
            <div className="mx-auto max-w-7xl">

                {/* Header */}
                <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">

                    <div>
                        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-black/45">
                            Our Experts
                        </p>

                        <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
                            Meet the people
                            <br />
                            <span className="text-black/35">
                                behind your style.
                            </span>
                        </h2>
                    </div>

                    <p className="max-w-sm text-sm leading-6 text-black/55 md:text-right">
                        Skilled professionals who bring experience,
                        creativity and attention to every appointment.
                    </p>

                </div>

                {/* Team Grid */}
                <div className="grid gap-8 md:grid-cols-3">

                    {team.map((member) => (
                        <div key={member.name} className="group">

                            {/* Image */}
                            <div className="aspect-[4/5] overflow-hidden bg-gray-100">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    loading="lazy"
                                    className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                                />
                            </div>

                            {/* Info */}
                            <div className="flex items-start justify-between border-b border-black/10 py-5">

                                <div>
                                    <h3 className="text-xl font-medium">
                                        {member.name}
                                    </h3>

                                    <p className="mt-1 text-sm text-black/50">
                                        {member.role}
                                    </p>
                                </div>

                                {/* Instagram */}
                                <a
                                    href={member.instagram}
                                    aria-label={`${member.name} Instagram`}
                                    className="flex h-9 w-9 items-center justify-center rounded-full border border-black/15 text-xs transition duration-300 hover:bg-black hover:text-white"
                                >
                                    IG
                                </a>

                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default Team;