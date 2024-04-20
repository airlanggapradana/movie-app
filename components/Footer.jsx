import {
  RiGithubLine,
  RiInstagramLine,
  RiLinkedinLine,
} from "@remixicon/react";
import Link from "next/link";
import React from "react";

const sosmed = [
  {
    href: "https://www.instagram.com/iamrangga._/",
    icon: <RiInstagramLine className="fill-neutral-500" />,
  },
  {
    href: "https://github.com/airlanggapradana",
    icon: <RiGithubLine className="fill-neutral-500" />,
  },
  {
    href: "https://www.linkedin.com/in/airlanggapradana/",
    icon: <RiLinkedinLine className="fill-neutral-500" />,
  },
];

const Footer = () => {
  return (
    <footer className="flex items-center justify-center py-12 border-2 rounded-t-xl bg-neutral-50">
      <div className="container">
        <div className="w-full">
          <h1 className="font-medium text-base text-neutral-500 text-center mb-2">
            made with love by me
          </h1>

          <h3 className="font-normal text-sm text-neutral-400 text-center mb-4">
            Follow me on social media!
          </h3>

          <div className="max-w-xl mx-auto">
            <div className="flex items-center justify-center gap-5">
              {sosmed.map((social, index) => (
                <Link
                  href={social.href}
                  key={index}
                  className="p-3 border-2 rounded-xl border-teal-500"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
