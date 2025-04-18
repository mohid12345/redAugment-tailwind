import { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    return (
        <div className="flex justify-between items-center p-4">
            {/* Logo + Title */}
            <div className="flex justify-center items-center">
                <img src="/logoRed.png" alt="home_logo" className="h-8 w-auto" />
                <div className="text-xl font-light pl-3 text-white">Red Augment</div>
            </div>

            {/* Navigation Links */}
            <div className="flex space-x-4 relative">
                <Link to="/" className="text-white">
                    Home
                </Link>
                <Link to="/" className="text-white">
                    Services
                </Link>
                <Link to="/" className="text-white">
                    Work
                </Link>
                <Link to="/" className="text-white">
                    Products
                </Link>

                {/* Company Dropdown */}
                <div className="relative">
                    <button className="text-white flex items-center gap-1" onClick={toggleDropdown}>
                        Company
                        <MdOutlineKeyboardArrowDown
                            className={`size-5 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                        />
                    </button>

                    {isDropdownOpen && (
                        <div
                            // onClick={(e) => e.stopPropagation()}
                            className="z-50 absolute bg-white/10 text-white shadow-lg rounded p-2 mt-3 top-full left-0 min-w-max "
                        >
                            <Link to="/about" className="block px-4 py-2">
                                About
                            </Link>
                            <Link to="/blogs" onClick={() => console.log("Blogs clicked")} className="block px-4 py-2">
                                Blogs
                            </Link>
                            <Link to="/careers" className="block px-4 py-2">
                                Careers
                            </Link>
                        </div>
                    )}
                </div>

                <Link to="/pricing" className="text-white">
                    Pricing
                </Link>
            </div>
        </div>
    );
}

export default Header;
