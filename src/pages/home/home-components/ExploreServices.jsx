import { BadgeIndianRupee, ChartCandlestick, Container } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const ExploreServices = () => {
  return (
    <div>
      {/* Header with Pulse Animation */}
      <motion.h1
        className="text-3xl font-bold text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
      >
        Explore Our Services
      </motion.h1>

      <div className="grid sm:grid-cols-3 grid-cols-1 gap-4 sm:mx-28 mx-10 sm:my-16 my-6">
        {/* Trade Card */}
        <motion.div
          className="min-h-9 bg-amber-50 shadow-lg rounded-lg"
          initial={{ opacity: 0, y: 20, scale: 0.9, rotate: -3 }}
          whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          whileHover={{ scale: 1.05, y: -5 }}
        >
          <motion.div
            className="bg-amber-700 flex flex-row text-white text-2xl sm:text-3xl p-5 rounded-t-lg"
            whileHover={{ boxShadow: "0px 0px 8px rgba(255, 255, 255, 0.8)" }}
          >
            <motion.div
              whileHover={{ rotate: 15, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <ChartCandlestick />
            </motion.div>
            <p className="ml-3">Trade</p>
          </motion.div>
          <motion.div
            className="p-5 sm:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <ul>View & Post Trade Requirements</ul>
            <br /> <hr /> <br />
            <ul>Create & Participate in E-Auctions</ul>
          </motion.div>
        </motion.div>

        {/* Storage Card */}
        <motion.div
          className="min-h-9 bg-amber-50 shadow-lg rounded-lg"
          initial={{ opacity: 0, y: 20, scale: 0.9, rotate: -3 }}
          whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          whileHover={{ scale: 1.05, y: -5 }}
        >
          <motion.div
            className="bg-amber-700 flex flex-row text-white text-2xl sm:text-3xl p-5 rounded-t-lg"
            whileHover={{ boxShadow: "0px 0px 8px rgba(255, 255, 255, 0.8)" }}
          >
            <motion.div
              whileHover={{ rotate: 15, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Container />
            </motion.div>
            <p className="ml-3">Storage</p>
          </motion.div>
          <motion.div
            className="p-5 sm:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <ul>10K+ listings of Best Storage Locations</ul>
            <br /> <hr /> <br />
            <ul>Create arya.ag Certified E-Store</ul>
          </motion.div>
        </motion.div>

        {/* Finance Card */}
        <motion.div
          className="min-h-9 bg-amber-50 shadow-lg rounded-lg"
          initial={{ opacity: 0, y: 20, scale: 0.9, rotate: -3 }}
          whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          whileHover={{ scale: 1.05, y: -5 }}
        >
          <motion.div
            className="bg-amber-700 flex flex-row text-white text-2xl sm:text-3xl p-5 rounded-t-lg"
            whileHover={{ boxShadow: "0px 0px 8px rgba(255, 255, 255, 0.8)" }}
          >
            <motion.div
              whileHover={{ rotate: 15, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <BadgeIndianRupee />
            </motion.div>
            <p className="ml-3">Finance</p>
          </motion.div>
          <motion.div
            className="p-5 sm:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <ul>Get Loan against your Commodity</ul>
            <br /> <hr /> <br />
            <ul>Make Quick, Easy and Safe Payments</ul>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ExploreServices;
