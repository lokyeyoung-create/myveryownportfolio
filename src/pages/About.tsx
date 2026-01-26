import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PortraitImage from "../assets/images/PortraitImage.png";
import PortraitEye from "../assets/images/Eyeball.png";
import BeliLogo from "../assets/images/beli-logo.png";
import GoodreadsLogo from "../assets/images/goodreads-logo.png";
import Skeleton from "../components/Skeleton";
import AutoCarousel from "../components/AutoCarousel";

// Auto-import all images placed in src/assets/images/AboutmeImages
const galleryImages = Object.values(
  import.meta.glob("../assets/images/AboutmeImages/*.{png,jpg,jpeg,gif,svg}", {
    eager: true,
    import: "default",
  }) as Record<string, string>,
);

export default function About() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isReady, setIsReady] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
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

    // Start loading content immediately
    const loadingTimer = setTimeout(() => setIsLoading(false), 300);
    const initTimer = setTimeout(initializeComponent, 600);

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(loadingTimer);
      clearTimeout(initTimer);
    };
  }, []);

  const calculateEyePosition = (
    baseX: number,
    baseY: number,
    maxMove: number,
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
    eyePositions.leftEye.maxMove,
  );

  const rightEyePosition = calculateEyePosition(
    eyePositions.rightEye.x,
    eyePositions.rightEye.y,
    eyePositions.rightEye.maxMove,
  );

  return (
    <>
      <div className="flex w-full justify-center bg-[#FFFFFF]">
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
            className="flex flex-col lg:flex-row items-center lg:items-center mt-20 sm:mt-24 lg:mt-28 p-4 sm:p-6 lg:p-8"
            ref={containerRef}
          >
            {isLoading ? (
              <>
                <div className="relative w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/3 mb-8 lg:mb-0">
                  <Skeleton
                    variant="rectangular"
                    height={400}
                    className="rounded-lg"
                  />
                </div>
                <div className="lg:ml-8 w-full lg:w-2/3 text-center lg:text-left">
                  <Skeleton
                    variant="text"
                    width="40%"
                    height={32}
                    className="mb-6"
                  />
                  <Skeleton
                    variant="text"
                    width="100%"
                    height={16}
                    className="mb-3"
                  />
                  <Skeleton
                    variant="text"
                    width="100%"
                    height={16}
                    className="mb-3"
                  />
                  <Skeleton variant="text" width="95%" height={16} />
                </div>
              </>
            ) : (
              <>
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

                  <p className="font-figtree text-sm sm:text-base leading-relaxed mb-6">
                    I'm Lok Ye, a third year Computer Science major at
                    Northeastern University. I'm passionate about all things
                    creative - whether it be designing and developing an app,
                    painting, baking, crocheting, and more. I love spendig my
                    free time trying new restaurants and cafes and spending time
                    with my friends and family! Recently, I've been trying to
                    read more books, so if you have any recs, feel free to reach
                    out or add me on Goodreads!
                  </p>
                  <ul className="space-y-3 font-figtree text-sm sm:text-base">
                    <li>
                      <a
                        href="https://www.linkedin.com/in/lok-ye-young-62ba3b25a"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-black transition-colors"
                      >
                        <svg
                          className="w-5 h-5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        <span>LinkedIn</span>
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://github.com/lokyeyoung-create"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-black transition-colors"
                      >
                        <svg
                          className="w-5 h-5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        <span>GitHub</span>
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://beliapp.co/app/lokyeyoung"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-[#626262] hover:text-black transition-colors"
                      >
                        <img
                          src={BeliLogo}
                          alt="Beli"
                          className="w-5 h-5 object-contain flex-shrink-0"
                        />
                        <span>Beli</span>
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://www.goodreads.com/user/show/143304441"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-[#626262] hover:text-black transition-colors"
                      >
                        <img
                          src={GoodreadsLogo}
                          alt="Goodreads"
                          className="w-5 h-5 object-contain flex-shrink-0"
                        />
                        <span>Goodreads</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* BOTTOM CAROUSEL - Full Width */}
      {galleryImages.length > 0 && (
        <div className="w-full mt-10 mb-8 bg-[#FFFFFF]">
          <AutoCarousel images={galleryImages} />
        </div>
      )}
    </>
  );
}
