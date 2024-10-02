"use client";

import { useEffect, useState } from "react";

const TouchEvent = () => {
  const [touch, setTouch] = useState<{ length: number; pos1X: number }>({
    length: 0,
    pos1X: 0,
  });

  useEffect(() => {
    window.addEventListener("touchmove", (e) => {
      setTouch({ length: e.touches.length, pos1X: e.touches[0].clientX });
      console.log(e.touches[0].clientX);
    });

    return () => {};
  });

  return (
    <section className="h-screen w-screen flex flex-col justify-center items-center">
      <p>Touch screen value</p>
      <p>Touched : {touch.length}</p>
      <p>First touch position</p>
      <p>X : {touch.pos1X}</p>
    </section>
  );
};

export default TouchEvent;
