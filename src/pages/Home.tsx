import Navbar from "../components/Navbar";
import profileImage from "../assets/images/Smile.jpeg";
import Snapper from "../assets/images/Snapper.png";
import Project from "../components/Project";
import Beathive from "../assets/images/Beathive.png";
import Kindred from "../assets/images/KindredCover.png";
import Vetted from "../assets/images/Vetted.png";
import Roadar from "../assets/images/Roadar.png";
import StudyCafe from "../assets/images/StudyCafeImages/CoverImage.png";

import DesignerText from "../assets/images/DESIGNER.svg";
import DeveloperText from "../assets/images/DEVELOPER.svg";
import DesignAndDevelopSubtext from "../assets/images/DescriptionText.svg";
import IntroText from "../assets/images/IntroText.svg";
import AndText from "../assets/images/&.svg";
import { motion } from "framer-motion";

export default function Home() {
  const projects: {
    id: number;
    image: string;
    tags: string[];
    name: string;
    description: string;
    company: string;
    year: string;
    alignRight?: boolean;
    detailUrl?: string;
  }[] = [
    {
      id: 1,
      image: Kindred,
      tags: [
        "React Native",
        "MongoDB",
        "UI/UX Design",
        "Adobe Illustrator",
        "Expo",
        "Go",
        "Figma"
      ],
      name: "Kindred",
      description:
        "Kindred is a socialized to-do list app designed to be  the first productivity-focused social media platform. It helps you  achieve your goals while staying connected with close friends.",
      company: "Kindred Todo",
      year: "2025",
    },
    {
      id: 2,
      image: Vetted,
      tags: ["Figma", "UI/UX Design", "Adobe Illustrator", "Graphic Design", "Prototyping"],
      name: "Vetted",
      description:
        "An app that connects pet parents with pet providers, for specialized care with credentialed veterinary professionals.",
      company: "Generate Product Development",
      year: "2025",
      alignRight: true,
    },
    {
      id: 3,
      image: StudyCafe,
      tags: ["Kotlin", "Python", "Unit Testing", "Figma"],
      name: "StudyCafe",
      description:
        "StudyCafe is an app that allows you to discover cafes near you with amenities that you need. Whether you need a cafe for studying, conversing, or relaxing, StudyCafe provides the information you need to make the perfect choice.",
      company: "Mobile App Development Class",
      year: "2025",
      alignRight: false,
    },
    {
      id: 4,
      image: Beathive,
      tags: ["React", "Tailwind", "Figma"],
      name: "Beathive",
      description:
        "A platform for musicians to create and attend jam sessions to make music and find friends.",
      company: "Khoury College of Computer Science",
      year: "2025",
    },
    {
      id: 5,
      image: Snapper,
      tags: ["Figma", "UI/UX Design", "Adobe Illustrator", "Graphic Design", "Prototyping"],
      name: "Snapper",
      description:
        "A gamified scuba diving social media app for scuba divers to connect with other users, tag fish, and post their dives.",
      company: "Generate Product Development",
      year: "2024",
      alignRight: true,
      detailUrl: "/snapper",
    },
    {
      id: 6,
      image: Roadar,
      tags: ["React Native", "MongoDB", "Figma"],
      name: "Roadar",
      description:
        "A crowdsourced roadside maintenance app to help mechanics and drivers connect when maintenance is needed on the spot.",
      company: "HackBeanpot",
      year: "2025",
    },
  ];

  return (
    <div className="flex w-full max-w-screen-2xl mx-auto px-4 sm:px-8 md:px-24 lg:px-40 xl:px-48 justify-center bg-white">
      <div className="w-full bg-white">
        <div 
          className="fixed w-full mx-auto top-0 left-0 right-0 z-50"
          style={{ 
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            backgroundColor: 'rgba(255, 255, 255, 0.8)'
          }}
        >
          <Navbar />
        </div>
        <div 
          className="py-8 sm:py-12 md:py-16 pt-16 sm:pt-20 mb-12 sm:mb-16 md:mb-24"
          style={{ borderBottom: '0.5px solid black' }}
        >
          <div>
            <div className="md:hidden">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-1/3 h-auto sm:w-2/5 sm:h-auto mx-auto p-3 pt-0 border-black shadow-lg mb-6 mt-4 sm:mt-0"
                  style={{ 
                    border: '0.5px solid black',
                    borderTop: '0',
                    borderBottomLeftRadius: '9999px',
                    borderBottomRightRadius: '9999px'
                  }}
                />
                <div className="flex flex-col items-center mb-4">
                  <img
                    src={IntroText}
                    alt="Hi, I'm Lok Ye"
                    className="w-4/5 mb-2"
                    style={{ maxWidth: '20rem' }}
                  />
                  <img
                    src={DesignerText}
                    alt="DESIGNER"
                    className="w-4/5"
                    style={{ maxWidth: '20rem' }}
                  />
                </div>
                <div className="my-6">
                  <img
                    src={AndText}
                    alt="&"
                    className="w-1/4 sm:w-1/3 mx-auto"
                  />
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src={DeveloperText}
                    alt="DEVELOPER"
                    className="w-4/5 mb-4"
                    style={{ maxWidth: '20rem' }}
                  />
                </div>
              </motion.div>
            </div>

            <div className="hidden md:block">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex flex-row justify-between">
                  <div className="pt-12 flex flex-col justify-self-end">
                    <img
                      src={IntroText}
                      alt="Hi, I'm Lok Ye"
                      className="w-3/5"
                    />
                    <img src={DesignerText} alt="DESIGNER" className="w-4/6" />
                  </div>
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-1/4 mt-4 p-3 pt-0 border-black shadow-lg"
                    style={{ 
                      border: '0.5px solid black',
                      borderTop: '0',
                      borderBottomLeftRadius: '9999px',
                      borderBottomRightRadius: '9999px'
                    }}
                  />
                </div>
              </motion.h2>

              <motion.h2
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex justify-center"
              >
                <img
                  src={AndText}
                  alt="&"
                  className="w-1/4 -mt-44 md:-mt-20 lg:-mt-32 mb-16 md:mb-20 lg:mb-8"
                />
              </motion.h2>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div 
                  className="flex flex-row items-end justify-between -mt-24"
                >
                  <img
                    src={DesignAndDevelopSubtext}
                    alt="Designing with Empathy, Developing with Purpose"
                    className="w-1/6"
                  />
                  <img
                    src={DeveloperText}
                    alt="DEVELOPER"
                    className="w-3/6"
                  />
                </div>
              </motion.h2>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-between">
          <h2 
            className="text-lg sm:text-xl font-light"
            style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
          >
            DEVELOPMENT
          </h2>
          <h2 
            className="text-lg sm:text-xl font-light"
            style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
          >
            DESIGN
          </h2>
        </div>
        
        <div className="w-full my-3 justify-center">
          {projects.map((project) => (
            <Project
              key={project.id}
              image={project.image}
              tags={project.tags}
              name={project.name}
              description={project.description}
              company={project.company}
              year={project.year}
              alignRight={project.alignRight}
            />
          ))}
        </div>
      </div>
    </div>
  );
}