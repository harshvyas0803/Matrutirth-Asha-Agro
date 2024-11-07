import { motion } from "framer-motion";
import Card from "../../../components/Card";

const WhoWeServe = () => {
  // Define the animation variants for each row (section)
  const rowVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Card item variants for smooth animation on each card
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.2, // Stagger the cards within a row
      },
    },
  };

  const cardItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      {/* Title Section */}
      <motion.h1
        className="text-3xl font-bold text-center sm:mx-28 mx-10"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        Who We Serve
      </motion.h1>

      <motion.h1
        className="text-[28px] font-bold text-center text-gray-700 sm:mx-28 mx-10"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
      >
        We have something in store for all
      </motion.h1>

      <motion.h1
        className="sm:mx-28 mx-10 mt-6 text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        viewport={{ once: true }}
      >
        Farmers and FPOs
      </motion.h1>

      {/* Cards Section - Farmers and FPOs */}
      <motion.div
        className="grid sm:grid-cols-4 grid-cols-1 gap-4 sm:mx-28 mx-10 mt-6"
        variants={rowVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={cardVariants}>
          <motion.div variants={cardItemVariants}>
            <Card
              image="https://storage.googleapis.com/a2z-web/arya/whoweserve/img_6436cbc3d5688.webp"
              title="E-Auctions"
              description="Need to buy or sell stock immediately? Easily participate in e-auctions or create.."
            />
          </motion.div>
        </motion.div>

        <motion.div variants={cardVariants}>
          <motion.div variants={cardItemVariants}>
            <Card
              image="https://storage.googleapis.com/a2z-web/arya/whoweserve/img_6436cbc3975a1.webp"
              title="Loan Against Commodity"
              description="Our loan against commodity services is gaining popularity in the market .."
            />
          </motion.div>
        </motion.div>

        <motion.div variants={cardVariants}>
          <motion.div variants={cardItemVariants}>
            <Card
              image="https://storage.googleapis.com/a2z-web/arya/whoweserve/img_6436cbc378bfa.webp"
              title="Find Warehouses"
              description="Choose from a range of options, filters and features, a warehouse that fits your needs and size."
            />
          </motion.div>
        </motion.div>

        <motion.div variants={cardVariants}>
          <motion.div variants={cardItemVariants}>
            <Card
              image="https://storage.googleapis.com/a2z-web/arya/whoweserve/img_6436cbc34b51b.webp"
              title="Find Buyers and Sellers"
              description="With a network of 650,000 farmers from over 600 Farmer Producer Organisations (FPOs) and more than 10,000 o.."
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Processors Section */}
      <motion.h1
        className="sm:mx-28 mx-10 mt-6 text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        viewport={{ once: true }}
      >
        Processors
      </motion.h1>
      <motion.div
        className="grid sm:grid-cols-4 grid-cols-1 gap-4 sm:mx-28 mx-10 mt-6"
        variants={rowVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={cardVariants}>
          <motion.div variants={cardItemVariants}>
            <Card
              image="https://storage.googleapis.com/a2z-web/arya/whoweserve/img_6436cbc3d5688.webp"
              title="E-Auctions"
              description="Need to buy or sell stock immediately? Easily participate in e-auctions or create.."
            />
          </motion.div>
        </motion.div>

        <motion.div variants={cardVariants}>
          <motion.div variants={cardItemVariants}>
            <Card
              image="https://storage.googleapis.com/a2z-web/arya/whoweserve/img_6436cbc3975a1.webp"
              title="Loan Against Commodity"
              description="Our loan against commodity services is gaining popularity in the market .."
            />
          </motion.div>
        </motion.div>

        <motion.div variants={cardVariants}>
          <motion.div variants={cardItemVariants}>
            <Card
              image="https://storage.googleapis.com/a2z-web/arya/whoweserve/img_6436cbc378bfa.webp"
              title="Find Warehouses"
              description="Choose from a range of options, filters and features, a warehouse that fits your needs and size."
            />
          </motion.div>
        </motion.div>

        <motion.div variants={cardVariants}>
          <motion.div variants={cardItemVariants}>
            <Card
              image="https://storage.googleapis.com/a2z-web/arya/whoweserve/img_6436cbc34b51b.webp"
              title="Find Buyers and Sellers"
              description="With a network of 650,000 farmers from over 600 Farmer Producer Organisations (FPOs) and more than 10,000 o.."
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Corporate Section */}
      <motion.h1
        className="sm:mx-28 mx-10 mt-6 text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.6 }}
        viewport={{ once: true }}
      >
        Corporate
      </motion.h1>
      <motion.div
        className="grid sm:grid-cols-4 grid-cols-1 gap-4 sm:mx-28 mx-10 mt-6"
        variants={rowVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={cardVariants}>
          <motion.div variants={cardItemVariants}>
            <Card
              image="https://storage.googleapis.com/a2z-web/arya/whoweserve/img_6436cbc3d5688.webp"
              title="E-Auctions"
              description="Need to buy or sell stock immediately? Easily participate in e-auctions or create.."
            />
          </motion.div>
        </motion.div>

        <motion.div variants={cardVariants}>
          <motion.div variants={cardItemVariants}>
            <Card
              image="https://storage.googleapis.com/a2z-web/arya/whoweserve/img_6436cbc3975a1.webp"
              title="Loan Against Commodity"
              description="Our loan against commodity services is gaining popularity in the market .."
            />
          </motion.div>
        </motion.div>

        <motion.div variants={cardVariants}>
          <motion.div variants={cardItemVariants}>
            <Card
              image="https://storage.googleapis.com/a2z-web/arya/whoweserve/img_6436cbc378bfa.webp"
              title="Find Warehouses"
              description="Choose from a range of options, filters and features, a warehouse that fits your needs and size."
            />
          </motion.div>
        </motion.div>

        <motion.div variants={cardVariants}>
          <motion.div variants={cardItemVariants}>
            <Card
              image="https://storage.googleapis.com/a2z-web/arya/whoweserve/img_6436cbc34b51b.webp"
              title="Find Buyers and Sellers"
              description="With a network of 650,000 farmers from over 600 Farmer Producer Organisations (FPOs) and more than 10,000 o.."
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WhoWeServe;
