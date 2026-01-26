import HeadingImage from "../../assets/images/Vetted.png";
import Moodboard from "../../assets/images/VettedImages/Moodboard.png";
import LogoDesigns from "../../assets/images/VettedImages/Logos.png";
import SearchPrototype from "../../assets/images/VettedImages/SearchPrototyping.mov";
import PetCreationPrototype from "../../assets/images/VettedImages/PetCreationPrototyping.mov";
import CareboardFlow from "../../assets/images/VettedImages/CareBoardFlow.mov";
import LoginFlow from "../../assets/images/VettedImages/LoginFlow.mov";
import Logo4 from "../../assets/images/VettedImages/Logo4.png";
import Logo1 from "../../assets/images/VettedImages/Logo1.png";
import Logo2 from "../../assets/images/VettedImages/Logo2.png";
import SiteMap from "../../assets/images/VettedImages/SiteMap.png";
import F1 from "../../assets/images/VettedImages/HomeFlow.png";
import F3 from "../../assets/images/VettedImages/ProfileFlow.png";
import F5 from "../../assets/images/VettedImages/SearchFlow.png";
import F6 from "../../assets/images/VettedImages/LoginFlow.png";

import lofis from "../../assets/images/VettedImages/Lofis.svg";
import hifis from "../../assets/images/VettedImages/Hifis.svg";
import hifis2 from "../../assets/images/VettedImages/Hifis2.svg";
import hifis3 from "../../assets/images/VettedImages/Hifis3.svg";
import hifis4 from "../../assets/images/VettedImages/Hifis4.svg";
import hifis5 from "../../assets/images/VettedImages/Hifis5.svg";

import competitiveAnalysis from "../../assets/images/VettedImages/CompetitiveAnalysis.svg";

import Navbar from "../../components/Navbar";
import DetailPageSkeleton from "../../components/DetailPageSkeleton";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Vetted() {
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
            <div
              className="pt-20 w-full max-h-[60vh] overflow-hidden relative bg-gray-200 animate-pulse"
              style={{ height: "400px" }}
            />
            <DetailPageSkeleton />
          </>
        ) : (
          <>
            <div className="pt-20 w-full h-[60vh] overflow-hidden relative flex items-center justify-center">
              <img
                src={HeadingImage}
                alt="Header"
                className="w-full h-full object-cover object-center"
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
                        <p className="text-gray-900">
                          Generate Product Development Studio
                        </p>
                      </div>
                      <div>
                        <h3 className="text-sm uppercase tracking-wider text-[#626262] mb-2">
                          Timeline
                        </h3>
                        <p className="text-gray-900">
                          September - January 2024
                        </p>
                      </div>
                      <div>
                        <h3 className="text-sm uppercase tracking-wider text-[#626262] mb-2">
                          Role
                        </h3>
                        <p className="text-gray-900">UI/UX Designer</p>
                      </div>
                      <div>
                        <h3 className="text-sm uppercase tracking-wider text-[#626262] mb-2">
                          Team
                        </h3>
                        <p className="text-gray-900">
                          Michael Salzman (Design Lead), Leadora Kyin, Tiffany
                          Zheng, Anna Bartlett
                        </p>
                      </div>
                      <div>
                        <h3 className="text-sm uppercase tracking-wider text-[#626262] mb-2">
                          Tools
                        </h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <span className="inline-block px-2.5 py-1 text-sm border-[0.5px] border-black font-figtree text-[#626262] rounded-full">
                            Figma
                          </span>
                          <span className="inline-block px-2.5 py-1 text-sm border-[0.5px] border-black font-figtree text-[#626262] rounded-full">
                            UI/UX Design
                          </span>
                          <span className="inline-block px-2.5 py-1 text-sm border-[0.5px] border-black font-figtree text-[#626262] rounded-full">
                            {" "}
                            Adobe Illustrator
                          </span>
                          <span className="inline-block px-2.5 py-1 text-sm border-[0.5px] border-black font-figtree text-[#626262] rounded-full">
                            {" "}
                            Graphic Design
                          </span>
                          <span className="inline-block px-2.5 py-1 text-sm border-[0.5px] border-black font-figtree text-[#626262] rounded-full">
                            {" "}
                            Prototyping
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
                      Connecting Pet Parents with Pet Providers
                    </h2>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        Vetted connects pet owners with certified veterinarians
                        for trusted, specialized care through a seamless and
                        secure platform, enhancing post-medical support and
                        general veterinary consultation.
                      </p>
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
                  <motion.div
                    custom={0}
                    variants={fadeIn}
                    className="space-y-4"
                  >
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900">
                      Client Identity
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      Vetted is an innovative platform designed to facilitate
                      communication between pet owners seeking specialized care
                      and credentialed veterinary professionals who can provide
                      tailored support. By offering a centralized hub for
                      communication and consultation, Vetted aims to improve the
                      quality of post-medical care and general veterinary
                      support for pets. The platform combines a warm
                      user-friendly interface with authentication features,
                      ensuring pet owners receive trusted and reliable care for
                      their beloved companions.
                    </p>
                  </motion.div>

                  <motion.div
                    custom={1}
                    variants={fadeIn}
                    className="space-y-4"
                  >
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900">
                      Solution
                    </h2>
                    <p>
                      <li className="m-3">
                        Ensuring the highest standards of data privacy and
                        security so pet owners and veterinary professionals feel
                        confident sharing sensitive information.
                      </li>
                      <li className="m-3">
                        Empowering pet owners with practical guidance and access
                        to the right expertise at the right time.
                      </li>
                      <li className="m-3">
                        Providing pet owners with peace of mind by connecting
                        them only with certified veterinary professionals.
                      </li>
                    </p>
                  </motion.div>
                </motion.div>
              </section>

              <section className="mb-24">
                <motion.h2
                  className="text-3xl font-semibold mb-12 text-center text-gray-900"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  Key User Flows
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-1 gap-16">
                  <motion.div
                    className="flex flex-col"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="h-120 bg-gray-200 rounded-lg overflow-hidden mb-6 relative group">
                      <video
                        className="w-full h-full object-cover"
                        muted
                        loop
                        playsInline
                        onMouseEnter={(e) =>
                          (e.target as HTMLVideoElement).play()
                        }
                        onMouseLeave={(e) => {
                          const video = e.target as HTMLVideoElement;
                          video.pause();
                          video.currentTime = 0;
                        }}
                      >
                        <source src={SearchPrototype} type="video/mp4" />
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

                    <h3 className="text-xl font-semibold mb-3 text-gray-900">
                      Searching
                    </h3>
                    <p className="text-gray-700">
                      Pet parents are able to search for both locations and
                      providers, as well as filter by types of care. This
                      interactive map allows users to click into the profiles of
                      pet providers near them and see results in both a map and
                      list view.
                    </p>
                  </motion.div>

                  <motion.div
                    className="flex flex-col"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="h-120 bg-gray-200 rounded-lg overflow-hidden mb-6 relative group">
                      <video
                        className="w-full h-full object-cover"
                        muted
                        loop
                        playsInline
                        onMouseEnter={(e) =>
                          (e.target as HTMLVideoElement).play()
                        }
                        onMouseLeave={(e) => {
                          const video = e.target as HTMLVideoElement;
                          video.pause();
                          video.currentTime = 0;
                        }}
                      >
                        <source src={PetCreationPrototype} type="video/mp4" />
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

                    <h3 className="text-xl font-semibold mb-3 text-gray-900">
                      Pet Creation
                    </h3>
                    <p className="text-gray-700">
                      Pet parents can add one, two, three, or more pets,
                      depending on how much of a pet lover they are! Each pet
                      has a profile of their own, with information such as age,
                      sex, medications, and more.
                    </p>
                  </motion.div>

                  <motion.div
                    className="flex flex-col"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="h-120 bg-gray-200 rounded-lg overflow-hidden mb-6 relative group">
                      <video
                        className="w-full h-full object-cover"
                        muted
                        loop
                        playsInline
                        onMouseEnter={(e) =>
                          (e.target as HTMLVideoElement).play()
                        }
                        onMouseLeave={(e) => {
                          const video = e.target as HTMLVideoElement;
                          video.pause();
                          video.currentTime = 0;
                        }}
                      >
                        <source src={CareboardFlow} type="video/mp4" />
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

                    <h3 className="text-xl font-semibold mb-3 text-gray-900">
                      Careboard
                    </h3>
                    <p className="text-gray-700">
                      The careboard is a place for pet parents and pet providers
                      to connect directly. Through messages, confirmations, and
                      a rating system, pet parents can determine whether or not
                      a pet provider is the right fit for them.
                    </p>
                  </motion.div>

                  <motion.div
                    className="flex flex-col"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="h-120 bg-gray-200 rounded-lg overflow-hidden mb-6 relative group">
                      <video
                        className="w-full h-full object-cover"
                        muted
                        loop
                        playsInline
                        onMouseEnter={(e) =>
                          (e.target as HTMLVideoElement).play()
                        }
                        onMouseLeave={(e) => {
                          const video = e.target as HTMLVideoElement;
                          video.pause();
                          video.currentTime = 0;
                        }}
                      >
                        <source src={LoginFlow} type="video/mp4" />
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

                    <h3 className="text-xl font-semibold mb-3 text-gray-900">
                      Login
                    </h3>
                    <p className="text-gray-700">
                      Logging in to Vetted is easy - through email, microsoft,
                      or google - pet parents can get started in just a couple
                      of minutes.
                    </p>
                  </motion.div>
                </div>
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
                      The design system brings together warmth and trust through
                      a thoughtful color palette of brick red and soft
                      periwinkle blue. The brick tones create a sense of
                      reliability while the periwinkle adds a calming touch.
                      Clean typography and organized layouts keep things
                      professional without feeling cold or intimidating.
                    </p>
                  </div>

                  <section className="mb-8">
                    <div className="mb-8 bg-gray-50 p-4 rounded-xl">
                      <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation
                        pagination={{
                          clickable: true,
                          bulletClass: "swiper-pagination-bullet",
                          bulletActiveClass: "swiper-pagination-bullet-active",
                        }}
                        className="rounded-xl logo-swiper"
                        style={
                          {
                            "--swiper-navigation-color": "#626262",
                            "--swiper-pagination-color": "#626262",
                            "--swiper-navigation-size": "24px",
                          } as React.CSSProperties
                        }
                      >
                        <SwiperSlide>
                          <div className="p-8">
                            <img
                              src={LogoDesigns}
                              alt="Logo Designs"
                              className="w-full h-auto rounded-lg"
                            />
                          </div>
                        </SwiperSlide>

                        <SwiperSlide>
                          <div className="p-8">
                            <img
                              src={Logo2}
                              alt="Logo Iterations"
                              className="w-full h-auto rounded-lg"
                            />
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="p-8">
                            <img
                              src={Logo4}
                              alt="Logo Iterations"
                              className="w-full h-auto rounded-lg"
                            />
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="p-8">
                            <img
                              src={Logo1}
                              alt="Logo Iterations"
                              className="w-full h-auto rounded-lg"
                            />
                          </div>
                        </SwiperSlide>
                      </Swiper>
                    </div>
                  </section>
                  <p className="text-gray-700 mb-12 mt-4 mx-auto text-left">
                    Creating the branding for Vetted was a long and winding
                    process, where I attempted to tie in the client's brand
                    preferences with my creative vision. At first, I envisioned
                    the logo to be fun and friendly. However, with the Header
                    Type being a Serif font and the client preferences being
                    more elegant, I attempted to create a logo that combined a
                    more sophisticated brand with a welcoming and friendly
                    feeling.
                  </p>

                  <div className="bg-gray-50 p-8 rounded-xl flex flex-row space-x-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-gray-900">
                        Colors
                      </h3>
                      <div className="flex flex-wrap flex-col gap-2">
                        <div className="space-y-1">
                          <div className="w-20 h-16 bg-[#A13307] rounded-lg shadow"></div>
                          <p className="text-sm text-gray-700">#A13307</p>
                        </div>
                        <div className="space-y-1">
                          <div className="w-20 h-16 bg-[#AAC7FF] border border-gray-200 rounded-lg shadow"></div>
                          <p className="text-sm text-gray-700">#AAC7FF</p>
                        </div>
                        <div className="space-y-1">
                          <div className="w-20 h-16 bg-[#727272] rounded-lg shadow"></div>
                          <p className="text-sm text-gray-700">#727272</p>
                        </div>
                        <div className="space-y-1">
                          <div className="w-20 h-16 bg-[#B30000] rounded-lg shadow"></div>
                          <p className="text-sm text-gray-700">#B30000</p>
                        </div>
                        <div className="space-y-1">
                          <div className="w-20 h-16 bg-[#006C4C] rounded-lg shadow"></div>
                          <p className="text-sm text-gray-700">#006C4C</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <img
                        src={Moodboard}
                        alt="Snapper Moodboard"
                        className="w-full rounded-lg shadow-lg"
                      />
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
                      Sitemaps and User Flows
                    </h2>
                    <p className="text-gray-700 max-w-2xl mx-auto">
                      Cycle through the sitemaps and user flows below!
                    </p>
                  </div>

                  <section className="mb-12">
                    <div className="mb-24 bg-gray-50 p-4 rounded-xl">
                      <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation
                        pagination={{
                          clickable: true,
                          bulletClass: "swiper-pagination-bullet",
                          bulletActiveClass: "swiper-pagination-bullet-active",
                        }}
                        className="rounded-xl logo-swiper"
                        style={
                          {
                            "--swiper-navigation-color": "#626262",
                            "--swiper-pagination-color": "#626262",
                            "--swiper-navigation-size": "24px",
                          } as React.CSSProperties
                        }
                      >
                        <SwiperSlide>
                          <div className="p-8 flex justify-center items-center">
                            <img
                              src={SiteMap}
                              alt="Sitemap"
                              className="w-full h-auto rounded-lg"
                            />
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="p-8 flex justify-center items-center">
                            <img
                              src={F1}
                              alt="F1 and F2 User Flow"
                              className="w-full h-auto rounded-lg"
                            />
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="p-8 flex justify-center items-center">
                            <img
                              src={F3}
                              alt="F3 and F4 User Flows"
                              className="w-full h-auto rounded-lg"
                            />
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="p-8 flex justify-center items-center">
                            <img
                              src={F5}
                              alt="F5 User Flow"
                              className="w-full h-auto rounded-lg"
                            />
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="p-8 flex justify-center items-center">
                            <img
                              src={F6}
                              alt="F5 User Flow"
                              className="w-full h-auto rounded-lg"
                            />
                          </div>
                        </SwiperSlide>
                      </Swiper>
                    </div>
                  </section>
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
                      Competitive Analysis
                    </h2>
                  </div>
                  <div className="flex bg-gray-50 p-8 rounded-xl justify-center items-center ">
                    <img
                      src={competitiveAnalysis}
                      alt="Competitive Analysis"
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
                      Low Fidelity and Mid Fidelity Wireframes
                    </h2>
                  </div>
                  <div className="bg-gray-50 p-4 flex justify-center items-center rounded-lg">
                    <img
                      src={lofis}
                      alt="Low and Mid Fidelity Wireframes"
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
                      High Fidelity Wireframes
                    </h2>
                  </div>
                  <p className="text-gray-700 mx-auto">Searching Wireframes</p>
                  <div className="flex justify-center items-center ">
                    <img
                      src={hifis}
                      alt="High Fidelity Wireframes"
                      className="w-full h-auto  bg-gray-50 p-4 rounded-lg"
                    />
                  </div>
                  <p className="text-gray-700 mx-auto">
                    Pet Profile Creation Wireframes
                  </p>
                  <div className="flex justify-center items-center ">
                    <img
                      src={hifis2}
                      alt="High Fidelity Wireframes"
                      className="w-full h-auto  bg-gray-50 p-4 rounded-lg"
                    />
                  </div>
                  <p className="text-gray-700 mx-auto">Profile Wireframes</p>
                  <div className="flex justify-center items-center ">
                    <img
                      src={hifis3}
                      alt="High Fidelity Wireframes"
                      className="w-full h-auto  bg-gray-50 p-4 rounded-lg"
                    />
                  </div>
                  <p className="text-gray-700 mx-auto">Settings Wireframes</p>
                  <div className="flex justify-center items-center ">
                    <img
                      src={hifis4}
                      alt="High Fidelity Wireframes"
                      className="w-full h-auto  bg-gray-50 p-4 rounded-lg"
                    />
                  </div>
                  <p className="text-gray-700 mx-auto">
                    Landing Page Wireframes
                  </p>

                  <div className="flex justify-center items-center ">
                    <img
                      src={hifis5}
                      alt="High Fidelity Wireframes"
                      className="w-full h-auto  bg-gray-50 p-4 rounded-lg"
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
                      href="/studycafe"
                      className="group inline-flex flex-col items-center"
                    >
                      <span className="text-xl font-medium text-gray-900 mb-2 group-hover:[#718170] transition-colors">
                        StudyCafe
                      </span>
                      <span className="text-gray-600 mb-4 group-hover:[#718170] transition-colors">
                        Android Development, Mobile Design
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
