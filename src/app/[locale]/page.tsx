"use client";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhyUsBlock from "./components/WhyUsBlock";
import OurMissionBlock from "./components/OurMissionBlock";
import WhoIsOur from "./components/WhoIsOur";
import PaymentBlock from "./components/PaymentBlock";
import Feedbacks from "./components/Feedbacks";
import { useTranslations } from "next-intl";
import YourProgram from "./components/YourProgram";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  const t = useTranslations("Post_header");

  // const elem: HTMLDivElement| null | undefined = document.getElementById("program-item");
  // const elemHeight: number | undefined = elem?.getBoundingClientRect().top;
  // console.log(elemHeight);

  function logScrollCoordinates() {
    let scrollY = window.scrollY;
    if (scrollY !== 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  return (
    <>
      <Header scrolled={scrolled} />
      <main className="main" onWheel={logScrollCoordinates}>
        <div className="post_header">
          <div className="title_wrapper">
            <h1 className="title">
              Learn a foreign language by studying 10 minutes a day
            </h1>
            <p className="subtitle">
              Set achievable goals. Get advice from native speakers. Achieve
              more. Learn a foreign language and discover a world of new
              opportunities!.
            </p>
            <div className="post_header_btns_wrapper">
              <button className="post_header_btn">
                <a href="https://t.me/Darina_busy" target="_blank">
                  {t("Request a call")}
                </a>{" "}
              </button>
              <button
                className="post_header_btn right"
                // onClick={() => window.scrollTo(0, elemHeight - 120)}
              >
                {/* <a href="https://t.me/Darina_busy" target="_blank"> */}
                {t("Request a call")}
                {/* </a>{" "} */}
              </button>
            </div>
          </div>
          <img src={"/english_class.png"} className="post_header_img" alt="" />
        </div>
        <div className="container">
          <WhyUsBlock />
          <OurMissionBlock />
          <WhoIsOur />
          <YourProgram />
          <Feedbacks />
          <PaymentBlock />
        </div>
      </main>
      <Footer />
    </>
  );
}
