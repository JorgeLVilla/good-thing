import React from "react";
import Image from "next/image";
import Logo from "../assets/logo2.png";
import { CgMenuRight, CgClose } from "react-icons/cg";

const Navbar = () => {
  return (
    <main className="flex justify-between items-center py-5">
      <div className="h-10 bg-black-500 w-48">
        <hr className="bg-secondary h-full" />
      </div>
      <div>Home</div>
      <div>Packages</div>
      <div className="h-16">
        <Image src={Logo} alt="good things logo" className="h-full w-full" />
      </div>
      <div>About Us</div>
      <div>Contact</div>
      <div className="h-10 bg-black-500 w-48">
        <hr className="bg-secondary h-full" />
      </div>
    </main>
  );
};

export default Navbar;
