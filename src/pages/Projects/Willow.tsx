import HeadingImage from "../../assets/images/WillowCRMImages/WillowBanner.png";
import MessagingDemo from "../../assets/images/WillowCRMImages/Messaging Demonstration.mov";
import PatientBooking from "../../assets/images/WillowCRMImages/Patient Booking Screen Recording.mov";
import DoctorAppointment from "../../assets/images/WillowCRMImages/Appointment Flow Doctor.mov";

import Navbar from "../../components/Navbar";
import DetailPageSkeleton from "../../components/DetailPageSkeleton";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Willow() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
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
              className="mt-20 w-full flex items-center max-h-[60vh] overflow-hidden relative bg-gray-200 animate-pulse"
              style={{ height: "400px" }}
            />
            <DetailPageSkeleton />
          </>
        ) : (
          <>
            <div className="mt-20 w-full flex items-center max-h-[60vh] overflow-hidden relative">
              <img
                src={HeadingImage}
                alt="Willow CRM Header"
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
                          Project Type
                        </h3>
                        <p className="text-gray-900">
                          Full-Stack Healthcare CRM
                        </p>
                      </div>
                      <div>
                        <h3 className="text-sm uppercase tracking-wider text-[#626262] mb-2">
                          Timeline
                        </h3>
                        <p className="text-gray-900">
                          October 2025 - November 2025
                        </p>
                      </div>
                      <div>
                        <h3 className="text-sm uppercase tracking-wider text-[#626262] mb-2">
                          Role
                        </h3>
                        <p className="text-gray-900">Full-Stack Developer</p>
                      </div>
                      <div>
                        <h3 className="text-sm uppercase tracking-wider text-[#626262] mb-2">
                          Team
                        </h3>
                        <p className="text-gray-900">
                          Keith Yao, Arav Goyal, Gayatri Kondabathini
                        </p>
                      </div>
                      <div>
                        <h3 className="text-sm uppercase tracking-wider text-[#626262] mb-2">
                          Tech Stack
                        </h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <span className="inline-block px-2.5 py-1 text-sm border-[0.5px] border-black font-figtree text-[#626262] rounded-full">
                            React
                          </span>
                          <span className="inline-block px-2.5 py-1 text-sm border-[0.5px] border-black font-figtree text-[#626262] rounded-full">
                            TypeScript
                          </span>
                          <span className="inline-block px-2.5 py-1 text-sm border-[0.5px] border-black font-figtree text-[#626262] rounded-full">
                            Node.js
                          </span>
                          <span className="inline-block px-2.5 py-1 text-sm border-[0.5px] border-black font-figtree text-[#626262] rounded-full">
                            Express
                          </span>
                          <span className="inline-block px-2.5 py-1 text-sm border-[0.5px] border-black font-figtree text-[#626262] rounded-full">
                            WebSocket
                          </span>
                          <span className="inline-block px-2.5 py-1 text-sm border-[0.5px] border-black font-figtree text-[#626262] rounded-full">
                            Redis
                          </span>
                          <span className="inline-block px-2.5 py-1 text-sm border-[0.5px] border-black font-figtree text-[#626262] rounded-full">
                            Tailwind CSS
                          </span>
                          <span className="inline-block px-2.5 py-1 text-sm border-[0.5px] border-black font-figtree text-[#626262] rounded-full">
                            Cypress
                          </span>
                          <span className="inline-block px-2.5 py-1 text-sm border-[0.5px] border-black font-figtree text-[#626262] rounded-full">
                            Jest
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
                      A HIPAA-Compliant Healthcare Management Platform
                    </h2>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        Willow CRM is a healthcare management platform designed
                        to streamline operations for patients, doctors, and
                        operations teams. The platform integrates appointment
                        scheduling, real-time messaging, patient records,
                        billing, and medication management into one secure,
                        HIPAA-compliant system. By centralizing these critical
                        healthcare functions, Willow CRM reduces administrative
                        overhead and improves care coordination.
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
                      Problem Statement
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      Healthcare clinics often rely on multiple disconnected
                      systems for managing patient data, messaging, and
                      appointment scheduling. These fragmented tools create
                      inefficiencies that increase administrative workload and
                      introduce risks for HIPAA compliance violations. Without a
                      unified platform, staff spend valuable time switching
                      between systems, while patients face delays and confusion
                      in accessing care. This disconnected approach negatively
                      impacts both the quality of patient care and overall
                      operational efficiency.
                    </p>
                  </motion.div>

                  <motion.div
                    custom={1}
                    variants={fadeIn}
                    className="space-y-4"
                  >
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900">
                      The Solution
                    </h2>
                    <div className="text-gray-700 leading-relaxed">
                      <p className="mb-3">
                        Willow CRM brings everything into one platform:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-[#626262] mr-2">•</span>
                          <span>
                            Real-time appointment scheduling and doctor
                            availability
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#626262] mr-2">•</span>
                          <span>
                            Live messaging between patients and providers
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#626262] mr-2">•</span>
                          <span>
                            Role-based access control for data security
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#626262] mr-2">•</span>
                          <span>
                            Integrated billing and medications tracking
                          </span>
                        </li>
                      </ul>
                    </div>
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
                    <div className="h-144 bg-gray-200 rounded-lg overflow-hidden mb-6 relative group">
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
                        <source src={MessagingDemo} type="video/mp4" />
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
                      Real-Time Messaging
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Secure, real-time messaging powered by WebSocket
                      technology enables instant communication between patients
                      and healthcare providers. The system supports encrypted
                      data transmission to ensure patient privacy, with
                      role-aware chat routing that connects users with the
                      appropriate medical staff. Messages are persisted in the
                      database for complete conversation history while
                      maintaining HIPAA compliance.
                    </p>
                  </motion.div>

                  <motion.div
                    className="flex flex-col"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="h-144 bg-gray-200 rounded-lg overflow-hidden mb-6 relative group">
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
                        <source src={PatientBooking} type="video/mp4" />
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
                      Patient Appointment Booking
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Patients can easily search for available appointment
                      slots, view doctor schedules in real-time, and book
                      appointments directly through the platform. The system
                      dynamically manages doctor availability to prevent
                      double-bookings and provides instant confirmation with
                      automated notifications. This streamlined booking process
                      reduces wait times and improves the overall patient
                      experience.
                    </p>
                  </motion.div>

                  <motion.div
                    className="flex flex-col"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="h-144 bg-gray-200 rounded-lg overflow-hidden mb-6 relative group">
                      <video
                        className="w-full h-full object-cover "
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
                        <source src={DoctorAppointment} type="video/mp4" />
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
                      Doctor Appointment Management
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Doctors can manage their schedules, view upcoming
                      appointments, access comprehensive patient details, and
                      prescribe medications all within a unified interface. The
                      integrated workflow supports seamless transitions from
                      appointment check-in through patient consultation and
                      medication management. All actions are automatically
                      logged to maintain compliance and create a complete audit
                      trail for patient care.
                    </p>
                  </motion.div>
                </div>
              </section>

              <section className="mb-24">
                <motion.h2
                  className="text-3xl font-semibold mb-12 text-center text-gray-900"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  Technical Architecture
                </motion.h2>

                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.div
                    custom={0}
                    variants={fadeIn}
                    className="space-y-3"
                  >
                    <h3 className="text-xl font-semibold text-gray-900">
                      Frontend
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Built with React and TypeScript for type safety, styled
                      with Tailwind CSS, and bundled with Vite. Cypress E2E
                      tests ensure reliable user flows.
                    </p>
                  </motion.div>

                  <motion.div
                    custom={1}
                    variants={fadeIn}
                    className="space-y-3"
                  >
                    <h3 className="text-xl font-semibold text-gray-900">
                      Backend
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Node.js with Express provides modular controllers and
                      routes. Jest handles unit and integration testing. Redis
                      manages caching and sessions.
                    </p>
                  </motion.div>

                  <motion.div
                    custom={2}
                    variants={fadeIn}
                    className="space-y-3"
                  >
                    <h3 className="text-xl font-semibold text-gray-900">
                      Real-Time Communication
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      WebSocket server enables real-time messaging and
                      notifications with persistent storage for message history.
                    </p>
                  </motion.div>

                  <motion.div
                    custom={3}
                    variants={fadeIn}
                    className="space-y-3"
                  >
                    <h3 className="text-xl font-semibold text-gray-900">
                      Testing Strategy
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Comprehensive coverage with Cypress E2E specs for all user
                      roles and Jest tests for business logic and API endpoints.
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
                  Features
                </motion.h2>

                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.div
                    custom={0}
                    variants={fadeIn}
                    className="p-6 border-[0.5px] border-black rounded-lg"
                  >
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">
                      Real-Time Communication
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      WebSocket-powered messaging and live updates for
                      availability and appointments keep everyone connected and
                      informed.
                    </p>
                  </motion.div>

                  <motion.div
                    custom={1}
                    variants={fadeIn}
                    className="p-6 border-[0.5px] border-black rounded-lg"
                  >
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">
                      Role-Based Access Control
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Authentication middleware ensures users only access data
                      appropriate to their role—patient, doctor, operations, or
                      finance.
                    </p>
                  </motion.div>

                  <motion.div
                    custom={2}
                    variants={fadeIn}
                    className="p-6 border-[0.5px] border-black rounded-lg"
                  >
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">
                      Encrypted Data & HIPAA Compliance
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Token-based authentication, Redis session isolation, and
                      audit logging ensure patient data privacy and HIPAA
                      compliance.
                    </p>
                  </motion.div>

                  <motion.div
                    custom={3}
                    variants={fadeIn}
                    className="p-6 border-[0.5px] border-black rounded-lg"
                  >
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">
                      Comprehensive Testing
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Built with Cypress E2E tests and Jest unit tests to ensure
                      reliability across all user flows and business logic.
                    </p>
                  </motion.div>
                </motion.div>
              </section>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
