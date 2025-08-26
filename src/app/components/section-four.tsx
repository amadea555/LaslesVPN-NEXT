"use client";

import { useEffect, useState } from "react";
import styles from "../styles/section-four.module.css";
export default function SectionFour() {
  const [title, setTitle] = useState("");
  const [subText, setSubText] = useState("");
  const [map, setMap] = useState("");
  const [sponsor, setSponsor] = useState("");

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
    <>
      <section className={styles.sectionFour}>
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
    </>
  );
}
