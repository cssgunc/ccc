import React from "react";
import Header from "~/components/header";
import landingImage from "~/assets/landing.png";

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

            <div className="relative -top-[140px] block w-full overflow-hidden">
                <img
                    src={landingImage}
                    alt="Landing"
                    className="w-full h-[520px] md:h-[650px] lg:h-[780px] object-cover brightness-50 saturate-200"
                />

                <div className="absolute top-[55%] left-[8%] transform -translate-y-1/2 flex flex-col gap-6">
                    <h1 className="text-white text-4xl font-bold max-w-[40vw]">
                        A catalyst for community collaboration against high-risk
                        drinking.
                    </h1>
                    <button className="font-bold bg-[#499dd6] text-white px-6 py-3 rounded-full hover:bg-blue-700 transition w-[13vw] max-w-[50%]">
                        Learn more
                    </button>
                </div>
            </div>

            <div className="-mt-[140px]">
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
                                To promote a place where all people thrive, the
                                CCC works in partnership across the community to
                                reduce the harms associated with high-risk
                                drinking.
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
                                district, and neighborhoods–that can thrive
                                socially and economically while promoting health
                                and wellbeing for all.
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
            </div>
        </>
    );
}
