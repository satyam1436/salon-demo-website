import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-black px-6 text-center text-white">

            <div className="max-w-xl">

                <p className="text-sm uppercase tracking-[0.3em] text-white/40">
                    Page Not Found
                </p>

                <h1 className="mt-5 text-7xl font-semibold tracking-tight sm:text-8xl">
                    404
                </h1>

                <h2 className="mt-5 text-2xl font-medium sm:text-3xl">
                    Looks like you took a wrong turn.
                </h2>

                <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-white/45">
                    The page you're looking for doesn't exist or may have
                    been moved somewhere else.
                </p>

                <Link
                    to="/"
                    className="mt-9 inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition duration-300 hover:scale-105"
                >
                    Back to Home →
                </Link>

            </div>

        </main>
    );
}

export default NotFoundPage;