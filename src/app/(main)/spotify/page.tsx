"use client";

import {
  CurrentlyPlaying,
  TopArtists,
  TopTracks,
} from "@/types/spotify-response";
import Scene from "./components/Scene";
import Image from "next/image";
import { useEffect, useState } from "react";

const SpotifyBedroom = () => {
  const [currentlyPlaying, setCurrentlyPlayying] = useState<CurrentlyPlaying>({
    is_playing: false,
  });
  const [topTracks, setTopTracks] = useState<TopTracks>({ success: false });
  const [topArtists, setTopArtists] = useState<TopArtists>({ success: false });

  const getCurrentlyPlaying = async () => {
    const response = await fetch(
      "http://localhost:3000/api/spotify/currently-playing",
      { method: "GET", cache: "no-cache" }
    );
    setCurrentlyPlayying(await response.json());
  };

  const getTopTracks = async () => {
    const response = await fetch(
      "http://localhost:3000/api/spotify/top-tracks",
      { method: "GET", cache: "no-cache" }
    );
    setTopTracks(await response.json());
  };

  const getTopArtists = async () => {
    const response = await fetch(
      "http://localhost:3000/api/spotify/top-artists",
      { method: "GET", cache: "no-cache" }
    );
    setTopArtists(await response.json());
  };

  useEffect(() => {
    getCurrentlyPlaying();
    getTopTracks();
    getTopArtists();
  }, []);

  return (
    <>
      <main className="h-screen w-full bg-red-500">
        <p>
          Is playing :{" "}
          {currentlyPlaying.is_playing
            ? "True"
            : currentlyPlaying.item
            ? "Idle"
            : "False"}
        </p>
        {currentlyPlaying.item && (
          <>
            <p>{currentlyPlaying.item.name}</p>
          </>
        )}
        <p>Tracks</p>
        <ul className="flex flex-col gap-y-4">
          {topTracks.success &&
            topTracks.items &&
            topTracks.items.map((track, i) => (
              <li
                key={i}
                className="bg-pink-500 text-white flex flex-col gap-y-2"
              >
                <p>{track.name}</p>
                {/* <Image
                  src={track.album.images[0].url}
                  alt={track.name}
                  width={500}
                  height={500}
                /> */}
              </li>
            ))}
        </ul>
        <p>Artists</p>
        <ul className="flex flex-col gap-y-4">
          {topArtists.success &&
            topArtists.items &&
            topArtists.items.map((artist, i) => (
              <li
                key={i}
                className="bg-pink-500 text-white flex flex-col gap-y-2"
              >
                <p>{artist.name}</p>
                {/* <Image
                  src={track.album.images[0].url}
                  alt={track.name}
                  width={500}
                  height={500}
                /> */}
              </li>
            ))}
        </ul>
        <Scene currentlyPlaying={currentlyPlaying} topTracks={topTracks} topArtists={topArtists} />
      </main>
      <main className="h-screen w-full bg-pink-500"></main>
    </>
  );
};

export default SpotifyBedroom;
