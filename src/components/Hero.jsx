import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Hero = () => {
    return (
        <section
            id="hero"
            className="min-h-screen flex items-center justify-center text-center px-6 pt-24 sm:pt-28"
        >
            <div className="max-w-3xl flex flex-col items-center">
                {/* Foto Profil */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative w-44 h-44 mb-6"
                >
                    {/* Glow Background */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 blur-xl animate-pulse opacity-70"></div>

                    {/* Foto */}
                    <img
                        src="Profile.png" // ganti dengan fotomu
                        alt="Profile"
                        className="w-44 h-44 rounded-full object-cover border-4 border-white relative z-10 shadow-xl"
                    />
                </motion.div>

                {/* Nama */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                     className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent leading-tight"
                >
                    Hi, I’m <span className="decoration-cyan-400">Rayhan Andika Pradana</span>
                </motion.h1>

                {/* Deskripsi */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl"
                >
                    A passionate{" "}
                    <span className="text-cyan-400 font-semibold">
                        Full-Stack Developer
                    </span>{" "}
                    crafting interactive & modern web applications
                </motion.p>

                {/* Tombol */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-10 flex justify-center gap-4"
                >
                    <Link
                        to="techstack"
                        smooth={true}
                        duration={600}
                        offset={-50}
                        className="px-6 py-3 rounded-xl bg-cyan-500 text-white font-semibold shadow-lg hover:bg-cyan-600 transition cursor-pointer"
                    >
                        Explore Tech Stack
                    </Link>

                    <Link
                        to="projects"
                        smooth={true}
                        duration={600}
                        offset={-50}
                        className="px-6 py-3 rounded-xl border border-cyan-500 text-cyan-500 dark:text-cyan-400 font-semibold hover:bg-cyan-500 hover:text-white transition cursor-pointer"
                    >
                        View Projects
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
