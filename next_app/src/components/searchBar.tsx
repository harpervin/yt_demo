"use client";
import { CiSearch } from "react-icons/ci";

export default function SearchBar() {
    return (
        <div className="flex mx-3 border border-neutral-300 rounded-full overflow-hidden">
            <div className="flex items-center justify-center px-4 py-2 border-r border-neutral-300 ">
                <input
                    placeholder="my search bar"
                    className="w-full focus:outline-none"
                ></input>
            </div>
            <div className="flex items-center justify-center px-4 py-2 cursor-pointer bg-neutral-100 hover:bg-neutral-200">
                <CiSearch/>
            </div>
        </div>
    );
}
