import { useEffect, useState } from "react";
import { MdRealEstateAgent } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { RiMenu2Line } from "react-icons/ri";

import "../../style/Navbar.css";
export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  useEffect(() => {
    if (isNavExpanded) {
      document.body.style.overflow = "hidden";
    } else if (!isNavExpanded) {
      document.body.style.overflow = "auto";
    }
  }, [isNavExpanded]);
  return (
    <nav className="navigation">
      <NavLink to="/" className="brand-name">
        <MdRealEstateAgent />
        <a> Real Estate</a>
      </NavLink>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <RiMenu2Line />
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <NavLink exact activeClassName="active-link" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active-link" to="/services">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active-link" to="/faq">
              Faq
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active-link" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active-link" to="/login">
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}