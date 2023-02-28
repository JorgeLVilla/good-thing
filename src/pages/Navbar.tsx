import React, { useState } from "react";
import Image from "next/image";
import Logo from "../assets/logo2.png";
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
    <main className="flex justify-around items-center py-5 text-secondary border">
      {/*-------------Desktop Menu--------------*/}
      <div className="hidden sm:flex h-10 bg-black-500 w-48">
        <hr className="bg-secondary h-0.5" />
      </div>
      <div className="hidden sm:flex">Home</div>
      <div className="hidden sm:flex">Packages</div>
      <div className="h-14">
        <Image src={Logo} alt="good things logo" className="h-full w-full" />
      </div>
      <div className="hidden sm:flex">About Us</div>
      <div className="hidden sm:flex">Contact</div>
      <div className="hidden sm:flex h-10 bg-black-500 w-48">
        <hr className="hidden sm:flex bg-secondary h-0.5" />
      </div>
      <div onClick={handleNavbar} className="sm:hidden text-4xl">
        <CgMenuRight />
      </div>
      {/*-------------Open Mobile Menu--------------*/}
      <div
        className={`${
          navbarOpen ? "block" : "hidden"
        } fixed sm:hidden inset-0 bg-secondary h-screen text-off-white`}
      >
        <section className="flex justify-around  items-center border mb-28">
          <div className="h-14 bg-white rounded flex items-center my-8">
            <Image
              src={Logo}
              alt="good things logo"
              className="h-full w-full"
            />
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
