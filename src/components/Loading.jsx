import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 animate-[spin_1.2s_linear_infinite]">
          <div className="w-full h-full border-4 border-blue-900 border-t-transparent rounded-full"></div>
        </div>
        <div className="absolute inset-2 animate-[spin_2s_linear_reverse_infinite]">
          <div className="w-full h-full border-4 border-blue-700 border-l-transparent rounded-full opacity-60"></div>
        </div>
        <div className="absolute inset-4 animate-[spin_3s_linear_infinite]">
          <div className="w-full h-full border-4 border-blue-500 border-b-transparent rounded-full opacity-40"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
