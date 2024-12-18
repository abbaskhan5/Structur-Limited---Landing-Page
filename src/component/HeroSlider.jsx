import React, { useState, useEffect } from "react";
import SlideOne from '../images/slideOne.png';

const slides = [
  {
    titlePartOne: "Lessons and insights",
    titlePartTwo: "from 8 years",
    description: "Where to grow your business as a photographer: site or social media?",
    buttonText: "Sign Up",
    image: SlideOne,
  },
  {
    titlePartOne: "Grow your photography skills",
    titlePartTwo: "with new techniques",
    description: "Discover new techniques and expand your portfolio.",
    buttonText: "Sign Up",
    image: SlideOne,
  },
  {
    titlePartOne: "Connect with your audience",
    titlePartTwo: "through social media",
    description: "Learn effective ways to engage with followers online.",
    buttonText: "Sign Up",
    image: SlideOne,
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSignUp = async () => {
    try {
      const response = await fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });
      if (response.ok) {
        const data = await response.json();
        alert("Sign up successful!");
        closeSignUpModal();
      } else {
        const errorData = await response.json();
        alert(`Sign up failed: ${errorData.error}`);
      }
    } catch (error) {
      console.error("Error signing up:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const openSignUpModal = () => {
    setIsSignUpModalOpen(true);
  };

  const closeSignUpModal = () => {
    setIsSignUpModalOpen(false);
  };

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between py-20 px-4 md:px-16 bg-gray-100 h-[90vh] overflow-hidden">
      {/* Text Section */}
      <div className="text-center md:text-left md:w-1/2 transition-transform duration-1000 ease-in-out">
        <h1 className="text-3xl md:text-3xl font-bold mb-4">
          <span className="text-gray-800">{slides[currentSlide].titlePartOne} </span>
          <span className="text-green-500">{slides[currentSlide].titlePartTwo}</span>
        </h1>
        <p className="text-gray-600 mb-6">
          {slides[currentSlide].description}
        </p>
        <button onClick={openSignUpModal} className="bg-[#4CAF4F] text-white px-6 py-2 rounded">
          {slides[currentSlide].buttonText}
        </button>
      </div>

      {/* Image Section */}
      <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center transition-transform duration-1000 ease-in-out">
        <img
          src={slides[currentSlide].image}
          alt="Hero Illustration"
          className="w-full max-w-md h-[350px]"
        />
      </div>

      {/* Sign Up Modal */}
      {isSignUpModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-8 rounded shadow-lg max-w-sm w-full">
            <h2 className="text-xl mb-4">Sign Up</h2>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mb-4 p-2 border rounded"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mb-4 p-2 border rounded"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mb-4 p-2 border rounded"
            />
            <div className="flex justify-end">
              <button onClick={closeSignUpModal} className="mr-4 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
                Cancel
              </button>
              <button onClick={handleSignUp} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
