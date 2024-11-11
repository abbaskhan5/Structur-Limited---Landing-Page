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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
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
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
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
          className="w-full max-w-md h-[400px]"
        />
      </div>

      {/* Navigation Arrows */}
      <button onClick={goToPreviousSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full hover:bg-gray-300">
        &#8592;
      </button>
      <button onClick={goToNextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full hover:bg-gray-300">
        &#8594;
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 w-full flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${index === currentSlide ? "bg-green-500" : "bg-gray-300"}`}
          />
        ))}
      </div>

      {/* Sign Up Modal */}
      {isSignUpModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-8 rounded shadow-lg max-w-sm w-full">
            <h2 className="text-xl mb-4">Sign Up</h2>
            <input type="text" placeholder="Full Name" className="w-full mb-4 p-2 border rounded" />
            <input type="email" placeholder="Email" className="w-full mb-4 p-2 border rounded" />
            <input type="password" placeholder="Password" className="w-full mb-4 p-2 border rounded" />
            <div className="flex justify-end">
              <button onClick={closeSignUpModal} className="mr-4 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
                Cancel
              </button>
              <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
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
