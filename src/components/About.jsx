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
                    Tentang Saya
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify"
                >
                    Saya <span className="font-semibold text-cyan-500">Rayhan</span>, 
                    seorang <span className="font-medium">Junior Web Developer</span> 
                    yang bersemangat dalam membangun aplikasi web yang modern, interaktif, 
                    dan dapat dikembangkan secara berkelanjutan.
                    <br />
                    Saya memiliki pengalaman menggunakan{" "}
                    <span className="font-medium">
                        C, C++, Java, JavaScript, React, Spring Boot, dan Thymeleaf
                    </span>, 
                    serta basis data seperti{" "}
                    <span className="font-medium">MySQL</span> dan{" "}
                    <span className="font-medium">PostgreSQL</span>.
                    <br />
                    Selain ngoding, saya juga tertarik pada{" "}
                    <span className="font-medium">pemecahan masalah</span>, 
                    dan selalu berusaha meningkatkan kemampuan untuk menciptakan solusi yang berdampak positif
                </motion.p>
            </div>
        </section>
    );
};

export default About;
