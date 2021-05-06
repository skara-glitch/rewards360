import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__text">
        <div className="logo">
          <img src="/img/store-shop.png" alt="logo" />
        </div>
        <ul className="navbar__ul">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Categories</a>
          </li>
          <li>
            <a href="">Price drop</a>
          </li>
          <li>
            <a href="">Contact us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
