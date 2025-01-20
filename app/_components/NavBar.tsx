import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";
import HamburgerMenu from "./HamburgerMenu";

export default function NavBar() {
  return (
    <nav className="flexBetween max-container padding-container relative z-30  py-5">
      <Link href="/">
        <Image src="hilink-logo.svg" width={74} height={29} alt="logo" />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((nav) => (
          <Link
            key={nav.key}
            href={nav.href}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:text-green-500 hover:font-semibold"
          >
            {nav.label}
          </Link>
        ))}
      </ul>
      <div className="hidden lg:flexCenter">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>
      <HamburgerMenu />
    </nav>
  );
}
