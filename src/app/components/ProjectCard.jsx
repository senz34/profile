import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

function ProjectCard({ imgUrl, title, description, gitUrl, previewUrl }) {
  return (
    <div >
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] opacity-0 hidden group-hover:flex group-hover:opacity-80 transition-all duration-500">
          <Link
            href={gitUrl} target="blank"
            className="h-14 w-14 border-2 relative rounded-full mr-2 border-[#adb7be] hover:border-white group/link "
        >
            <CodeBracketIcon className="h-10 w-10 text-[#adb7be] cursor-pointer absolute top-1/2 left-1/2 transfrom -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white "/>
        </Link>
        <Link
            href={previewUrl} target="blank"
            className="h-14 w-14 border-2 relative rounded-full border-[#adb7be] hover:border-white group/link "
        >
            <EyeIcon className="h-10 w-10 text-[#adb7be] cursor-pointer absolute top-1/2 left-1/2 transfrom -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white "/>
        </Link>
        </div>
      </div>
      <div className="text-white mt-2 rounded-b-xl bg-[#181818] text-center py-6 px-4 ">
        <h3 className="font-xl font-semibold mb-2">{title}</h3>
        <p className="text-[#adb7be] ">{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
