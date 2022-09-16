import { useEffect, useState } from "react";
import { MdRealEstateAgent } from "react-icons/md";
import { Link } from "react-router-dom";
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
      <a href="/" className="brand-name">
        <MdRealEstateAgent />
        Real Estate
      </a>
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
            <Link to="/">Rent</Link>
          </li>
          <li>
            <Link to="/">Buy</Link>
          </li>
          <li>
            <Link to="/">Sell</Link>
          </li>
          <li>
            <Link to="/">Manage Property</Link>
          </li>
          <li>
            <Link to="/">Resource</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
