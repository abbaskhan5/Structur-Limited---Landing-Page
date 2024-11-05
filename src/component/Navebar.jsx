import React, { useState } from 'react';


const Navigation = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div>
            <header className="bg-white">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex-1 flex items-center justify-between">
                            <h1 className='text-2xl'>System</h1>
                            {/* Hamburger Icon for Mobile */}
                            <button
                                onClick={toggleMobileMenu}
                                className="lg:hidden p-2 text-black"
                            >
                                <span className="sr-only">Open Menu</span>
                                {/* Icon can be replaced with an SVG or Font Awesome icon */}
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>

                        {/* Desktop Menu */}
                        <nav className="hidden lg:flex gap-12 mr-[40px]  ">
                            <a href="#home" className="text-black hover:text-blue-500">Home</a>
                            <a href="#about" className="text-black hover:text-blue-500">Features</a>
                            <a href="#services" className="text-black hover:text-blue-500">Community</a>
                            <a href="#contact" className="text-black hover:text-blue-500">Blog</a>
                            <a href="#contact" className="text-black hover:text-blue-500">Pricing</a>
                            {/* Button in Desktop View */}
                            
                        </nav>
                        <button className="text-white bg-[#4CAF4F] px-10 py-2 rounded hover:bg-[#4CAF4F] flex">
                            Login

                            </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <nav className="lg:hidden bg-gray-100">
                        <a href="#home" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Home</a>
                        <a href="#about" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">About</a>
                        <a href="#services" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Services</a>
                        <a href="#contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Contact</a>
                        {/* Button in Mobile View */}
                        <button className="block w-full text-center text-white bg-[#4CAF4F] px-1  py-2 rounded hover:[#4CAF4F]">
                            Sign Up
                        </button>
                    </nav>
                )}
            </header>
        </div>
    );
};

export default Navigation;
