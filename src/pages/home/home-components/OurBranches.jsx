import React from "react";
import { motion } from "framer-motion";

const Branches = () => {
  return (
    <div className="branch">
      <h1 className="text-3xl font-bold text-center">Our Branches</h1>

      <div className="flex flex-col md:flex-row justify-center p-3 md:ml-10 mt-7 gap-12">
        {/* Sindkhed Raja Branch */}
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Initial state: hidden and slightly below
          whileInView={{ opacity: 1, y: 0 }} // Fade in and slide up to normal position
          transition={{ duration: 2, type: "spring", stiffness: 50 }} // Slower transition
          className="border border-gray-300 bg-amber-100 rounded-lg shadow-lg p-5 w-full md:w-[750px] text-center"
        >
          <img
            src="/assets/Branch1.jpeg"
            alt="Sindkhed Raja Branch"
            className="shadow-md w-full h-[300px] md:h-[600px] rounded-lg object-cover"
          />
          <h1 className="mt-6 text-2xl md:text-3xl font-bold">Sindkhed Raja</h1>
        </motion.div>

        {/* Jafrabad Branch */}
        <motion.div
          initial={{ opacity: 0, x: -50 }} // Initial state: hidden and to the left
          whileInView={{ opacity: 1, x: 0 }} // Fade in and slide in from the left
          transition={{ duration: 2, type: "spring", stiffness: 50 }} // Slower transition
          className="border border-gray-300 bg-amber-100 rounded-lg shadow-lg p-5 w-full md:w-[750px] text-center"
        >
          <img
            src="/assets/Branch2.jpeg"
            alt="Jafrabad Branch"
            className="shadow-md w-full h-[300px] md:h-[600px] rounded-lg object-cover"
          />
          <h1 className="mt-6 text-2xl md:text-3xl font-bold">Jafrabad</h1>
        </motion.div>

        {/* Sillod Branch */}
        <motion.div
          initial={{ opacity: 0, x: 50 }} // Initial state: hidden and to the right
          whileInView={{ opacity: 1, x: 0 }} // Fade in and slide in from the right
          transition={{ duration: 2, type: "spring", stiffness: 50 }} // Slower transition
          className="border border-gray-300 bg-amber-100 rounded-lg shadow-lg p-5 w-full md:w-[750px] text-center"
        >
          <img
            src="/assets/Branch3.jpeg"
            alt="Sillod Branch"
            className="shadow-md w-full h-[300px] md:h-[600px] rounded-lg object-cover"
          />
          <h1 className="mt-6 text-2xl md:text-3xl font-bold">Sillod</h1>
        </motion.div>
      </div>
    </div>
  );
};

export default Branches;
