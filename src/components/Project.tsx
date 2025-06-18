import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

interface ProjectProps {
  image: string;
  tags: string[];
  name: string;
  company: string;
  description: string;
  year: string;
  alignRight?: boolean;
  detailUrl?: string;
}

const Project: React.FC<ProjectProps> = ({
  image,
  name,
  description,
  tags,
  company,
  year,
  alignRight = false,
  detailUrl = "",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const navigate = useNavigate(); 

  const handleImageClick = () => {
    const url =
      detailUrl ||
      `/${encodeURIComponent(name.toLowerCase().replace(/\s+/g, "-"))}`;
    navigate(url);
  };

  return (
    <div
      ref={ref}
      className={`my-6 flex flex-col md:flex-row w-full ${
        alignRight ? "md:flex-row-reverse" : ""
      }`}
    >
      <motion.div
        className={`hover:scale-105 transition-transform ease-in-out duration-500 w-full md:w-2/5 ${
          alignRight ? "md:pl-4" : "md:pr-4"
        }`}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1.2 }}
      >
        <img
          src={image}
          onClick={handleImageClick}
          alt={name}
          className={`aspect-[5/3] rounded-lg my-10 shadow-md object-cover ${
            alignRight ? "ml-auto" : ""
          }`}
        />
      </motion.div>

      <div
        className={`my-14 w-full md:w-3/5 flex flex-col ${
          alignRight ? "text-right md:pr-4" : "text-left md:pl-4"
        }`}
      >
        <motion.h2
          className="font-cormorant text-3xl font-medium text-gray-900 mb-2"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.1 }}
        >
          {name}
        </motion.h2>

        <motion.p
          className="text-[#626262] font-light text-light italic font-figtree mb-2"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.15 }}
        >
          {company}
        </motion.p>

        <motion.p
          className="font-light text-[#626262]font-figtree mb-6 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {description}
        </motion.p>

        <motion.p
          className={`text-[#626262] pr-4 font-light text-sm mb-2 font-figtree ${
            alignRight ? "text-left" : "text-right"
          } mt-auto`}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.25 }}
        >
          {year}
        </motion.p>

        <motion.div
          className="border-t-[0.5px] border-black mb-4 w-full"
          initial={{ width: "0%" }}
          animate={isInView ? { width: "100%" } : {}}
          transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
        ></motion.div>

        <div
          className={`flex flex-wrap gap-2 ${
            alignRight ? "justify-end" : "justify-start"
          }`}
        >
          {tags.map((tag, index) => (
            <motion.span
              key={index}
              className="inline-block px-2.5 py-1 text-sm border-[0.5px] border-black font-figtree text-[#626262] rounded-full"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.35 + index * 0.05 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
