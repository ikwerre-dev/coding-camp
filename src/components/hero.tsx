'use client'
import { motion } from "framer-motion";
import {  IgIcon, InIcon, TikTokIcon, TwIcon } from "./svgs";
import Image from 'next/image';
import { heroData } from "../data/data";

const Hero = () => {
  return (
    <>
      <section className="mx-auto px-[38px] pt-[100px] md:px-[26px] lg:pt-[120px] lg:pl-[80px] lg:pr-[40px]">
        <div className="max-w-7xl mx-auto flex flex-col items-start flex-1 md:flex md:flex-row md:gap-10 md:items-center lg:flex lg:flex-row lg:items-center lg:gap-x-12 lg:justify-between">
          <div> 
            <div className="gradientText">
              <h1>
                {heroData.title}<span>.</span>
              </h1>
            </div>
            <p className="gradientText font-medium font-pop text-[15px] text-[#FFFFFF99] max-w-[353px] mt-[45px] md:mt-8 lg:mt-1 md:max-w-[639px] md:text-[18px] leading-md:[27px]">
              {heroData.tagline}
              
            </p>
            <div
              id="intro"
              className="text-[#F0FEFF] font-pop flex-shrink-0 text-[.9em] leading-[1.5] font-medium mt-[40px] flex flex-col gap-8 md:flex md:flex-col md:gap-[20px] md:mt-[45px] lg:flex lg:flex-row lg:items-start lg:gap-[12px]"
            >
              <p className="max-w-[310px]">
                {heroData.intro.text1}
              </p>
              <p className="max-w-[319px]">
                {heroData.intro.text2}
              </p>
            </div>
            <div className="mt-[35px] md:mt-[65px] flex justify-start items-center gap-[26px] md:gap-[40px]">

              <motion.a
                href={heroData.socialLinks.twitter}
                target="_blank"
                rel="noreferrer"
                whileTap={{ scale: 1.1 }}
                whileHover={{ scale: 0.99 }}
                className={`h-auto w-auto`}
              >
                <TwIcon
                  fill={`#6f1cd7`}
                  className={`w-[30px] h-[30px] rounded-full border-[#6f1cd7] border-solid border-[2px] p-1  transition-all duration-500 hover:bg-white`}
                />
              </motion.a>
              <motion.a
                href={heroData.socialLinks.tiktok}
                target="_blank"
                rel="noreferrer"
                whileTap={{ scale: 1.1 }}
                whileHover={{ scale: 0.99 }}
                className={`h-auto w-auto`}
              >
                <TikTokIcon
                  fill={`#6f1cd7`}
                  className={`w-[30px] h-[30px] rounded-full border-[#6f1cd7] border-solid border-[2px] p-1  transition-all duration-500 hover:bg-white`}
                />
              </motion.a>
              <motion.a
                href={heroData.socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                whileTap={{ scale: 1.1 }}
                whileHover={{ scale: 0.99 }}
                className={`h-auto w-auto`}
              >
                <IgIcon
                  fill={`#6f1cd7`}
                  className={`w-[30px] h-[30px] rounded-full border-[#6f1cd7] border-solid border-[2px] p-0.5  transition-all duration-500 hover:bg-white`}
                />
              </motion.a>
              <motion.a
                href={heroData.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                whileTap={{ scale: 1.1 }}
                whileHover={{ scale: 0.99 }}
                className={`h-auto w-auto`}
              >
                <InIcon
                  fill={`#6f1cd7`}
                  className={`w-[30px] h-[30px] rounded-full border-[#6f1cd7] border-solid border-[2px] p-0.5  transition-all duration-700 hover:bg-white`}
                />
              </motion.a>
            </div>
          </div>
          <div className="mt-[2.5rem]">
            <div className="relative flex flex-col justify-center w-max">
              <div className={`w-full`}>
                <Image
                  src="/images/my-hero.jpg"
                  alt="hero image"
                  width={400}
                  height={400}
                  className="absolute w-full h-full bottom-3 object-cover right-4 md:bottom-5 md:right-6 lg:bottom-10 lg:right-12"
                  draggable={false}
                  priority
                />
              </div>
              <motion.div
                className={`shrink-0 w-[300px] h-[300px] lg:min-w-[400px] lg:min-h-[400px] border-[3px] border-[#6f1cd7]`}
              ></motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
