import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

export default function Banner() {
  const navigate = useNavigate()
  return (
    <div className="flex bg-primary rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10">
      {/* {left side} */}
      <div className="flex-1 sm:py-10 md:py-16 lg:py-24 lg:pl-5">
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl text-white font-semibold">
          <p>Book Appointment</p>
          <p className="mt-4">With 100+ Trusted Doctors</p>
        </div>
        <button onClick={()=>{navigate('/login'),scrollTo(0,0)}} className="bg-white text-sm sm:text-base text-gray-600 px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all">
          Create Account
        </button>
      </div>
      {/* {right side} */}
      <div className="hidden md:w-1/2 md:block lg:w-[370px] relative">
        <img
          className="w-full absolute bottom-0 right-0 max-w-md"
          src='https://prescripto.vercel.app/assets/appointment_img-DzbZlMsi.png'
        ></img>
      </div>
    </div>
  );
}