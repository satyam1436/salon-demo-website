const testimonials = [
  {
    quote:
      "The experience at LuxeCut was absolutely amazing. The stylist understood exactly what I wanted and the final result was even better than I expected.",
    name: "Ananya Singh",
    service: "Hair Styling",
  },
  {
    quote:
      "I've finally found a salon I can trust. The staff is professional, friendly and the attention to detail is excellent.",
    name: "Rohan Mehta",
    service: "Haircut",
  },
  {
    quote:
      "Beautiful space, great service and very professional team. Booking an appointment was also incredibly easy.",
    name: "Neha Verma",
    service: "Facial",
  },
];

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-black px-6 py-24 text-white lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="text-center">

          <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-white/40">
            Client Stories
          </p>

          <h2 className="mx-auto max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Don't just take
            <br />
            <span className="text-white/35">
              our word for it.
            </span>
          </h2>

        </div>

        {/* Featured Testimonial */}
        <div className="mx-auto mt-16 max-w-4xl text-center">

          {/* Stars */}
          <div className="mb-8 flex justify-center gap-1 text-sm">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>

          <blockquote className="text-2xl font-light leading-relaxed text-white/90 sm:text-3xl md:text-4xl">
            “{testimonials[0].quote}”
          </blockquote>

          <div className="mt-8">
            <p className="font-medium">
              {testimonials[0].name}
            </p>

            <p className="mt-1 text-sm text-white/40">
              {testimonials[0].service}
            </p>
          </div>

        </div>

        {/* Other Testimonials */}
        <div className="mt-20 grid border-l border-t border-white/10 md:grid-cols-2">

          {testimonials.slice(1).map((testimonial) => (
            <div
              key={testimonial.name}
              className="border-b border-r border-white/10 p-8 sm:p-10"
            >

              {/* Stars */}
              <div className="mb-7 flex gap-1 text-xs">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>

              <p className="max-w-xl text-base leading-7 text-white/65">
                “{testimonial.quote}”
              </p>

              <div className="mt-8">
                <p className="text-sm font-medium">
                  {testimonial.name}
                </p>

                <p className="mt-1 text-xs text-white/35">
                  {testimonial.service}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;