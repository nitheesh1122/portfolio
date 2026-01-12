import { Object3DNode } from '@react-three/fiber';

declare module '@react-three/fiber' {
    interface ThreeElements {
        ambientLight: any;
        directionalLight: any;
        pointLight: any;
        mesh: any;
        boxGeometry: any;
        meshStandardMaterial: any;
        group: any;
        sphereGeometry: any;
        icosahedronGeometry: any;
        torusGeometry: any;
        meshDistortMaterial: any;
        planeGeometry: any;
        circleGeometry: any;
        meshBasicMaterial: any;
    }
}
