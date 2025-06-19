import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

interface WorkProps {
  company: string;
  role: string;
  time: string;
  description: string;
  isLast?: boolean;
}

const WorkItem: React.FC<WorkProps> = ({
  company,
  role,
  time,
  description,
  isLast = false,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const navigate = useNavigate();

  return (
    <div ref={ref} className="relative flex w-full">
      <div className="relative flex flex-col items-center mr-8">
        <motion.div
          className={`w-[0.5px] bg-black  ${
            isLast ? "h-8" : "h-full"
          } absolute top-0 left-1/2 transform -translate-x-1/2`}
          initial={{ height: 0 }}
          animate={isInView ? { height: isLast ? "2rem" : "100%" } : {}}
          transition={{ duration: 1.2, delay: 0.1 }}
        />

        <motion.div
          className="relative z-10 w-4 h-4 rounded-full border-[0.5px] bg-white border-black shadow-md mt-2"
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{
            duration: 0.6,
            delay: 0.3,
            type: "spring",
            stiffness: 200,
          }}
        >
          <motion.div
            className="absolute inset-1 rounded-full bg-black"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.5 }}
          />
        </motion.div>
      </div>

      <motion.div
        className="flex-1 mb-12 relative"
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 relative overflow-hidden">
          <motion.h2
            className="font-cormorant text-2xl font-medium text-gray-900 mb-1 pl-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {company}
          </motion.h2>
          <motion.p
            className="text-[#718170] font-medium text-lg font-figtree mb-2 pl-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {role}
          </motion.p>

          <motion.div
            className="inline-block px-2.5 py-1 ml-3.5 text-sm mb-3 border-[0.5px] border-black font-figtree text-[#626262] rounded-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {time}
          </motion.div>

          <motion.p
            className="text-gray-700 font-light text-base leading-relaxed font-figtree pl-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {description}
          </motion.p>

          <div className="absolute top-4 right-4 w-2 h-2 bg-blue-200 rounded-full opacity-30" />
          <div className="absolute bottom-4 right-6 w-1 h-1 bg-purple-200 rounded-full opacity-40" />
        </div>
      </motion.div>
    </div>
  );
};

export default WorkItem;
