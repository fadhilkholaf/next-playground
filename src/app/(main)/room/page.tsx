"use client";

import { useEffect, useRef } from "react";

import { useMotionValue } from "framer-motion";
import Lenis from "lenis";
import { Canvas, useFrame } from "@react-three/fiber";
import { MathUtils } from "three";

const Mesh = () => {
  return (
    <mesh position={[2, 0, 0]}>
      <boxGeometry args={[1, 3, 1]} />
      <meshNormalMaterial />
    </mesh>
  );
};

const Room = () => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e: PointerEvent) => {
    x.set((e.clientX / innerWidth) * 2 - 1);
    y.set((e.clientY / innerHeight) * 2 - 1);
  };

  const CameraControls = () => {
    useFrame(({ camera, pointer }) => {
      const targetX = y.get() * 0.25;
      const targetY = x.get() * 0.5;

      camera.position.y = MathUtils.lerp(
        camera.position.y,
        (-scrollY / innerHeight) * 10,
        0.05
      );

      camera.position.x = MathUtils.lerp(
        camera.position.x,
        -pointer.x * 5,
        0.05
      );
      camera.position.y = MathUtils.lerp(
        camera.position.y,
        -pointer.y * 5,
        0.05
      );

      // camera.position.x = MathUtils.lerp(camera.position.x, -targetY * 5, 0.05);
      // camera.position.y = MathUtils.lerp(camera.position.y, targetX * 5, 0.05);

      // camera.rotation.x = MathUtils.lerp(
      //   camera.rotation.x,
      //   targetX * 0.5,
      //   0.05
      // );
      // camera.rotation.y = MathUtils.lerp(
      //   camera.rotation.y,
      //   targetY * 0.5,
      //   0.05
      // );
    });

    return null;
  };

  useEffect(() => {
    // const lenis = new Lenis();

    // const raf = (number: number) => {
    //   lenis.raf(number);
    //   requestAnimationFrame(raf);
    // };

    // requestAnimationFrame(raf);
    // window.addEventListener("pointermove", handleMouseMove);

    return () => {
      // window.removeEventListener("pointermove", handleMouseMove);
    };
  }, []);

  return (
    <div className="h-[200vh] w-full absolute top-0">
      <div ref={ref} className="h-screen bg-pink-500">
        <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
          <CameraControls />
          <mesh position={[0, -2, 0]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshNormalMaterial />
          </mesh>
          <Mesh />
        </Canvas>
      </div>
    </div>
  );
};

export default Room;
