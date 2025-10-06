import { motion } from "framer-motion";

const projects = [
    {
        title: "API-Loan-Management-Java",
        desc: "RESTful API untuk manajemen pinjaman menggunakan Spring Boot dan MySQL.",
        tech: ["Java", "Spring Boot", "MySQL"],
        link: "https://github.com/hanss0103/API-Loan-Manajemen-Java",
    },
    {
        title: "Projek-Tiket-Pesawat",
        desc: "Aplikasi pemesanan tiket pesawat berbasis web dengan berbagai fitur. Ini projek tim. Saya bertanggung jawab pada backend.",
        tech: ["Spring Boot", "Java", "MySQL"],
        link: "https://github.com/hanss0103/projek_tiket_pesawat",
    },
    {
        title: "HanNime",
        desc: "Aplikasi web untuk streaming anime dengan fitur lengkap seperti pencarian, filter, dan detail anime.",
        tech: ["HTML", "JS", "CSS"],
        link: "https://github.com/hanss0103/Hannime-Web",
    },
    {
        title: "Perpustakaan-Sederhana",
        desc: "Aplikasi perpustakaan sederhana untuk meminjam dan mengembalikan buku. Fitur admin untuk mengelola buku dan pengguna.",
        tech: ["Java", "HTML", "Thymeleaf", "Spring Boot", "MySQL"],
        link: "https://github.com/hanss0103/perpustakaan-sederhana",
    },
    {
        title: "SigMart",
        desc: "Aplikasi e-commerce sederhana dengan fitur katalog produk, keranjang belanja, dan checkout.",
        tech: ["React", "JS", "Tailwind", "Vercel"],
        link: "https://github.com/hanss0103/SigMart1.0",
    },
];

const Projects = () => {
    return (
        <section
            id="projects"
            className="py-20 from-blue-900 via-black to-purple-900 text-white"
        >
            <div className="max-w-6xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent"
                >
                    Projects
                </motion.h2>

                <div className="grid gap-8 md:grid-cols-2">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                            className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition p-6"
                        >
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                {project.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">{project.desc}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="px-3 py-1 text-sm rounded-full bg-cyan-100 dark:bg-cyan-700 text-cyan-700 dark:text-cyan-100"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-cyan-500 hover:underline text-sm"
                            >
                                View Project →
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
