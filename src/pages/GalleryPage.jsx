import { useState } from "react";
import interior from "../assets/images/salon/hero.jpg"
import galleryImage1 from "../assets/images/salon/gallery/gallery-01.jpg"
import galleryImage2 from "../assets/images/salon/gallery/gallery-02.jpg"
import galleryImage3 from "../assets/images/salon/gallery/gallery-03.jpg"
import galleryImage4 from "../assets/images/salon/gallery/gallery-04.jpg"
import galleryImage5 from "../assets/images/salon/gallery/gallery-05.jpg"

const categories = ["All", "Hair", "Grooming", "Interior"];

const images = [
    {
        id: 1,
        category: "Interior",
        title: "LuxeCut Studio",
        src: galleryImage1,
    },
    {
        id: 2,
        category: "Hair",
        title: "Signature Styling",
        src: galleryImage2,
    },
    {
        id: 3,
        category: "Grooming",
        title: "Classic Grooming",
        src: galleryImage3,
    },
    {
        id: 4,
        category: "Hair",
        title: "Modern Cut",
        src: galleryImage4,
    },
    {
        id: 5,
        category: "Grooming",
        title: "Beard Styling",
        src: galleryImage5,
    },
    {
        id: 6,
        category: "Interior",
        title: "Our Space",
        src: interior,
    },
];

function GalleryPage() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedImage, setSelectedImage] = useState(null);

    const filteredImages =
        activeCategory === "All"
            ? images
            : images.filter(
                (image) => image.category === activeCategory
            );

    return (
        <main className="bg-[#f5f3ef] text-black">

            {/* Hero */}
            <section className="bg-black px-6 pb-24 pt-40 text-white lg:px-8 lg:pb-32">

                <div className="mx-auto max-w-7xl">

                    <p className="text-sm uppercase tracking-[0.3em] text-white/45">
                        Our Gallery
                    </p>

                    <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight sm:text-6xl md:text-7xl">
                        Inspiration for
                        <br />
                        <span className="text-white/35">
                            your next look.
                        </span>
                    </h1>

                    <p className="mt-7 max-w-xl text-base leading-7 text-white/55 sm:text-lg">
                        Explore our work, our space and the styles we've
                        created for our clients.
                    </p>

                </div>

            </section>


            {/* Gallery */}
            <section className="px-6 py-20 lg:px-8 lg:py-28">

                <div className="mx-auto max-w-7xl">

                    {/* Filters */}
                    <div className="mb-12 flex flex-wrap gap-3">

                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`rounded-full px-5 py-2.5 text-sm transition duration-300 ${activeCategory === category
                                        ? "bg-black text-white"
                                        : "border border-black/15 text-black/60 hover:border-black hover:text-black"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}

                    </div>


                    {/* Image Grid */}
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

                        {filteredImages.map((image) => (
                            <button
                                key={image.id}
                                onClick={() => setSelectedImage(image)}
                                className="group relative aspect-[4/5] overflow-hidden text-left"
                            >

                                <img
                                    src={image.src}
                                    alt={image.title}
                                    loading="lazy"
                                    className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/40" />

                                {/* Info */}
                                <div className="absolute bottom-0 left-0 right-0 translate-y-3 p-6 text-white opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">

                                    <p className="text-xs uppercase tracking-widest text-white/60">
                                        {image.category}
                                    </p>

                                    <h3 className="mt-2 text-xl font-medium">
                                        {image.title}
                                    </h3>

                                </div>

                            </button>
                        ))}

                    </div>

                </div>

            </section>


            {/* CTA */}
            <section className="bg-white px-6 py-24 text-center lg:px-8 lg:py-32">

                <p className="text-sm uppercase tracking-[0.3em] text-black/40">
                    Your Turn
                </p>

                <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold sm:text-5xl md:text-6xl">
                    Inspired yet?
                    <br />
                    <span className="text-black/35">
                        Let's create your look.
                    </span>
                </h2>

                <a
                    href="/#booking"
                    className="mt-9 inline-flex rounded-full bg-black px-8 py-4 text-sm font-medium text-white transition hover:scale-105"
                >
                    Book Appointment →
                </a>

            </section>


            {/* Lightbox */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-6"
                    onClick={() => setSelectedImage(null)}
                >

                    <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:bg-white hover:text-black"
                        aria-label="Close image preview"
                    >
                        ✕
                    </button>

                    <div
                        className="relative max-h-[90vh] max-w-5xl"
                        onClick={(event) => event.stopPropagation()}
                    >

                        <img
                            src={selectedImage.src}
                            alt={selectedImage.title}
                            className="max-h-[80vh] max-w-full object-contain"
                        />

                        <div className="mt-4 text-center text-white">
                            <p className="text-xs uppercase tracking-widest text-white/50">
                                {selectedImage.category}
                            </p>

                            <h3 className="mt-1 text-xl">
                                {selectedImage.title}
                            </h3>
                        </div>

                    </div>

                </div>
            )}

        </main>
    );
}

export default GalleryPage;