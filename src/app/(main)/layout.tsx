"use client";

import { useGlobalState } from "@/components/providers/GlobalStateProvider";
import Lenis from "lenis";
import Link from "next/link";
import { useEffect } from "react";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { globalState } = useGlobalState();

  // useEffect(() => {
  //   const lenis = new Lenis();

  //   const raf = (n: number) => {
  //     lenis.raf(n);
  //     requestAnimationFrame(raf);
  //   };

  //   requestAnimationFrame(raf);
  // }, []);

  return (
    <>
      <nav className="flex gap-4 z-50 justify-center w-full fixed overflow-x-scroll">
        <Link className="mix-blend-exclusion bg-white" href={"/"}>
          Home
        </Link>
        <Link className="mix-blend-exclusion bg-white" href={"/fluid"}>
          Fluid
        </Link>
        <Link className="mix-blend-exclusion bg-white" href={"/gallery"}>
          Gallery
        </Link>
        <Link className="mix-blend-exclusion bg-white" href={"/room"}>
          Room
        </Link>
        <Link className="mix-blend-exclusion bg-white" href={"/bedroom"}>
          Bed Room
        </Link>
        <Link className="mix-blend-exclusion bg-white" href={"/spotify"}>
          Spotify
        </Link>
        <Link className="mix-blend-exclusion bg-white" href={"/touch"}>
          Touch
        </Link>
        <Link className="mix-blend-exclusion bg-white" href={"/ably"}>
          Ably
        </Link>
        <Link className="mix-blend-exclusion bg-white" href={"/planet"}>
          Planet
        </Link>
      </nav>
      <h2 className="fixed z-[999] bottom-0 bg-white text-black">
        Global State : {globalState}
      </h2>
      {children}
    </>
  );
}
