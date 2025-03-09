'use client'

import Button from "@/components/Button";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useState } from "react";

// Dynamically import Globe, disabling SSR
const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('drisrichman@aud.com');
        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    };

    return (
        <section className="sm:px-10 px-5 my-20" id="about">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="w-full h-full border border-[#1C1C21] bg-[#0E0E10] rounded-lg sm:p-7 p-4 flex flex-col gap-5">
                        <Image
                            src="/assets/grid1.png"
                            alt="grid-1"
                            className="w-full sm:h-[276px] h-fit object-contain"
                            width={276}
                            height={276}
                        />
                        <div>
                            <p className="text-xl font-semibold mb-2 text-white font-generalsans">
                                Hi, I&apos;m Ahsan
                            </p>
                            <p className="text-[#afb0b6] text-base font-generalsans">
                                With 12 years of experience, I have honed my skills in both frontend and backend dev, creating dynamic and
                                responsive websites.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3">
                    <div className="w-full h-full border border-[#1C1C21] bg-[#0E0E10] rounded-lg sm:p-7 p-4 flex flex-col gap-5">
                        <Image
                            src="/assets/grid2.png"
                            alt="grid-2"
                            width={276}
                            height={276}
                            className="w-full sm:h-[276px] h-fit object-contain"
                        />
                        <div>
                            <p className="text-xl font-semibold mb-2 text-white font-generalsans">Tech Stack</p>
                            <p className="text-[#afb0b6] text-base font-generalsans">
                                I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable
                                applications
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-4">
                    <div className="w-full h-full border border-[#1C1C21] bg-[#0E0E10] rounded-lg sm:p-7 p-4 flex flex-col gap-5">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor="rgba(0, 0, 0, 0)"
                                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                // @ts-expect-error 
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                // labelsData={[{ lat: -23.8041, lng: -90.4152, text: "Rjieka, Croatia", color: "white", size: 15 }]}
                                labelsData={[{ lat: 23.8103, lng: 90.4125, text: "I'm here!", color: "white", size: 250 }]}
                            />
                        </div>
                        <div>
                            <p className="text-xl font-semibold mb-2 text-white font-generalsans">
                                I’m very flexible with time zone communications & locations
                            </p>
                            <p className="text-[#afb0b6] text-base font-generalsans">
                                I&apos;m based in Dhaka, Bangladesh and open to remote work worldwide.
                            </p>
                            <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="w-full h-full border border-[#1C1C21] bg-[#0E0E10] rounded-lg sm:p-7 p-4 flex flex-col gap-5">
                        <Image
                            src="/assets/grid3.png"
                            alt="grid-3"
                            height={266}
                            width={266}
                            className="w-full sm:h-[266px] h-fit object-contain"
                        />

                        <div>
                            <p className="text-xl font-semibold mb-2 text-white font-generalsans">
                                My Passion for Coding
                            </p>
                            <p className="text-[#afb0b6] text-base font-generalsans">
                                I love solving problems and building things through code. Programming isn&apos;t just my
                                profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="w-full h-full border border-[#1C1C21] bg-[#0E0E10] rounded-lg sm:p-7 p-4 flex flex-col gap-5">
                        <Image
                            src="/assets/grid4.png"
                            alt="grid-4"
                            height={276}
                            width={276}
                            className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
                        />

                        <div className="space-y-2">
                            <p className="text-[#afb0b6] text-base font-generalsans text-center">Contact me</p>
                            <div className="cursor-pointer flex justify-center items-center gap-2" onClick={handleCopy}>
                                <Image
                                    width={24}
                                    height={24}
                                    src={hasCopied ? '/assets/tick.svg' : '/assets/copy.svg'}
                                    alt="copy"
                                />
                                <p className="lg:text-2xl md:text-xl font-medium bg-gradient-to-r from-[#BEC1CF] from-60% via-[#D5D8EA] via-60% to-[#D5D8EA] to-100% bg-clip-text text-white">drisrichman@aud.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;