"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../logo.png";
import React, { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";

function MobileNav() {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <>
      <div className="z-50  md:hidden cursor-pointer text-3xl ml-2 pt-1">
        <Link href="/">
          <ul onClick={() => setNav(false)}>
            <Image
              src={logo}
              alt="Logo of Borlaman"
              width={45}
              height={80}
              className=""
            />
          </ul>
        </Link>
      </div>
      <div
        onClick={handleClick}
        className={
          nav
            ? "flex cursor-pointer z-50 md:hidden text-3xl pt-2 pr-1 text-white"
            : "flex cursor-pointer z-50 md:hidden text-3xl pt-2 pr-1 text-gray-950"
        }
      >
        {nav ? <MdClose /> : <MdMenu />}
      </div>
      {nav && (
        <div className=" motion-preset-slide-up-lg bg-gray-950 text-white h-screen text-center w-screen block ease-in duration-500 fixed md:hidden  z-40">
          <ul className="mt-64 font-sans " onClick={handleClick}>
            <li className="mb-2  hover:text-yellow-600 ">
              <Link href="/">Home</Link>
            </li>
            <li className="mb-2   hover:text-yellow-600  ">
              <Link href="/about">About Us</Link>
            </li>

            <li className=" mr-2  hover:text-yellow-600">
              <Link href="/services">Services</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default MobileNav;
