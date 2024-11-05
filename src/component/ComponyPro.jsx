import React from "react";
import CompanyLogo from '../images/companylogo.png';

const TestimonialSection = () => {
  return (
    <div className="bg-gray-100 p-8 flex justify-center items-center">
      {/* Wrapper with specific width to control the layout */}
      <div className="flex flex-col md:flex-row w-full max-w-5xl items-center md:space-x-8 space-y-6 md:space-y-0">
        
        {/* Image Section (30%) */}
        <div className="w-full md:w-1/3 flex-shrink-0 flex justify-center md:justify-start">
          <img
            src={CompanyLogo}
            alt="Company Logo"
            className="w-auto rounded-lg object-cover h-[300px] md:h-auto"
          />
        </div>

        {/* Content Section (65%) */}
        <div className="w-full md:w-2/3 space-y-4 flex flex-col justify-center">
          <p className="text-gray-600 text-center md:text-left">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nulla ut molestie arcu, at hendrerit elit.
          </p>
          <p className="font-semibold text-green-700 text-center md:text-left">Tim Smith</p>
          <p className="text-gray-500 text-center md:text-left">British Dragon Boat Racing Association</p>
          
          {/* Company Profiles */}
          <div className="flex justify-center md:justify-start items-center mt-6 space-x-4">
            <img src="https://via.placeholder.com/40" alt="Company 1" className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] rounded-full" />
            <img src="https://via.placeholder.com/40" alt="Company 2" className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] rounded-full" />
            <img src="https://via.placeholder.com/40" alt="Company 3" className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] rounded-full" />
            <img src="https://via.placeholder.com/40" alt="Company 4" className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] rounded-full" />
            <img src="https://via.placeholder.com/40" alt="Company 5" className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] rounded-full" />
            <span className="text-green-600 font-semibold ml-4">
              <a href="#!" className="hover:underline">Meet all customers →</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
