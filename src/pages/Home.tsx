import Navbar from "../components/Navbar";
import profileImage from "../assets/images/profile.png";
import Snapper from "../assets/images/Snapper.png";
import Project from "../components/Project";
import Beathive from "../assets/images/Beathive.png";
import Roadar from "../assets/images/Roadar.png";

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
  }[] = [
    {
      id: 1,
      image: Snapper,
      tags: ["Figma", "UI/UX Design", "Adobe Illustrator", "Graphic Design"],
      name: "Snapper",
      description:
        "A gamified scuba diving social media app for scuba divers to connect with other users and post their dives.",
      company: "Generate Product Development",
      year: "2024",
    },
    {
      id: 2,
      image: Beathive,
      tags: ["React", "Figma", "Tailwind", "Kubernetes"],
      name: "Beathive",
      description:
        "Designed and coded a platform for musicians to create and attend jam sessions to make music and find friends.",
      company: "Khoury College of Computer Science",
      year: "2024",
      alignRight: true,
    },
    {
      id: 3,
      image: Roadar,
      tags: ["React Native", "MongoDB", "Figma"],
      name: "Roadar",
      description:
        "AA crowdsourced roadside maintenance app to help mechanics and drivers connect when maintenance is needed on the spot",
      company: "HackBeanpot",
      year: "2025",
    },
  ];

  return (
    <div className="flex w-full justify-center">
      <div className="w-3/5">
        <div className="fixed w-3/5 mx-auto top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
          <Navbar />
        </div>
        <div className="pt-24 border-b border-gray-300 shadow-bottom">
          <div className="pt-10 flex w-full justify-center">
            <img
              src={profileImage}
              alt="Profile"
              className="w-1/4 rounded-full p-2 border-2 border-gray-300 shadow-md"
            />
          </div>

          <div className="mt-8 text-center">
            <h1 className="text-4xl italic font-cormorant">Hi, I'm Lok Ye.</h1>
            <p className="mt-3 font-figtree mb-10">
              Your favorite designer and developer.
            </p>
          </div>
        </div>
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
  );
}
