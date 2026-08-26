import galleryImage1 from "../assets/images/salon/gallery/gallery-01.jpg"
import galleryImage2 from "../assets/images/salon/gallery/gallery-02.jpg"
import galleryImage3 from "../assets/images/salon/gallery/gallery-03.jpg"
import galleryImage4 from "../assets/images/salon/gallery/gallery-04.jpg"
import galleryImage5 from "../assets/images/salon/gallery/gallery-05.jpg"
import { Link } from "react-router-dom";

const images = [
    {
        src: galleryImage1,
        alt: "Modern salon interior",
        className: "md:row-span-2",
    },
    {
        src: galleryImage2,
        alt: "Professional hairstyling",
        className: "",
    },
    {
        src: galleryImage3,
        alt: "Professional barber service",
        className: "md:row-span-2",
    },
    {
        src: galleryImage4,
        alt: "Beauty salon service",
        className: "",
    },
    {
        src: galleryImage5,
        alt: "Barber styling",
        className: "",
    },
];

function Gallery() {
    return (
        <section
            id="gallery"
            className="bg-[#f5f3ef] px-6 py-24 text-black lg:px-8 lg:py-32"
        >
            <div className="mx-auto max-w-7xl">

                {/* Header */}
                <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">

                    <div>
                        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-black/45">
                            Our Gallery
                        </p>

                        <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
                            A glimpse into
                            <br />
                            <span className="text-black/35">
                                the LuxeCut experience.
                            </span>
                        </h2>
                    </div>

                    <p className="max-w-sm text-sm leading-6 text-black/55 md:text-right">
                        From the space we create to the styles we deliver,
                        every detail is designed to make you feel your best.
                    </p>

                </div>

                {/* Gallery */}
                <div className="grid auto-rows-[260px] grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">

                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`group relative overflow-hidden ${image.className}`}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                loading="lazy"
                                className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/20" />

                            {/* Image Number */}
                            <span className="absolute bottom-4 left-4 text-xs font-medium text-white opacity-0 transition duration-500 group-hover:opacity-100">
                                0{index + 1}
                            </span>
                        </div>
                    ))}

                </div>

                {/* CTA */}
                <div className="mt-10 text-center">
                    <Link to="/booking" className="inline-flex items-center gap-2 rounded-full border border-black px-6 py-3 text-sm font-medium transition duration-300 hover:bg-black hover:text-white">
                        Book Your Appointment
                        <span>→</span>
                    </Link>
                </div>

            </div>
        </section>
    );
}

export default Gallery;