import React from "react";

interface InputFieldProps {
  type: string;
  placeholder: string;
}

const InputField: React.FC<InputFieldProps> = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-blue-500"
    />
  );
};

export default InputField;
