import React from "react";
import Button from "../atoms/Button";

interface NavBarProps {
  onLogout: () => void;
  isAuthenticated: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ onLogout, isAuthenticated }) => (
  <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
    <div className="text-2xl font-bold">MyApp</div>
    {isAuthenticated && <Button label="Logout" onClick={onLogout} />}
  </nav>
);

export default NavBar;
