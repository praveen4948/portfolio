import React from "react";

const Heading = ({ heading, textColor = "text-slate-400" }) => {
  return (
    <div className="flex justify-center mb-10 flex-col items-center">
      <h2 className={`text-4xl sm:text-5xl font-bold ${textColor}`}>{heading}</h2>
      <div className="relative mt-4">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full shadow-lg" />
      </div>
    </div>
  );
};

export default Heading;
