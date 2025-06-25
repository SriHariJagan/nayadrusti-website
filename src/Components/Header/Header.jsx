import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const navRef = useRef();

  const handleDropdownToggle = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setDropdownOpen(null);
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const dropdownLinks = {
    Services: [
      { label: "About", path: "/a123" },
      { label: "Bottle", path: "/b345" },
      { label: "Cars", path: "#" }, // update if needed
    ],
    Industries: [
      { label: "1", path: "/abc" },
      { label: "2", path: "/def" },
      { label: "3", path: "#" }, // update if needed
    ],
  };

  const labels = Object.keys(dropdownLinks);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          MyCompany
        </Link>

        <div className={styles.toggle} onClick={() => setMenuOpen(true)}>
          <HiMenuAlt3 />
        </div>

        <nav
          ref={navRef}
          className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}
        >
          <div
            className={styles.navCloseMobile}
            onClick={() => setMenuOpen(false)}
          >
            <IoClose />
          </div>

          <ul className={styles.navList}>

            <li className={styles.navItem}>
              <Link to="/about" className={styles.navLink}>
                About
              </Link>
            </li>


            {labels.map((label, index) => (
              <li key={index} className={styles.navItem}>
                <div
                  className={styles.navLink}
                  onClick={() => handleDropdownToggle(index)}
                >
                  {label}
                  {dropdownOpen === index ? (
                    <MdKeyboardArrowUp className={styles.arrowIcon} />
                  ) : (
                    <MdKeyboardArrowDown className={styles.arrowIcon} />
                  )}
                </div>

                <ul
                  className={`${styles.dropdown} ${
                    dropdownOpen === index ? styles.show : ""
                  }`}
                >
                  {dropdownLinks[label].map((item, idx) => (
                    <li key={idx}>
                      <Link to={item.path}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}


            <li className={styles.navItem}>
              <Link to="/contact" className={styles.navLink}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
