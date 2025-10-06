import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300); // muncul kalau scroll > 300px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 
        flex items-center justify-center
        w-10 h-10 sm:w-12 sm:h-12 
        rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 
        text-white shadow-lg 
        hover:from-cyan-600 hover:to-purple-700 
        transition-all duration-300 
        animate-bounce-slow
        ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      aria-label="Back to Top"
    >
      <FaArrowUp className="text-lg sm:text-xl" />
    </button>
  );
};

export default BackToTop;
