import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const headerVariants = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const titleVariants = {
    initial: { opacity: 0, x: -30, scale: 0.9 },
    animate: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.7, delay: 0.2, ease: "easeOut" } },
};

const iconContainerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.4 } },
};

const iconVariants = {
    initial: { opacity: 0, scale: 0.5, y: 20, rotate: -10 },
    animate: { opacity: 1, scale: 1, y: 0, rotate: 0, transition: { duration: 0.6, ease: "backOut" } },
    hover: { scale: 1.25, rotate: [0, -5, 5, 0], y: -3, transition: { duration: 0.4, ease: "easeInOut" } },
    tap: { scale: 0.85, rotate: 15, transition: { duration: 0.1 } },
};

const floatingVariants = {
    animate: { y: [0, -8, 0], rotate: [0, 3, -3, 0], transition: { duration: 4, repeat: Infinity, ease: "easeInOut" } },
};

const floatingDelays = [0, 1.3, 2.6];

const socials = [
    {
        href: "https://www.linkedin.com/in/rayhan-andika-14a004342",
        icon: FaLinkedin,
        color: "text-blue-400",
        label: "Visit LinkedIn Profile",
    },
    {
        href: "https://github.com/hanss0103",
        icon: FaGithub,
        color: "text-slate-400",
        label: "Visit GitHub Profile",
    },
    {
        href: "https://www.instagram.com/hanssd_/",
        icon: FaInstagram,
        color: "text-red-400",
        label: "Visit Instagram Profile",
    },
];

const Header = () => {
    return (
        <motion.nav
            className="fixed top-0 z-20 w-full h-16 sm:h-20 flex items-center backdrop-blur-md bg-white/30 dark:bg-black/50 transition-colors duration-500"
            initial="initial"
            animate="animate"
            variants={headerVariants}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                <motion.h1
                    className="text-xl sm:text-2xl md:text-3xl bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text tracking-tight text-transparent font-bold"
                    variants={titleVariants}
                    initial="initial"
                    animate="animate"
                >
                    PORTFOLIO
                </motion.h1>

                <motion.div
                    className="flex items-center justify-center gap-4 sm:gap-6 text-xl sm:text-2xl"
                    variants={iconContainerVariants}
                    initial="initial"
                    animate="animate"
                >
                    {socials.map((social, index) => {
                        const Icon = social.icon;
                        return (
                            <motion.div
                                key={social.href}
                                variants={floatingVariants}
                                animate="animate"
                                transition={{ ...floatingVariants.animate.transition, delay: floatingDelays[index] }}
                            >
                                <motion.a
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variants={iconVariants}
                                    whileHover="hover"
                                    whileTap="tap"
                                    className={`${social.color} cursor-pointer block relative group`}
                                    aria-label={social.label}
                                    title={social.label}
                                >
                                    {/* Glow effect */}
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />
                                    <div className="relative z-10 group-hover:drop-shadow-[0_0_20px_currentColor] transition-all duration-300">
                                        <Icon />
                                    </div>
                                </motion.a>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </motion.nav>
    );
};

export default Header;
