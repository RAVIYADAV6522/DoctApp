import contact_image from './contact_image.png' 
import profile_image from './profile_image.png'
import mylogo from './profile_image1.png'
import dropdown_image from './dropdown_image.png'
import group_profile from './group_profiles.png'
import arrow_icon from './arrow_image.png'
import cross_icon from './cross_icon.png'
import menu_icon from './menu_icon.png'
import verified_icon from './verified_icon.png'
import info_icon from './info_icon.png'
import about_image from './about_image.png' 
import appointment_image from './appointment_image.png' 
import home_image from './home_image.png' 
import logo from './logo.png'
import doc1 from './doc1.png' 
import doc2 from './doc2.png' 
import doc3 from './doc3.png' 
import doc4 from './doc4.png' 
import doc5 from './doc5.png' 
import doc6 from './doc6.png' 
import doc7 from './doc7.png' 
import doc8 from './doc8.png' 
import doc9 from './doc9.png' 
import doc10 from './doc10.png' 
import doc11 from './doc11.png' 
import doc12 from './doc12.png' 
import doc13 from './doc13.png' 
import doc14 from './doc14.png' 
import doc15 from './doc15.png' 
import General_physician from './General_physician.png'
import Gynecologist from './Gynecologist.png'
import Dermatologist from './Dermatologist.png'
import Pediatricians from './Pediatricians.png'
import Neurologist from './Neurologist.png'
import Gastroenterologist from './Gastroenterologist.png'
import { Form } from 'react-router-dom'





export const assets= {
  contact_image,
  profile_image,
  mylogo,
  dropdown_image,
  arrow_icon,
  cross_icon,
  menu_icon,
  info_icon,
  verified_icon,
  group_profile,
  appointment_image,
  about_image,
  home_image,
  logo,
  doc1,
  doc2,
  doc3,
  doc4,
  doc5,
  doc6,
  doc7,
  doc8,
  doc9,
  doc10,
  doc11,
  doc12,
  doc13,
  doc14,
  doc15,
  General_physician,
  Gynecologist,
  Dermatologist,
  Pediatricians,
  Neurologist,
  Gastroenterologist
}

export const specialityData = [
  {
    speciality:'General physician',
    image:General_physician
  },
  {
    speciality:'Gynecologist',
    image:Gynecologist
  },
  {
    speciality:'Dermatologist',
    image:Dermatologist
  },
  {
    speciality:'Pediatricians',
    image:Pediatricians
  },
  {
    speciality:'Neurologist',
    image:Neurologist
  },
  {
    speciality:'Gastroenterologist',
    image:Gastroenterologist
  }
]


export const doctors=[
  {
    _id:'doc1',
    name:'Dr. Richard James',
    image:doc1,
    speciality:'General physician',
    degree:'MBBS',
    experiance:'4 Years',
    about:'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    fees:50,
    address:{
        line1:'17th Cross, Richmond',
        line2:'Circle, Ring Road, London'
    }
  },
  {
    _id:'doc2',
    name:'Dr. James Bell',
    image:doc2,
    speciality:'Dermatologist',
    degree:'MBBS',
    experiance:'1 Years',
    about:'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    fees:30,
    address:{
        line1:'17th Cross, Richmond',
        line2:'Circle, Ring Road, London'
    }
  },
  {
    _id:'doc3',
    name:'Dr. Micheal Bond',
    image:doc3,
    speciality:'Neurologist',
    degree:'MBBS',
    experiance:'2 Years',
    about:'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    fees:150,
    address:{
        line1:'17th Cross, Richmond',
        line2:'Circle, Ring Road, London'
    }
  },
  {
    _id:'doc4',
    name:'Dr. Harvey Jack',
    image:doc4,
    speciality:'Neurologist',
    degree:'MBBS',
    experiance:'3 Years',
    about:'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    fees:50,
    address:{
        line1:'17th Cross, Richmond',
        line2:'Circle, Ring Road, London'
    }
  },
  {
    _id:'doc5',
    name:'Dr. Tony Cook',
    image:doc5,
    speciality:'Gastroenterologist',
    degree:'MBBS',
    experiance:'4 Years',
    about:'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',


    fees:50,
    address:{
        line1:'17th Cross, Richmond',
        line2:'Circle, Ring Road, London'
    }
  },
  {
    _id:'doc6',
    name:'Dr. Helena Brad',
    image:doc6,
    speciality:'General physician',
    degree:'MBBS',
    experiance:'4 Years',
    about:'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    fees:50,
    address:{
        line1:'17th Cross, Richmond',
        line2:'Circle, Ring Road, London'
    }
  },
  {
    _id:'doc7',
    name:'Dr. James Shardy',
    image:doc7,
    speciality:'Gastroenterologist',
    degree:'MBBS',
    experiance:'4 Years',
    about:'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    fees:50,
    address:{
        line1:'17th Cross, Richmond',
        line2:'Circle, Ring Road, London'
    }
  },
  {
    _id:'doc8',
    name:'Dr. Steve Warn',
    image:doc8,
    speciality:'Neurologist',
    degree:'MBBS',
    experiance:'14 Years',
    about:'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    fees:50,
    address:{
        line1:'17th Cross, Richmond',
        line2:'Circle, Ring Road, London'
    }
  },
  {
    _id:'doc9',
    name:'Dr. Roston Mark',
    image:doc9,
    speciality:'Pediatricians',
    degree:'MBBS',
    experiance:'4 Years',
    about:'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    fees:50,
    address:{
        line1:'17th Cross, Richmond',
        line2:'Circle, Ring Road, London'
    }
  },
  {
    _id:'doc10',
    name:'Dr. Vijay Sharma',
    image:doc10,
    speciality:'Dermatologist',
    degree:'MBBS',
    experiance:'4 Years',
    about:'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    fees:50,
    address:{
        line1:'17th Cross, Richmond',
        line2:'Circle, Ring Road, London'
    }
  },
  {
    _id:'doc11',
    name:'Dr. Sarah Patel',
    image:doc11,
    speciality:'Pediatricians',
    degree:'MBBS',
    experiance:'4 Years',
    about:'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    fees:50,
    address:{
        line1:'17th Cross, Richmond',
        line2:'Circle, Ring Road, London'
    }
  },
  {
    _id:'doc12',
    name:'Dr. Mark Smith',
    image:doc12,
    speciality:'Gynecologist',
    degree:'MBBS',
    experiance:'4 Years',
    about:'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    fees:50,
    address:{
        line1:'17th Cross, Richmond',
        line2:'Circle, Ring Road, London'
    }
  },
  {
    _id:'doc13',
    name:'Dr. Priya Satyamurthy',
    image:doc13,
    speciality:'Gynecologist',
    degree:'MBBS',
    experiance:'4 Years',
    about:'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    fees:50,
    address:{
        line1:'17th Cross, Richmond',
        line2:'Circle, Ring Road, London'
    }
  },
  {
    _id:'doc14',
    name:'Dr. Don Bradman',
    image:doc14,
    speciality:'Pediatricians',
    degree:'MBBS',
    experiance:'4 Years',
    about:'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    fees:50,
    address:{
        line1:'17th Cross, Richmond',
        line2:'Circle, Ring Road, London'
    }
  },
  {
    _id:'doc15',
    name:'Dr. Tom Moody',
    image:doc15,
    speciality:'Gynecologist',
    degree:'MBBS',
    experiance:'4 Years',
    about:'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    fees:50,
    address:{
        line1:'17th Cross, Richmond',
        line2:'Circle, Ring Road, London'
    }
  }
  
  
  
]