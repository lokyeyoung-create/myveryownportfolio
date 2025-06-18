import HeadingImage from "../../assets/images/Roadar.png";
import lofis from "../../assets/images/RoadarImages/Onboarding.svg";
import hifis from "../../assets/images/RoadarImages/Jobs.svg";
import hifis1 from "../../assets/images/RoadarImages/Map.svg";
import hifis2 from "../../assets/images/RoadarImages/Request.svg";
import hifis3 from "../../assets/images/RoadarImages/Profile.svg";

import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Roadar() {
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
                    <p className="text-gray-900">HackBeanpot</p>
                  </div>
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-[#626262] mb-2">
                      Timeline
                    </h3>
                    <p className="text-gray-900">24 Hour Hackathon</p>
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
                    <p className="text-gray-900">
                      Abhik Ray, Robert Palazzi, Job Vengalli
                    </p>
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
                        {" "}
                        Tailwind
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
                  Crowdsourcing Roadside Assistance in an Uber-styled mobile app
                  to both help mechanics and make our streets safer
                </h2>
                <div className="space-y-4 text-gray-700 mb-6 leading-relaxed">
                  <p>
                    Roadar is an application my team and I built within 24 hours
                    to try and crowdsource roadside assistance. We wanted to
                    build a mobile app that would allow drivers to be able to
                    request immediate, or scheduled assistance from mechanics in
                    order to perform either routine or emergency fixes.
                  </p>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-[#626262] mb-2">
                    GitHub
                  </h3>
                  <a
                    href="https://github.com/abhikaboy/roadar"
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
              className="grid grid-cols-1 gap-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div custom={0} variants={fadeIn} className="space-y-4">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">
                  Features and Challenges{" "}
                </h2>
                <p className="font-semibold">Job Creation</p>
                <p>
                  Drivers can make requests depending on their service type. On
                  the home page, drivers can select from a variety of options,
                  input the job urgency, and select their budget.{" "}
                </p>
                <p className="font-semibold">Web Sockets</p>
                <p>
                  One of the biggest features of Roadar is the ability for
                  mechanics to go 'online' and receive repair requests in real
                  time. Similar to how Uber works, the mechanics would get a pop
                  up in real time to accept or deny requests. We considered
                  creating a microservice for our websockets, but ultimately
                  figured out a method to have our http server and web socket
                  connection listen in parallel. We also make use of MongoDB
                  change streams to detect changes to the database and send it
                  out to the appropriate clients.
                </p>
                <p className="font-semibold">Authentication</p>
                <p>
                  Another challenge was supporting Apple OAuth to support both
                  types of accounts - drivers and mechanics. Eventually once we
                  solidified how to pass around the user state to our app
                  properly, we were successfully able to support both of our
                  users properly.
                </p>
              </motion.div>
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
              <p className="text-gray-700 mx-auto">Incoming Job Wireframes</p>
              <div className="bg-gray-50 p-4 rounded-lg flex justify-center items-center ">
                <img
                  src={hifis}
                  alt="High Fidelity Wireframes"
                  className=" w-full h-auto rounded-lg"
                />
              </div>
              <p className="text-gray-700 mx-auto">Map Wireframes</p>
              <div className="bg-gray-50 p-4 rounded-lg flex justify-center items-center ">
                <img
                  src={hifis1}
                  alt="High Fidelity Wireframes"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <p className="text-gray-700 mx-auto">Home Page Wireframes</p>
              <div className="bg-gray-50 p-4 rounded-lg flex justify-center items-center ">
                <img
                  src={hifis2}
                  alt="High Fidelity Wireframes"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <p className="text-gray-700 mx-auto">Onboarding</p>
              <div className="bg-gray-50 p-4 rounded-lg flex justify-center items-center ">
                <img
                  src={hifis3}
                  alt="High Fidelity Wireframes"
                  className="w-full h-auto rounded-lg"
                />
              </div>
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
                  href="/kindred"
                  className="group inline-flex flex-col items-center"
                >
                  <span className="text-xl font-medium text-gray-900 mb-2 group-hover:[#718170] transition-colors">
                    Kindred
                  </span>
                  <span className="text-gray-600 mb-4 group-hover:[#718170] transition-colors">
                    Mobile App Development, Mobile Design
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
