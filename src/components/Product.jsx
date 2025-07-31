import React, { useEffect, useRef, useState } from "react";
import img1 from "../assets/wine-bottle-svgrepo-com.svg";
import img2 from "../assets/wine-bottle-wine-svgrepo-com (1).svg";
import img3 from "../assets/wine-bottle-svgrepo-com.svg";
import img4 from "../assets/wine-bottle-wine-svgrepo-com (2).svg";
import img5 from "../assets/wine-bottle-wine-svgrepo-com.svg";
import img6 from "../assets/wine-bottle-svgrepo-com.svg";

const images = [img1, img2, img3, img4, img5, img6];

export default function Product() {
  const pathRef = useRef(null);
  const requestRef = useRef(null);
  const startTimeRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const entryDuration = 1000;
  const circleDuration = 5000;
  const exitDuration = 1000;
  const totalDuration = entryDuration + circleDuration + exitDuration;

  const animate = (time) => {
    if (!startTimeRef.current) startTimeRef.current = time;
    const elapsed = time - startTimeRef.current;

    if (!pathRef.current) return;
    const pathLength = pathRef.current.getTotalLength();
    const startPoint = pathRef.current.getPointAtLength(0);

    if (elapsed <= entryDuration) {
      const progress = elapsed / entryDuration;
      setPos({
        x: startPoint.x,
        y: startPoint.y + (1 - progress) * 150, // increased distance to come from below
      });
      setOpacity(progress);
    } else if (elapsed <= entryDuration + circleDuration) {
      const progress = (elapsed - entryDuration) / circleDuration;
      const point = pathRef.current.getPointAtLength(progress * pathLength);
      setPos({ x: point.x, y: point.y });
      setOpacity(1);
    } else if (elapsed <= totalDuration) {
      const dropProgress = (elapsed - entryDuration - circleDuration) / exitDuration;
      const endPoint = pathRef.current.getPointAtLength(pathLength);
      setPos({
        x: endPoint.x,
        y: endPoint.y + dropProgress * 150, // increased drop distance
      });
      setOpacity(1 - dropProgress);
    } else {
      setCurrentIndex((idx) => (idx + 1) % images.length);
      setOpacity(0);
      startTimeRef.current = null;
    }

    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [currentIndex]);

  return (
    <div className="relative w-[800px] h-[400px] mx-auto mt-10">
      <svg
        width="800"
        height="400"
        viewBox="0 0 800 400"
        xmlns="http://www.w3.org/2000/svg"
        className="block mx-auto"
      >
        <defs>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="rgba(0,0,0,0.15)" />
          </filter>
        </defs>

        <path
          ref={pathRef}
          d="M 150 380 A 300 300 0 0 1 650 380"  // bigger radius: 300 instead of 200
          fill="none"
          stroke="transparent"
          strokeWidth="6"
          filter="url(#shadow)"
        />
      </svg>

      <img
        src={images[currentIndex]}
        alt={`Product ${currentIndex + 1}`}
        className="absolute w-45 h-45 rounded-full shadow-lg"  // bigger image: 112px
        style={{
          top: pos.y - 56,   // center image vertically (28 * 2 = 56)
          left: pos.x - 56,  // center image horizontally
          transition: "top 0.1s linear, left 0.1s linear, opacity 0.3s ease-in-out",
          opacity: opacity,
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
