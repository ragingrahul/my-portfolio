import React from "react";
import Header from "../components/Header";
import SwiperSlider from "../components/SwiperSlider";
import Footer from "../components/Footer";
import WhoIAm from "@/components/WhoIAm";
import Projects from "@/components/Projects";


export default function Home() {
  return (
    <div className="text-[#e7e7e7] uppercase">
      <Header />
      <SwiperSlider />
      <WhoIAm/>
      <Projects />
      <Footer />
    </div>
  );
}