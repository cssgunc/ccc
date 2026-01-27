import Header from "~/components/header";
import Footer from "~/components/footer";
import landingImage from "~/assets/landing.png";
import image1 from "~/assets/image1.png";
import image2 from "~/assets/image2.png";
import mission from "~/assets/icons/our-mission.svg";
import values from "~/assets/icons/our-values.svg";
import { useRef } from "react";

export function meta() {
    return [{ title: "Campus and Community Coalition" }];
}

export default function Home() {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const scrollToTarget = () => {
        targetRef.current?.scrollIntoView({ behavior: "smooth" }); // 'smooth' for animated scroll
    };
    return (
        <main>
            <Header />
            <div className="relative -top-[140px]">
                <img
                    src={landingImage}
                    alt="Landing"
                    className="w-full h-[520px] md:h-[650px] lg:h-[780px] object-cover"
                />
                <div className="absolute inset-0 pt-[140px]">
                    <div className="h-full flex items-center">
                        <div className="ml-[8%] flex flex-col gap-6">
                            <h1 className="text-white text-3xl md:text-4xl font-bold max-w-[40vw]">
                                A catalyst for community collaboration against
                                high-risk drinking.
                            </h1>
                            <button
                                onClick={scrollToTarget}
                                className="font-bold bg-[#499dd6] text-white px-6 py-3 rounded-full hover:bg-blue-700 transition w-40"
                            >
                                Learn more
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="-mt-[140px] mb-[50px] scroll-mt-[90px]"
                ref={targetRef}
            >
                <div className="w-full bg-[#499dd6] text-white px-6 md:px-12">
                    <div className="flex flex-col md:flex-row">
                        <div className="flex-1 px-6 py-10 flex flex-col items-center text-center">
                            <div className="min-h-[72px] flex items-center justify-center">
                                <p className="text-6xl font-bold leading-none">
                                    1 in 5
                                </p>
                            </div>
                            <p className="text-lg max-w-[40ch]">
                                of UNC-CH students participating in the 2025
                                NCHA survey drank five or more drinks at a
                                sitting at least once in the past 2 weeks.
                            </p>
                        </div>
                        <div className="hidden md:block w-px h-24 bg-white self-center" />
                        <div className="flex-1 basis-0 py-10 px-6 text-center flex flex-col items-center">
                            <div className="min-h-[72px] flex items-center justify-center">
                                <p className="text-6xl font-bold leading-none">
                                    339
                                </p>
                            </div>
                            <p className="text-lg max-w-[40ch]">
                                individuals under the age of 29 were
                                treated/transported by Orange County EMS for
                                substance-related injuries on or near UNC-CH
                                during the 2024-2025 fiscal year. That's nearly
                                1 person every day!
                            </p>
                        </div>
                        <div className="hidden md:block w-px h-24 bg-white self-center" />
                        <div className="flex-1 basis-0 py-10 px-6 text-center flex flex-col items-center">
                            <div className="min-h-[72px] flex items-center justify-center">
                                <p className="text-6xl font-bold leading-none">
                                    1 in 4
                                </p>
                            </div>
                            <p className="text-lg max-w-[40ch]">
                                of UNC-CH students participating in the 2025
                                NCHA survey reported having used both alcohol
                                and another substance within the past 3 months.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mx-auto w-full px-6 md:px-12 mt-24 mb-24">
                    <div className="flex flex-col items-center justify-center mt-[100px] mb-[100px] mx-10 text-black text-2xl font-semibold">
                        <p className="flex justify-center items-center mb-[50px]">
                            The Campus & Community Coalition (CCC) is a
                            collaborative force bringing together university and
                            community partners to address the harms associated
                            with high-risk drinking.
                        </p>
                        <p className="flex justify-center items-center">
                            By fostering open dialogue, sharing power, and using
                            data-driven strategies, we work to create an
                            environment where everyone can thrive socially,
                            academically, and economically.
                        </p>
                    </div>
                    <div className="flex flex-col items-center space-y-16 my-12 w-full">
                        <div className="flex flex-col md:flex-row w-full md:h-[360px] gap-8 md:gap-0">
                            <div className="w-full md:flex-1 flex items-center justify-center">
                                <img
                                    src={image1}
                                    alt="Mission"
                                    className="rounded-3xl object-contain w-[480px]"
                                />
                            </div>
                            <div className="w-full md:flex-1  text-black p-6 md:p-10 flex flex-col justify-between">
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
                                    To promote a place where all people thrive,
                                    the CCC works in partnership across the
                                    community to reduce the harms associated
                                    with high-risk drinking.
                                </p>
                                <p className="text-right mt-6 text-lg">
                                    We envision a community – University,
                                    Downtown district, and neighborhoods – that
                                    can thrive socially and economically while
                                    promoting health and wellbeing for all.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row my-12 items-start w-full gap-8 md:gap-0 md:items-center">
                            <div className="w-full md:flex-1 text-black p-6 md:p-10 flex flex-col justify-between">
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
                                    co-create solutions through a
                                    consensus-driven process.
                                </p>
                                <p className="text-left mt-6 text-[#F7C024] font-semibold text-2xl">
                                    Data Driven
                                </p>
                                <p className="text-left mt-3 text-lg">
                                    Our decisions are grounded in proven
                                    research and tailored to the unique needs of
                                    our community through local data analysis.
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
                            <div className="w-full md:flex-1 flex items-center justify-center">
                                <img
                                    src={image2}
                                    alt="Vision"
                                    className="rounded-3xl w-full max-w-[480px] h-auto object-contain md:translate-y-6"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
