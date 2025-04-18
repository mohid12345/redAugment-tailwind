import Header from "../components/Header";
import FloatingOrbs from "../components/FloatingOrbs";
import { MdOutlineArrowCircleRight } from "react-icons/md";
import Footer from "../components/Footer";

function Services() {
    return (
        <div className="relative min-h-screen">
            <Header />
            {/* Background effect */}
            <FloatingOrbs />

            {/* Your app content */}
            <div className="relative z-10 container mx-auto py-8 px-4">
                <div className=" text-white h-[30rem]  w-full flex flex-col justify-center items-center">
                    <div className="text-6xl">Explore Our Services</div>

                    <form className="rounded w-full max-w-xl  p-2 mt-5">
                        <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                            Search...
                        </label>
                        <div className="relative">
                            <input
                                type="search"
                                id="search"
                                className="block w-full p-4 ps-10 pr-14 text-base text-gray-900 border border-white rounded-full  dark:border-white dark:placeholder-gray-400 dark:text-white  "
                                placeholder="Search..."
                                required
                            />
                            <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-white">
                                <MdOutlineArrowCircleRight className="size-9" />
                            </button>
                        </div>
                    </form>
                    <div className="flex flex-wrap justify-center gap-4 w-3/4 p-4">
                        <div className="px-6 py-3 rounded-full hover:bg-white/30 border border-white shadow-md backdrop-blur-md text-sm font-medium text-gray-900 dark:text-white whitespace-nowrap">
                            Artificial Intelligence & Advanced Data Solutions
                        </div>
                        <div className="px-6 py-3 rounded-full hover:bg-white/30 border border-white shadow-md backdrop-blur-md text-sm text-gray-800 dark:text-white">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                        </div>
                        <div className="px-6 py-3 rounded-full hover:bg-white/30 border border-white shadow-md backdrop-blur-md text-sm text-gray-800 dark:text-white">
                            Lorem Ipsum is simply dummy text o
                        </div>
                        <div className="px-6 py-3 rounded-full hover:bg-white/30 border border-white shadow-md backdrop-blur-md text-sm text-gray-800 dark:text-white">
                            Lorem Ipsum is simply dummy text of t
                        </div>
                        <div className="px-6 py-3 rounded-full hover:bg-white/30 border border-white shadow-md backdrop-blur-md text-sm text-gray-800 dark:text-white">
                            Lorem Ipsum is simply dummy text
                        </div>
                    </div>
                </div>

                <div className="space-y-6 mx-24">
                    <div className="flex gap-6">
                        <div className="flex-1 h-72 relative overflow-hidden rounded-xl p-6 text-white flex flex-col justify-end group bg-transparent">
                            {/* Background layer with gradient + shapes that zoom on hover */}
                            <div className="absolute inset-0 z-0 transition-transform duration-700 ease-out scale-100 group-hover:scale-110">
                                {/* Gradient base */}
                                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/40 via-black/60 to-blue-600/40"></div>

                                {/* Abstract blurred shapes */}
                                <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-400/30 rounded-full filter blur-2xl"></div>
                                <div className="absolute top-0 right-0 w-28 h-28 bg-violet-300/30 rounded-full filter blur-2xl"></div>
                                <div className="absolute bottom-0 left-1/2 w-48 h-48 bg-black/30 rounded-full filter blur-3xl"></div>
                            </div>

                            {/* Foreground text content */}
                            <div className="relative z-10">
                                <h2 className="text-xl font-semibold">AI Strategy & Advisory</h2>
                                <p className="text-sm opacity-80">
                                    is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                    1500s, w
                                </p>
                            </div>
                        </div>

                        <div
                            className="w-1/3 h-72 bg-cover bg-center rounded-xl p-6 text-white flex flex-col justify-end"
                            style={{ backgroundImage: "url('https://dummyimage.com/640x4:3')" }}
                        >
                            <div>
                                <h2 className="text-xl font-semibold">Letraset sheets containing Lorem</h2>
                                <p className="text-sm opacity-80">
                                    enturies, but also the leap into electronic typesetting, remaining essentially unchanged
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-6">
                        <div
                            className="w-1/3 h-72 bg-cover bg-center rounded-xl p-6 text-white flex flex-col justify-end"
                            style={{ backgroundImage: "url('https://dummyimage.com/640x4:3')" }}
                        >
                            <div>
                                <h2 className="text-xl font-semibold">Letraset sheets containing </h2>
                                <p className="text-sm opacity-80">
                                    enturies, but also the leap into electronic typesetting, remaining essentially unchanged
                                </p>
                            </div>
                        </div>
                        <div
                            className="flex-1 h-72 bg-cover bg-center rounded-xl p-6 text-white flex flex-col justify-end"
                            style={{ backgroundImage: "url('https://dummyimage.com/640x4:3')" }}
                        >
                            <div>
                                <h2 className="text-xl font-semibold">Letraset sheets </h2>
                                <p className="text-sm opacity-80">
                                    TLetraset sheets containing Loremll text for Row 2 Large
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Row 3: Large + Small */}
                    <div className="flex gap-6">
                        <div className="flex-1 h-72 relative overflow-hidden rounded-xl p-6 text-white flex flex-col justify-end group bg-transparent">
                            <div className="absolute inset-0 z-0 transition-transform duration-700 ease-out scale-100 group-hover:scale-110">
                                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/40 via-black/60 to-blue-600/40"></div>

                                <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-400/30 rounded-full filter blur-2xl"></div>
                                <div className="absolute top-0 right-0 w-28 h-28 bg-violet-300/30 rounded-full filter blur-2xl"></div>
                                <div className="absolute bottom-0 left-1/2 w-48 h-48 bg-black/30 rounded-full filter blur-3xl"></div>
                            </div>

                            {/* Foreground text content */}
                            <div className="relative z-10">
                                <h2 className="text-xl font-semibold">AI Strategy & Advisory</h2>
                                <p className="text-sm opacity-80">
                                    is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                    1500s, w
                                </p>
                            </div>
                        </div>

                        <div
                            className="w-1/3 h-72 bg-cover bg-center rounded-xl p-6 text-white flex flex-col justify-end"
                            style={{ backgroundImage: "url('https://dummyimage.com/640x4:3')" }}
                        >
                            <div>
                                <h2 className="text-xl font-semibold">Small Box - Row 3</h2>
                                <p className="text-sm opacity-80">This is small text for Row 3 Small</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 ">
                        <div
                            className="bg-white/10 h-72 backdrop-blur-md rounded-lg p-6 shadow-lg flex flex-col justify-end"
                            style={{ backgroundImage: "url('/one.jpg')" }}
                        >
                            <h2 className="text-xl font-semibold text-white mb-2">Section One</h2>
                            <p className="text-white/90">Content for section one goes here.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Services;
