import React from "react";
import APP_LOGO from "../assets/images/cupboardlogo-green+white.png";
import Image from "next/image";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { BsFillBookmarkFill } from "react-icons/bs";

export default function Navbar() {
  return (
    <nav className="flex h-24 items-center justify-between bg-teal-light p-4 text-offwhite">
      <div>
        <Link href="/">
          <Image src={APP_LOGO} alt="logo" height={56} objectFit="contain" />
        </Link>
      </div>

      <div className="flex items-center gap-8 px-6 text-3xl">
        <div className="input-group mr-3 h-10">
          <input
            type="text"
            placeholder="Discover something new…"
            className="input input-md h-full w-64 border-offwhite bg-offwhite"
          />

          <button className="btn btn-neutral btn-sm h-full border-offwhite bg-offwhite">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>

        <Link href="/">
          <BsFillBookmarkFill className="transition-all hover:scale-110" />
        </Link>

        <Link href="/">
          <FaUser className="transition-all hover:scale-110" />
        </Link>
      </div>
    </nav>
  );
}
