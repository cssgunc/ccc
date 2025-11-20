import React from "react";
import Header from "~/components/header";
import landingImage from "~/assets/landing.png";
import image1 from "~/assets/image1.png";
import image2 from "~/assets/image2.png";
import mission from "~/assets/icons/our-mission.svg";
import values from "~/assets/icons/our-values.svg";
import { useRef } from "react";

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
    const targetRef = useRef<HTMLDivElement | null>(null);
    const scrollToTarget = () => {
        targetRef.current?.scrollIntoView({ behavior: "smooth" }); // 'smooth' for animated scroll
    };
    return (
        <>
            <Header />
            <div className="relative -top-[140px] block w-full">
                <img
                    src={landingImage}
                    alt="Landing"
                    className="w-full h-[520px] md:h-[650px] lg:h-[780px] object-cover"
                />

                <div className="absolute top-[55%] left-[8%] transform -translate-y-1/2 flex flex-col gap-6">
                    <h1 className="text-white text-4xl font-bold max-w-[40vw]">
                        A catalyst for community collaboration against high-risk
                        drinking.
                    </h1>
                    <button
                        onClick={scrollToTarget}
                        className="font-bold bg-[#499dd6] text-white px-6 py-3 rounded-full hover:bg-blue-700 transition w-[13vw] max-w-[50%]"
                    >
                        Learn more
                    </button>
                </div>
            </div>

            <div
                className="-mt-[140px] mb-[50px] scroll-mt-[90px]"
                ref={targetRef}
            >
                <div className="w-full h-48 bg-[#499dd6] flex items-center justify-evenly text-white">
                    <div className="my-10 flex-col items-center text-center">
                        <p className="text-5xl font-bold mb-[20px]">22.4%</p>
                        <p className="text-lg">Binge Drinking Last 2 Weeks</p>
                    </div>
                    <div className="my-10 flex-col items-center text-center">
                        <p className="text-5xl font-bold mb-[20px]">25.68%</p>
                        <p className="text-lg">
                            Polysubstance Use Past 3 Months
                        </p>
                    </div>
                    <div className="my-10 flex-col items-center text-center">
                        <p className="text-5xl font-bold mb-[20px]">339</p>
                        <p className="text-lg">Alocohol Injuries Composite</p>
                    </div>
                </div>

                <div className="mt-[100px] mb-[100px] text-black text-2xl ml-[150px] mr-[150px] font-semibold">
                    <p className="flex justify-center items-center mb-[50px]">
                        The Campus & Community Coalition (CCC) is a
                        collaborative force bringing together university and
                        community partners to address the harms associated with
                        high-risk drinking.
                    </p>
                    <p className="flex justify-center items-center">
                        By fostering open dialogue, sharing power, and using
                        data-driven strategies, we work to create an environment
                        where everyone can thrive socially, academically, and
                        economically.
                    </p>
                </div>

                <div className="flex flex-col items-center space-y-16 my-12 w-full mb-[250px]">
                    <div className="flex items-stretch w-full h-[360px]">
                        <div className="w-[2.5%]"></div>
                        <div className="w-[45%] flex items-center justify-center">
                            <img
                                src={image1}
                                alt="Mission"
                                className="rounded-3xl border-10 border-[#F7C024] h-[120%]"
                            />
                        </div>
                        <div className="w-[5%]"></div>

                        <div className="w-[45%]  text-black p-10 flex flex-col justify-between">
                            <div className="flex text-right justify-end items-center ">
                                <img
                                    src={mission}
                                    alt="Mission Icon"
                                    className="mr-[20px] h-[75%]"
                                />
                                <h2 className="text-right text-4xl font-bold">
                                    Our Mission
                                </h2>
                            </div>

                            <p className="text-right mt-6 text-lg">
                                To promote a place where all people thrive, the
                                CCC works in partnership across the community to
                                reduce the harms associated with high-risk
                                drinking.
                            </p>
                            <p className="text-right mt-6 text-lg">
                                We envision a community–University, Downtown
                                district, and neighborhoods–that can thrive
                                socially and economically while promoting health
                                and wellbeing for all.
                            </p>
                        </div>
                        <div className="w-[2.5%]"></div>
                    </div>
                    <div className="flex items-stretch w-full h-[360px] mt-[75px]">
                        <div className="w-[2.5%]"></div>
                        <div className="w-[45%] text-black p-10 flex flex-col justify-between">
                            <div className="flex items-center">
                                <h2 className="text-left text-4xl font-bold">
                                    Our Values
                                </h2>
                                <img
                                    src={values}
                                    alt="Values Icon"
                                    className="ml-[20px] h-[75%]"
                                />
                            </div>

                            <p className="text-left mt-6 text-[#499dd6] font-semibold text-2xl">
                                Shared Power
                            </p>
                            <p className="text-left mt-3 text-lg">
                                We listen to those most impacted by
                                alcohol-related issues and empower them to
                                co-create solutions through a consensus-driven
                                process.
                            </p>
                            <p className="text-left mt-6 text-[#F7C024] font-semibold text-2xl">
                                Data Driven
                            </p>
                            <p className="text-left mt-3 text-lg">
                                Our decisions are grounded in proven research
                                and tailored to the unique needs of our
                                community through local data analysis.
                            </p>
                            <p className="text-left mt-6 text-[#6A9F26] font-semibold text-2xl">
                                Collaboration
                            </p>
                            <p className="text-left mt-3 text-lg">
                                We believe cultural change happens through
                                collective action, which is why partnerships
                                with students, residents, businesses, and
                                organizations drive everything we do.
                            </p>
                        </div>
                        <div className="w-[5%]"></div>
                        <div className="w-[45%] flex items-center justify-center">
                            <img
                                src={image2}
                                alt="Vision"
                                className="rounded-3xl h-[120%] mt-[175px]"
                            />
                        </div>
                        <div className="w-[2.5%]"></div>
                    </div>
                </div>
            </div>
        </>
    );
}
