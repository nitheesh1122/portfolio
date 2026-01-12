// @ts-nocheck
import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, ContactShadows, useTexture, Html } from '@react-three/drei';
import * as THREE from 'three';

const IconPlane = ({ textureUrl, position, rotationSpeed = 0.01 }: { textureUrl: string, position: [number, number, number], rotationSpeed?: number }) => {
    const meshRef = useRef<THREE.Mesh>(null);
    const texture = useTexture(textureUrl);

    useFrame((state) => {
        if (meshRef.current) {
            // Counter-rotate to always face forward? Or just spin?
            // Let's just spin them slowly
            meshRef.current.rotation.y += rotationSpeed;
            // Make them always look at camera
            meshRef.current.lookAt(state.camera.position);
        }
    });

    return (
        <mesh ref={meshRef} position={position}>
            <planeGeometry args={[0.8, 0.8]} />
            <meshBasicMaterial map={texture} transparent side={THREE.DoubleSide} />
        </mesh>
    );
};

const OrbitSystem = () => {
    const groupRef = useRef<THREE.Group>(null);
    const profileTexture = useTexture("/profile.png");

    useFrame((state) => {
        if (groupRef.current) {
            // Rotate the entire orbit group
            groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
        }
    });

    // Icons from simpleicons.org or similar CDN
    const icons = [
        { url: "https://cdn.simpleicons.org/flutter/42A5F5", pos: [2.5, 0, 0] },
        { url: "https://cdn.simpleicons.org/github/ffffff", pos: [-2.5, 0, 0] },
        { url: "https://cdn.simpleicons.org/java/F89820", pos: [1.25, 0, 2.16] }, // 60 deg
        { url: "https://cdn.simpleicons.org/mongodb/47A248", pos: [-1.25, 0, 2.16] },
        { url: "https://cdn.simpleicons.org/react/61DAFB", pos: [1.25, 0, -2.16] },
        { url: "https://cdn.simpleicons.org/nodedotjs/339933", pos: [-1.25, 0, -2.16] },
    ];

    return (
        <group>
            {/* Central Profile Photo */}
            <mesh position={[0, 0, 0]}>
                <circleGeometry args={[1.5, 64]} />
                <meshBasicMaterial map={profileTexture} />
            </mesh>

            {/* Glowing Ring behind photo */}
            <mesh position={[0, 0, -0.1]}>
                <circleGeometry args={[1.6, 64]} />
                <meshBasicMaterial color="#4f46e5" transparent opacity={0.5} />
            </mesh>

            {/* Orbiting Icons Group */}
            <group ref={groupRef}>
                {icons.map((icon, i) => (
                    <IconPlane
                        key={i}
                        textureUrl={icon.url}
                        position={icon.pos as [number, number, number]}
                    />
                ))}
            </group>
        </group>
    );
};

const TechOrbit = () => {
    return (
        <div className="w-full h-[500px] cursor-grab active:cursor-grabbing">
            <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
                <ambientLight intensity={1} />

                <Suspense fallback={null}>
                    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
                        <OrbitSystem />
                    </Float>
                </Suspense>

                <ContactShadows position={[0, -2.5, 0]} opacity={0.4} scale={10} blur={2.5} far={4.5} />
            </Canvas>
        </div>
    );
};

export default TechOrbit;
