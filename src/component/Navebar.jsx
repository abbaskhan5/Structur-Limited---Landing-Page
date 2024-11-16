import React, { useState } from 'react';

const Navigation = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false); 

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const openLoginModal = () => {
        setIsLoginModalOpen(true);
    };

    const closeLoginModal = () => {
        setIsLoginModalOpen(false);
    };

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error('Invalid credentials');
            }

            const data = await response.json();
            console.log(data);

            
            localStorage.setItem('user', JSON.stringify(data));
            setIsLoggedIn(true); 
            closeLoginModal(); 
        } catch (error) {
            console.error('Error during login:', error);
            alert('Incorrect email or password. Please try again.');
        }
    };
       
    return (
        <div>
            <header className="bg-white">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex-1 flex items-center justify-between">
                            <h1 className="text-2xl font-bold ml-14">Structures Limited</h1>
                            <button onClick={toggleMobileMenu} className="lg:hidden p-2 text-black">
                                <span className="sr-only">Open Menu</span>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>

                        {/* Desktop Menu */}
                        <nav className="hidden lg:flex gap-12 mr-[50px]">
                            <a href="#home" className="text-black hover:text-blue-500">Home</a>
                            <a href="#features" className="text-black hover:text-blue-500">Features</a>
                            <a href="#community" className="text-black hover:text-blue-500">Community</a>
                            <a href="#blog" className="text-black hover:text-blue-500">Blog</a>
                            <a href="#pricing" className="text-black hover:text-blue-500">Pricing</a>
                        </nav>
                        {!isLoggedIn && (
                            <button
                                onClick={openLoginModal}
                                className="text-white bg-green-600 px-6 py-2 rounded-md hover:bg-green-700"
                            >
                                Login
                            </button>
                        )}
                        {isLoggedIn && (
                            <div className="text-green-600 font-bold">
                                Welcome!
                            </div>
                        )}
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <nav className="lg:hidden bg-gray-100">
                        <a href="#home" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Home</a>
                        <a href="#features" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Features</a>
                        <a href="#community" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Community</a>
                        <a href="#blog" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Blog</a>
                        <a href="#pricing" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Pricing</a>
                    </nav>
                )}
            </header>

            {/* Login Modal */}
            {isLoginModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="username" className="block text-sm font-medium text-gray-700">Enter Email</label>
                                <input
                                    type="text"
                                    id="username"
                                    value={email}
                                    placeholder="Enter your Email"
                                    className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onChange={(e) => setEmail(e.target.value)}
                                   
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    placeholder="Enter your password"
                                    className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="flex items-center justify-between mt-6">
                                <button
                                    onClick={closeLoginModal}
                                    type="button"
                                    className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 text-gray-800"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                                    onClick={handleLogin}
                                >
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navigation;
