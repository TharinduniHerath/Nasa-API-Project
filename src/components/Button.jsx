import React from "react";
import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, href, onClick, children, px, white }) => {
  const BtClasses = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;

  const spnClasses = "relative z-10";

  //Rendering a button
  const getButton = () => (
    <button className={BtClasses} onClick={onClick}>
      <span className={spnClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  const getLink = () => (
    <a href={href} className={BtClasses}>
      <span className={spnClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );
  //if href exists return getLink else return getButton
  return href ? getLink() : getButton();
};

export default Button;
