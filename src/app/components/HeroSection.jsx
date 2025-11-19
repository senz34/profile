"use client";

import React from "react";
import Image from "next/image";
import heroImg from "../assets/images/avatar.png";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

function HeroSection() {

  const CV = 'https://drive.google.com/file/d/1XdDpujfy7D6n6pwH26VNkw2XCZzkNie0/view?usp=sharing'
  const CV_download = 'https://drive.google.com/uc?export=download&id=1XdDpujfy7D6n6pwH26VNkw2XCZzkNie0'

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="col-span-7 place-self-center text-center sm:text-left"
        >
          <h1 className="text-white mb-4 lg:text-6xl sm:text-5xl text-4xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#adb7be] to-gray-500 ">
              Hello, I'm{" "}
            </span>
            <br />
            <TypeAnimation className="text-transparent bg-clip-text bg-gradient-to-tr from-amber-500 to-amber-600 "
              sequence={["Sercan", 1000, "Web Developer", 300]}
              wrapper="span"
              speed={30}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#adb7be] text-base sm:text-lg lg:text-2xl mb-6">
            I design modern, user-friendly websites tailored to your needs.
          </p>
          <div>
            <Link 
              href={CV}
              target="blank" 
              className="inline-block sm:w-fit cursor-pointer w-full px-8 py-4 rounded-full mr-4 bg-white hover:bg-slate-200 text-black"
            >
              Hire Me!
            </Link>
            
            <Link 
              href={CV_download}
              target="blank" 
              className="inline-block w-full sm:w-fit cursor-pointer px-8 py-4 rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3"
            >
              Download CV
            </Link>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
           className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src={heroImg}
              alt="hero image"
              width={300}
              height={300}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;