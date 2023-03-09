import React from "react";
import { INFO_A } from "@/assets/data/ServicesA";
import { INFO_B } from "@/assets/data/ServicesB";
import { INFO_C } from "@/assets/data/ServicesC";
import { link } from "fs";

const Packages = () => {
  return (
    <main className="">
      {/*-----Headline Container-----------*/}
      <div className="text-center flex-col items-center justify-center text-secondary mt-10">
        <div className="sm:flex h-14 w-[.25px] bg-secondary mx-auto"></div>
        <div className="pt-10 text-sm uppercase">services</div>
        <div className="text-5xl sm:text-6xl py-2">Our Services</div>
        <p className="sm:w-5/12 mx-auto px-10 py-3 text-xl">
          Videography is more than just "recording" your once in a lifetime
          event. Overall, our hope with this film is for it to be a reminder on
          why you said "YES" to marrying your best friend! Let's Film!
        </p>
        <div className="sm:flex h-14 w-[.25px] bg-secondary mx-auto my-5"></div>
      </div>
      {/*-----Services Container-----------*/}
      <div className="text-center">
        <section className="sm:flex sm:justify-center sm:gap-32 py-5 my-3">
          <div className="py-3 text-2xl sm:text-3xl">Package A</div>
          <ul>
            {INFO_A.map((item, index) => (
              <li key={index} className="text-lg sm:text-2xl text-secondary">
                <p>{item.price}</p>
                <p>{item.coverage}</p>
                <p>{item.film}</p>
                <p>{item.teaser}</p>
                <p>{item.turnaround}</p>
              </li>
            ))}
          </ul>
        </section>
        <div className="flex h-[.25px] w-4/5 bg-secondary mx-auto"></div>
        <section className="sm:flex sm:justify-center sm:gap-32 py-5 my-3">
          <div className="py-3 text-2xl sm:text-3xl">Package B</div>
          <ul>
            {INFO_B.map((item, index) => (
              <li key={index} className="text-lg sm:text-2xl text-secondary">
                <p>{item.price}</p>
                <p>{item.coverage}</p>
                <p>{item.film}</p>
                <p>{item.teaser}</p>
                <p>{item.audio}</p>
                <p>{item.second}</p>
                <p>{item.turnaround}</p>
              </li>
            ))}
          </ul>
        </section>
        <div className="flex h-[.25px] w-4/5 bg-secondary mx-auto "></div>
        <section className="sm:flex sm:justify-center sm:gap-32 py-5 my-2">
          <div className="py-3 text-2xl sm:text-3xl">Package C</div>
          <ul>
            {INFO_C.map((item, index) => (
              <li key={index} className="text-lg sm:text-2xl text-secondary">
                <p>{item.price}</p>
                <p>{item.coverage}</p>
                <p>{item.film}</p>
                <p>{item.teaser}</p>
                <p>{item.audio}</p>
                <p>{item.second}</p>
                <p>{item.turnaround}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
};

export default Packages;
