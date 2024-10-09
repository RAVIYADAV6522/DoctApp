import React, { useState } from "react";
import { assets } from "../assets/assets";

export default function MyProfile() {
  const [userData, setUserData] = useState({
    name: "Ravi Yadav",
    image: assets.profile_image,
    email: "yadavr74839@gmail.com",
    phone: "123456789",
    address: {
      line1: "plot no 10A tarak nagar",
      line2: "chakrol,dantli,jaipur",
    },
    gender: "male",
    dob: "16-05-2003",
  });
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className="max-w-lg flex flex-col gap-2 text-sm">
      <img className="w-36 rounded" src={userData.image}></img>
      {isEdit ? (
        <input
          className="bg-gray-50 max-w-60 text-3xl mt-4 font-medium"
          type="text"
          value={userData.name}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
        ></input>
      ) : (
        <p className="text-3xl mt-4 font-medium">{userData.name}</p>
      )}
      <hr className="bg-zinc-600 h-[2px] border-none" />

      <div>
        <p className="text-neutral-500 underline mt-3">CONTACT INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 text-neutral-700 mt-3">
          <p className="font-medium">Email id:</p>
          <p className="text-blue-500">{userData.email}</p>
          <p className="font-medium">Phone:</p>
          {isEdit ? (
            <input
              className="bg-gray-50 max-w-40"
              type="text"
              value={userData.phone}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
            ></input>
          ) : (
            <p className="text-blue-500">{userData.phone}</p>
          )}
          <p className="font-medium">Address:</p>
          {isEdit ? (
            <p>
              <input
                className="bg-gray-50 min-w-60 "
                type="text"
                value={userData.address.line1}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value },
                  }))
                }
              ></input>
              <br />
              <input
                className="bg-gray-50 min-w-60 "
                type="text"
                value={userData.address.line2}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value },
                  }))
                }
              ></input>
            </p>
          ) : (
            <p className="text-blue-500">
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          )}
        </div>
      </div>

      <div>
        <p className="text-neutral-500 underline mt-3">BASIC INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Gender</p>
          {isEdit ? (
            <select
              className="max-w-20"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, gender: e.target.value }))
              }
              value={userData.gender}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p>{userData.gender}</p>
          )}

          <p className="font-medium">Birthday:</p>
          {isEdit ? (
            <input
              className="max-w-28 text-neutral-700"
              type="date"
              value={userData.dob}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, dob: e.target.value }))
              }
            ></input>
          ) : (
            <p>{userData.dob}</p>
          )}
        </div>
      </div>

      <div className="mt-10">
        {isEdit ? (
          <button className="bg-primary px-6 py-2 rounded-full text-white" onClick={() => setIsEdit(false)}>Save information</button>
        ) : (
          <button className="bg-primary px-6 py-2 rounded-full text-white" onClick={() => setIsEdit(true)}>Edit</button>
        )}
      </div>
    </div>
  );
}
