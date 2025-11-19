import React from "react";
import Header from "~/components/header";

export function meta() {
    return [
        { title: "Vite + React Starter Template" },
        {
            name: "description",
            content:
                "A modern React starter template built with Vite, featuring TypeScript, ESLint, Prettier, and more.",
        },
    ];
}

export default function Home() {
    return (
        <>
            <Header />
            <div className="w-full h-48 bg-[#D3D3D3] flex items-center justify-evenly text-black">
                <div>Placeholder</div>
                <div>Placeholder</div>
                <div>Placeholder</div>
                <div>Placeholder</div>
            </div>
            <div className="flex flex-col items-center space-y-16 my-12 w-full">
                <div className="flex items-stretch w-full h-[360px]">
                    <div className="w-[2.5%]"></div>
                    <div className="w-[30%] bg-[#D3D3D3] flex items-center justify-center rounded-md">
                        <span className="text-gray-700 text-lg text-center">
                            Image
                        </span>
                    </div>
                    <div className="w-[5%]"></div>

                    <div className="w-[60%] bg-[#F7C024] text-white p-10 flex flex-col justify-between rounded-lg">
                        <h2 className="text-right text-2xl font-semibold">
                            Our Mission
                        </h2>
                        <p className="text-center mt-6">
                            To promote a place where all people thrive, the CCC
                            works in partnership across the community to reduce
                            the harms associated with high-risk drinking.
                        </p>
                        <div className="text-right mt-6">
                            <div className="w-12 h-12 bg-white rounded-md inline-block"></div>
                        </div>
                    </div>
                    <div className="w-[2.5%]"></div>
                </div>
                <div className="flex items-stretch w-full h-[360px]">
                    <div className="w-[2.5%]"></div>
                    <div className="w-[60%] bg-[#6A9F26] text-white p-10 flex flex-col justify-between rounded-lg">
                        <h2 className="text-left text-2xl font-semibold">
                            Our Vision
                        </h2>
                        <p className="text-center mt-6">
                            We envision a community–University, Downtown
                            district, and neighborhoods–that can thrive socially
                            and economically while promoting health and
                            wellbeing for all.
                        </p>
                        <div className="text-left mt-6">
                            <div className="w-12 h-12 bg-white rounded-md inline-block"></div>
                        </div>
                    </div>
                    <div className="w-[5%]"></div>
                    <div className="w-[30%] bg-[#D3D3D3] flex items-center justify-center rounded-md">
                        <span className="text-gray-700 text-lg text-center">
                            Image
                        </span>
                    </div>
                    <div className="w-[2.5%]"></div>
                </div>
            </div>
        </>
    );
}
