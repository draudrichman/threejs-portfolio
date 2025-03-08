"use client";

import Button from "@/components/Button";
import CanvasLoader from "@/components/CanvasLoader";
import Cube from "@/components/Cube";
import HackerRoom from "@/components/HackerRoom";
import HeroCamera from "@/components/HeroCamera";
import ReactLogo from "@/components/ReactLogo";
import Rings from "@/components/Rings";
import Target from "@/components/Target";
import { calculateSizes } from "@/constants";
import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Link from "next/link";
// import { Leva, useControls } from "leva";
import { Suspense } from "react";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 gap-3 sm:px-10 px-5">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am Ahsan
          <span className="waving-hand">👋🏻</span>
        </p>
        <p className="text-center xl:text-6xl md:text-5xl sm:text-4xl text-3xl font-generalsans font-black !leading-normal bg-gradient-to-r from-[#BEC1CF] from-60% via-[#D5D8EA] via-60% to-[#D5D8EA] to-100% bg-clip-text text-transparent">
          Building Products & Brands
        </p>
      </div>
      <div className="w-full h-full absolute inset-0">
        {/* <Leva hidden /> */}
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                // @ts-ignore
                scale={sizes.deskScale}
                // @ts-ignore
                position={sizes.deskPosition}
                // @ts-ignore
                rotation={[0.1, -Math.PI, 0]}
              />
            </HeroCamera>

            <group>
              {/* Suppress TS error for scale */}
              {/* @ts-ignore */}
              {/* <Target position={sizes.targetPosition} /> */}
              {/* Suppress TS error for scale */}
              {/* @ts-ignore */}
              {/* <ReactLogo position={sizes.reactLogoPosition} /> */}
              {/* Suppress TS error for scale */}
              {/* @ts-ignore */}
              {/* <Rings position={sizes.ringPosition} /> */}
              {/* Suppress TS error for scale */}
              {/* @ts-ignore */}
              {/* <Cube position={sizes.cubePosition} /> */}
            </group>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 sm:px-10 px-5">
        <Link href="#contact">
          <Button
            name="Let's work together"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96"
          />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
