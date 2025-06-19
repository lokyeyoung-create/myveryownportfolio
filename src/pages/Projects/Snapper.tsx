import HeadingImage from "../../assets/images/SnapperImages/SnapperImage.png";
import Moodboard from "../../assets/images/SnapperImages/SnapperMoodboard.png";
import LogoDesigns from "../../assets/images/SnapperImages/snapper-brand-book/LogoDesigns.png";
import SnapperMainPrototype from "../../assets/images/SnapperImages/SnapperVideos/MainPrototype.mov";
import SnapperSearchPrototype from "../../assets/images/SnapperImages/SnapperVideos/SearchingPrototype.mov";
import PostingPrototype from "../../assets/images/SnapperImages/SnapperVideos/PostingPrototype.mov";
import ProfilePrototype from "../../assets/images/SnapperImages/SnapperVideos/ProfilePrototype.mov";
import LogoIteration from "../../assets/images/SnapperImages/components/logos/LogoIteration.png";
import Badges from "../../assets/images/SnapperImages/components/Badges.png";
import SnapperLogoIteration3 from "../../assets/images/SnapperImages/components/logos/SnapperLogoIteration3.png";
import SnapperLogoIteration4 from "../../assets/images/SnapperImages/components/SnapperLogoIteration4.png";
import SiteMap from "../../assets/images/SnapperImages/site-map.png";
import F1 from "../../assets/images/SnapperImages/F1UserFlow.png";
import F3 from "../../assets/images/SnapperImages/F3UserFlow.png";
import F5 from "../../assets/images/SnapperImages/F5UserFLow.png";
import lofis from "../../assets/images/SnapperImages/Lofis.svg";
import hifis from "../../assets/images/SnapperImages/Hifis1.svg";
import competitiveAnalysis from "../../assets/images/SnapperImages/Competitor Analysis - Features.png";

import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Snapper() {
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

        <div className="pt-20 w-full max-h-[60vh] overflow-hidden relative">
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
                    <p className="text-gray-900">
                      Generate Product Development Studio
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-[#626262] mb-2">
                      Timeline
                    </h3>
                    <p className="text-gray-900">September - January 2024</p>
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
                      Connie Lin (Design Lead), Angela Wu, Angola Babola, Rachel
                      Ma
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
                        {" "}
                        Adobe Illustrator
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
                  Creating a Scuba Diving Social Media Platform
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Snapper's purpose is to connect and educate Scuba Divers
                    through virtual dive logging, real time marine life
                    reporting and fish identification through a mobile app. It
                    is designed to be social, so you can see what your friends
                    and people in the area are seeing.
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
              <motion.div custom={0} variants={fadeIn} className="space-y-4">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">
                  Problem Statement
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Members of the scuba diving community are expected to be
                  diligent about logging their dives and, as marine life
                  enthusiasts, want to share their ocean experiences with
                  others. However, current reporting systems are inadequate.
                  Having communicated with diving organizations and divers,
                  there's high demand for a centralized platform to share diving
                  photos, ocean experiences, and marine life discoveries in one
                  place.
                </p>
              </motion.div>

              <motion.div custom={1} variants={fadeIn} className="space-y-4">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">
                  The Solution
                </h2>
                <p>
                  <li className="m-3">
                    A mobile app that allows scuba divers to identify, tag, and
                    post fish that they have seen on a dive.
                  </li>
                  <li className="m-3">
                    A clean, beautiful, and usable design that entices usesrs to
                    stay and participate in posting.
                  </li>
                  <li className="m-3">
                    A gamified interface to encourage users to track their dives{" "}
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
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
                    onMouseEnter={(e) => (e.target as HTMLVideoElement).play()}
                    onMouseLeave={(e) => {
                      const video = e.target as HTMLVideoElement;
                      video.pause();
                      video.currentTime = 0;
                    }}
                  >
                    <source src={SnapperMainPrototype} type="video/mp4" />
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
                  Main Post Feed
                </h3>
                <p className="text-gray-700">
                  When users first open the app, they see a post feed from scuba
                  dives near them. They're able to quickly filter by tags, and
                  can navigate between seeing feeds of those they are following
                  and those who are nearby.
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
                    onMouseEnter={(e) => (e.target as HTMLVideoElement).play()}
                    onMouseLeave={(e) => {
                      const video = e.target as HTMLVideoElement;
                      video.pause();
                      video.currentTime = 0;
                    }}
                  >
                    <source src={SnapperSearchPrototype} type="video/mp4" />
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
                  Users are able to search for locations - allowing them to see
                  posts and fish from the location of their choice. Not only
                  that, they are able to search by users, fish, and posts.
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
                    onMouseEnter={(e) => (e.target as HTMLVideoElement).play()}
                    onMouseLeave={(e) => {
                      const video = e.target as HTMLVideoElement;
                      video.pause();
                      video.currentTime = 0;
                    }}
                  >
                    <source src={PostingPrototype} type="video/mp4" />
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
                  Posting
                </h3>
                <p className="text-gray-700">
                  After a dive, scuba divers can post images of fish finds from
                  their dives, tagging relevant species. They can add
                  personalized captions as well as display their location.
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
                    onMouseEnter={(e) => (e.target as HTMLVideoElement).play()}
                    onMouseLeave={(e) => {
                      const video = e.target as HTMLVideoElement;
                      video.pause();
                      video.currentTime = 0;
                    }}
                  >
                    <source src={ProfilePrototype} type="video/mp4" />
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
                  User Profile
                </h3>
                <p className="text-gray-700">
                  A scuba diver's profile will show information on their recent
                  posts, as well as species that they have tagged. The gamified
                  nature of the app will allow users to earn badges as they
                  accomplish new highs in their dives.
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
                  The design system was created to showcase the UI with
                  educational, clean, and a beautiful components and branding.
                  It consists of an ocean themed color palette with strategic
                  red snapper colored accents.
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
                          src={SnapperLogoIteration4}
                          alt="Logo Iterations"
                          className="w-full h-auto rounded-lg"
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="p-8">
                        <img
                          src={SnapperLogoIteration3}
                          alt="Logo Iterations"
                          className="w-full h-auto rounded-lg"
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="p-8">
                        <img
                          src={LogoIteration}
                          alt="Logo Iterations"
                          className="w-full h-auto rounded-lg"
                        />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </section>
              <p className="text-gray-700 mb-12 mt-4 mx-auto text-left">
                The process of designing the Snapper logo required significant
                iteration and multiple feedback sessions. The first iterations
                were created before the colors of the app were decided, so I
                decided on lighter blues. Initially, I also tried to create more
                elegant looking logos - until I realized the app had a fun,
                youthful vibe to it. Then, I embraced rounded shapes and
                whimsical design. After establishing colors and getting feedback
                on the designs, I was able to focus in on the design of two fish
                forming the negative space of an S. For the wordmark, I also
                emphasized the contrast between the Snapper red and the primary
                blue, to highlight the scuba mask within the wordmark.
              </p>
              <section className="mb-8">
                <div className="bg-gray-50 p-12 rounded-xl">
                  <img
                    src={Badges}
                    alt="Snapper Badges"
                    className="w-full rounded-lg"
                  />
                </div>
              </section>
              <p className="text-gray-700 mb-8 mx-auto text-left">
                I designed these badges to add to the gamification aspect of the
                app. These badges were achieved in circumstances such as 100
                dives logged, or posting for the first time.
              </p>

              <div className="bg-gray-50 p-8 rounded-xl flex flex-row space-x-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Colors
                  </h3>
                  <div className="flex flex-wrap flex-col gap-2">
                    <div className="space-y-1">
                      <div className="w-20 h-12 bg-[#17394F] rounded-lg shadow"></div>
                      <p className="text-sm text-gray-700">#17394F</p>
                    </div>
                    <div className="space-y-1">
                      <div className="w-20 h-12 bg-[#204F6F] border border-gray-200 rounded-lg shadow"></div>
                      <p className="text-sm text-gray-700">#204F6F</p>
                    </div>
                    <div className="space-y-1">
                      <div className="w-20 h-12 bg-[#28638B] rounded-lg shadow"></div>
                      <p className="text-sm text-gray-700">#28638B</p>
                    </div>
                    <div className="space-y-1">
                      <div className="w-20 h-12 bg-[#3788BE] rounded-lg shadow"></div>
                      <p className="text-sm text-gray-700">#3788BE</p>
                    </div>
                    <div className="space-y-1">
                      <div className="w-20 h-12 bg-[#61A4D1] rounded-lg shadow"></div>
                      <p className="text-sm text-gray-700">#61A4D1</p>
                    </div>
                    <div className="space-y-1">
                      <div className="w-20 h-12 bg-[#F05B5B] rounded-lg shadow"></div>
                      <p className="text-sm text-gray-700">#F05B5B</p>
                    </div>
                  </div>
                </div>
                <div className="flex mt-2 flex-col">
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
                          className="w-3/4 h-auto rounded-lg"
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="p-8 flex justify-center items-center">
                        <img
                          src={F3}
                          alt="F3 and F4 User Flows"
                          className="w-3/4 h-auto rounded-lg"
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="p-8 flex justify-center items-center">
                        <img
                          src={F5}
                          alt="F5 User Flow"
                          className="w-3/5 h-auto rounded-lg"
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
              <div className="flex justify-center items-center ">
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
              <div className="flex justify-center items-center ">
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
              <div className="flex justify-center items-center ">
                <img
                  src={hifis}
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
                  href="/roadar"
                  className="group inline-flex flex-col items-center"
                >
                  <span className="text-xl font-medium text-gray-900 mb-2 group-hover:[#718170] transition-colors">
                    Roadar
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
