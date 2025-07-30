"use client";
import { GoPlus } from "react-icons/go";
import { GoBell } from "react-icons/go";

export default function MyAccount() {
    return (
        <div className="flex">
            <div className="flex items-center mx-1 h-10 rounded-full p-2 pr-4 text-center cursor-pointer hover:bg-neutral-200 bg-neutral-100">
                <GoPlus size={30} />
                Create
            </div>
            <div className="flex items-center mx-1 h-10 rounded-full p-2 text-center cursor-pointer hover:bg-neutral-200 bg-neutral-100">
                <GoBell size={25} />
            </div>
            <div className="mx-1 w-10 h-10 rounded-full p-2 text-center cursor-pointer hover:bg-neutral-200 bg-amber-200">
                3
            </div>
        </div>
    );
}
