import React from "react";
import { assets } from "../assets/assets";

export default function Header() {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20">
      {/* {    left side    } */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight">
          Book Appointment <br></br> With Trusted Doctors
        </p>
        <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light">
          <img className="w-28" src={assets.group_profile} alt=""></img>
          <p>
            Simply browse through our extensive list of trusted doctors,
            {/* {sm=640px breakpoint , md=768px breakpoint} */}
            <br className="hidden sm:block"></br>schedule your appointment
            hassle-free.
          </p>
        </div>
        <a
          href="#speciality"
          className="flex gap-2 bg-white px-8 py-3 rounded-full text-gray-600 md:m-0 hover:scale-105 transition-all duration-300"
        >
          Book appointment <img className="w-5" src={assets.arrow_icon} alt=""></img>
        </a>
      </div>

      {/* {    right side    } */}
      <div className="md:w-1/2 relative">
        <img
          className="w-full md:absolute bottom-0 h-auto rounded-lg"
          src={assets.home_image}
        ></img>
      </div>
    </div>
  );
}