"use client";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import SectionFive from "./components/section-five";
import SectionFour from "./components/section-four";
import SectionOne from "./components/section-one";
import SectionThree from "./components/section-three";
import SectionTwo from "./components/section-two";

export default function Home() {
  return (
    <>
      <Navbar />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <Footer />
    </>
  );
}
