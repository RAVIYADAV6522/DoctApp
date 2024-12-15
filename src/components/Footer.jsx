import React from "react";
import { assets } from "../assets/assets";

export default function Footer() {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* {left section} */}
        <div>
          <img className="w-40 mb-5" src={assets.mylogo}></img>
          <p className=" w-full md:w-2/3 text-gray-600 leading-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        {/* {middle section} */}
        <div>
          <p className="text-black font-bold mb-6 text-xl">COMPANY</p>
          <ul className="text-gray-600 flex flex-col gap-2">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        {/* {right section} */}
        <div>
          <p className="text-black font-bold mb-6 text-xl">GET IN TOUCH</p>
          <ul className="text-gray-600 flex flex-col gap-2">
            <li>+0-000-000-000</li>
            <li>yadavr74839@gmail.com</li>
          </ul>
        </div>
      </div>
      {/* {---------copyright text--------} */}

      <div className="flex flex-col text-center">
        <hr />
        <p>Copyright 2024 @RAVI YADAV - All Right Reserved.</p>
      </div>
    </div>
  );
}
