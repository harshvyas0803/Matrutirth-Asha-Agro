import { motion } from "framer-motion";
import Card from "../../../components/Card";

const WhoWeServe = () => {
  // Animation variants for each section row
  const rowVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Animation variants for each card
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  const cardItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
      {/* Main Title Section */}
      <motion.h1
        className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mt-2 sm:mt-4 mb-2"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        Who We Serve
      </motion.h1>

      <motion.h2
        className="text-lg sm:text-xl md:text-2xl lg:text-[28px] font-bold text-center text-gray-700 mt-1 sm:mt-2 mb-6"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
      >
        We have something in store for all
      </motion.h2>

      {/* Farmers and FPOs Section */}
      <motion.h3
        className="text-xl sm:text-2xl font-semibold mt-16 sm:mt-18 lg:mt-20 mb-4 bg-gradient-to-r from-amber-600 to-amber-800 text-transparent bg-clip-text"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        viewport={{ once: true }}
      >
        Farmers and FPOs
      </motion.h3>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-8 md:mb-10 lg:mb-12"
        variants={rowVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {["E-Auctions", "Loan On Commodity", "Find Warehouses", "Find Buyers-Sellers"].map((title, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="h-[240px] sm:h-[260px] md:h-[280px] lg:h-[300px]"
          >
            <motion.div variants={cardItemVariants}>
              <Card
                image={`https://storage.googleapis.com/a2z-web/arya/whoweserve/img_6436cbc${["3d5688", "3975a1", "378bfa", "34b51b"][index]}.webp`}
                title={title}
                description="Access auction services and loans for your commodities. Find the best warehousing solutions and connect with buyers and sellers."
                className="text-sm md:text-base lg:text-lg"
              />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Processors Section */}
      <motion.h3
        className="text-xl sm:text-2xl font-semibold mt-16 sm:mt-18 lg:mt-20 mb-4 bg-gradient-to-r from-amber-600 to-amber-800 text-transparent bg-clip-text"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        viewport={{ once: true }}
      >
        Processors
      </motion.h3>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-8 md:mb-10 lg:mb-12"
        variants={rowVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {["Processing Support", "Equipment Loans", "Warehouse Solutions", "Bulk Buyers"].map((title, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="h-[240px] sm:h-[260px] md:h-[280px] lg:h-[300px]"
          >
            <motion.div variants={cardItemVariants}>
              <Card
                image={`https://storage.googleapis.com/a2z-web/arya/whoweserve/img_6436cbc${["3d5688", "3975a1", "378bfa", "34b51b"][index]}.webp`}
                title={title}
                description="Leverage support for processing, access equipment loans, find warehouses, and connect with bulk buyers."
                className="text-sm md:text-base lg:text-lg"
              />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Corporate Section */}
      <motion.h3
        className="text-xl sm:text-2xl font-semibold mt-16 sm:mt-18 lg:mt-20 mb-4 bg-gradient-to-r from-amber-600 to-amber-800 text-transparent bg-clip-text"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.6 }}
        viewport={{ once: true }}
      >
        Corporate
      </motion.h3>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-8 md:mb-10 lg:mb-12"
        variants={rowVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {["Corporate Solutions", "Commodities Trading", "Supply Chain", "Strategic Partnerships"].map((title, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="h-[240px] sm:h-[260px] md:h-[280px] lg:h-[300px]"
          >
            <motion.div variants={cardItemVariants}>
              <Card
                image={`https://storage.googleapis.com/a2z-web/arya/whoweserve/img_6436cbc${["3d5688", "3975a1", "378bfa", "34b51b"][index]}.webp`}
                title={title}
                description="Access corporate solutions, participate in commodities trading, streamline supply chains, and form strategic partnerships."
                className="text-sm md:text-base lg:text-lg"
              />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default WhoWeServe;
