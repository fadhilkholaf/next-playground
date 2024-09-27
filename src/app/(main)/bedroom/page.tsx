"use client";

import { useCursorFollower } from "@/components/providers/CursorFollowerProvider";
import { useHelper } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import dynamic from "next/dynamic";
import { useRef } from "react";
import { RectAreaLightHelper } from "three/examples/jsm/Addons.js";

const Room = dynamic(() => import("@/components/Room"), {
  ssr: false,
});

const Light = () => {
  const ref = useRef(null);

  // @ts-ignore : unexpected error
  useHelper(ref, RectAreaLightHelper, "red");

  return (
    <rectAreaLight
      ref={ref}
      position={[-3.921, 6.75, 0.925]}
      rotation={[Math.PI / 2, Math.PI / -1, Math.PI / 2]}
      intensity={1}
      width={5}
      height={0.431895}
      color={"#FFF0A4"}
    />
  );
};

const Light2 = () => {
  const ref = useRef(null);

  // @ts-ignore : unexpected error
  useHelper(ref, RectAreaLightHelper, "red");

  return (
    <rectAreaLight
      ref={ref}
      position={[4, 11.7, 0.925]}
      rotation={[Math.PI / 2, Math.PI / 1.5 / 1, Math.PI / 2]}
      intensity={1}
      width={3}
      height={3}
      color={"#FFF0A4"}
    />
  );
};

const BedRoom = () => {
  const { setContent } = useCursorFollower();

  return (
    <>
      <div className="h-screen relative">
        <Canvas camera={{ fov: 30 }}>
          <ambientLight intensity={0.1} />
          <Light />
          <Light2 />
          <Room />
        </Canvas>
        <h1 className="absolute bottom-0 text-white text-center w-full text-9xl font-black mb-12">
          トリシュナ
        </h1>
      </div>
      <div
        className="h-screen bg-pink-500"
        onPointerEnter={() => setContent("amba")}
        onPointerLeave={() => setContent("")}
      ></div>
    </>
  );
};

export default BedRoom;
