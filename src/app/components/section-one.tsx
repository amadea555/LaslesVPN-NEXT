import styles from "../styles/section-one.module.css";
import React, { useEffect, useState } from "react";

export default function SectionOne() {
  const [title, setTitle] = useState("");
  const [subText, setSubText] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/data/section-one.json");
        const data = await res.json();

        //  ambil array pertama
        setTitle(data["section-one-title"][0]);
        setSubText(data["section-one-subtext"][0]);
      } catch (error) {
        console.error("Error fetching data section one", error);
      }
    }

    fetchData();
  }, []);

  return (
    <section className={styles.sectionOne}>
      <div className={styles.contentCenterDiv}>
        <div>
          <p className={styles.centerTextTitle}>
            {title.split("LaslesVPN.").map((part, index, arr) => (
              <React.Fragment key={index}>
                {part}
                {index < arr.length - 1 && (
                  <strong key={index}>LaslesVPN.</strong>
                )}
              </React.Fragment>
            ))}
          </p>

          <div className={styles.centerTextContent}>
            <p>{subText}</p>
          </div>
          <button className={styles.buttonGetStarted}>Get Started</button>
        </div>

        <img
          className={styles.centerImage}
          src="/img/landing-page-image.png"
          alt="landing-page-image"
        />
      </div>

      <div className={styles.contentBottomDiv}>
        <div className={styles.bottomBoxDiv}>
          <div className={styles.bottomBoxIcon}>
            <img src="/img/user.png" alt="Users" />
          </div>
          <div className={styles.bottomBoxText}>
            <div className={styles.bottomBoxNumber}>90+</div>
            <div className={styles.bottomBoxLabel}>Users</div>
          </div>
        </div>

        <div className={styles.bottomBoxDiv}>
          <div className={styles.bottomBoxIcon}>
            <img src="/img/location.png" alt="Locations" />
          </div>
          <div className={styles.bottomBoxText}>
            <div className={styles.bottomBoxNumber}>30+</div>
            <div className={styles.bottomBoxLabel}>Locations</div>
          </div>
        </div>

        <div className={styles.bottomBoxDiv}>
          <div className={styles.bottomBoxIcon}>
            <img src="/img/server.png" alt="Servers" />
          </div>
          <div className={styles.bottomBoxText}>
            <div className={styles.bottomBoxNumber}>50+</div>
            <div className={styles.bottomBoxLabel}>Servers</div>
          </div>
        </div>
      </div>
    </section>
  );
}
