import { motion } from "framer-motion";
import {
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
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
  SiPostman,
  SiBootstrap,
  SiApachemaven,
} from "react-icons/si";

const techs = [
  { icon: <SiC color="#283593" />, name: "C", color: "#283593", desc: "Bahasa pemrograman general-purpose" },
  { icon: <SiCplusplus color="#00599C" />, name: "C++", color: "#00599C", desc: "Bahasa pemrograman berorientasi objek" },
  { icon: <SiJavascript color="#F7DF1E" />, name: "JavaScript", color: "#F7DF1E", desc: "Bahasa untuk interaktivitas web" },
  { icon: <FaHtml5 color="#E34F26" />, name: "HTML", color: "#E34F26", desc: "Bahasa markup untuk struktur web" },
  { icon: <FaCss3Alt color="#1572B6" />, name: "CSS", color: "#1572B6", desc: "Bahasa untuk tata letak dan gaya web" },
  { icon: <FaJava color="#E76F00" />, name: "Java", color: "#E76F00", desc: "Bahasa utama untuk backend development" },
  { icon: <FaReact color="#61DBFB" />, name: "React", color: "#61DBFB", desc: "Library JavaScript untuk antarmuka pengguna" },
  { icon: <SiSpringboot color="#6DB33F" />, name: "Spring Boot", color: "#6DB33F", desc: "Framework Java untuk backend" },
  { icon: <SiThymeleaf color="#005F0F" />, name: "Thymeleaf", color: "#005F0F", desc: "Template engine untuk Java" },
  { icon: <SiMysql color="#4479A1" />, name: "MySQL", color: "#4479A1", desc: "Sistem manajemen basis data relasional" },
  { icon: <SiPostgresql color="#336791" />, name: "PostgreSQL", color: "#336791", desc: "Database SQL tingkat lanjut" },
  { icon: <SiSwagger color="#85EA2D" />, name: "Swagger", color: "#85EA2D", desc: "Alat dokumentasi untuk REST API" },
  { icon: <SiPostman color="#FF6C37" />, name: "Postman", color: "#FF6C37", desc: "Alat untuk pengujian API" },
  { icon: <SiBootstrap color="#7952B3" />, name: "Bootstrap", color: "#7952B3", desc: "Framework CSS untuk UI responsif" },
  { icon: <SiApachemaven color="#C71A36" />, name: "Maven", color: "#C71A36", desc: "Build automation & dependency manager untuk Java" },
  { icon: <FaGitAlt color="#F05032" />, name: "Git", color: "#F05032", desc: "Sistem kontrol versi" },
  { icon: <FaGithub color="#181717" />, name: "GitHub", color: "#181717", desc: "Platform hosting kode dan kolaborasi" },
  { icon: <SiVercel color="#e5e5e5" />, name: "Vercel", color: "#e5e5e5", desc: "Platform untuk deployment frontend" },
  { icon: <SiTailwindcss color="#06B6D4" />, name: "Tailwind", color: "#06B6D4", desc: "Framework CSS berbasis utilitas" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.9, y: 10 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const TechStack = () => {
  return (
    <section id="techstack" className="py-20 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
        >
          Tech Stack
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 text-center"
        >
          {techs.map((tech, idx) => (
            <motion.div
              key={idx}
              variants={item}
              style={{ "--tw-shadow-color": tech.color }}
              className="group relative max-w-[120px] sm:max-w-[140px] md:max-w-[150px] mx-auto p-4 sm:p-6 bg-black/40 rounded-2xl shadow-md
                          hover:shadow-[0_0_25px_var(--tw-shadow-color)] hover:scale-110
                          transform transition duration-300"
            >
              <div className="text-3xl sm:text-4xl mb-3 flex justify-center">{tech.icon}</div>
              <p className="text-white">{tech.name}</p>

              {/* Tooltip */}
              <div className="absolute left-1/2 -translate-x-1/2 -top-3 -translate-y-full 
                              bg-black/80 text-gray-200 text-xs px-3 py-1 rounded-lg opacity-0 
                              group-hover:opacity-100 transition duration-300 whitespace-nowrap pointer-events-none shadow-md">
                {tech.desc}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
