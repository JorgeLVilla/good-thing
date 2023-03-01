import React from "react";

const Contact = () => {
  return (
    <main className="h-screen flex-col">
      {/*-------------FIrst Container-------*/}
      <div className="border border-blue-500 text-center flex-col items-center justify-center text-secondary">
        <div className="hidden sm:flex h-14 w-[.25px] bg-secondary mx-auto my-5"></div>
        <div className="text-sm">CONTACT</div>
        <div className="text-6xl py-2">
          We look forward to connecting <br></br>with you!
        </div>
        <p className="w-3/6 mx-auto py-2">
          Adipiscing mauris sed metus dictum eget morbi aliquet. Sit neque
          tempus eget dictum velit tristique. Adipiscing mauris sed metus dictum
          eget morbi aliquet. Sit neque dictum velit tristique dictum velit
          tristique tempus eget dictum velit tristique.
        </p>
        <div className="hidden sm:flex h-14 w-[.25px] bg-secondary mx-auto my-5"></div>
      </div>
      {/*-------------Form Container-------*/}
      <div className="border border-yellow-500"></div>
      {/*-------------Info Container-------*/}
      <div>Info Container</div>
    </main>
  );
};

export default Contact;
