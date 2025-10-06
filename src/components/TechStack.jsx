import { motion } from "framer-motion";
import { FaJava, FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub } from "react-icons/fa";
import {
  SiJavascript,
  SiCplusplus,
  SiC,
  SiSpringboot,
  SiThymeleaf,
  SiMysql,
  SiPostgresql,
  SiSwagger,
  SiVercel,
  SiTailwindcss,
} from "react-icons/si";

const techs = [
  { icon: <SiC color="#283593" />, name: "C", color: "#283593" },
  { icon: <SiCplusplus color="#00599C" />, name: "C++", color: "#00599C" },
  { icon: <SiJavascript color="#F7DF1E" />, name: "JavaScript", color: "#F7DF1E" },
  { icon: <FaHtml5 color="#E34F26" />, name: "HTML", color: "#E34F26" },
  { icon: <FaCss3Alt color="#1572B6" />, name: "CSS", color: "#1572B6" },
  { icon: <FaJava color="#E76F00" />, name: "Java", color: "#E76F00" },
  { icon: <FaReact color="#61DBFB" />, name: "React", color: "#61DBFB" },
  { icon: <SiSpringboot color="#6DB33F" />, name: "Spring Boot", color: "#6DB33F" },
  { icon: <SiThymeleaf color="#005F0F" />, name: "Thymeleaf", color: "#005F0F" },
  { icon: <SiMysql color="#4479A1" />, name: "MySQL", color: "#4479A1" },
  { icon: <SiPostgresql color="#336791" />, name: "PostgreSQL", color: "#336791" },
  { icon: <SiSwagger color="#85EA2D" />, name: "Swagger", color: "#85EA2D" },
  { icon: <FaGitAlt color="#F05032" />, name: "Git", color: "#F05032" },
  { icon: <FaGithub color="#181717" />, name: "GitHub", color: "#181717" },
  { icon: <SiVercel color="#000000" />, name: "Vercel", color: "#000000" },
  { icon: <SiTailwindcss color="#06B6D4" />, name: "Tailwind", color: "#06B6D4" },
];

const TechStack = () => {
  return (
    <section id="techstack" className="py-20 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
        >
          Tech Stack
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-center">
          {techs.map((tech, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              style={{ "--tw-shadow-color": tech.color }}
              className="group max-w-[150px] mx-auto p-6 bg-black/40 rounded-2xl shadow-md 
                         hover:shadow-[0_0_25px_var(--tw-shadow-color)] hover:scale-110 
                         transform transition duration-300"
            >
              <div className="text-4xl mb-3 flex justify-center">{tech.icon}</div>
              <p className="text-white">{tech.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
