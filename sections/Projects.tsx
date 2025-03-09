'use client';

import CanvasLoader from "@/components/CanvasLoader";
import DemoComputer from "@/components/DemoComputer";
import { myProjects } from "@/constants";
import { Center, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Image from "next/image";
import Link from "next/link";
import { Suspense, useState } from "react";

const projectCount = myProjects.length;

const Projects = () => {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

    const handleNavigation = (direction: string) => {
        setSelectedProjectIndex((prevIndex) => {
            if (direction === 'previous') {
                return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
            } else {
                return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
            }
        });
    };

    const currentProject = myProjects[selectedProjectIndex];

    return (
        <section className="sm:px-10 px-5 my-20">
            <p className="sm:text-4xl text-3xl font-semibold bg-gradient-to-r from-[#BEC1CF] from-60% via-[#D5D8EA] via-60% to-[#D5D8EA] to-100% bg-clip-text text-transparent">
                My Work
            </p>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-12 w-full">
                <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-[#0E0E10]">
                    <div className="absolute top-0 right-0">
                        <Image
                            src={currentProject.spotlight}
                            alt="spotlight"
                            className="w-full h-96 object-cover rounded-xl"
                            width={384}
                            height={384}
                        />
                    </div>

                    <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={currentProject.logoStyle}>
                        <Image
                            className="w-10 h-10 shadow-sm"
                            src={currentProject.logo}
                            alt="logo"
                            width={40}
                            height={40}
                        />
                    </div>

                    <div className="flex flex-col gap-5 text-[#AFB0B6] my-5">
                        <p className="text-white text-2xl font-semibold animatedText">{currentProject.title}</p>

                        <p className="animatedText">{currentProject.desc}</p>
                        <p className="animatedText">{currentProject.subdesc}</p>
                    </div>

                    <div className="flex items-center justify-between flex-wrap gap-5">
                        <div className="flex items-center gap-3">
                            {currentProject.tags.map((tag, index) => (
                                <div key={index} className="w-10 h-10 rounded-md p-2 bg-neutral-100/10 backdrop-filter backdrop-blur-lg flex justify-center items-center">
                                    <Image
                                        src={tag.path}
                                        alt={tag.name}
                                        height={25}
                                        width={25}
                                    />
                                </div>
                            ))}
                        </div>

                        <Link
                            className="flex items-center gap-2 cursor-pointer text-[#AFB0B6]"
                            href={currentProject.href}
                            target="_blank"
                            rel="noreferrer">
                            <p>Check Live Site</p>
                            <Image
                                src="/assets/arrow-up.png"
                                alt="arrow"
                                className="w-3 h-3"
                                width={12}
                                height={12}
                            />
                        </Link>
                    </div>

                    <div className="flex justify-between items-center mt-7">
                        <button className="w-10 h-10 p-3 cursor-pointer active:scale-95 transition-all rounded-full arrow-gradient" onClick={() => handleNavigation('previous')}>
                            <Image
                                src="/assets/left-arrow.png"
                                alt="left arrow"
                                className="w-4 h-4"
                                height={16}
                                width={16}
                            />
                        </button>
                        <button className="w-10 h-10 p-3 cursor-pointer active:scale-95 transition-all rounded-full arrow-gradient" onClick={() => handleNavigation('next')}>
                            <Image
                                src="/assets/right-arrow.png"
                                alt="right arrow"
                                className="w-4 h-4"
                                height={16}
                                width={16}
                            />
                        </button>
                    </div>
                </div>

                <div className="border border-[#1C1C21] bg-[#0E0E10] rounded-lg h-96 md:h-full">
                    <Canvas>
                        <ambientLight intensity={Math.PI} />
                        <directionalLight position={[10, 10, 5]} />
                        <Center>
                            <Suspense fallback={<CanvasLoader />}>
                                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                                    <DemoComputer texture={currentProject.texture} />
                                </group>
                            </Suspense>
                        </Center>
                        <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
                    </Canvas>
                </div>

            </div>
        </section>
    );
}

export default Projects;