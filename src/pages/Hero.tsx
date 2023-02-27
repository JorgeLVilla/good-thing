import React from "react";
import Image from "next/image";
import heroImage from "../assets/heroImage.png";
import heroImage2 from "../assets/heroImage2.png";
import heroImage3 from "../assets/heroImage3.png";
import heroCouple from "../assets/heroCouple.png";
import Link from "next/link";

type Props = {
  title: string;
};

const images = [heroImage2, heroImage3, heroImage2, heroImage3];

const HeroTitles = ({ title }: Props) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between mx-auto py-10 lg:py-32">
      <h2 className="text-2xl text-secondary lg:text-4xl text-center max-w-xs">
        {title}
      </h2>
      <div className="flex h-[2px] w-2/3 my-2 bg-secondary"></div>
    </div>
  );
};

const Hero = (props: Props) => {
  return (
    <div className="h-auto w-full mx-auto bg-primary">
      {/* -------------Landing Page Image container-------------- */}
      <div className="lg:h-screen w-full">
        <Image
          src={heroImage}
          alt=""
          className="w-[100%] h-[500px] lg:h-[90%] object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* ---------------First hero header section--------------------------- */}
        <HeroTitles title="You found a good thing" />

        {/* --------------Hero page couple section----------- */}
        <div className=" flex flex-col lg:flex-row mx-auto">
          <div className="m-2 z-10 lg:w-[50%] mx-auto">
            <Image src={heroCouple} alt="" />
          </div>
          <div className="lg:w-[60%] flex flex-col justify-center items-center text-secondary bg-off-white mx-auto lg:-translate-x-20 lg:translate-y-16 px-4 py-8">
            <div className="lg:max-w-sm py-6">
              <h3 className="uppercase font-semibold lg:text-xl my-2">
                who we are
              </h3>
              <h2 className="text-2xl font-medium lg:text-5xl my-2 lg:leading-snug">
                Who is behind the lens?
              </h2>
              <p className="text-xl lg:text-4xl font-light leading-8 lg:leading-normal lg:max-w-md">
                Lectus sit turpis iaculis eu non sed turpis suscipit facilisi.
                Lorem morbi non morbi id aliquam. Urna adipiscing odio. uscipit
                facilisi. Lorem morbi non liquam. Urna adipis.
              </p>
            </div>
          </div>
        </div>

        {/* -------------------Hero services section---------------- */}
        <div className="flex flex-col lg:flex-row lg:mt-36 mx-auto text-secondary">
          <div className="lg:w-1/2 text-center px-16 py-10">
            <h2 className="text-2xl lg:text-4xl">Photography</h2>
            <p className="text-lg lg:text-2xl my-5 max-w-2xl mx-auto lg:px-8">
              Adipiscing mauris sed metus dictum eget morbi aliquet. Sit neque
              tempus eget dictum velit tristique.
            </p>
            <div className="flex justify-center lg:justify-end lg:text-lg uppercase">
              <Link href="/">Learn more</Link>
            </div>
          </div>
          <div className="lg:w-1/2 text-center px-16 py-10">
            <h2 className="text-2xl lg:text-4xl">VideoGraphy</h2>
            <p className="text-lg lg:text-2xl my-5 max-w-2xl mx-auto lg:px-8">
              Adipiscing mauris sed metus dictum eget morbi aliquet. Sit neque
              tempus eget dictum velit tristique.
            </p>
            <div className="flex justify-center lg:justify-end lg:text-lg uppercase">
              <Link href="/">Learn more</Link>
            </div>
          </div>
        </div>
        {/* --------------------------------Hero Images--------------- */}
        <div>
          <HeroTitles title="Check out our recent weddings" />

          <div className="p-10 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14">
            {images.map((image, index) => (
              <div key={index}>
                <Image alt="" src={images[index]} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
