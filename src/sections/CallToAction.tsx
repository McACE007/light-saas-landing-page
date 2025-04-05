"use client";
import ArrowRight from "@/assets/arrow-right.svg";
import Image from "next/image";
import springImage from "@/assets/spring.png";
import starImage from "@/assets/star.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function CallToAction() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-white to-[#D2DCFF] overflow-x-clip"
    >
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title">Sign up for free today</h2>
          <p className="section-description mt-5">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
          <motion.img
            src={springImage.src}
            alt="Spring Image"
            width={363}
            height={363}
            className="hidden md:block absolute -top-[19px] -right-[331px]"
            style={{
              translateY: translateY,
            }}
          />

          <motion.img
            src={starImage.src}
            alt="Star Image"
            width={360}
            height={360}
            className="hidden md:block absolute -top-[137px] -left-[350px]"
            style={{
              translateY: translateY,
            }}
          />
        </div>

        <div className="mt-10 flex justify-center gap-2">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-text flex gap-1">
            <span>Learn More</span>
            <ArrowRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
