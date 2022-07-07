import React, { useEffect, useState } from "react";
import chiflix_logo_big from "./chiflix_logo_big.png";
import profileIcon from "./profileIcon.png";
import "./NavTop.scss";

const NavTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY < 100) {
        setShow(false);
        return;
      }

      setShow(true);
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div className={`navTop ${show && "navTop--black"}`}>
      <img className="navTop__logo" src={chiflix_logo_big} alt="Chiflix LOGO" />
      <img className="navTop__avatar" src={profileIcon} alt="Profile Icon" />
    </div>
  );
};

export default NavTop;
