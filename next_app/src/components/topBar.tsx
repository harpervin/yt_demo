"use client";
import SearchBar from "./searchBar";
import MyAccount from "./myAccount";
import { LiaBarsSolid } from "react-icons/lia";
import { IoMdMic } from "react-icons/io";

export default function TopBar() {
    return (
        <div className="flex justify-between w-full py-2">
            <div className="flex mx-2">
                <div className="flex rounded-full h-10 w-10 p-1 justify-center items-center cursor-pointer hover:bg-neutral-200">
                    <LiaBarsSolid size={20} />
                </div>
                <button className="p-2 cursor-pointer">logo</button>
            </div>
            <div className="flex">
                <SearchBar />
                <div className="flex items-center justify-center align-middle w-10 h-10 rounded-full p-2 text-center cursor-pointer hover:bg-neutral-200 bg-neutral-100">
                    <IoMdMic size={23} />
                </div>
            </div>

            <div className="flex">
                <MyAccount></MyAccount>
            </div>
        </div>
    );
}
