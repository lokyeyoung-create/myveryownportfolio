import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import PortraitImage from "../assets/images/PortraitImage.svg";
import PortraitEye from "../assets/images/Eyeball.svg";

export default function About() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isReady, setIsReady] = useState(false);
  const portraitRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const eyePositions = {
    leftEye: { x: 38.6, y: 35.8, maxMove: 1.2 },
    rightEye: { x: 58.1, y: 37.1, maxMove: 1.2 },
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();

        setMousePosition({
          x: e.clientX - containerRect.left,
          y: e.clientY - containerRect.top,
        });
      }
    };

    const initializeComponent = () => {
      if (portraitRef.current && containerRef.current) {
        setIsReady(true);
        const containerRect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: containerRect.width / 2,
          y: containerRect.height / 2,
        });
      }
    };

    const timeoutId = setTimeout(initializeComponent, 100);

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeoutId);
    };
  }, []);

  const calculateEyePosition = (
    baseX: number,
    baseY: number,
    maxMove: number
  ) => {
    if (!portraitRef.current || !containerRef.current || !isReady)
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
    <div className="flex w-full justify-center bg-[#FFFFFF] min-h-screen">
      {/* RESPONSIVE CONTAINER
          - px-4: Mobile padding (16px)
          - sm:px-8: Small tablet padding (32px)
          - md:px-16: Tablet padding (64px)
          - lg:px-24: Laptop padding (96px)
          - xl:w-3/5: Desktop width (your original)
      */}
      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:w-3/5 xl:px-0">
        {/* RESPONSIVE NAVBAR */}
        <div className="fixed w-full mx-auto top-0 left-0 right-0 z-50 bg-[#FFFFFF] backdrop-blur-sm">
          <Navbar />
        </div>

        <div
          className="flex flex-col lg:flex-row items-center lg:items-center mt-20 sm:mt-32 lg:mt-48 p-4 sm:p-6 lg:p-8"
          ref={containerRef}
        >
          <div className="relative w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/3 mb-8 lg:mb-0">
            <img
              src={PortraitImage}
              alt="Portrait"
              className="w-full"
              ref={portraitRef}
            />

            {isReady && (
              <>
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
              </>
            )}
          </div>

          <div className="lg:ml-8 w-full lg:w-2/3 text-center lg:text-left">
            <h1 className="font-cormorant font-light text-2xl sm:text-3xl mb-4 lg:mb-4">
              ABOUT ME
            </h1>

            <p className="font-figtree text-sm sm:text-base leading-relaxed">
              I'm Lok Ye, a second year Computer Science major at Northeastern
              University. I'm passionate about all things creative - whether it
              be designing and developing an app, painting, baking, crocheting,
              and more. I love trying new restaurants and cafes and spending
              time with my friends and family!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
