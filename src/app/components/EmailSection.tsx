"use client";
import React, { useState, FormEvent } from "react";
import GitHubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection: React.FC = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = {
      email: (form.email as HTMLInputElement).value,
      subject: (form.subject as HTMLInputElement).value,
      message: (form.message as HTMLTextAreaElement).value,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section id="contact" className="my-12 md:my-12 py-24 relative">
      <h2 className="text-4xl font-bold text-white my-2 text-center mb-8">Let&apos;s Connect!</h2>
      <div className="border-2 border-blue-600 rounded-lg p-6 bg-blue-950 shadow-lg">
        <div className="absolute top-3/4 left-0 -translate-x-1/2 translate-y-0">
          <div className="bg-rose-600 opacity-70 h-72 w-72 rounded-full blur-3xl"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Left Section */}
          <div className="z-10">
            <p className="text-white text-xl mb-4 max-w-md">
              I am currently searching for any new career opportunities related
              to Full Stack Software Engineering or AI/ML. My inbox is always
              open. Whether you have any questions regarding my work or just
              want to say hello, I will do my best to respond to you as soon as
              I can!
            </p>
            <div className="socials flex flex-row gap-2">
              <Link href="https://github.com/sutpat1" target="_blank">
                <Image src="/github-icon.svg" alt="Github Icon" width={60} height={60} />
              </Link>
              <Link href="https://linkedin.com/in/sharvutpat/" target="_blank">
                <Image src="/linkedin-icon.svg" alt="Linkedin Icon" width={60} height={60} />
              </Link>
            </div>
          </div>

          {/* Right Section - Form */}
          <div>
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="text-white block mb-2 text-sm font-bold"
                >
                  Your email
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  required
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="john@gmail.com"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="text-white block mb-2 text-sm font-bold"
                >
                  Subject
                </label>
                <input
                  name="subject"
                  type="text"
                  id="subject"
                  required
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Just saying hello"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="text-white block text-sm mb-2 font-bold"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Let&apos;s talk about..."
                />
              </div>
              <button
                type="submit"
                className="bg-pink-700 hover:bg-pink-500 font-bold py-2.5 px-5 rounded-lg w-full"
              >
                Send Message
              </button>
              {emailSubmitted && (
                <p className="text-green-500 text-sm mt-2">
                  Email sent successfully!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
