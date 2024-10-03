import React, { useEffect, useState } from 'react'
import { doctors } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

export default function RelatedDoctors({speciality , docId}) {
  const [relDoc , setRelDoc] = useState([])
  const navigate = useNavigate()

  useEffect(()=>{
     if(doctors.length > 0 && speciality){
        const doctorsData = doctors.filter((doc)=>doc.speciality === speciality && docId!=doc._id)

        setRelDoc(doctorsData)
     }
  },[doctors,speciality,docId])

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h1 className="text-3xl font-medium">Top Doctors to Book</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Simply browse through our extensive list of trusted doctors.
      </p>
      <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
        {relDoc.slice(0, 5).map((item, index) => (
          <div
            key={index}
            onClick={()=>{navigate(`/appointment/${item._id}`),scrollTo(0,0)}}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
          >
            <img src={item.image} className="bg-blue-50"></img>
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-center text-green-500">
                <p className="bg-green-500 w-2 h-2 rounded-full"></p>
                <p>Available</p>
              </div>
              <p className="text-gray-900 text-lg font-medium">{item.name}</p>
              <p className="text-sm text-gray-600">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  )
}
