import React from "react";
import { doctors } from "../assets/assets";

export default function MyAppointments() {
  return (
    <div>
      <p className="pb-3 mt-12 font-medium text-zinc-700 border-b text-2xl">
        My appointments
      </p>
      <div>
        {doctors.slice(0, 3).map((item, index) => (
          <div key={index} className="sm:flex sm:gap-6 py-2 border-b">
            <div>
              <img className="max-w-36" src={item.image}></img>
            </div>

            {/* flex-1 row me available space leta hai */}
            <div className="flex-1 text-sm text-zinc-600">
              <p className="text-black font-medium">{item.name}</p>
              <p>{item.speciality}</p>
              <p className="text-black font-medium mt-2">Address:</p>
              <p>{item.address.line1}</p>
              <p>{item.address.line2}</p>
              <p className="mt-2">
                <span className="text-black font-medium">Date & Time:</span>
                <span> 5 Nov 2024 | 10:30</span>
              </p>
            </div>
            <div></div>
            <div className="flex flex-col justify-end gap-2">
              <button className="sm:min-w-48 border rounded py-2 w-32 mt-2 text-sm text-stone-500 hover:bg-primary hover:text-white transition-all duration-300">
                Pay Online
              </button>
              <button className="sm:min-w-48 border rounded py-2 w-40 mt-2 text-sm text-stone-500 hover:bg-red-600 hover:text-white transition-all duration-300">
                Cancel Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
