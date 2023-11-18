// @ts-nocheck
import { useRef, useEffect, Suspense } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";

const parameters = {
  size: 0.012,
  count: 121500,
  radius: 4,
  branches: 12,
  spin: 1.25,
  randomness: 0.25,
  randomnessPower: 2.995,
  colorIn: "#BC027F",
  colorOut: "#004CA3",
};

function BlackHoleNucleus({ size }: { size: number }) {
  const meshRef = useRef(null);

  return (
    <mesh ref={meshRef} scale={[size, size, size]} position={[0, 0, 0]}>
      <sphereGeometry attach="geometry" args={[0.5, 32, 32, 0, 6.4, 0, 6.3]} />
      <meshBasicMaterial attach="material" color="#000" />
    </mesh>
  );
}

const Galaxy = () => {
  const particles = useRef();
  const clock = new THREE.Clock();

  useEffect(() => {
    generateGalaxy();
  }, []);

  useFrame(() => {
    if (!particles.current) return;

    const elapsedTime = clock.getElapsedTime();

    particles.current.rotation.y = elapsedTime * 0.05;
  });

  const generateGalaxy = () => {
    if (!particles.current) return;

    const positions = new Float32Array(parameters.count * 3);
    const colors = new Float32Array(parameters.count * 3);
    const colorInside = new THREE.Color(parameters.colorIn);
    const colorOutside = new THREE.Color(parameters.colorOut);

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
  };

  return (
    <points ref={particles}>
      <bufferGeometry />
      <pointsMaterial
        size={parameters.size}
        sizeAttenuation={true}
        depthWrite={false}
        vertexColors={true}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

export default function App() {
  return (
    <Canvas
      className="absolute top-0 md:-right-[50%] md:-top-[10%]"
      style={{ position: "absolute" }}
      camera={{ position: [0, 2, 6] }}
    >
      <Suspense fallback={null}>
        <BlackHoleNucleus size={2} />
        <Galaxy />
      </Suspense>
    </Canvas>
  );
}
