import React from "react";
import Slider from "react-slick";

const ClientSection = () => {
  // Updated settings for the logo slider to show one item at a time and slide one-by-one
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: true, // Slide from right to left
    arrows: false,
  };

  // Sample logos (replace with actual images or company logos)
  const logos = [
    "logo1.png", "logo2.png", "logo3.png", "logo4.png",
    "logo5.png", "logo6.png", "logo7.png", "logo8.png"
  ];

  return (
    <div className="bg-gray-50 py-10">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-semibold">Our Clients</h2>
        <p className="text-gray-500">We have been working with some Fortune 500+ clients</p>
      </div>

      {/* Logo Slider */}
     
        <div className="mx-auto w-full px-10 flex justify-center gap-[60px]"> {/* Adjust width as needed */}
        {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center mx-2"> {/* Add margin for spacing */}
            <img
                src={logo}
                alt={`Client logo ${index + 1}`}
                className="rounded-full w-16 h-16 object-cover"
            />
            </div>
        ))}
        </div>

      {/* Card Section */}
      <div className="text-center mt-16">
        <h3 className="text-2xl font-semibold">Manage your entire community in a single system</h3>
        <p className="text-gray-500 mt-2">Who is Nextcent suitable for?</p>
      </div>

      <div className="flex flex-wrap justify-center gap-10 mt-10">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-lg p-6 w-80 flex flex-col items-center">
          <div className="bg-green-100 rounded-full p-4 flex items-center justify-center mb-4">
            <img src="membership_icon.png" alt="Membership Icon" className="w-8 h-8" />
          </div>
          <h4 className="text-xl font-semibold text-center">Membership Organisations</h4>
          <p className="text-gray-500 mt-2 text-center">
            Our membership management software provides full automation of membership renewals and payments.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-lg p-6 w-80 flex flex-col items-center">
          <div className="bg-green-100 rounded-full p-4 flex items-center justify-center mb-4">
            <img src="association_icon.png" alt="Association Icon" className="w-8 h-8" />
          </div>
          <h4 className="text-xl font-semibold text-center">National Associations</h4>
          <p className="text-gray-500 mt-2 text-center">
            Our membership management software provides full automation of membership renewals and payments.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-lg p-6 w-80 flex flex-col items-center">
          <div className="bg-green-100 rounded-full p-4 flex items-center justify-center mb-4">
            <img src="clubs_icon.png" alt="Clubs Icon" className="w-8 h-8" />
          </div>
          <h4 className="text-xl font-semibold text-center">Clubs And Groups</h4>
          <p className="text-gray-500 mt-2 text-center">
            Our membership management software provides full automation of membership renewals and payments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClientSection;
