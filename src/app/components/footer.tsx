"use client";
import { useEffect, useState } from "react";
import styles from "../styles/footer.module.css";

interface FooterItemsTypes {
  text: string;
  link: string;
}

interface Footer {
  footer: FooterItemsTypes[];
}

export default function Footer() {
  const [subText, setSubText] = useState("");
  const [copyright, setCopyright] = useState("");
  const [product, setProduct] = useState<FooterItemsTypes[]>([]);
  const [engage, setEngage] = useState<FooterItemsTypes[]>([]);
  const [earnMoney, setEarnMoney] = useState<FooterItemsTypes[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/data/footer.json");
        const data = await res.json();

        // ambil array
        setSubText(data["footer-subtext"]);
        setCopyright(data["footer-copyright"]);
        setProduct(data["product"]);
        setEngage(data["engage"]);
        setEarnMoney(data["earn-money"]);
      } catch (error) {
        console.error("Error fetching data footer", error);
      }
    }
    fetchData();
  }, []);

  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footerLeftContent}>
        <div className={styles.footerLogoText}>
          <img
            src="img/logo-landing-page.png"
            alt="LaslesVPN Logo"
            className="footer-logo"
          />
        </div>

        <p className={styles.footerSubtext}>{subText}</p>

        <div className={styles.footerSocialWrapper}>
          <a href="#">
            <img src="img/Facebook-2.png" alt="Facebook" />
          </a>
          <a href="#">
            <img src="img/twitter-2.png" alt="Twitter" />
          </a>
          <a href="#">
            <img src="img/Instagram-2.png" alt="Instagram" />
          </a>
        </div>

        <p className={styles.footerCopyright}>{copyright}</p>
      </div>

      <div className={styles.footerRightContent}>
        <div className={styles.footerColumn}>
          <h4>Product</h4>
          <ul>
            {product.map((item, index) => (
              <li key={index}>
                <a href={item.link}>{item.text}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <h4>Engage</h4>
          <ul>
            {engage.map((item, index) => (
              <li key={index}>
                <a href={item.link}>{item.text}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <h4>Earn Money</h4>
          <ul>
            {earnMoney.map((item, index) => (
              <li key={index}>
                <a href={item.link}>{item.text}</a>
              </li>
            ))}
          </ul>{" "}
        </div>
      </div>
    </footer>
  );
}
