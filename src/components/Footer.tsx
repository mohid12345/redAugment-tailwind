function Footer() {
    return (
        <div className="bg-[radial-gradient(circle,_rgba(197,144,67,0.3)_0%,_#000000_80%)] text-white py-12 px-6 md:px-24 mt-16">
            <div className="flex flex-col md:flex-row justify-between gap-10">
                <div className="flex flex-col gap-4 max-w-sm">
                    <div className="flex items-center gap-3">
                        <img
                            src="https://dummyimage.com/40x40/ff0000/ffffff&text=R"
                            alt="Logo"
                            className="w-10 h-10 rounded"
                        />
                        <h2 className="text-xl font-semibold">Red Augment</h2>
                    </div>
                    <p className="text-sm text-gray-300">
                        consectetur. Eu eget sagittis mi odio. Eget non ultrices interdum nisl. A euismod nunc proin sed.
                    </p>
                </div>

                {/* Links */}
                <div className="flex flex-col sm:flex-row gap-10">
                    <div>
                        <h3 className="font-semibold mb-2">Services</h3>
                        <ul className="space-y-1 text-gray-400">
                            <li>
                                <a href="#" className="hover:text-white">
                                    Pricing
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">About</h3>
                        <ul className="space-y-1 text-gray-400">
                            <li>
                                <a href="#" className="hover:text-white">
                                    Blogs
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="text-sm text-gray-300 space-y-2">
                    <p className="font-semibold text-white">contact@redaugment.com</p>
                    <p>A - 2 Kadipur, Delhi</p>
                    <p>New Delhi, 110036, India</p>
                </div>
            </div>

            {/* bottom div */}
            <div className="mt-10 text-center text-gray-500 text-sm">© 2025 - redaugment</div>
        </div>
    );
}

export default Footer;
