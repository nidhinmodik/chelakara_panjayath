import React from 'react'
import Image from 'next/image';
import logo from '../assets/logo.png';
import Link from 'next/link';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai';



const Footer = () => {
  return (
    <div className='w-full'>
      <div className='bg-[#1e1919]'>
        <div className='px-4 md:px-8 py-10 w-full gap-12 grid lg:grid-cols-4 grid-cols-1'>
          <div className='w-full'>
            <div className='w-full flex flex-col gap-y-[0px] gap-l-[15px] px-2'>
              <Image
                className=''
                width={100}
                height={50}
                src={logo}
                alt='logo'
              />
              <div className="text-xl font-bold text-white relative before:absolute before:w-[4px] before:bg-[#c80000] before:h-full before:-left-0 pl-3 md-5">
                പഞ്ചായത്തിനെക്കുറിച്ച്  അറിയാൻ
              </div>
              <h2 className='text-slate-500 my-[15px]'>
              Chelakkara (ചേലക്കര) Gram Panchayat is a Rural Local Body in Pazhayannur Panchayat Samiti part of Thrissur Zila Parishad. There are total 6 Villages under Chelakkara Gram Panchayat jurisdiction. Gram Panchayat Pazhayannur is further divided into 22 Wards. Gram Panchayat Pazhayannur has total 19 elected members by people. Gram Panchayat Pazhayannur has total 17 schools.
              </h2>
            </div>
          </div>
          {/* <RecentNewsFooter /> */}
        </div>
      </div>
      <div className='bg-[#262323]'>
        <div className='px-4 md:px-8 py-5 flex flex-col md:flex-row gap-3 justify-between items-center'>
          <div className='flex gap-y-2 text-gray-400 justify-start items-center'>
            <span>Copyright © 2024 onebyonenews.com All Rights Reserved.</span>
          </div>
          <div className='flex gap-x-[4px]'>
            <a
              className='w-[37px] h-[35px] text-white flex justify-center items-center bg-[#ffffff2b]'
              href='#'
            >
              <FaFacebookF />
            </a>
            <a
              className='w-[37px] text-white h-[35px] flex justify-center items-center bg-[#ffffff2b]'
              href='#'
            >
              <AiOutlineTwitter />
            </a>
            <a
              className='w-[37px] text-white h-[35px] flex justify-center items-center bg-[#ffffff2b]'
              href='#'
            >
              <AiFillYoutube />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer