import React from "react";
import { motion } from "framer-motion";

const Infrastructure = () => {
  return (
    <div className="info">
      {/* First Section */}
      <motion.div
        className="flex flex-wrap justify-center items-center p-5 bg-amber-50 shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Part 1: Image */}
        <motion.div
          className="flex-1 text-center p-2"
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <img
            src="/assets/infra.jpeg"
            alt="Agro Asha Infrastructure"
            className="shadow-lg w-full h-auto"
          />
        </motion.div>

        {/* Part 2: Information */}
        <motion.div
          className="bg-amber-50 p-5 lg:p-8 rounded-lg max-w-lg lg:max-w-5xl mx-auto my-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* Header with Animation */}
          <motion.h2
            className="text-3xl lg:text-4xl font-extrabold text-amber-600 mb-20"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Asha Agro Infrastructure
          </motion.h2>

          {/* First Paragraph */}
          <motion.p
            className="text-lg lg:text-xl text-gray-900 leading-relaxed mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className="font-bold text-blue-600">Agro Asha’s</span> infrastructure is the
            backbone of its mission to transform the agricultural landscape. With cutting-edge
            storage facilities, the company ensures that farm produce stays fresh longer, reducing
            spoilage and maximizing profits for farmers. Its trade network simplifies the supply
            chain, seamlessly connecting farmers to vast markets and ensuring efficient product
            distribution.
          </motion.p>

          {/* Second Paragraph */}
          <motion.p
            className="text-lg lg:text-xl text-gray-900 leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Beyond logistics, <span className="font-bold text-blue-600">Agro Asha’s</span> innovative
            financial services provide small and medium-sized farms with the capital they need to
            thrive, adopt modern technologies, and scale their operations. By embracing sustainable
            practices and modern tools, <span className="font-bold text-blue-600">Agro Asha</span> is
            not only driving growth but also fostering resilience in the farming sector. The
            company’s infrastructure acts as a catalyst for regional agricultural success, delivering
            vital services that empower farmers, boost productivity, and ensure long-term sustainability.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Second Section */}
      <motion.div
        className="flex flex-wrap justify-center items-center p-5 bg-amber-50 shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Part 2: Information */}
        <motion.div
          className="bg-amber-50 p-5 lg:p-8 rounded-lg max-w-lg lg:max-w-5xl mx-auto my-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* Header with Animation */}
          <motion.h2
            className="text-3xl lg:text-4xl font-extrabold text-amber-600 mb-20"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Asha Agro Stock
          </motion.h2>

          {/* First Paragraph */}
          <motion.p
            className="text-lg lg:text-xl text-gray-900 leading-relaxed mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className="font-bold text-blue-600">Asha Agro</span> Company operates within
            the agricultural sector, focusing on the production, distribution, and financial
            services for small and medium-sized farms. The company plays a crucial role in
            transforming the agricultural landscape by providing innovative solutions that enhance
            productivity and profitability for farmers. In the stock sector, <span className="font-bold text-blue-600">Asha Agro's</span>
            performance is influenced by various factors, including commodity prices, weather
            conditions, and government policies. Investors often view agricultural stocks as a hedge
            against inflation, given their resilience during economic downturns.
          </motion.p>

          {/* Second Paragraph */}
          <motion.p
            className="text-lg lg:text-xl text-gray-900 leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            As the sector increasingly shifts towards sustainable practices and technological
            advancements, companies like <span className="font-bold text-blue-600">Asha Agro</span> that
            adopt innovative approaches are likely to attract greater investor interest. The future
            of Asha Agro Company appears promising, with opportunities for growth driven by global
            market dynamics, population growth, and changing dietary preferences.
          </motion.p>
        </motion.div>

        {/* Part 1: Image */}
        <motion.div
          className="flex-1 text-center p-3"
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <img
            src="/assets/infra-2.jpeg"
            alt="Agro Asha Infrastructure"
            className="shadow-lg w-full h-auto"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Infrastructure;
