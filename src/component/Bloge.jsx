import React from 'react';

const BlogSection = () => {
  return (
    <div className="py-16 px-4 md:px-8 lg:px-16">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold">Caring is the new marketing</h2>
        <p className="text-gray-600 mt-4">
          The Nextcent blog is the best place to read about the latest membership insights, trends, and more. See who’s joining the community, read about how our community is increasing their membership income and lot's more.
        </p>
      </div>
      
      <div className="grid gap-8 md:grid-cols-3">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/300"
            alt="Blog Post 1"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-3">Creating Streamlined Safeguarding Processes with OneRen</h3>
            <a href="#" className="text-green-500 font-medium">Read more &rarr;</a>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/300"
            alt="Blog Post 2"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-3">What are your safeguarding responsibilities and how can you manage them?</h3>
            <a href="#" className="text-green-500 font-medium">Read more &rarr;</a>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/300"
            alt="Blog Post 3"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-3">Revamping the Membership Model with Triathlon Australia</h3>
            <a href="#" className="text-green-500 font-medium">Read more &rarr;</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
