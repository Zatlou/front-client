import React from "react";
import LoginSection from "../organisms/LoginSection";
import InfoSection from "../organisms/InfoSection";

const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <header className="w-full bg-black py-4">
        <h1 className="text-center text-white text-2xl font-bold">
          Tree Learning
        </h1>
      </header>

      <div className="flex w-11/12 max-w-4xl mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
        <LoginSection />
        <InfoSection />
      </div>
    </div>
  );
};

export default MainLayout;
