"use client";

import { cn } from "@/utils/cn";
import { a, useSpring } from "@react-spring/three";
import { Html, useHelper, useTexture } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useDrag } from "@use-gesture/react";
import { useMemo, useRef, useState } from "react";
import * as THREE from "three";

const Earth = () => {
  const texture = useTexture({
    map: "/images/earth-day.jpg",
    normalMap: "/images/earth-normal.jpg",
  });

  const { size } = useThree();
  const euler = useMemo(() => new THREE.Euler(), []);
  const [spring, set] = useSpring(() => ({
    rotation: [0, 0, 0],
  }));
  const bind = useDrag(({ delta: [dx, dy] }) => {
    euler.y += (dx / size.width) * 10;
    euler.x += (dy / size.width) * 10;
    euler.x = THREE.MathUtils.clamp(euler.x, -Math.PI / 2, Math.PI / 2);
    // @ts-ignore: unexpected type error
    set({ rotation: euler.toArray().slice(0, 3) });
  });

  const mesh = useRef<THREE.Group>(null);

  const [facing, setFacing] = useState<{ [key: string]: boolean }>({
    indonesia: false,
    japan: false,
  });

  useFrame(() => {
    if (mesh.current) {
      const normalizeRotationY = THREE.MathUtils.euclideanModulo(
        mesh.current.rotation.y,
        Math.PI * 2
      );
      const normalizeRotationX = THREE.MathUtils.euclideanModulo(
        mesh.current.rotation.x,
        Math.PI
      );

      console.log([
        normalizeRotationX - Math.PI / 2,
        Math.abs(normalizeRotationX - Math.PI / 2),
      ]);

      setFacing((prev) => ({
        ["indonesia"]:
          Math.abs(normalizeRotationY - 2.6) <= Math.PI / 4 &&
          Math.abs(normalizeRotationX - Math.PI / 2) >= 0.7,
        ["japan"]:
          Math.abs(normalizeRotationY - 2.3) <= Math.PI / 4 + 0.3 &&
          normalizeRotationX - Math.PI / 2 >= -1.5 &&
          normalizeRotationX - Math.PI / 2 <= -0.1,
        ["australia"]:
          Math.abs(normalizeRotationY - 2.3) <= Math.PI / 4 &&
          (normalizeRotationX - Math.PI / 2 >= 0.3 ||
            Math.abs(normalizeRotationX - Math.PI / 2) >= 1.2),
      }));
    }
  });

  // @ts-ignore: unexpected type error
  useHelper(mesh, THREE.BoxHelper, "#272740");

  return (
    // @ts-ignore: unexpected type error
    <a.group {...spring} {...bind()} ref={mesh}>
      <Html center position={[-1.25, -0.1, -2.25]}>
        <p
          className={cn(
            "cursor-pointer bg-pink-500 text-white px-2 py-1 rounded-lg transition-opacity duration-300 ease-out",
            {
              "opacity-0": !facing.indonesia,
            }
          )}
        >
          Indonesia
        </p>
      </Html>
      <Html center position={[-1.5, 1.5, -1.3]}>
        <p
          className={cn(
            "cursor-pointer bg-pink-500 text-white px-2 py-1 rounded-lg transition-opacity duration-300 ease-out",
            {
              "opacity-0": !facing.japan,
            }
          )}
        >
          Japan
        </p>
      </Html>
      <Html center position={[-1.6, -1.1, -1.6]}>
        <p
          className={cn(
            "cursor-pointer bg-pink-500 text-white px-2 py-1 rounded-lg transition-opacity duration-300 ease-out",
            {
              "opacity-0": !facing.australia,
            }
          )}
        >
          Australia
        </p>
      </Html>
      <mesh>
        <sphereGeometry args={[2.5]} />
        <meshStandardMaterial {...texture} />
      </mesh>
    </a.group>
  );
};

const Planet = () => {
  return (
    <section className="h-screen">
      <Canvas>
        <ambientLight intensity={2} />
        <Earth />
      </Canvas>
    </section>
  );
};

export default Planet;
