import { useState } from "react";

const services = [
    {
        id: 1,
        name: "Haircut",
        price: 300,
        duration: "30 min",
    },
    {
        id: 2,
        name: "Hair Styling",
        price: 500,
        duration: "45 min",
    },
    {
        id: 3,
        name: "Beard Styling",
        price: 200,
        duration: "20 min",
    },
    {
        id: 4,
        name: "Hair Spa",
        price: 800,
        duration: "60 min",
    },
    {
        id: 5,
        name: "Facial",
        price: 600,
        duration: "45 min",
    },
    {
        id: 6,
        name: "Hair Color",
        price: 1500,
        duration: "90 min",
    },
];

const timeSlots = [
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "02:00 PM",
    "02:30 PM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
    "04:30 PM",
    "05:00 PM",
    "05:30 PM",
    "06:00 PM",
    "06:30 PM",
    "07:00 PM",
];

function BookingPage() {
    const [selectedService, setSelectedService] = useState(null);
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("");

    const [customer, setCustomer] = useState({
        name: "",
        phone: "",
        email: "",
    });

    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleCustomerChange = (event) => {
        const { name, value } = event.target;

        setCustomer((previous) => ({
            ...previous,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (
            !selectedService ||
            !selectedDate ||
            !selectedTime ||
            !customer.name ||
            !customer.phone
        ) {
            alert("Please complete all required fields.");
            return;
        }

        setIsConfirmed(true);
    };

    if (isConfirmed) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-[#f5f3ef] px-6 py-32 text-black">
                <div className="w-full max-w-xl text-center">

                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-black text-2xl text-white">
                        ✓
                    </div>

                    <p className="mt-8 text-sm uppercase tracking-[0.3em] text-black/40">
                        Appointment Request
                    </p>

                    <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">
                        You're all set.
                    </h1>

                    <p className="mx-auto mt-5 max-w-md text-sm leading-6 text-black/55">
                        Your appointment request has been recorded for the
                        demo. We'll confirm your appointment shortly.
                    </p>

                    <div className="mt-10 border border-black/10 bg-white p-7 text-left">

                        <div className="flex justify-between border-b border-black/10 pb-4">
                            <span className="text-sm text-black/45">
                                Service
                            </span>

                            <span className="text-sm font-medium">
                                {selectedService.name}
                            </span>
                        </div>

                        <div className="flex justify-between border-b border-black/10 py-4">
                            <span className="text-sm text-black/45">
                                Date
                            </span>

                            <span className="text-sm font-medium">
                                {selectedDate}
                            </span>
                        </div>

                        <div className="flex justify-between border-b border-black/10 py-4">
                            <span className="text-sm text-black/45">
                                Time
                            </span>

                            <span className="text-sm font-medium">
                                {selectedTime}
                            </span>
                        </div>

                        <div className="flex justify-between pt-4">
                            <span className="text-sm text-black/45">
                                Estimated Price
                            </span>

                            <span className="text-sm font-medium">
                                ₹{selectedService.price}
                            </span>
                        </div>

                    </div>

                    <a
                        href="/"
                        className="mt-8 inline-flex rounded-full bg-black px-7 py-3.5 text-sm font-medium text-white transition hover:scale-105"
                    >
                        Back to Home
                    </a>

                </div>
            </main>
        );
    }

    return (
        <main className="bg-[#f5f3ef] px-6 pb-24 pt-36 text-black lg:px-8 lg:pb-32">

            <div className="mx-auto max-w-7xl">

                {/* Header */}
                <div className="max-w-3xl">

                    <p className="text-sm uppercase tracking-[0.3em] text-black/40">
                        Book an Appointment
                    </p>

                    <h1 className="mt-5 text-5xl font-semibold leading-tight sm:text-6xl md:text-7xl">
                        Your next look
                        <br />
                        <span className="text-black/35">
                            starts here.
                        </span>
                    </h1>

                    <p className="mt-6 max-w-xl text-base leading-7 text-black/55">
                        Choose your service, select a convenient time and
                        tell us a little about yourself.
                    </p>

                </div>


                {/* Booking Layout */}
                <form
                    onSubmit={handleSubmit}
                    className="mt-16 grid gap-8 lg:grid-cols-[1fr_380px]"
                >

                    {/* Left */}
                    <div className="space-y-8">

                        {/* Service */}
                        <section className="bg-white p-7 sm:p-10">

                            <div className="flex items-center justify-between">
                                <div>
                                    <span className="text-xs text-black/35">
                                        STEP 01
                                    </span>

                                    <h2 className="mt-2 text-2xl font-semibold">
                                        Choose a service
                                    </h2>
                                </div>
                            </div>

                            <div className="mt-7 grid gap-3 sm:grid-cols-2">

                                {services.map((service) => {
                                    const isSelected =
                                        selectedService?.id === service.id;

                                    return (
                                        <button
                                            type="button"
                                            key={service.id}
                                            onClick={() => setSelectedService(service)}
                                            className={`border p-5 text-left transition duration-300 ${isSelected
                                                    ? "border-black bg-black text-white"
                                                    : "border-black/10 bg-white hover:border-black/40"
                                                }`}
                                        >
                                            <div className="flex items-start justify-between gap-4">

                                                <div>
                                                    <h3 className="font-medium">
                                                        {service.name}
                                                    </h3>

                                                    <p
                                                        className={`mt-1 text-xs ${isSelected
                                                                ? "text-white/50"
                                                                : "text-black/40"
                                                            }`}
                                                    >
                                                        {service.duration}
                                                    </p>
                                                </div>

                                                <span className="text-sm font-medium">
                                                    ₹{service.price}
                                                </span>

                                            </div>
                                        </button>
                                    );
                                })}

                            </div>

                        </section>


                        {/* Date & Time */}
                        <section className="bg-white p-7 sm:p-10">

                            <span className="text-xs text-black/35">
                                STEP 02
                            </span>

                            <h2 className="mt-2 text-2xl font-semibold">
                                Choose date & time
                            </h2>

                            <div className="mt-7">

                                <label
                                    htmlFor="appointment-date"
                                    className="text-sm font-medium"
                                >
                                    Select Date
                                </label>

                                <input
                                    id="appointment-date"
                                    type="date"
                                    value={selectedDate}
                                    onChange={(event) =>
                                        setSelectedDate(event.target.value)
                                    }
                                    min={new Date().toISOString().split("T")[0]}
                                    className="mt-3 w-full border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-black"
                                />

                            </div>


                            <div className="mt-8">

                                <p className="text-sm font-medium">
                                    Available Times
                                </p>

                                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">

                                    {timeSlots.map((time) => {
                                        const isSelected = selectedTime === time;

                                        return (
                                            <button
                                                type="button"
                                                key={time}
                                                onClick={() => setSelectedTime(time)}
                                                className={`rounded-full border px-3 py-2.5 text-sm transition duration-300 ${isSelected
                                                        ? "border-black bg-black text-white"
                                                        : "border-black/10 hover:border-black"
                                                    }`}
                                            >
                                                {time}
                                            </button>
                                        );
                                    })}

                                </div>

                            </div>

                        </section>


                        {/* Customer Details */}
                        <section className="bg-white p-7 sm:p-10">

                            <span className="text-xs text-black/35">
                                STEP 03
                            </span>

                            <h2 className="mt-2 text-2xl font-semibold">
                                Your details
                            </h2>

                            <div className="mt-7 space-y-6">

                                <div>
                                    <label
                                        htmlFor="customer-name"
                                        className="text-sm font-medium"
                                    >
                                        Full Name *
                                    </label>

                                    <input
                                        id="customer-name"
                                        name="name"
                                        type="text"
                                        value={customer.name}
                                        onChange={handleCustomerChange}
                                        placeholder="Enter your name"
                                        className="mt-2 w-full border-b border-black/15 bg-transparent px-0 py-3 text-sm outline-none focus:border-black"
                                    />
                                </div>


                                <div>
                                    <label
                                        htmlFor="customer-phone"
                                        className="text-sm font-medium"
                                    >
                                        Phone Number *
                                    </label>

                                    <input
                                        id="customer-phone"
                                        name="phone"
                                        type="tel"
                                        value={customer.phone}
                                        onChange={handleCustomerChange}
                                        placeholder="Enter your phone number"
                                        className="mt-2 w-full border-b border-black/15 bg-transparent px-0 py-3 text-sm outline-none focus:border-black"
                                    />
                                </div>


                                <div>
                                    <label
                                        htmlFor="customer-email"
                                        className="text-sm font-medium"
                                    >
                                        Email Address
                                    </label>

                                    <input
                                        id="customer-email"
                                        name="email"
                                        type="email"
                                        value={customer.email}
                                        onChange={handleCustomerChange}
                                        placeholder="Enter your email"
                                        className="mt-2 w-full border-b border-black/15 bg-transparent px-0 py-3 text-sm outline-none focus:border-black"
                                    />
                                </div>

                            </div>

                        </section>

                    </div>


                    {/* Booking Summary */}
                    <aside className="h-fit bg-black p-7 text-white lg:sticky lg:top-28 sm:p-8">

                        <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                            Booking Summary
                        </p>

                        <h2 className="mt-3 text-2xl font-semibold">
                            Your appointment
                        </h2>


                        <div className="mt-8 space-y-5">

                            <div className="border-b border-white/10 pb-5">
                                <p className="text-xs text-white/35">
                                    Service
                                </p>

                                <p className="mt-1 text-sm">
                                    {selectedService
                                        ? selectedService.name
                                        : "Not selected"}
                                </p>
                            </div>


                            <div className="border-b border-white/10 pb-5">
                                <p className="text-xs text-white/35">
                                    Date
                                </p>

                                <p className="mt-1 text-sm">
                                    {selectedDate || "Not selected"}
                                </p>
                            </div>


                            <div className="border-b border-white/10 pb-5">
                                <p className="text-xs text-white/35">
                                    Time
                                </p>

                                <p className="mt-1 text-sm">
                                    {selectedTime || "Not selected"}
                                </p>
                            </div>

                        </div>


                        <div className="mt-8 flex items-center justify-between">
                            <span className="text-sm text-white/45">
                                Estimated Total
                            </span>

                            <span className="text-2xl font-semibold">
                                {selectedService
                                    ? `₹${selectedService.price}`
                                    : "₹0"}
                            </span>
                        </div>


                        <button
                            type="submit"
                            className="mt-8 w-full rounded-full bg-white px-6 py-4 text-sm font-semibold text-black transition duration-300 hover:scale-[1.02] hover:bg-white/90"
                        >
                            Confirm Appointment →
                        </button>

                        <p className="mt-5 text-center text-xs leading-5 text-white/30">
                            This is a demo booking experience.
                            Your appointment will be confirmed by the salon.
                        </p>

                    </aside>

                </form>

            </div>

        </main>
    );
}

export default BookingPage;