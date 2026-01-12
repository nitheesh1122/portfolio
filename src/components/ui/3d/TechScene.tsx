import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, ContactShadows, Environment, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const TechShape = () => {
    const meshRef = useRef<THREE.Mesh>(null);
    const torusRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
        }
        if (torusRef.current) {
            torusRef.current.rotation.x = state.clock.getElapsedTime() * -0.2;
            torusRef.current.rotation.y = state.clock.getElapsedTime() * -0.1;
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            {/* Core Shape */}
            <mesh ref={meshRef}>
                <icosahedronGeometry args={[1.5, 0]} />
                <MeshDistortMaterial
                    color="#4f46e5"
                    attach="material"
                    distort={0.4}
                    speed={2}
                    roughness={0.2}
                    metalness={0.8}
                />
            </mesh>

            {/* Outer Ring */}
            <mesh ref={torusRef} rotation={[1.5, 0, 0]}>
                <torusGeometry args={[2.8, 0.1, 16, 100]} />
                <meshStandardMaterial color="#a78bfa" emissive="#a78bfa" emissiveIntensity={0.5} wireframe />
            </mesh>

            {/* Floating Particles/Orbs */}
            <mesh position={[2, 2, 1]}>
                <sphereGeometry args={[0.2, 32, 32]} />
                <meshStandardMaterial color="cyan" emissive="cyan" emissiveIntensity={2} />
            </mesh>
            <mesh position={[-2, -1, 1]}>
                <sphereGeometry args={[0.3, 32, 32]} />
                <meshStandardMaterial color="magenta" emissive="magenta" emissiveIntensity={2} />
            </mesh>
        </Float>
    );
};

const TechScene = () => {
    return (
        <div className="w-full h-[500px] cursor-grab active:cursor-grabbing">
            <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
                <pointLight position={[-10, -10, -5]} intensity={1} color="#4f46e5" />

                <TechShape />

                <ContactShadows position={[0, -2.5, 0]} opacity={0.5} scale={10} blur={2.5} far={4.5} />
                <Environment preset="city" />
            </Canvas>
        </div>
    );
};

export default TechScene;
