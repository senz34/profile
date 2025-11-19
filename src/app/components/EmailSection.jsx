'use client'
import React, {useState} from "react";
import Github from "../../../public/images/github.png";
import LinkedIn from "../../../public/images/linkedIn.png";
import Link from "next/link";
import Image from "next/image";
import {motion} from 'framer-motion'

function EmailSection() {
  
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [emailRateLimit, setEmailRateLimit] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
    email: e.target.email.value,
    subject: e.target.subject.value,
     message: e.target.message.value,
  };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    }
    const response = await fetch(endpoint, options);
    const resData = await response.json();

    
    if(response.status === 200) {
      console.log('message sent')
      setEmailSubmitted(true);
    }
    else if(response.status === 429){
      console.log('ratelimit')
      setEmailRateLimit(true);
    }
  }

  return (
    <section id='contact' className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
      <motion.div
                initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}>
        <h4 className="text-xl font-bold text-white my-2">Let's Connect</h4>
        <p className="text-[#adb7be] mb-4 max-w-md ">
          Got something on your mind? Let’s talk! 
        </p>
        <div className="socials items-center flex flex-row gap-2">
          <Link target="blank" href={"https://github.com/senz34"}>
            <Image width={50} height={50} src={Github} alt="github" />
          </Link>
          <Link target="blank" href={"https://www.linkedin.com/in/sercanc/"}>
            <Image width={50} height={50} src={LinkedIn} alt="linkedIn" />
          </Link>
        </div>
      </motion.div>
      <motion.div
                initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}>
        <form onSubmit={handleSubmit} className="flex text-white flex-col">
          <div className="mb-6">
            <label
              className="block mb-2 text-sm font-medium"
              htmlFor="email"
              typeof="email"
            >
              Your email
            </label>
            <input
              className="bg-[#18191e] border border-[#333f3f] placholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5 "
              name='email'
              type="email"
              id="email"
              required
              placeholder="sercan@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label
              className="block mb-2 text-sm font-medium"
              htmlFor="subject"
              typeof="email"
            >
              Subject
            </label>
            <input
              className="bg-[#18191e] border border-[#333f3f] placholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5 "
              name='subject'
              type="text"
              id="subject"
              required
              placeholder="Just saying hi"
            />{" "}
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white bloxk text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5 "
              placeholder="Let's talk about..."
            ></textarea>
          </div>
          <button
            type="submit"
            className=" bg-gray-100 hover:bg-gray-200 cursor-pointer text-black font-medium py-2.5 px-5 rounded-xl full "
          >
            Leave a message
          </button>
                      {
              emailSubmitted && (
                <p className="text-green-500 text-sm mt-2">Email sent succesfully!</p>
              )
            }
            {
              emailRateLimit && (
                <p className="text-red-500 text-sm mt-2">You can only send one message per day!</p>
              )
            }
        </form>
      </motion.div>
    </section>
  );
}

export default EmailSection;
