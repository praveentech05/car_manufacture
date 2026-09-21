import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import "../styles/header.css";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Gallery", path: "/gallery" },
  { name: "Services", path: "/services" },
  { name: "Contact Us", path: "/contact" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="site-logo" onClick={closeMenu}>
          <span>CAR</span>
          <span>MANUFACTURING</span>
        </Link>

        <nav className={`main-nav ${menuOpen ? "nav-open" : ""}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              onClick={closeMenu}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}

export default Header;