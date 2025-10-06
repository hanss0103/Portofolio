import { motion } from "framer-motion";

const Footer = () => {
    return (
        <footer className="py-6 text-center">
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-gray-600 dark:text-gray-400"
            >
                © {new Date().getFullYear()} Portfolio Rayhan Andika Pradana
            </motion.p>
        </footer>
    );
};

export default Footer;
