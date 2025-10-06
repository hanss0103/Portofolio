import { motion } from "framer-motion";

const About = () => {
    return (
        <section
            id="about"
            className="py-20 from-blue-900 via-black to-purple-900 text-white"
        >
            <div className="max-w-5xl mx-auto px-6 text-center md:text-left">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent text-center"
                >
                    About Me
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
                >
                    I’m <span className="font-semibold text-cyan-500">Rayhan</span>, a Junior
                    Fullstack Developer passionate about building modern, scalable, and
                    interactive web applications.
                    <br />I have experience with{" "}
                    <span className="font-medium">C, C++, Java, JavaScript, React, Spring Boot, Thymeleaf</span> and
                    databases like <span className="font-medium">MySQL</span> &{" "}
                    <span className="font-medium">PostgreSQL</span>.
                    <br />Beyond coding, I enjoy problem-solving, UI/UX design, and
                    continuously improving my skills to craft impactful solutions 
                </motion.p>
            </div>
        </section>
    );
};

export default About;
