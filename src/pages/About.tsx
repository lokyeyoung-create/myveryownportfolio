import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import PortraitImage from "../assets/images/PortraitImage.svg";
import PortraitEye from "../assets/images/Eyeball.svg";

export default function About() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const portraitRef = useRef(null);
  const containerRef = useRef(null);

  const eyePositions = {
    leftEye: { x: 38.6, y: 35.8, maxMove: 1.2 }, 
    rightEye: { x: 58.1, y: 37.1, maxMove: 1.2 }, 
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();

        setMousePosition({
          x: e.clientX - containerRect.left,
          y: e.clientY - containerRect.top,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const calculateEyePosition = (baseX, baseY, maxMove) => {
    if (!portraitRef.current || !containerRef.current)
      return { x: baseX, y: baseY };

    const portraitRect = portraitRef.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();

    const eyeX = portraitRect.width * (baseX / 100);
    const eyeY = portraitRect.height * (baseY / 100);

    const centerX = portraitRect.width / 2;
    const centerY = portraitRect.height / 2;

    const vectorX =
      mousePosition.x - (portraitRect.left - containerRect.left + centerX);
    const vectorY =
      mousePosition.y - (portraitRect.top - containerRect.top + centerY);

    const distance = Math.sqrt(vectorX * vectorX + vectorY * vectorY);
    const normalizedX = distance > 0 ? vectorX / distance : 0;
    const normalizedY = distance > 0 ? vectorY / distance : 0;

    const moveX = normalizedX * maxMove;
    const moveY = normalizedY * maxMove;

    return {
      x: eyeX + moveX,
      y: eyeY + moveY,
    };
  };

  const leftEyePosition = calculateEyePosition(
    eyePositions.leftEye.x,
    eyePositions.leftEye.y,
    eyePositions.leftEye.maxMove
  );

  const rightEyePosition = calculateEyePosition(
    eyePositions.rightEye.x,
    eyePositions.rightEye.y,
    eyePositions.rightEye.maxMove
  );

  return (
    <div className="flex w-full justify-center bg-[#FFFFFF]">
      <div className="w-3/5 fixed top-0 mb-16">
        <div className="fixed w-full mx-auto top-0 left-0 right-0 z-50 bg-[#FFFFFF] backdrop-blur-sm">
          <Navbar />
        </div>
        <div
          className="flex flex-row items-center mt-48 p-8"
          ref={containerRef}
        >
          <div className="relative w-1/3">
            <img
              src={PortraitImage}
              alt="Portrait"
              className=" w-full"
              ref={portraitRef}
            />

            <img
              src={PortraitEye}
              alt="Left Eye"
              className="absolute w-[4.2%]"
              style={{
                left: `${leftEyePosition.x}px`,
                top: `${leftEyePosition.y}px`,
                transform: "translate(-50%, -50%)",
              }}
            />

            <img
              src={PortraitEye}
              alt="Right Eye"
              className="absolute w-[4.2%]"
              style={{
                left: `${rightEyePosition.x}px`,
                top: `${rightEyePosition.y}px`,
                transform: "translate(-50%, -50%)",
              }}
            />
          </div>

          <div className="ml-8 w-2/3">
            <h1 className="font-figtree font-light text-3xl mb-4">ABOUT ME</h1>
            <p className="font-figtree text-base">
              I'm Lok Ye, a second year Computer Science major at Northeastern
              University. I'm passionate about all things creative - whether it be 
              designing and developing an app, or my hobbies of painting, baking, crocheting, and more. 
               
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
