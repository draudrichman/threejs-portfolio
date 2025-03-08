"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import * as THREE from "three";

type HeroCameraProps = {
    isMobile: boolean;
    children?: React.ReactNode; // Optional children prop for React components
};

const HeroCamera = ({ isMobile, children }: HeroCameraProps) => {
    const groupRef = useRef<THREE.Group | null>(null);

    useFrame((state, delta) => {
        easing.damp3(state.camera.position, [0, 0, 20], 0.25, delta);

        if (!isMobile && groupRef.current) {
            easing.dampE(
                groupRef.current.rotation,
                [-state.pointer.y / 3, state.pointer.x / 5, 0],
                0.25,
                delta
            );
        }
    });

    return <group ref={groupRef}>{children}</group>;
};

export default HeroCamera;