import { NavLink } from "react-router-dom";
const NavItem = ({ text, href, active }) => {
  return (
    <NavLink to={href}>
      <a className={`nav__item ${active ? "active" : ""}`}>{text}</a>
    </NavLink>
  );
};

export default NavItem;