import React from "react";

const Contact = () => {
  return (
    <main className="h-screen flex-col">
      {/*-------------FIrst Container-------*/}
      <div className="text-center flex-col items-center justify-center text-secondary">
        <div className="hidden sm:flex h-14 w-[.25px] bg-secondary mx-auto my-5"></div>
        <div className="text-sm">CONTACT</div>
        <div className="text-6xl py-2">
          We look forward to connecting <br></br>with you!
        </div>
        <p className="w-5/12 mx-auto py-2">
          Our goal and desire with Good Thing Media is to create a life lasting
          film that will not only serve as a firl to look back on but a reminder
          on why you said the words, "I DO!"
        </p>
        <div className="hidden sm:flex h-14 w-[.25px] bg-secondary mx-auto my-5"></div>
      </div>
      {/*-------------Form Container-------*/}
      <div className=""></div>
      {/*-------------Info Container-------*/}
      <div>Info Container</div>
    </main>
  );
};

export default Contact;
