import React from "react";
import Image from "next/image";
import heroCouple from "../assets/heroCouple.png";
import couplePic from "../assets/couplePic.jpg";

const AboutUs = () => {
  return (
    <main className="">
      <section>
        <div className="text-center flex-col items-center justify-center text-secondary mt-10">
          <div className="sm:flex h-14 w-[.25px] bg-secondary mx-auto"></div>
          <div className="pt-10 text-sm uppercase">Who we are</div>
          <div className="text-5xl sm:text-6xl py-2 px-2">
            Weave story into every thread of <br></br>your event
          </div>
          <p className="sm:w-5/12 mx-auto px-8 py-3 text-xl">
            Our goal and desire with Good Thing Media is to create a life
            lasting film that will not only serve as something to look back on,
            but a reminder on why you said the words, "I DO!"
          </p>
          <div className="sm:flex h-14 w-[.25px] bg-secondary mx-auto my-5"></div>
        </div>
      </section>

      {/*Couple Section-------------*/}
      <section className="sm:w-4/5 sm:mx-auto lg:mb-36">
        <div className="flex flex-col sm:flex-row mx-auto">
          <div className="m-2 z-99 sm:z-10 lg:w-[50%] mx-4 sm:mx-auto">
            <Image src={couplePic} alt="" />
          </div>
          <div className="lg:w-[60%] flex flex-col justify-center items-center text-secondary bg-off-white mx-4 sm:mx-auto mb-10 lg:-translate-x-20 lg:translate-y-16 px-4 sm:py-8">
            <div className="lg:max-w-sm py-3 sm:py-6">
              <h3 className="uppercase font-semibold text-xs lg:text-md my-2">
                who we are
              </h3>
              <h2 className="text-2xl font-medium lg:text-5xl my-2 lg:leading-snug">
                Who is behind the lens?
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl font-light leading-8 lg:leading-normal lg:max-w-md">
                What if we could capture a special moment in time filled with
                raw emotions, a once in a lifetime event, or even loved ones
                that may no longer be with us in 20 years? Well, we can!
                Videography is more than just "recording" your once in a
                lifetime event. Overall, our hope with this film is for it to be
                a reminder on why you said "YES" to marrying your best friend!
                Let's Film!
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
