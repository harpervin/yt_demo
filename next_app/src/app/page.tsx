import Image from "next/image";
import TopBar from "@/components/topBar";
import Button from "@/components/topBar";

export default function Home() {
    return (
        <>
            <div className="flex-column">
                <div className="flex">
                    <TopBar></TopBar>
                </div>
                <div className="bg-blue-500">content</div>
            </div>
        </>
    );
}
