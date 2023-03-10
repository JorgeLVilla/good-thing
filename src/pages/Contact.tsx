import React from "react";

const Contact = () => {
  return (
    <main className="flex-col">
      {/*-------------FIrst Container-------*/}
      <div className="text-center flex-col items-center justify-center text-secondary mt-10">
        <div className="sm:flex h-14 w-[.25px] bg-secondary mx-auto"></div>
        <div className="pt-10 text-sm uppercase">contact</div>
        <div className="text-5xl sm:text-6xl py-2">
          We look forward to connecting <br></br>with you!
        </div>
        <p className="sm:w-5/12 mx-auto px-10 py-3 text-xl">
          {` Our goal and desire with Good Thing Media is to create a life lasting
          film that will not only serve as something to look back on, but a
          reminder on why you said the words, "I DO!"`}
        </p>
        <div className="sm:flex h-14 w-[.25px] bg-secondary mx-auto my-5"></div>
      </div>
      {/*-------------Form Container-------*/}

      <div className="bg-off-white m-8 sm:mx-16 px-12 text-secondary text-sm font-light">
        <form action="/send-data-here" method="post" className="py-10">
          <div className="flex-wrap sm:flex">
            <div className="w-full sm:w-3/6">
              <div className="mt-10">First name:</div>
              <input
                type="text"
                id="first"
                placeholder="First Name"
                className="w-4/5 border-b-[1px] py-2"
              />
              <div className="mt-10">Last name:</div>
              <input
                type="text"
                id="last"
                placeholder="Last Name"
                className="w-4/5 border-b-[1px] py-2"
              />
              <div className="mt-10">Email:</div>
              <input
                type="text"
                id="email"
                placeholder="Email"
                className="w-4/5 border-b-[1px] py-2"
              />
            </div>
            <div className="w-full sm:w-3/6">
              <div className="mt-10">Phone</div>
              <input
                type="text"
                id="phone"
                placeholder="Phone Number"
                className="w-4/5 border-b-[1px] py-2"
              />
              <div className="mt-10">Event Type:</div>
              <input
                type="text"
                id="event-type"
                placeholder="Event Type"
                className="w-4/5 border-b-[1px] py-2"
              />
              <div className="mt-10">Location</div>
              <input
                type="text"
                id="location"
                placeholder="Location (State or Country)"
                className="w-4/5 border-b-[1px] py-2"
              />
            </div>
          </div>
          <div className="w-full">
            <div className="mt-10">Message</div>
            <input
              type="text"
              id="message"
              placeholder="Event Details & Other Questions"
              className="w-full h-[200px] border-b-[1px] py-2"
            />
          </div>
          <div className="flex mt-10 h-[35px]">
            <button
              type="submit"
              className="border w-full sm:w-1/5 mx-auto text-off-white bg-secondary rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/*-------------Info Container-------*/}
      <div className=""></div>
      <section className=" lg:flex sm:flex-row justify-center text-2xl text-center mt-10 sm:py-10">
        <div className="py-5 sm:px-24">
          <h1>Address</h1>
          <p className="text-secondary py-3">
            84 Kingswood Dr,<br></br> San Diego, CA
          </p>
        </div>
        <div className="py-5 sm:px-24">
          <h1>Email</h1>
          <p className="text-secondary py-3">
            Email Us At:<br></br> info@sitegoodthing.com
          </p>
        </div>
        <div className="py-5 sm:px-24">
          <h1>Phone</h1>
          <p className="text-secondary py-3">
            Call Us At:<br></br> 800-534-1934
          </p>
        </div>
      </section>
    </main>
  );
};

export default Contact;
