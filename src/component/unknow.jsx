import React from "react";
import { FaUsers, FaRegCalendarCheck, FaMoneyCheckAlt } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";

const StatisticsSection = () => {
  return (
    <div className="bg-gray-100 py-16 px-6 flex flex-col md:flex-row md:items-center md:justify-between space-y-10 md:space-y-0">
      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl font-semibold text-gray-800">
          Helping a local <br />
          <span className="text-green-600">business reinvent itself</span>
        </h2>
        <p className="text-gray-500 mt-2">We reached here with our hard work and dedication</p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 gap-8 md:w-1/2">
        {/* Members */}
        <div className="flex items-center space-x-4">
          <FaUsers className="text-green-600 text-3xl" />
          <div>
            <p className="text-2xl font-semibold text-gray-800">2,245,341</p>
            <p className="text-gray-500">Members</p>
          </div>
        </div>

        {/* Clubs */}
        <div className="flex items-center space-x-4">
          <GiNetworkBars className="text-green-600 text-3xl" />
          <div>
            <p className="text-2xl font-semibold text-gray-800">46,328</p>
            <p className="text-gray-500">Clubs</p>
          </div>
        </div>

        {/* Event Bookings */}
        <div className="flex items-center space-x-4">
          <FaRegCalendarCheck className="text-green-600 text-3xl" />
          <div>
            <p className="text-2xl font-semibold text-gray-800">828,867</p>
            <p className="text-gray-500">Event Bookings</p>
          </div>
        </div>

        {/* Payments */}
        <div className="flex items-center space-x-4">
          <FaMoneyCheckAlt className="text-green-600 text-3xl" />
          <div>
            <p className="text-2xl font-semibold text-gray-800">1,926,436</p>
            <p className="text-gray-500">Payments</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsSection;
