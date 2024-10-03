import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets, doctors } from "../assets/assets";
import RelatedDoctors from "../components/RelatedDoctors";
export default function Appoinment() {
  const { docId } = useParams();
  const [docInfo, setDocInfo] = useState(null);

  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  // console.log(docId)
  const fetchDocInfo = async () => {
    let docInfo = doctors.find((doc) => doc._id === docId);

    setDocInfo(docInfo);
    console.log(docInfo);
  };
  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  // Making appointment date , time slot --- (logic)
  const getAvailableSlots = async () => {
    setDocSlots([]);
    // getting currentdate
    let today = new Date();

    for (let i = 0; i < 7; i++) {
      // geting date with index
      let currentdate = new Date(today);
      currentdate.setDate(today.getDate() + i);

      // setting end time of the date with index
      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      // setting hours
      if (today.getDate() === currentdate.getDate()) {
        currentdate.setHours(
          currentdate.getHours() > 10 ? currentdate.getHours() + 1 : 10
        );

        currentdate.setMinutes(currentdate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentdate.setHours(10);
        currentdate.setMinutes(0);
      }

      let timeSlots = [];

      while (currentdate < endTime) {
        let formattedTime = currentdate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        // add slot to array
        timeSlots.push({
          datetime: new Date(currentdate),
          time: formattedTime,
        });

        // increment current time by 30 minutes
        currentdate.setMinutes(currentdate.getMinutes() + 30);
      }

      setDocSlots((prev) => [...prev, timeSlots]);
    }
  };

  useEffect(() => {
    getAvailableSlots();
  }, [docInfo]);

  useEffect(() => {
    console.log(docSlots);
  }, [docSlots]);

  return (
    docInfo && (
      <div>
        {/* {doctors-details} */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div>
            <img
              className="w-full sm:w-72 rounded-lg"
              src={docInfo.image}
            ></img>
          </div>

          <div className="flex-1 border border-gray-600 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
            {/* {docinfo like name , info and expreience} */}
            <p className="flex items-center gap-2 text-black sm:text-2xl font-medium  text-4xl">
              {docInfo.name}{" "}
              <img className="w-8" src={assets.verified_icon}></img>
            </p>
            <div className="flex gap-2 mt-2 text-gray-600">
              <p>
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <button className="text-sm border border-gray-600 px-2 rounded-full">
                {docInfo.experiance}
              </button>
            </div>

            {/* {doctors about} */}
            <div className="mt-4 flex flex-col gap-2 ">
              <p className="flex gap-2 items-center text-black font-semibold">
                About <img className="w-5" src={assets.info_icon}></img>
              </p>
              <p className="text-gray-600">{docInfo.about}</p>
            </div>
            {/* {appointment fee} */}
            <div className="text-gray-600 font-medium flex gap-1 mt-4">
              <p>Appointment fee:</p>
              <p className="text-black font-medium">{"$" + docInfo.fees}</p>
            </div>
          </div>
        </div>

        {/* {booking slots} */}
        <div className="sm:ml-72 sm:pl-4 mt-4 text-gray-600 font-medium">
          <p>Booking slots</p>
        </div>
        <div className=" flex gap-3 items-center w-full overflow-x-scroll mt-4 justify-center">
          {docSlots.length &&
            docSlots.map((item, index) => (
              <div
                key={index}
                onClick={() => setSlotIndex(index)}
                className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${
                  slotIndex === index
                    ? "bg-primary text-white"
                    : "border border-gray-200"
                }`}
              >
                <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                <p>{item[0] && item[0].datetime.getDate()}</p>
              </div>
            ))}
        </div>

        <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4 justify-center">
          {docSlots.length &&
            docSlots[slotIndex].map((item, index) => (
              <p
                onClick={() => setSlotTime(item.time)}
                className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${
                  item.time === slotTime
                    ? "bg-primary text-white"
                    : "text-gray-400 border border-gray-300"
                }`}
                key={index}
              >
                {item.time.toLowerCase()}
              </p>
            ))}
        </div>

        <div className="flex  justify-center mt-4">
          <button className="bg-primary px-8 py-3 mt-3 text-white rounded-full ">
            Book an appointment
          </button>
        </div>

        {/* {related doctors} */}
        <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
      </div>
    )
  );
}
