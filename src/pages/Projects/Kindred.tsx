import HeadingImage from "../../assets/images/KindredCover.png";
import LogoDesigns from "../../assets/images/KindredImages/Logos.svg";
import Poster from "../../assets/images/KindredImages/Posster.png";
import lofis from "../../assets/images/SnapperImages/Lofis.svg";
import hifis from "../../assets/images/SnapperImages/Hifis1.svg";
import mockup from "../../assets/images/KindredImages/Group 1.svg";

import Navbar from "../../components/Navbar";
import DetailPageSkeleton from "../../components/DetailPageSkeleton";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Kindred() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);
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

        {isLoading ? (
          <>
            <div className="mt-20 w-full flex items-center max-h-[60vh] overflow-hidden relative bg-gray-200 animate-pulse" style={{ height: "400px" }} />
            <DetailPageSkeleton />
          </>
        ) : (
          <>
            <div className="mt-20 w-full flex items-center max-h-[60vh] overflow-hidden relative">
              <img
                src={HeadingImage}
                alt="Header"
                className="w-full object-cover object-center h-full"
              />
              <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent"></div>
            </div>

        <div className="bg-blue-100 border-l-4 text-blue-700 p-8 mt-4">
          <div className="max-w-5xl mx-auto px-4 md:px-8">
            <div className="flex items-center">
              <p className="font-medium">Work in Progress</p>
              <p className="ml-2 text-sm">This project is still in progress.</p>
            </div>
          </div>
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
                    <p className="text-gray-900">Kindred ToDo</p>
                  </div>
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-[#626262] mb-2">
                      Timeline
                    </h3>
                    <p className="text-gray-900">February 2025 - Present</p>
                  </div>
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-[#626262] mb-2">
                      Role
                    </h3>
                    <p className="text-gray-900">
                      Developer and UI/UX Designer
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-[#626262] mb-2">
                      Team
                    </h3>
                    <p className="text-gray-900">Beak</p>
                  </div>
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-[#626262] mb-2">
                      Tools
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="inline-block px-2.5 py-1 text-sm border-[0.5px] border-black font-figtree text-[#626262] rounded-full">
                        React Native
                      </span>
                      <span className="inline-block px-2.5 py-1 text-sm border-[0.5px] border-black font-figtree text-[#626262] rounded-full">
                        MongoDB
                      </span>
                      <span className="inline-block px-2.5 py-1 text-sm border-[0.5px] border-black font-figtree text-[#626262] rounded-full">
                        UI/UX Design
                      </span>
                      <span className="inline-block px-2.5 py-1 text-sm border-[0.5px] border-black font-figtree text-[#626262] rounded-full">
                        Adobe Illustrator
                      </span>
                      <span className="inline-block px-2.5 py-1 text-sm border-[0.5px] border-black font-figtree text-[#626262] rounded-full">
                        Expo
                      </span>
                      <span className="inline-block px-2.5 py-1 text-sm border-[0.5px] border-black font-figtree text-[#626262] rounded-full">
                        Go
                      </span>
                      <span className="inline-block px-2.5 py-1 text-sm border-[0.5px] border-black font-figtree text-[#626262] rounded-full">
                        {" "}
                        Figma
                      </span>
                      <span className="inline-block px-2.5 py-1 text-sm border-[0.5px] border-black font-figtree text-[#626262] rounded-full">
                        {" "}
                        Adobe Illustrator
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
                  Creating a Culture of Mutal Productivity
                </h2>
                <h3 className="text-sm mt-8 uppercase tracking-wider text-[#626262] mb-2">
                  Kindred Todo - Coming Soon
                </h3>
                <a
                  href="https://kindredtodo.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 hover:text-blue-600 transition-colors underline flex items-center gap-2"
                >
                  View Kindred ToDo
                </a>
              </motion.div>
            </motion.div>
          </section>

          <section className="mb-24">
            <motion.div
              className="grid grid-cols-1 gap-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div custom={0} variants={fadeIn} className="space-y-4">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">
                  What is Kindred?
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Kindred is a socialized to-do list app designed to be the
                  first productivity-focused social media platform. It helps you
                  achieve your goals while staying connected with close friends.
                  Our goal is not only to help users stay organized with a
                  powerful to-do list but also to keep people connected by
                  sharing authentic moments from their day. Unlike traditional
                  social media, Kindred enhances productivity rather than
                  detracting from it. By coupling a traditional to-do list with
                  a Social Media experience, we expect our users to stick with
                  Kindred and use it in parallel with their friends cultivating
                  a culture of mutual productivity. The app encourages friends
                  to support each other in reaching their goals while building a
                  detailed log of your activities and productivity over time. It
                  features a semi-gamified environment with streaks and points
                  to keep you motivated.
                </p>
                <p className="text-gray-700 leading-relaxed">-beak & lok ye</p>
              </motion.div>
            </motion.div>
          </section>
          <section>
            <motion.div custom={0} variants={fadeIn} className="space-y-4">
              <div className="flex flex-row mb-8 rounded-xl">
                <img
                  src={mockup}
                  alt="Mockup"
                  className="w-full h-auto rounded-lg"
                />
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
                  Branding
                </h2>
                <p className="text-gray-700 max-w-2xl mx-auto">
                  Although not entire fleshed out, our branding aims to show
                  pops of purple throughout neutral colors such as black and
                  white. The K version of the logo represents "Kindred", and the
                  check mark represents the "ToDo".
                </p>
              </div>

              <section className="mb-8">
                <div className="mb-8 bg-gray-50 p-4 rounded-xl">
                  <img
                    src={LogoDesigns}
                    alt="Logo Designs"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div className="mb-8 bg-gray-50 p-4 rounded-xl">
                  <img
                    src={Poster}
                    alt="Poster"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </section>
            </motion.div>
          </section>

          <section className="mt-32">
            <div className="border-t border-gray-200 pt-16">
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
                  href="/vetted"
                  className="group inline-flex flex-col items-center"
                >
                  <span className="text-xl font-medium text-gray-900 mb-2 group-hover:[#718170] transition-colors">
                    Vetted
                  </span>
                  <span className="text-gray-600 mb-4 group-hover:[#718170] transition-colors">
                    Website Development, Website Design
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
          </>
        )}
      </div>
    </div>
  );
}
