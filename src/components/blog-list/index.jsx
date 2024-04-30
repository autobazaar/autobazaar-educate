import React from "react";
import { Footer, Header } from "../../layout";
import BreadcrumbThree from "../breadcrumb/breadcrumb-3";
import AdBanner from "../homes/home/ad-banner";
import ListArea from "./list-area";
import HeroArea from "../homes/home-modern-schooling/hero-area";
import HeroSlider from "../homes/home-university/hero-slider";

const index = () => {
  return (
    <div className="sticky-header">
      <div id="main-wrapper" className="main-wrapper">
        <Header no_top_bar={true} />
        <HeroSlider />
        <ListArea />
        <AdBanner />
        <Footer style_2={"footer-dark bg-image footer-style-2"} />
      </div>
    </div>
  );
};

export default index;
