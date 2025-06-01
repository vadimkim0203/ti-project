'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Languages } from 'lucide-react';
import tiTimes from '../../public/images/tiTimes.png'

const FooterComponent = () => {
  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-gray-100 text-sm mt-24">
      {/* TOP */}
      <div className="flex flex-col md:flex-row justify-between gap-8">
        {/* LEFT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href="/home">
            <div className="text-2xl tracking-wide">T.I. Academy</div>
          </Link>
          <p className="">152-10 Cheongna-dong, Seo-gu, Incheon</p>
          <span className="font-semibold">ti.gifted.english@gmail.com</span>
          <span className="font-semibold">032-567-0511</span>
          <div className="flex gap-6">
            {/* instagram link */}
            <Link
              href="https://www.instagram.com/tienglish_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/icons/instagram.svg" alt="" width={20} height={20} />
            </Link>
            {/* naver link */}
            <Link
              href="https://blog.naver.com/hmj2081"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/icons/naver.svg" alt="" width={20} height={20} />
            </Link>
          </div>
        </div>
        {/* CENTER */}
        <div className="w-1/2 hidden lg:flex justify-center ">
          <div className="flex flex-col gap-6">
            <h1 className="font-md text-lg">Information</h1>
            <div className="flex flex-col justify-between">
              <Link href="/about">About Us</Link>
              <Link href="/contact">Contact Us</Link>
            </div>
          </div>
        </div>
        <div className="w-1/2 hidden lg:flex justify-between ">
          <div className="flex flex-col gap-6">
            
            <div className="flex flex-col justify-between">
              <Image src={tiTimes} width={340} height={340} alt="Newspaper screenshot"/>
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className="font-medium text-lg">THE T.I. TIMES</h1>
          <p className="">Subscribe to receive our seasonal newspaper in digital format</p>
          <div className="flex">
            <input
              type="text"
              placeholder="Email address"
              className="p-4 w-3/4 border-2 border-black"
            />
            <button className="w-1/4 bg-black text-white">JOIN</button>
          </div>
          <span className="font-semibold">Partnering with:</span>
          <div className="flex justify-around">
            <Image src="/icons/ar-logo.png" alt="" width={80} height={80} />
            <Image src="/icons/readTheory.svg" alt="" width={80} height={80} className="bg-blue-950"/>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div className="">T.I. Academy</div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="flex items-center">
            <span className="text-gray-500 mr-4">Language</span>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Languages size={16} className="cursor-pointer" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Language</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>한국어</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          {/* <div className="flex items-center">
            <span className="text-gray-500 mr-4">Currency</span>
            <span className="font-medium">$ USD</span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
