"use client";

import { useEffect, useState } from "react";
import styles from "../styles/section-five.module.css";

export default function SectionFive() {
  const [title, setTitle] = useState("");
  const [subText, setSubText] = useState("");
  const [reviews, setReviews] = useState<any[]>([]);
  const [subscribeTitle, setSubscribeTitle] = useState("");
  const [subscribeSubText, setSubscribeSubText] = useState("");

  // state untuk melacak tombol aktif
  const [activeArrow, setActiveArrow] = useState<"left" | "right">("right");

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/data/section-five.json");
        const data = await res.json();

        // ambil array
        setTitle(data["section-five-title"][0]);
        setSubText(data["section-five-subtext"][0]);
        setReviews(data["reviews"]);
        setSubscribeTitle(data["subscribe-title"][0]);
        setSubscribeSubText(data["subscribe-subtext"][0]);
      } catch (error) {
        console.error("Error fetching data section five", error);
      }
    }
    fetchData();
  }, []);

  return (
    <section className={styles.sectionFive}>
      {/* Title & Subtext */}
      <div className={styles.sectionFiveTitle}>
        <p>{title}</p>
      </div>
      <div className={styles.sectionFiveSubtext}>
        <p>{subText}</p>
      </div>

      {/* Review Wrapper */}
      <div className={styles.reviewWrapper}>
        {reviews.map((review, index) => (
          <div key={index} className={styles.reviewBox}>
            <div className={styles.reviewBoxTop}>
              <div className={styles.reviewBoxProfile}>
                <img src={review["profile-image"]} alt={review.name} />
              </div>

              <div className={styles.reviewBoxIdentity}>
                <div className={styles.reviewBoxName}>
                  <h5>{review.name}</h5>
                </div>
                <div className={styles.reviewBoxPlace}>{review.place}</div>
              </div>

              <div className={styles.reviewBoxRating}>
                <div className={styles.reviewBoxScore}>
                  {review["rating-score"]}
                </div>
                <div className={styles.reviewBoxStar}>
                  <img src="/img/star-review.png" alt="star" />
                </div>
              </div>
            </div>

            <div className={styles.reviewBoxCenter}>
              <div className={styles.reviewBoxText}>
                "{review["review-text"]}"
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slider Navigation */}
      <div className={styles.sectionFiveSlide}>
        <div className={styles.slideMove}>
          <img src="/img/slide-move.png" alt="slide-move" />
        </div>

        <div className={styles.slideArrow}>
          <div className={styles.arrowButtons}>
            <button
              className={`${styles.arrowBtn} ${
                activeArrow === "left" ? styles.active : styles.inactive
              }`}
              onClick={() => setActiveArrow("left")}
            >
              {/* SVG panah kiri */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </button>

            <button
              className={`${styles.arrowBtn} ${
                activeArrow === "right" ? styles.active : styles.inactive
              }`}
              onClick={() => setActiveArrow("right")}
            >
              {/* SVG panah kanan */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Subscribe Box */}
      <div className={styles.subscribeWrapper}>
        <div className={styles.subscribeContent}>
          <div className={styles.subscribeText}>
            <div className={styles.subscribeTitle}>
              <p>{subscribeTitle}</p>
            </div>
            <div className={styles.subscribeSubtext}>
              <p>{subscribeSubText}</p>
            </div>
          </div>
        </div>
        <button className={styles.subscribeButton}>Subscribe Now</button>
      </div>
    </section>
  );
}
