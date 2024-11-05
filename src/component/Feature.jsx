import React from 'react';
import SectionImage from '../images/section3.png'

const TwoColumnSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-10">

      {/* First Column - Image */}
      <div className="md:w-1/2 mb-6 md:mb-0">
        <img 
          src={SectionImage} 
          alt="Placeholder" 
          className="w-full h-auto rounded-lg"
        />
      </div>

       {/* Second Column - Text Content */}
       <div className="md:w-1/2 md:pr-10">
        <h2 className="text-2xl font-bold mb-4">The unseen of spending three years at Pixelgrade</h2>
        <p className="text-gray-700 mb-6">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default TwoColumnSection;