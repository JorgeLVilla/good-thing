import React from "react";

const Footer = () => {
  return (
    <main className="text-center text-2xl ">
      <div className="sm:flex w-4/5 h-[.25px] bg-secondary mx-auto"></div>
      <div className="sm:flex sm:justify-around sm:py-5">
        <div className="my-5 py-1 sm:w-1/3 sm:pl-24">
          <h1>Social</h1>
          <p className="text-xl py-1 text-secondary">Facebook</p>
          <p className="text-xl py-1 text-secondary">Instagram</p>
        </div>
        <div className="hidden sm:block">
          <div className="w-[.25px] h-4/5 bg-secondary sm:mt-4"></div>
        </div>
        <div className="my-5 py-1 sm:w-1/3 sm:pr-24">
          <h1>Quick Links</h1>
          <p className="text-xl py-1 text-secondary">Better Media</p>
          <p className="text-xl py-1 text-secondary">Wolftown Studios</p>
        </div>
      </div>
      <div className="sm:flex w-4/5 h-[.25px] bg-secondary mx-auto mb-5"></div>
      <div className="sm:flex sm:justify-center sm:mx-10 pb-5">
        <div className="text-xs">
          ©2023 Jorge Villalobos, All Rights Reserved
        </div>
        <div className="text-xs">• Credits Wolftown Studios</div>
      </div>
    </main>
  );
};

export default Footer;
