import React, { useState } from "react";
import Image from "next/image";
import Logo from "../assets/logo2.png";
import WhiteLogo from "../assets/whiteLogo.png";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { SlSocialInstagram, SlSocialFacebook } from "react-icons/sl";
import { NAV__LINKS } from "@/assets/data/navData";
import Link from "next/link";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <main className="flex justify-around items-center py-5 text-secondary">
      {/*-------------Desktop Menu--------------*/}
      <div className="hidden sm:flex h-[.25px] w-1/6 my-2 bg-secondary"></div>
      <div className="hidden sm:flex">
        <Link href={"/"}>Home</Link>
      </div>
      <div className="hidden sm:flex">
        <Link href={"Packages"}>Packages</Link>
      </div>
      <div className="h-14">
        <Link href={"/"}>
          <Image src={Logo} alt="good things logo" className="h-full w-full" />
        </Link>
      </div>
      <div className="hidden sm:flex">
        <Link href={"AboutUs"}>About Us</Link>
      </div>
      <div className="hidden sm:flex">
        <Link href={"Contact"}>Contact</Link>
      </div>
      <div className="hidden sm:flex h-[.25px] w-1/6 my-2 bg-secondary"></div>
      <div onClick={handleNavbar} className="sm:hidden text-4xl">
        <CgMenuRight />
      </div>
      {/*-------------Open Mobile Menu--------------*/}
      <div
        className={`${
          navbarOpen ? "block" : "hidden"
        } fixed sm:hidden inset-0 bg-secondary h-screen text-off-white`}
      >
        <section className="flex justify-around  items-center mb-28">
          <div className="h-14 w-32 rounded flex items-center my-8">
            <Link href={"/"} onClick={handleNavbar}>
              <Image
                src={WhiteLogo}
                alt="good things logo"
                className="h-full w-full"
              />
            </Link>
          </div>
          <div onClick={handleNavbar} className="text-4xl">
            <CgClose />
          </div>
        </section>
        <section className="h-3/6 text-3xl text-center flex-col justify-center items-center">
          <ul>
            {NAV__LINKS.map((item, index) => (
              <li
                onClick={handleNavbar}
                className="px-8 text-off-white my-10"
                key={index}
              >
                <Link href={`${item.path}`}>{item.display}</Link>
              </li>
            ))}
          </ul>
          <section className="flex text-3xl justify-center py-5">
            <SlSocialInstagram className="mx-4" />
            <SlSocialFacebook className="mx-4" />
          </section>
        </section>
      </div>
    </main>
  );
};

export default Navbar;
