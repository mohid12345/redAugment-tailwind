import { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";

function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
        setIsDropdownOpen(false);
    };

    return (
        <header className=" text-white">
            <div className="flex justify-between items-center p-4">
                {/* Logo + Title */}
                <div className="flex items-center">
                    <img src="/logoRed.png" alt="home_logo" className="h-8 w-auto" />
                    <span className="text-xl font-light pl-3">Red Augment</span>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6 items-center relative">
                    <Link to="/">Home</Link>
                    <Link to="/">Services</Link>
                    <Link to="/">Work</Link>
                    <Link to="/">Products</Link>

                    {/* Dropdown */}
                    <div className="relative">
                        <button onClick={toggleDropdown} className="flex items-center gap-1">
                            Company
                            <MdOutlineKeyboardArrowDown
                                className={`size-5 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                            />
                        </button>
                        {isDropdownOpen && (
                            <div className="z-50 absolute bg-white/10 text-white shadow-lg rounded p-2 mt-2 top-full left-0 min-w-max">
                                <Link to="/about" className="block px-4 py-2">
                                    About
                                </Link>
                                <Link to="/blogs" className="block px-4 py-2">
                                    Blogs
                                </Link>
                                <Link to="/careers" className="block px-4 py-2">
                                    Careers
                                </Link>
                            </div>
                        )}
                    </div>

                    <Link to="/pricing">Pricing</Link>
                </nav>

                {/* Hamburger Icon */}
                <button onClick={toggleMobileMenu} className="md:hidden  text-white text-2xl">
                    {isMobileMenuOpen ? <HiX /> : <HiMenu />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <nav className="md:hidden px-4 pb-4 space-y-2  backdrop-blur-sm ">
                    <Link to="/" onClick={toggleMobileMenu} className="block">
                        Home
                    </Link>
                    <Link to="/" onClick={toggleMobileMenu} className="block">
                        Services
                    </Link>
                    <Link to="/" onClick={toggleMobileMenu} className="block">
                        Work
                    </Link>
                    <Link to="/" onClick={toggleMobileMenu} className="block">
                        Products
                    </Link>

                    {/* Mobile Dropdown */}
                    <div>
                        <button onClick={toggleDropdown} className="flex items-center gap-1 w-full">
                            Company
                            <MdOutlineKeyboardArrowDown
                                className={`size-5 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                            />
                        </button>
                        {isDropdownOpen && (
                            <div className="ml-4 mt-1 space-y-1 text-sm text-white/90">
                                <Link to="/about" onClick={toggleMobileMenu} className="block">
                                    About
                                </Link>
                                <Link to="/blogs" onClick={toggleMobileMenu} className="block">
                                    Blogs
                                </Link>
                                <Link to="/careers" onClick={toggleMobileMenu} className="block">
                                    Careers
                                </Link>
                            </div>
                        )}
                    </div>

                    <Link to="/pricing" onClick={toggleMobileMenu} className="block">
                        Pricing
                    </Link>
                </nav>
            )}
        </header>
    );
}

export default Header;