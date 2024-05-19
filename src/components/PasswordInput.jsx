import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const PasswordInput = ({ value, onChange, placeholder }) => {
  const [isshowPassword, setIsShowpassword] = useState(false);

  const toggleShowpassword = () => {
    setIsShowpassword(!isshowPassword);
  };
  return (
    <div className="flex items-center bg-transparent border-[1.5px] px-5 rounded mb-3">
      <input
        value={value}
        onChange={onChange}
        type={isshowPassword ? "text" : "password"}
        placeholder={placeholder || "Password"}
        className="w-full text-sm bg-transparent py-3 mr-3 rounded outline-none"
      />

      <FaRegEye size={22} className="text-primary cursor-pointer" />
    </div>
  );
};

export default PasswordInput;
