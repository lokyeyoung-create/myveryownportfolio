import HeadingImage from "../../assets/images/StudyCafeImages/CoverImage.png";
import hifis from "../../assets/images/StudyCafeImages/StudyCafeHifis.svg";
import StudyCafeVideo from "../../assets/images/StudyCafeImages/CafeVideo-compressed.mp4";

import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function StudyCafe() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="flex w-full justify-center bg-[#FFFFFF]">
      <div className="bg-[#FFFFFF] w-full">
        <div className="fixed w-full mx-auto top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
          <Navbar />
        </div>

        <div className="mt-20 w-full flex items-center max-h-[60vh] overflow-hidden relative">
          <img
            src={HeadingImage}
            alt="Header"
            className="w-full object-cover object-center h-full"
          />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 md:px-8 py-16">
          <section className="mb-24">
            <motion.div
              className="flex flex-col md:flex-row gap-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                className="w-full md:w-1/3"
                custom={0}
                variants={fadeIn}
              >
                <h2 className="text-2xl font-semibold mb-6 text-gray-900">
                  Project Overview
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-[#626262] mb-2">
                      Company
                    </h3>
                    <p className="text-gray-900">Mobile App Development</p>
                  </div>
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-[#626262] mb-2">
                      Timeline
                    </h3>
                    <p className="text-gray-900">May - June 2025</p>
                  </div>
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-[#626262] mb-2">
                      Role
                    </h3>
                    <p className="text-gray-900">
                      Android Developer and UI/UX Designer
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-[#626262] mb-2">
                      Team
                    </h3>
                    <p className="text-gray-900">Abhik Ray, Brian Liu</p>
                  </div>
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-[#626262] mb-2">
                      Tools
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="inline-block px-2.5 py-1 text-sm border-[0.5px] border-black font-figtree text-[#626262] rounded-full">
                        Kotlin
                      </span>
                      <span className="inline-block px-2.5 py-1 text-sm border-[0.5px] border-black font-figtree text-[#626262] rounded-full">
                        {" "}
                        Python
                      </span>
                      <span className="inline-block px-2.5 py-1 text-sm border-[0.5px] border-black font-figtree text-[#626262] rounded-full">
                        {" "}
                        Unit Testing
                      </span>
                      <span className="inline-block px-2.5 py-1 text-sm border-[0.5px] border-black font-figtree text-[#626262] rounded-full">
                        {" "}
                        Figma
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="w-full md:w-2/3"
                custom={1}
                variants={fadeIn}
              >
                <h2 className="text-3xl font-semibold mb-6 text-gray-900">
                  Discover New Cafes for Your Studying Purposes
                </h2>
                <div className="space-y-4 text-gray-700 mb-6 leading-relaxed">
                  <p>
                    StudyCafe is an app that allows you to discover cafes near
                    you with amenities that you need. Whether you need a cafe
                    for studying, conversing, or relaxing, StudyCafe provides
                    the information you need to make the perfect choice.
                  </p>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-[#626262] mb-2">
                    GitHub
                  </h3>
                  <a
                    href="https://github.com/abhikaboy/MADStufyCafe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 hover:text-blue-600 transition-colors underline flex items-center gap-2"
                  >
                    View Repository
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </section>

          <section className="mb-24">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div custom={0} variants={fadeIn} className="space-y-4">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">
                  Problem Statement
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Students and remote workers want to explore and discover great
                  study spots, but existing platforms don't help them identify
                  cafes with the right study environment. Without information
                  about WiFi quality, noise levels, power outlets, and workspace
                  comfort, people resort to costly trial-and-error cafe hopping
                  that limits their ability to find their perfect study havens.
                </p>
              </motion.div>

              <motion.div custom={1} variants={fadeIn} className="space-y-4">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">
                  The Solution
                </h2>
                <p>
                  <li className="m-3">
                    Rate Cafes: Users can create profiles with details like
                    instruments, genres, and experience level.
                  </li>
                  <li className="m-3">
                    ️Location Based Recommendations: Users will be recommended
                    cafes near them, allowing easier discovery
                  </li>
                  <li className="m-3">
                    Searching and Filtering: Tag filtering and cafe name and
                    location searching
                  </li>
                  <li className="m-3">
                    Bookmark Your Favorites: Bookmark cafes you love or want to
                    try later. Create a personalized list of go-to cafes, and
                    keep track of your progress.
                  </li>
                  <li className="m-3">
                    Upload Photos: Add photos of the cafe interior, drinks,
                    menus, and workspaces.
                  </li>
                </p>
              </motion.div>
            </motion.div>
          </section>
          <section className="mb-24">
            <h2 className="text-3xl text-center font-semibold mb-3 text-gray-900">
              Live Demo
            </h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="h-120 bg-[#866C6C] rounded-lg overflow-hidden mb-6 relative group flex items-center justify-center">
                <video
                  className="w-1/3 h-4/5 m-10 rounded-lg object-cover"
                  muted
                  loop
                  playsInline
                  onMouseEnter={(e) => (e.target as HTMLVideoElement).play()}
                  onMouseLeave={(e) => {
                    const video = e.target as HTMLVideoElement;
                    video.pause();
                    video.currentTime = 0;
                  }}
                >
                  <source src={StudyCafeVideo} type="video/mp4" />
                </video>
                <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded-full flex items-center space-x-1 opacity-100 group-hover:opacity-0 transition-opacity duration-200">
                  <span>Hover me!</span>
                  <svg
                    className="w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 15.707a1 1 0 0 0 1.414 0l5-5a1 1 0 0 0-1.414-1.414L11 13.586V3a1 1 0 1 0-2 0v10.586l-4.293-4.293a1 1 0 0 0-1.414 1.414l5 5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          </section>
          <section className="mb-24">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="text-center">
                <h2 className="text-3xl font-semibold mb-3 text-gray-900">
                  High Fidelity Wireframes
                </h2>
              </div>
              <div className="bg-gray-50 p-12 flex rounded-lg justify-center items-center ">
                <img
                  src={hifis}
                  alt="High Fidelity Wireframes"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </motion.div>
          </section>

          <section className="mt-32">
            <div className="border-t border-gray-50 pt-16">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-semibold mb-6 text-gray-900">
                  Next Project
                </h2>
                <a
                  href="/beathive"
                  className="group inline-flex flex-col items-center"
                >
                  <span className="text-xl font-medium text-gray-900 mb-2 group-hover:[#718170] transition-colors">
                    BeatHive
                  </span>
                  <span className="text-gray-600 mb-4 group-hover:[#718170] transition-colors">
                    Web Development, Web Design
                  </span>
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center group-hover:[#718170] transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-gray-600 group-hover:text-white transition-colors"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </a>
              </motion.div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
