import React from "react";

const CreepyFlavorCard = ({ flavor }) => {
  return (
    <div className="max-w-sm rounded-lg shadow-lg bg-white border border-gray-200 overflow-hidden">
      {/* Image */}
      <img
        src={flavor.image}
        alt={flavor.name}
        className="w-full h-48 object-cover"
      />
      {/* Content */}
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">{flavor.name}</h2>
        <p className="text-gray-600 text-sm mt-2">{flavor.description}</p>
        {/* Like/Dislike Section */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center space-x-4">
            <button className="flex items-center text-green-500 hover:text-green-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 9l-2 2m0 0l-2-2m2 2v6"
                />
              </svg>
              <span className="ml-1">{flavor.likes}</span>
            </button>
            <button className="flex items-center text-red-500 hover:text-red-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 15l2-2m0 0l2 2m-2-2v6"
                />
              </svg>
              <span className="ml-1">{flavor.dislikes}</span>
            </button>
          </div>
          <button className="text-blue-500 hover:text-blue-600 font-medium">
            Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreepyFlavorCard;
