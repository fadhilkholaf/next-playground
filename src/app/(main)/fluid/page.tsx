"use client";

import { Float, useTexture } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { EffectComposer } from "@react-three/postprocessing";
import { Fluid as FluidEffect } from "@/components/Fluid";

const Fluid = () => {
  return (
    <main className="min-h-screen ">
      <section className="h-screen fixed w-screen top-0 left-0 -z-10">
        <Canvas>
          <ImagePlane />
          <EffectComposer>
            {/* <FluidEffect radius={0.05} /> */}
            <FluidEffect />
          </EffectComposer>
        </Canvas>
      </section>
      <section className="h-[200vh] ">
        <h1 className="text-white mix-blend-difference">ambatukam</h1>
      </section>
    </main>
  );
};

const ImagePlane = () => {
  const texture = useTexture("/images/dreamybull.jpeg");

  return (
    <Float speed={1}>
      <mesh>
        <planeGeometry args={[5, 5, 20, 20]} attach={"geometry"} />
        <meshBasicMaterial map={texture} />
      </mesh>
    </Float>
  );
};

export default Fluid;
