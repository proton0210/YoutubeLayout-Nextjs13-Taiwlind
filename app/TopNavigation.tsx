'use client';

import { BiSearch } from 'react-icons/bi';
import { BsBell, BsCameraVideo, BsMicFill, BsYoutube } from 'react-icons/bs';
import { HiOutlineMenu } from 'react-icons/hi';
import Image from 'next/image';
import { useState } from 'react';
type Props = {};

const TopNavigation = (props: Props) => {
  const [search, setSearch] = useState('');

  return (
    <div className=" p-4 flex justify-between items-center">
      <div className="flex items-center gap-6">
        <HiOutlineMenu size={26} />
        <div className="flex items-center gap-2">
          <BsYoutube size={30} className="text-red-500" />
          <span className="text-xl font-semibold">YouTube</span>
        </div>
      </div>
      <div className="hidden md:flex min-w-[300px] lg:w-[620px] gap-2">
        <div className="flex w-full">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="search"
            className="hidden md:flex w-full  px-3 py-2 text-zinc-200 bg-zinc-900 border-[1px] border-zinc-700 placeholder:text-zinc-200 focus:bg-black focus:outline-none rounded-tl-full rounded-bl-full  focus:ring-sky-500"
          />
          <div className="bg-zinc-700 px-5 py-3 rounded-tr-full rounded-br-full">
            <BiSearch className="" />
          </div>
          <div className="px-4 py-2 bg-zinc-800 rounded-full hover:bg-zinc-500 cursor:pointer">
            <BsMicFill className="" size={20} />
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-3">
          <div className="flex items-center p-3 rounded-full hover:bg-zinc-700 cursor-pointer">
            <BsCameraVideo size={22} />
          </div>
          <div className="flex items-center p-3 rounded-full hover:bg-zinc-700 cursor-pointer">
            <BsBell size={22} />
          </div>
          <div className="cursor-pointer">
            <Image
              src="https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg"
              height={40}
              width={40}
              alt="user image"
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavigation;
