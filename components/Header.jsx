import React from "react";
import "./Header.css";  // Styles for the header

const Header = () => {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" // Netflix logo
        alt="Netflix Logo"
      />
      <div className="header__options">
      <div className="header__dropdown">
  <select className="header__select">
    <option value="english">English</option>
    <option value="spanish">Spanish</option>
    <option value="french">French</option>
    {/* Add more options as needed */}
  </select>
</div>

        <button className="header__button">Sign In</button>
      </div>
    </div>
  );
};

export default Header;
