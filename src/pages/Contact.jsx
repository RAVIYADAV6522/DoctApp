import React from "react";
import { assets } from "../assets/assets";

export default function Contact() {
  return (
    <div>
      <div className="flex flex-col items-center mt-10 pl-10">
        <p className="text-3xl text-gray-600">
          CONTACT <span className="taxt-black font-semibold">US</span>
        </p>
        <div className="flex flex-col md:flex-row gap-10 mt-10">
          {/* {left} */}
          <div className="">
            <img
              className="w-full md:max-w-[360px]"
              src={assets.contact_image}
            ></img>
          </div>
          {/* {right} */}
          <div className="flex flex-col gap-8 ">
            <p className="text-2xl text-gray-600 font-semibold">OUR OFFICE</p>
            <p className="text-gray-600 font-light">
              00000 Willms Station Suite 000, Washington, USA
            </p>
            <p className="text-gray-600 font-light">
              Tel: (000) 000-0000 Email: yadavr74839@gmail.com
            </p>
            <p className="text-2xl text-gray-600 font-semibold">
              CAREERS AT DoctApp
            </p>
            <p className="text-gray-600 font-light">
              Learn more about our teams and job openings.
            </p>
            <button className="border border-black px-8 py-3 w-1/2 hover:bg-black hover:text-white transition-all duration-700">
              Explore Jobs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
