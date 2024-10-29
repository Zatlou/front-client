import React from "react";
import InputField from "../atoms/Input";
import Checkbox from "../atoms/Checkbox";
import Button from "../atoms/Button";

interface LoginFormProps {
  onLogin: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  return (
    <form className="space-y-4">
      <InputField type="email" placeholder="Email" />
      <InputField type="password" placeholder="Mot de passe" />
      <Checkbox label="Keep me logged in" />
      <Button label="Se connecter" onClick={onLogin} />
      <p className="text-center text-sm text-gray-600">
        Mot de passe oublié?{" "}
        <a href="#" className="text-blue-500 hover:underline">
          Réinitialiser
        </a>
      </p>
    </form>
  );
};

export default LoginForm;
