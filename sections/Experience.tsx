'use client';

import CanvasLoader from "@/components/CanvasLoader";
import Developer from "@/components/Developer";
import { workExperiences } from "@/constants";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Image from "next/image";
import { Suspense, useState } from "react";

const Experience = () => {
    const [animationName, setAnimationName] = useState('idle');

    return (
        <section className="sm:px-10 px-5 my-20" id="work">
            <div className="w-full text-[#AFB0B6]">
                <p className="head-text">My Work Experience</p>

                <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 mt-12">
                    <div className="col-span-1 rounded-lg bg-[#0E0E10] border border-[#1C1C21]">
                        <Canvas>
                            <ambientLight intensity={7} />
                            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                            <directionalLight position={[10, 10, 10]} intensity={1} />
                            <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

                            <Suspense fallback={<CanvasLoader />}>
                                <Developer position-y={-3} scale={3} animationName={animationName} />
                            </Suspense>
                        </Canvas>
                    </div>

                    <div className="col-span-2 rounded-lg bg-[#0E0E10] border border-[#1C1C21]">
                        <div className="sm:py-10 py-5 sm:px-5 px-2.5">
                            {workExperiences.map((item, index) => (
                                <div
                                    key={index}
                                    onClick={() => setAnimationName(item.animation.toLowerCase())}
                                    onPointerOver={() => setAnimationName(item.animation.toLowerCase())}
                                    onPointerOut={() => setAnimationName('idle')}
                                    className="grid grid-cols-[auto_1fr] items-start gap-5  transition-all ease-in-out duration-500 cursor-pointer hover:bg-[#1C1C21] rounded-lg sm:px-5 px-2.5 group">
                                    <div className="flex flex-col h-full justify-start items-center py-2">
                                        <div className="rounded-3xl w-16 h-16 p-2 bg-[#1A1A1A]">
                                            <Image
                                                className="w-full h-full"
                                                src={item.icon}
                                                alt=""
                                                height={48}
                                                width={48}
                                            />
                                        </div>

                                        <div className="flex-1 w-0.5 mt-4 h-full bg-[#1C1C21] group-hover:bg-[#3A3A49] group-last:hidden" />
                                    </div>

                                    <div className="sm:p-5 px-2.5 py-5">
                                        <p className="font-bold text-[#E4E4E6]">{item.name}</p>
                                        <p className="text-sm mb-5">
                                            {item.pos} -- <span>{item.duration}</span>
                                        </p>
                                        <p className="group-hover:text-white transition-all ease-in-out duration-500">{item.title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;