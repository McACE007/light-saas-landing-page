"use client";
import productImage from "@/assets/product-image.png";
import Image from "next/image";
import pyramidImage from "@/assets/pyramid.png";
import cubeImage from "@/assets/tube.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function ProductShowcase() {
  const productRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: productRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={productRef}
      className="bg-gradient-to-b to-[#D2DCFF] from-[#FFFFFF] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="section-title mt-5">
            A more effective way to track progress
          </h2>
          <p className="section-description mt-5">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
        </div>
        <div className="relative">
          <Image src={productImage} alt="Product Image" className="mt-10" />
          <motion.img
            src={pyramidImage.src}
            alt="Pyramid Image"
            width={262}
            height={262}
            className="hidden md:block md:absolute -top-32 -right-36"
            style={{
              translateY: translateY,
            }}
          />
          <motion.img
            src={cubeImage.src}
            alt="Cube Image"
            width={248}
            height={248}
            className="hidden md:block md:absolute bottom-14 -left-36 lg:bottom-24"
            style={{
              translateY: translateY,
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default ProductShowcase;
