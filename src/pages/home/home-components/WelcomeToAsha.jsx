import React from "react";
import { motion } from "framer-motion";

const CountService = () => {
  return (
    <>
      <div className="count">
        <h1 className="text-3xl font-bold text-center">Welcome to Asha Agro</h1>
        <div className="farmers">
          <div className="flex flex-wrap justify-between gap-4 p-4 mt-4">

            {/* Card 1 */}
            <motion.div
              className="card bg-transparent text-center p-4 w-full sm:w-[45%] lg:w-[23%] transition-transform transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.05, boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)" }}
            >
              <motion.img
                src="/assets/registered_farmers.jpg"
                loading="lazy"
                alt="Registered Farmers"
                style={{ borderRadius: '6% 94% 61% 39% / 61% 71% 29% 39%' }}
                className="w-28 h-24 mx-auto"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="text-4xl font-bold my-3 text-yellow-500 mt-6" style={{ color: '#FFBF00' }}>5,000+</div>
              <h3 className="text-lg md:text-2xl font-bold text-gray-800">Registered Farmers</h3>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="card bg-transparent text-center p-4 w-full sm:w-[45%] lg:w-[23%] transition-transform transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              whileHover={{ scale: 1.05, boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)" }}
            >
              <motion.img
                src="/assets/land.jpg"
                loading="lazy"
                alt="Acres of Land Served"
                style={{ borderRadius: '6% 94% 61% 39% / 61% 71% 29% 39%' }}
                className="w-28 h-24 mx-auto"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="text-4xl font-bold my-2 text-yellow-500 mt-6" style={{ color: '#FFBF00' }}>15,000+</div>
              <h3 className="text-lg md:text-2xl font-bold text-gray-800">Acres of Land Served</h3>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              className="card bg-transparent text-center p-4 w-full sm:w-[45%] lg:w-[23%] transition-transform transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              whileHover={{ scale: 1.05, boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)" }}
            >
              <motion.img
                src="/assets/products_traded.jpg"
                loading="lazy"
                style={{ borderRadius: '6% 94% 61% 39% / 61% 71% 29% 39%' }}
                className="w-28 h-24 mx-auto"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="text-4xl font-bold my-2 text-yellow-500 mt-6" style={{ color: '#FFBF00' }}>50,000 tons</div>
              <h3 className="text-lg md:text-2xl font-bold text-gray-800">Products Traded Annually</h3>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              className="card bg-transparent text-center p-4 w-full sm:w-[45%] lg:w-[23%] transition-transform transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              whileHover={{ scale: 1.05, boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)" }}
            >
              <motion.img
                src="/assets/finance.jpg"
                loading="lazy"
                style={{ borderRadius: '6% 94% 61% 39% / 61% 71% 29% 39%' }}
                className="w-28 h-24 mx-auto"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="text-4xl font-bold my-2 text-yellow-500" style={{ color: '#FFBF00' }}>2,000+</div>
              <h3 className="text-lg md:text-2xl font-bold text-gray-800">Financing Transactions</h3>
            </motion.div>
          </div>

          {/* Second Row of Cards */}
          <div className="flex flex-wrap justify-between gap-4 p-4">

            {/* Card 5 */}
            <motion.div
              className="card bg-transparent text-center p-4 w-full sm:w-[45%] lg:w-[23%] transition-transform transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              whileHover={{ scale: 1.05, boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)" }}
            >
              <motion.img
                src="/assets/storage.jpg"
                loading="lazy"
                style={{ borderRadius: '6% 94% 61% 39% / 61% 71% 29% 39%' }}
                className="w-28 h-24 mx-auto"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="text-4xl font-bold my-2 text-yellow-500 mt-6" style={{ color: '#FFBF00' }}>10,000 tons</div>
              <h3 className="text-lg md:text-2xl font-bold text-gray-800">Storage Capacity</h3>
            </motion.div>

            {/* Card 6 */}
            <motion.div
              className="card bg-transparent text-center p-4 w-full sm:w-[45%] lg:w-[23%] transition-transform transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              whileHover={{ scale: 1.05, boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)" }}
            >
              <motion.img
                src="/assets/products.jpg"
                loading="lazy"
                style={{ borderRadius: '6% 94% 61% 39% / 61% 71% 29% 39%' }}
                className="w-28 h-24 mx-auto"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="text-4xl font-bold my-2 text-yellow-500 mt-6" style={{ color: '#FFBF00' }}>100+</div>
              <h3 className="text-lg md:text-2xl font-bold text-gray-800">Different Products Available</h3>
            </motion.div>

            {/* Card 7 */}
            <motion.div
              className="card bg-transparent text-center p-4 w-full sm:w-[45%] lg:w-[23%] transition-transform transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              whileHover={{ scale: 1.05, boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)" }}
            >
              <motion.img
                src="/assets/workshop.jpg"
                loading="lazy"
                style={{ borderRadius: '6% 94% 61% 39% / 61% 71% 29% 39%' }}
                className="w-28 h-24 mx-auto"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="text-4xl font-bold my-2 text-yellow-500 mt-6" style={{ color: '#FFBF00' }}>150+</div>
              <h3 className="text-lg md:text-2xl font-bold text-gray-800">Workshops Conducted</h3>
            </motion.div>

            {/* Card 8 */}
            <motion.div
              className="card bg-transparent text-center p-4 w-full sm:w-[45%] lg:w-[23%] transition-transform transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              whileHover={{ scale: 1.05, boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)" }}
            >
              <motion.img
                src="/assets/business.jpg"
                loading="lazy"
                style={{ borderRadius: '6% 94% 61% 39% / 61% 71% 29% 39%' }}
                className="w-28 h-24 mx-auto"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="text-4xl font-bold my-2 text-yellow-500 mt-6" style={{ color: '#FFBF00' }}>300+</div>
              <h3 className="text-lg md:text-2xl font-bold text-gray-800">Businesses Served</h3>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountService;

{/* <div
                                    style={{
                                        backgroundColor: 'transparent',
                                        margin: '10px',
                                        marginLeft : '20px',
                                        padding: '10px',
                                        textAlign: 'center',
                                        width: '40%', // Use 23% for larger screens
                                        transition: 'transform 0.3s, box-shadow 0.3s',
                                    }}
                                    className="card"
                                >
                                    <img
                                        src="/assets/registered_farmers.jpg"
                                        loading="lazy"
                                        alt="Registered Farmers"
                                        style={{
                                            width: '120px',
                                            height: '100px',
                                            borderRadius: '6% 94% 61% 39% / 61% 71% 29% 39%',
                                            margin: '0 auto', // Center the image
                                        }}
                                    />
                                    <div style={{ fontSize: '2em', fontWeight: 'bold', margin: '10px 0', color: '#FFBF00' }}>5,000+</div>
                                    <h3 style={{ fontSize: '1.5em', color: '#333', fontWeight: 'bold' }}>Registered Farmers</h3>
                                </div> */}
