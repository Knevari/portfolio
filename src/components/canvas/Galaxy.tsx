"use client";

import { useRef, useEffect, Suspense } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";

const parameters = {
    size: 0.008, // Smaller particles
    count: 60000, // Lower count for tighter feel
    radius: 3, // Smaller radius
    branches: 12,
    spin: 1.5, // Slightly tighter spin
    randomness: 0.2,
    randomnessPower: 3,
    colorIn: "#32C0F0", // N3MUS Cyan
    colorOut: "#155E75", // Darker Cyan/Green for better contrast
};

function BlackHoleNucleus({ size }: { size: number }) {
    const meshRef = useRef<THREE.Mesh>(null);

    return (
        <mesh ref={meshRef} scale={[size, size, size]} position={[0, 0, 0]}>
            <sphereGeometry args={[0.5, 32, 32]} />
            <meshBasicMaterial color="#000" />
        </mesh>
    );
}

const GalaxyParticles = () => {
    const particles = useRef<THREE.Points>(null);

    useFrame((state) => {
        if (!particles.current) return;
        const elapsedTime = state.clock.getElapsedTime();
        particles.current.rotation.y = elapsedTime * 0.03; // Slightly slower
    });

    useEffect(() => {
        if (!particles.current) return;

        const positions = new Float32Array(parameters.count * 3);
        const colors = new Float32Array(parameters.count * 3);
        const colorInside = new THREE.Color("#32C0F0");
        const colorOutside = new THREE.Color("#32FF5F");

        for (let i = 0; i < parameters.count; i++) {
            const i3 = i * 3;

            const radius = Math.random() * parameters.radius;
            const spinAngle = radius * parameters.spin;
            const branchAngle =
                ((i % parameters.branches) / parameters.branches) * Math.PI * 2;

            const randomX =
                Math.pow(Math.random(), parameters.randomnessPower) *
                (Math.random() < 0.5 ? 1 : -1) *
                parameters.randomness *
                radius;
            const randomY =
                Math.pow(Math.random(), parameters.randomnessPower) *
                (Math.random() < 0.5 ? 1 : -1) *
                parameters.randomness *
                radius;
            const randomZ =
                Math.pow(Math.random(), parameters.randomnessPower) *
                (Math.random() < 0.5 ? 1 : -1) *
                parameters.randomness *
                radius;

            positions[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
            positions[i3 + 1] = randomY;
            positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;

            const mixedColor = colorInside.clone();
            mixedColor.lerp(colorOutside, radius / parameters.radius);

            colors[i3] = mixedColor.r;
            colors[i3 + 1] = mixedColor.g;
            colors[i3 + 2] = mixedColor.b;
        }

        particles.current.geometry.setAttribute(
            "position",
            new THREE.BufferAttribute(positions, 3),
        );
        particles.current.geometry.setAttribute(
            "color",
            new THREE.BufferAttribute(colors, 3),
        );
    }, []);

    return (
        <points ref={particles}>
            <bufferGeometry />
            <pointsMaterial
                size={parameters.size}
                sizeAttenuation={true}
                depthWrite={false}
                vertexColors={true}
                transparent={true}
                opacity={0.7}
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
};

export default function Galaxy() {
    return (
        <div className="absolute inset-0 -z-10 pointer-events-none">
            <Canvas
                camera={{ position: [0, 2, 6] }}
                gl={{ antialias: true }}
                dpr={[1, 2]}
            >
                <Suspense fallback={null}>
                    <BlackHoleNucleus size={2} />
                    <GalaxyParticles />
                </Suspense>
            </Canvas>
        </div>
    );
}
