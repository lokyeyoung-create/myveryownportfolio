import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import WorkItem from "../components/WorkItem";
export default function Work() {
  const workExperiences = [
    {
      company: "State Street Corporation x Northeastern University",
      role: "Software Engineer, GEUDX Team",
      time: "January 2025 – Present",
      description: [
        "Engineered a centralized KPI Insights Portal used by 30+ stakeholders, reducing manual reporting time by 95%. ",
        "Built automated pipelines in Databricks to ingest and transform 2000+ rows of data daily from 15+ sources. ",
        "Created real-time data visualizations using over one million rows of data that supported C-level decision-making. ",
      ],
    },
    {
      company: "Generate Product Development Studio",
      role: "Software Designer",
      time: "August 2024 – Present",
      description: [
        "Led branding for 2+ client projects, delivering logos, brand systems, and cohesive visual assets used in digital platforms. ",
        "Created high-fidelity wireframes and prototypes in Figma to translate client requirements into intuitive designs. ",
        'Awarded "Most Valuable Player" (top 1 of 60+ members) for initiative and team leadership across client design sprint. ',
      ],
    },
    {
      company: "Michelin Tires",
      role: "AI Studio Fellow",
      time: "August 2024 – January 2025",
      description: [
        "Engineered a chatbot to enhance user experience by delivering responses based on over 368,000 rows of geo-referenced safety data. ",
        "Designed and fine-tuned an NLP pipeline to parse complex user queries, improving model response accuracy and performance across a large-scale dataset. ",
      ],
    },
    {
      company: "CodePath Web Development",
      role: "Teaching Assistant",
      time: "July 2024 – January 2025",
      description: [
        "Provided technical support for HTML, CSS, and Javascript for 20+ students during labs, assignments, and office hours. ",
        "Facilitated technical understanding and community-building across weekly cohort breakout rooms. ",
      ],
    },
    {
      company: "Break Through Tech AI",
      role: "Machine Learning and Artificial Intelligence Fellow",
      time: "April 2024 – April 2025",
      description: [
        "Selected from 3,000+ applicants for a 12-month program with MIT faculty, gaining expertise in deploying ML models. ",
        "Advanced algorithms and data-driven problem solving, while participating in career development events and networking. ",
      ],
    },
    {
      company: "Northeastern University",
      role: "Resident Assistant",
      time: "July 2024 – Present",
      description: [
        "Serve as community leader and resource for 1000+ residents, resolving issues and promoting student wellbeing. ",
        "Plan and organize monthly social and educational events to build community within the resident hall. ",
      ],
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-[#FFFFFF] fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
          <div className="w-full mx-auto">
            <Navbar />
          </div>
        </div>
        <motion.div
          className="text-center mt-20 mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-cormorant font-medium text-gray-900 mb-4">
            Professional Experience
          </h1>
          <p className="text-lg text-gray-600 font-figtree max-w-2xl mx-auto">
            A journey through my professional growth in software engineering,
            design, and technology
          </p>
        </motion.div>

        <div className="relative">
          {workExperiences.map((work, index) => (
            <WorkItem
              key={index}
              company={work.company}
              role={work.role}
              time={work.time}
              description={work.description}
              isLast={index === workExperiences.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
