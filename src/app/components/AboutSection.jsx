"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import pcImg from "../assets/images/pc-desk.png";
import TabButton from "./TabButton";
import {motion} from 'framer-motion';

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Atatürk University, Computer Programming</li>
      </ul>
    ),
  },
];

function AboutSection() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTranstition] = useTransition();

  const handleTabChange = (id) => {
    startTranstition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white">
      <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
      className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src={pcImg} width={500} height={500} alt="desktop" />
        <div>
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full"></div>
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base md:text-lg ">
            Hi! I'm a frontend developer passionate about creating modern and
            user-friendly interfaces. I build projects using technologies like
            JavaScript, React, and Next.js. I'm always eager to learn and enjoy
            exploring new technologies. I also have knowledge of SEO and pay
            close attention to building search engine-friendly structures in my
            projects. I'm a strong team player who enjoys collaborating and
            creating together. My goal is to make people's lives easier with
            simple and effective solutions.
          </p>
          <div id="projects" className="flex sm:-scroll-m-32 scroll-m-16 flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            {/* <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experience
            </TabButton> */}
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default AboutSection;
