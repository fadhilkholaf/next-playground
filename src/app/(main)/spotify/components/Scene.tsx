"use client";

import {
  CurrentlyPlaying,
  TopArtists,
  TopTracks,
} from "@/types/spotify-response";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import dynamic from "next/dynamic";

const Room = dynamic(() => import("@/components/SpotifyBedroom"), {
  ssr: false,
});

const Scene = ({
  currentlyPlaying,
  topTracks,
  topArtists,
}: {
  currentlyPlaying: CurrentlyPlaying;
  topTracks: TopTracks;
  topArtists: TopArtists;
}) => {
  return (
    <>
      <Canvas camera={{ position: [-2, 7.5, 2] }}>
        <ambientLight />
        <OrbitControls />
        <Room
          currentlyPlaying={currentlyPlaying}
          topArtists={topArtists}
          topTracks={topTracks}
        />
      </Canvas>
    </>
  );
};

export default Scene;
