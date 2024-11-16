import React from 'react';

const Marketing = () => {
  return (
    <div className="bg-gray-50 items-center justify-center h-fit">
      <div className="grid gap-y-9 gap-4 justify-center mb-6">
        <h2 className="text-4xl font-bold text-center">Caring is the new marketing</h2>
        <p className="w-full max-w-[34rem] text-center">
          The Nexcent blog is the best place to read about the latest membership insights, trends, and more.
          See who’s joining the community, read about how our community are increasing their membership income and a lot more.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        
        {/* Card 1 */}
        <div className="  ">
          <img src="https://cdn.pixabay.com/photo/2020/08/25/18/28/workplace-5517744_1280.jpg" alt="Image 1" className="w-full h-48 object-cover rounded-lg" />
          <div className="relative bottom-8">
          <div className="mx-auto  bg-gray-200 w-[90%] p-4 text-center shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800">Creating Streamlined Safeguarding Processes with OneRen</h2>
            <div className="mt-2">
              <a href="#" className="text-green-500 font-semibold hover:underline">Read more →</a>
            </div>
          </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="  ">
          <img src="https://cdn.pixabay.com/photo/2020/08/25/18/29/workplace-5517762_1280.jpg" alt="Image 1" className="w-full h-48 object-cover rounded-lg" />
          <div className="relative bottom-8">
          <div className="mx-auto  bg-gray-200 w-[90%] p-4 text-center shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800">Creating Streamlined Safeguarding Processes with OneRen</h2>
            <div className="mt-2">
              <a href="#" className="text-green-500 font-semibold hover:underline">Read more →</a>
            </div>
          </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="  ">
          <img src="https://cdn.pixabay.com/photo/2017/05/04/16/37/meeting-2284501_1280.jpg" alt="Image 1" className="w-full h-48 object-cover rounded-lg" />
          <div className="relative bottom-8">
          <div className="mx-auto  bg-gray-200 w-[90%] p-4 text-center shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800">Creating Streamlined Safeguarding Processes with OneRen</h2>
            <div className="mt-2">
              <a href="#" className="text-green-500 font-semibold hover:underline">Read more →</a>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
