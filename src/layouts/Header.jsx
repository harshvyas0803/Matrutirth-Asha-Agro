import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [animationDuration, setAnimationDuration] = useState(0.8);

  useEffect(() => {
    const updateDuration = () => {
      setAnimationDuration(window.innerWidth < 768 ? 0.6 : 0.8);
    };
    updateDuration();
    window.addEventListener("resize", updateDuration);
    return () => window.removeEventListener("resize", updateDuration);
  }, []);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: animationDuration, ease: "easeInOut" } },
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, x: "-100%", transition: { duration: 0.3 } },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: animationDuration,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="w-full">
      <motion.div
        className="flex h-20 items-center justify-between py-1 bg-amber-100 px-8 sm:px-5"
        initial="hidden"
        animate="visible"
        variants={menuVariants}
      >
        <Link to="/" className="text-white text-2xl">
          <motion.h1
            className="flex font-bold sm:text-5xl text-3xl"
            whileHover={{ scale: 1.1 }}
          >
            <motion.p
              className="text-amber-800"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: animationDuration, ease: "easeInOut" }}
            >
              Asha
            </motion.p>{" "}
            <motion.p
              className="text-amber-500"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: animationDuration, ease: "easeInOut" }}
            >
              Agro
            </motion.p>
          </motion.h1>
        </Link>

        <motion.div className="hidden md:flex space-x-20 mr-5">
          <motion.div
            whileHover={{ scale: 1.1, color: "#D97706" }}
            className="text-amber-950 sm:text-2xl sm:font-semibold cursor-pointer duration-300"
          >
            <Link to="/">Home</Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1, color: "#D97706" }}
            className="text-amber-950 sm:text-2xl sm:font-semibold cursor-pointer duration-300"
          >
            <Link to="/about-us">About</Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1, color: "#D97706" }}
            className="text-amber-950 sm:text-2xl sm:font-semibold cursor-pointer duration-300"
          >
            <Link to="/certificate">Certificate</Link>
          </motion.div>
        </motion.div>

        <motion.div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-amber-950 focus:outline-none"
          >
            {isOpen ? (
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                initial={{ rotate: 0 }}
                animate={{ rotate: 180 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </motion.svg>
            ) : (
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                initial={{ rotate: 0 }}
                animate={{ rotate: 180 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </motion.svg>
            )}
          </button>
        </motion.div>
      </motion.div>

      {isOpen && (
        <motion.div
          className="md:hidden flex flex-col space-y-4 p-5 bg-amber-100"
          variants={mobileMenuVariants}
          initial="closed"
          animate="open"
          exit="closed"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            whileHover={{ borderColor: "rgb(134, 85, 0)", scale: 1.05 }}
            className="border-b-2 border-amber-200 p-2 rounded-lg"
          >
            <Link
              to="/"
              className="text-amber-950 hover:text-amber-500 duration-300"
            >
              Home
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ borderColor: "rgb(245, 158, 11)", scale: 1.05 }}
            className="border-b-2 border-amber-200 p-2 rounded-lg"
          >
            <Link
              to="/about-us"
              className="text-amber-950 hover:text-amber-500 duration-300"
            >
              About Us
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ borderColor: "rgb(245, 158, 11)", scale: 1.05 }}
            className="border-b-2 border-amber-200 p-2 rounded-lg"
          >
            <Link
              to="/certificate"
              className="text-amber-950 hover:text-amber-500 duration-300"
            >
              Certificate
            </Link>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Header;
