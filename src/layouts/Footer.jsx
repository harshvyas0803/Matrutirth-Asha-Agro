import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{
        opacity: 0,
        scale: 0.5,
        filter: "blur(10px)",
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
      }}
      viewport={{ once: true, amount: 0.1 }}  // Triggers animation when 10% of the footer is in view
      transition={{
        duration: 1.5,
        ease: "easeInOut",
      }}
      className="bottom-0 w-full bg-gradient-to-r from-amber-950 to-amber-700 text-white flex justify-center items-center font-extralight sm:text-2xl text-base rounded-t-lg py-4"
    >
      <div className="px-6 text-center">
        <p className="text-lg font-semibold">
          &copy; 2024 | All rights reserved | Made by 5TechG
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
