import Navbar from "../components/Navbar";
import profileImage from "../assets/images/ProfileImage.svg";
import Snapper from "../assets/images/Snapper.png";
import Project from "../components/Project";
import Beathive from "../assets/images/Beathive.png";
import Kindred from "../assets/images/KindredCover.png";
import Vetted from "../assets/images/Vetted.png";
import Roadar from "../assets/images/Roadar.png";
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
      tags: ["React Native", "MongoDB", "Typescript", "UI/UX Design", "Adobe Illustrator"],
      name: "Kindred",
      description:
        "Kindred is a socialized to-do list app designed to be  the first productivity-focused social media platform. It helps you  achieve your goals while staying connected with close friends.",
      company: "Kindred Todo",
      year: "2025",
    },
    {
      id: 2,
      image: Vetted,
      tags: ["Figma", "UI/UX Design", "Adobe Illustrator", "Graphic Design"],
      name: "Vetted",
      description:
        "An app that connects pet parents with pet providers, for specialized care with credentialed veterinary professionals.",
      company: "Generate Product Development",
      year: "2025",
      alignRight: true,
    },
    {
      id: 3,
      image: Beathive,
      tags: ["React", "Figma", "Supabase", "Kubernetes"],
      name: "Beathive",
      description:
        "A platform for musicians to create and attend jam sessions to make music and find friends.",
      company: "Khoury College of Computer Science",
      year: "2025",
    },
    {
      id: 4,
      image: Snapper,
      tags: ["Figma", "UI/UX Design", "Adobe Illustrator", "Graphic Design"],
      name: "Snapper",
      description:
        "A gamified scuba diving social media app for scuba divers to connect with other users, tag fish, and post their dives.",
      company: "Generate Product Development",
      year: "2024",
      alignRight: true,
      detailUrl: "/snapper" 
    },

    {
      id: 5,
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
    <div className=" flex w-full px-48  justify-center bg-[#FFFFFF]">
      <div className="w-full bg-[#FFFFFF]">
        <div className="fixed w-full mx-auto top-0 left-0 right-0 z-5 backdrop-blur-sm">
          <Navbar />
        </div>
        <div className="border-b-[0.5px] border-black py-16 pt-20 mb-24">
          <div>
            <div>
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
                    <img src={DesignerText} alt="DESIGNER" className="w-3/5" />
                  </div>
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-3/12 rounded-b-full shadow-lg"
                  />
                </div>
              </motion.h2>
              <motion.h2
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <img
                  src={AndText}
                  alt="&"
                  className="w-4/12 -mt-28 justify-self-center"
                />
              </motion.h2>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex flex-row items-end justify-between -mt-24">
                <img
                  src={DesignAndDevelopSubtext}
                  alt="Designing with Empathy, Developing with Purpose"
                  className="w-40"
                />
                <img
                  src={DeveloperText}
                  alt="DEVELOPER"
                  className="justify-self-end max-w-lg"
                />
              </div>
            </motion.h2>

            <div className="mt-8 text-center"></div>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <h2 className="text-xl font-light font-figtree">DEVELOPMENT</h2>
          <h2 className="text-xl font-light font-figtree">DESIGN</h2>
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
