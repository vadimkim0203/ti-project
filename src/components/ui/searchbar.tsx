'use client';
import Image from 'next/image';
import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <form
      className=" flex ic justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1 min-w-[400px] w-[500px]"
      //   onSubmit={handleSearch}
    >
      <input
        type="text"
        name="name"
        placeholder="Search"
        className="flex-1 bg-transparent outline-none"
      />
      <button className="cursor-pointer">
        <Search size={16} />
      </button>
    </form>
  );
};

export default SearchBar;
