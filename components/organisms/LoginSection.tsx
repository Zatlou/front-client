import React from "react";
import LoginForm from "../molecules/LoginForm";

const LoginSection: React.FC = () => {
  const handleLogin = () => {
    alert("Connexion réussie !");
  };

  return (
    <div className="w-1/2 p-10">
      <h2 className="text-3xl font-bold text-center mb-6">Login In</h2>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default LoginSection;
