"use client";
import { useEffect, useState } from "react";
import styles from "../styles/navbar.module.css";

interface NavbarItemsTypes {
  link: string;
  text: string;
}

interface Navbar {
  navbar: NavbarItemsTypes[];
}

export default function Navbar() {
  const [navbar, setNavbar] = useState<Navbar>();

  async function loadNavbar() {
    try {
      const response = await fetch("/data/navbar.json"); // ✅ ambil dari public
      const data = await response.json();
      setNavbar(data);
      console.log(data, "ini adalah data navbar");
    } catch (error) {
      console.error("Error fetch", error);
    }
  }

  useEffect(() => {
    loadNavbar();
  }, []);

  return (
    <nav className={styles.navbarWrapper}>
      <div className={styles.navbarDiv}>
        {/* logo part */}
        <div className={styles.navbarLeft}>
          <div className={styles.navbarLogo}>
            <img
              className={styles.logoImage}
              src="/img/logo-landing-page.png"
              alt="Logo"
            />
          </div>
        </div>

        {/* menu part */}
        <div className={styles.navbarCenter}>
          <div className={styles.navbarMenu}>
            <ul>
              {navbar &&
                navbar.navbar.map((item, index) => (
                  <li key={index}>
                    <a href={item.link}>{item.text}</a>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        {/* signin-signup part */}
        <div className={styles.navbarRight}>
          <div className={styles.navbarButton}>
            <button className={styles.buttonSignin}>Sign In</button>
          </div>
          <div className={styles.navbarButton}>
            <button className={styles.buttonSignup}>Sign Up</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
