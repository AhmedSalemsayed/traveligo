"use client";

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Image
        src="menu.svg"
        width={32}
        height={32}
        alt="menu"
        className="lg:hidden cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      />

      <div
        className={`absolute duration-1000 top-0 right-0 overflow-hidden bg-black  h-screen shadow-lg ${
          isOpen ? "w-full p-4" : "w-0 p-0"
        }`}
      >
        <ul className="flex flex-col justify-between items-center pt-4 h-full">
          <span
            className="text-gray-50 absolute top-2 right-2 font-bold cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            &times;
          </span>
          {NAV_LINKS.map((nav) => (
            <Link
              key={nav.key}
              href={nav.href}
              className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5  w-full transition-all hover:border-b hover:border-green-500 hover:text-green-500 hover:font-semibold"
            >
              {nav.label}
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
}
