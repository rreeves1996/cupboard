import React from "react";
import APP_LOGO from "../assets/images/cupboardlogo-green+white.png";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex h-24 flex-row items-center bg-teal-light p-4 text-offwhite">
      <div>
        <Link href="/">
          <Image src={APP_LOGO} alt="logo" height={56} objectFit="contain" />
        </Link>
      </div>
      <div></div>
    </nav>
  );
}
