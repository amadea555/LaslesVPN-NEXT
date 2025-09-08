"use client";

import { useEffect, useState, useRef } from "react";
import styles from "../styles/section-four.module.css";
export default function SectionFour() {
  const [title, setTitle] = useState("");
  const [subText, setSubText] = useState("");
  const [map, setMap] = useState("");
  const [sponsor, setSponsor] = useState("");
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const sectionFour = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // update state agar className ikut berubah
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionFour) observer.observe(sectionFour);

    return () => {
      if (sectionFour) observer.unobserve(sectionFour);
    };
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/data/section-four.json");
        const data = await res.json();

        // ambil array
        setTitle(data["section-four-title"][0]);
        setSubText(data["section-four-subtext"][0]);
        setMap(data["section-four-map"]);
        setSponsor(data["section-four-sponsor"]);
      } catch (error) {
        console.error("Error fetching data section four", error);
      }
    }

    fetchData();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.sectionFour} ${isVisible ? styles.show : ""}`}
    >
      {" "}
      <div className={styles.sectionFourTitle}>
        <p>{title}</p>
      </div>
      <div className={styles.sectionFourSubtext}>
        <p>{subText}</p>
      </div>
      <div className={styles.sectionFourMap}>
        {map && <img src={map} alt="map" />}
      </div>
      <div className={styles.sectionFourSponsor}>
        {sponsor && <img src={sponsor} alt="sponsor" />}
      </div>
    </section>
  );
}
