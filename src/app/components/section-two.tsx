"use client";
import { useEffect, useState, useRef } from "react";
import styles from "../styles/section-two.module.css";

export default function SectionTwo() {
  const [title, setTitle] = useState("");
  const [subText, setSubText] = useState("");
  const [list, setList] = useState<string[]>([]);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const sectionTwo = sectionRef.current;

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

    if (sectionTwo) observer.observe(sectionTwo);

    return () => {
      if (sectionTwo) observer.unobserve(sectionTwo);
    };
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/data/section-two.json");
        const data = await res.json();

        setTitle(data["section-two-title"][0]);
        setSubText(data["section-two-subtext"][0]);
        setList(data["section-two-list"]);
      } catch (error) {
        console.error("Error fetching data section two", error);
      }
    }

    fetchData();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.sectionTwo} ${isVisible ? styles.show : ""}`}
    >
      <div className={styles.imageFeatures}>
        <img src="img/image-features.png" alt="Fitur Utama" />
      </div>

      <div className={styles.contentFeatures}>
        <div className={styles.titleFeatures}>
          <p>{title}</p>
        </div>

        <div className={styles.subtextFeatures}>
          <p>{subText}</p>
        </div>

        <div className={styles.listFeatures}>
          {list.map((item, index) => (
            <figure key={index} className={styles.featureItem}>
              <figcaption>{item}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
