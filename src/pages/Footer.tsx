import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <main className="text-center text-2xl ">
      <div className="sm:flex w-4/5 h-[.25px] bg-secondary mx-auto"></div>
      <div className="sm:flex sm:justify-around sm:py-5">
        <div className="my-5 py-1 sm:w-1/3 sm:pl-24">
          <h1>Social</h1>
          <Link
            className="text-xl py-1 text-secondary"
            href="https://www.instagram.com/goodthingmedia/?hl=en"
          >
            Facebook
          </Link>
          <Link
            className="text-xl py-1 text-secondary"
            href="https://www.instagram.com/goodthingmedia/?hl=en"
          >
            <p>Instagram</p>
          </Link>
        </div>
        <div className="hidden sm:block">
          <div className="w-[.25px] h-4/5 bg-secondary sm:mt-4"></div>
        </div>
        <div className="my-5 py-1 sm:w-1/3 sm:pr-24">
          <h1>Quick Links</h1>
          <Link
            className="text-xl py-1 text-secondary"
            href="https://www.instagram.com/bettermediaco/?hl=en"
          >
            Better Media
          </Link>
          <Link
            className="text-xl py-1 text-secondary"
            href="https://www.jvilla.dev/"
          >
            <p>Wolftown Studios</p>
          </Link>
        </div>
      </div>
      {/* <div className="sm:flex w-4/5 h-[.25px] bg-secondary mx-auto mb-5"></div> */}
      <div className="sm:flex sm:justify-center sm:mx-10 pb-5">
        <div className="text-xs">
          ©2023 Good Thing Media, All Rights Reserved
        </div>
        <div className="text-xs"> • Credits Wolftown Studios</div>
      </div>
    </main>
  );
};

export default Footer;
