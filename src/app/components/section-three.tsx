"use client";

import React, { useEffect, useState } from "react";
import styles from "../styles/section-three.module.css";

export default function SectionThree() {
  const [title, setTitle] = useState("");
  const [subText, setSubText] = useState("");
  const [boxPlanItemImg, setBoxPlanItemImg] = useState("");
  const [boxPlanOneTitle, setBoxPlanOneTitle] = useState("");
  const [boxPlanTwoTitle, setBoxPlanTwoTitle] = useState("");
  const [boxPlanThreeTitle, setBoxPlanThreeTitle] = useState("");
  const [boxPlanOneList, setBoxPlanOneList] = useState<string[]>([]);
  const [boxPlanTwoList, setBoxPlanTwoList] = useState<string[]>([]);
  const [boxPlanThreeList, setBoxPlanThreeList] = useState<string[]>([]);
  const [boxPlanOnePrice, setBoxPlanOnePrice] = useState("");
  const [boxPlanTwoPrice, setBoxPlanTwoPrice] = useState("");
  const [boxPlanThreePrice, setBoxPlanThreePrice] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/data/section-three.json");
        const data = await res.json();

        // ambil array
        setTitle(data["section-three-title"][0]);
        setSubText(data["section-three-subtext"][0]);
        setBoxPlanItemImg(data["plan-item-image"]);
        setBoxPlanOneTitle(data["box-plan-one-title"][0]);
        setBoxPlanTwoTitle(data["box-plan-two-title"][0]);
        setBoxPlanThreeTitle(data["box-plan-three-title"][0]);
        setBoxPlanOneList(data["box-plan-one-list"]);
        setBoxPlanTwoList(data["box-plan-two-list"]);
        setBoxPlanThreeList(data["box-plan-three-list"]);
        setBoxPlanOnePrice(data["box-plan-one-price"][0]);
        setBoxPlanTwoPrice(data["box-plan-two-price"][0]);
        setBoxPlanThreePrice(data["box-plan-three-price"][0]);
      } catch (error) {
        console.error("Error fetchind data section three", error);
      }
    }

    fetchData();
  }, []);
  return (
    <section className={styles.sectionThree}>
      <div className={styles.titlePlan}>
        <p>{title}</p>
      </div>
      <div className={styles.subtextPlan}>
        <p>{subText}</p>
      </div>

      {/* Container semua plan */}
      <div className={styles.boxPlanContainer}>
        {/* Free Plan */}
        <div className={styles.planItem}>
          <div className={styles.boxImagePlan}>
            {boxPlanItemImg && <img src={boxPlanItemImg} alt="plan-image" />}
          </div>
          <div className={styles.boxTitlePlan}>
            <p>{boxPlanOneTitle}</p>
          </div>
          <div className={styles.boxWrapperPlanOne}>
            {boxPlanOneList &&
              boxPlanOneList.map((item, index) => (
                <figure key={index} className={styles.boxListPlanItem}>
                  <figcaption>{item}</figcaption>
                </figure>
              ))}
          </div>
          <div className={styles.boxListPlanBottom}>
            <div className={styles.boxPricePlan}>
              <p>
                {boxPlanOnePrice.split("Free").map((part, index, arr) => (
                  <React.Fragment key={index}>
                    {part}
                    {index < arr.length - 1 && (
                      <strong key={index}>Free</strong>
                    )}
                  </React.Fragment>
                ))}
              </p>
            </div>
            <button className={styles.button}>Select</button>
          </div>
        </div>

        {/* Standard Plan */}
        <div className={styles.planItem}>
          <div className={styles.boxImagePlan}>
            {boxPlanItemImg && <img src={boxPlanItemImg} alt="plan-image" />}
          </div>
          <div className={styles.boxTitlePlan}>
            <p>{boxPlanTwoTitle}</p>
          </div>
          <div className={styles.boxWrapperPlanTwo}>
            {boxPlanTwoList &&
              boxPlanTwoList.map((item, index) => (
                <figure key={index} className={styles.boxListPlanItem}>
                  <figcaption>{item}</figcaption>
                </figure>
              ))}
          </div>
          <div className={styles.boxListPlanBottom}>
            <div className={styles.boxPricePlan}>
              <p>
                  {boxPlanTwoPrice.split("$9").map((part, index, arr) => (
                  <React.Fragment key={index}>
                    {part}
                    {index < arr.length - 1 && (
                      <strong key={index}>$9</strong>
                    )}
                  </React.Fragment>
                ))}
              </p>
            </div>
            <button className={styles.button}>Select</button>
          </div>
        </div>

        {/* Premium Plan */}
        <div className={styles.planItem}>
          <div className={styles.boxImagePlan}>
            {boxPlanItemImg && <img src={boxPlanItemImg} alt="plan-image" />}
          </div>
          <div className={styles.boxTitlePlan}>
            <p>{boxPlanThreeTitle}</p>
          </div>
          <div className={styles.boxWrapperPlanThree}>
            {boxPlanThreeList &&
              boxPlanThreeList.map((item, index) => (
                <figure key={index} className={styles.boxListPlanItem}>
                  <figcaption>{item}</figcaption>
                </figure>
              ))}
          </div>
          <div className={styles.boxListPlanBottom}>
            <div className={styles.boxPricePlan}>
              <p>
                  {boxPlanThreePrice.split("$12").map((part, index, arr) => (
                  <React.Fragment key={index}>
                    {part}
                    {index < arr.length - 1 && (
                      <strong key={index}>$12</strong>
                    )}
                  </React.Fragment>
                ))}
              </p>
            </div>
            <button className={styles.button}>Select</button>
          </div>
        </div>
      </div>
    </section>
  );
}
