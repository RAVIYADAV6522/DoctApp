import React from "react";
import { assets } from "../assets/assets";

export default function About() {
  return (
    <div>
      <div className="flex flex-col items-center gap-10 pt-10">
        <p className="text-gray-600 text-3xl">
          ABOUT <span className="text-black font-bold">US</span>
        </p>
        <div className="flex flex-col md:flex-row">
          <div className="md:min-w-1/2 w-full">
            <img className="md:min-w-72 w-full" src={assets.about_image}></img>
          </div>
          <div className="md:pl-10 md:pt-0 pt-10 flex flex-col gap-5">
            <p>
              Welcome to DoctApp, your trusted partner in managing your
              healthcare needs conveniently and efficiently. At DoctApp, we
              understand the challenges individuals face when it comes to
              scheduling doctor appointments and managing their health records.
            </p>

            <p>
            DoctApp is committed to excellence in healthcare technology. We
              continuously strive to enhance our platform, integrating the
              latest advancements to improve user experience and deliver
              superior service. Whether you're booking your first appointment or
              managing ongoing care, DoctApp is here to support you every
              step of the way.
            </p>

            <p className="text-black font-bold">Our Vision</p>

            <p>
              Our vision at DoctApp is to create a seamless healthcare
              experience for every user. We aim to bridge the gap between
              patients and healthcare providers, making it easier for you to
              access the care you need, when you need it.
            </p>
          </div>
        </div>
      </div>

      {/* {choose us section} */}
      <div>
        <div>
          <p className="text-black font-semibold text-2xl mb-5 mt-5">
            WHY <b className="text-gray-600 font-semibold">CHOOSE US</b>
          </p>
          <div className="flex flex-col md:flex-row md:overflow-x-scroll">
            <div className="border md:px-16 md:py-8 sm:px-10 px-10 pt-16 pb-16 flex flex-col gap-5 hover:bg-primary hover:cursor-pointer hover:text-white hover:font-semibold text-gray-600">
              <b className=" text-xl">EFFICIENCY:</b>
              <p className=" text-xl">
                Streamlined appointment scheduling that fits into your busy
                lifestyle.
              </p>
            </div>

            <div className="border md:px-16 md:py-8 sm:px-10 px-10 pt-16 pb-16 flex flex-col gap-5 hover:bg-primary hover:cursor-pointer hover:text-white hover:font-semibold text-gray-600">
              <b className=" text-xl">CONVENIENCE:</b>
              <p className=" text-xl">
                Access to a network of trusted healthcare professionals in your
                area.
              </p>
            </div>

            <div className="border md:px-16 md:py-8 sm:px-10 px-10 pt-16 pb-16 flex flex-col gap-5 hover:bg-primary hover:cursor-pointer hover:text-white hover:font-semibold text-gray-600">
              <b className="text-xl">PERSONALIZATION:</b>
              <p className=" text-xl">
                Tailored recommendations and reminders to help you stay on top
                of your health.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
