import React from 'react';
import { BsYoutube } from 'react-icons/bs';
import { HiOutlineMenu } from 'react-icons/hi';
type Props = {};

const TopNavigation = (props: Props) => {
  return (
    <div className="border-2 border-red-500 p-4 flex justify-between items-center">
      <div className="flex items-center gap-6">
        <HiOutlineMenu size={26} />
        <div className="flex items-center gap-2">
          <BsYoutube size={30} className="text-red-500" />
          <span className="text-xl font-semibold">YouTube</span>
        </div>
      </div>
      <div>
        <input
          placeholder="search"
          className="hidden md:flex px-3 py-2 text-zinc-200 bg-zinc-900 border-[1px] border-zinc-700 placeholder:text-zinc-200 focus:bg-black focus:outline-none rounded-full focus:ring-sky-500"
        />
      </div>
      <div className="border border-green-500">User Menu</div>
    </div>
  );
};

export default TopNavigation;
