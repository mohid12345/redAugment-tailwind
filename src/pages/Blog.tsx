import { useState } from "react";
import Header from "../components/Header";
import { MdOutlineArrowCircleRight } from "react-icons/md";
import Footer from "../components/Footer";

function Blog() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    return (
        <div className="relative min-h-screen">
            <Header />
            {/* Background effect */}
            <div>
                <div className="fixed inset-0 -z-10 overflow-hidden bg-[#0e0e0e] ">
                    {/* Center Gradient Blur */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(140,50,130,0.4),_rgba(0,0,0,0.95))] blur-[120px]"></div>
                    </div>
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="w-full h-full bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
                    </div>
                </div>
            </div>

            {/* Your app content */}
            <div className="relative z-10 container mx-auto py-8">
                <div className=" text-white h-[30rem]  w-full flex flex-col justify-center items-center">
                    <div className="text-6xl text-center">
                        Discover Blogs With <br />
                        the Best Lorem
                    </div>

                    <form className="rounded w-full max-w-xl  p-2 mt-5">
                        <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                            Search...
                        </label>
                        <div className="relative">
                            <input
                                type="search"
                                id="search"
                                className="block w-full p-4 ps-10 pr-14 text-base text-gray-900 border border-white rounded-full  dark:border-white dark:placeholder-gray-400 dark:text-white  "
                                placeholder="Search blogs ..."
                                required
                            />
                            <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-white">
                                <MdOutlineArrowCircleRight className="size-9" />
                            </button>
                        </div>
                    </form>
                </div>

                <div className=" text-white  py-16">
                    {/* Section Title */}
                    <h2 className="text-3xl font-semibold py-10 px-5 gap-[1px] border border-[#333]">
                        Blogs & Case Studies
                    </h2>

                    {/* Grid */}
                    <div className="lg:flex flex-row">
                        <div className="lg:w-[10rem] gap-[1px] lg:border border-[#333]"></div>

                        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[1px] border border-[#333]">
                            {[...Array(15)].map((_, i) => {
                                const isHovered = hoveredIndex === i;

                                return (
                                    <div
                                        key={i}
                                        onMouseEnter={() => setHoveredIndex(i)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                        className="aspect-square relative overflow-hidden border border-[#222] bg-[#111] transition-all duration-300"
                                    >
                                        {/* Hover Gradient Overlay */}
                                        <div
                                            className={`absolute inset-0 transition-all duration-300 ${
                                                isHovered
                                                    ? "bg-gradient-to-br from-[#ff4d4d] via-[#b946fc] to-[#ff9a9e] opacity-100"
                                                    : "opacity-0"
                                            }`}
                                        ></div>

                                        {/* Card Content */}
                                        <div className="relative z-10 flex flex-col justify-between h-full p-4">
                                            <div className="flex justify-between items-start">
                                                <img src="/optionsLogo.png" alt="icon" className="w-10 h-10" />
                                                <span className="text-sm text-white">12/08/2024</span>
                                            </div>

                                            {/* Bottom Content with Motion */}
                                            <div
                                                className={`mt-auto transition-all duration-300 ${
                                                    isHovered ? "translate-y-[-10px]" : ""
                                                }`}
                                            >
                                                <p className="text-[10px] text-yellow-400 font-medium">TECHNOLOGY</p>
                                                <h3 className="text-base font-semibold leading-snug text-white">
                                                    Architectural Design
                                                </h3>

                                                {isHovered && (
                                                    <button className="text-sm text-white mt-2 underline underline-offset-2">
                                                        Read More
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Blog;
