import React from "react";

const InfoSection: React.FC = () => {
  return (
    <div className="w-1/2 p-10 bg-gray-50 flex flex-col items-center justify-center text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Company Logo</h2>
      <p className="text-gray-600 text-sm">
        Here you can include additional information about the company or any
        relevant content.
      </p>
    </div>
  );
};

export default InfoSection;
