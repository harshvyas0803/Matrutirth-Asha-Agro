import { motion } from "framer-motion";

const MainAbout = () => {
  return (
    <>
      {/* Director Section */}
      <motion.h1
        className="sm:text-5xl text-2xl font-semibold py-4 text-center mt-4 text-amber-950"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Our Director
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-14 sm:mx-36 mx-10 sm:my-16 my-6">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img
            src="./assets/aa.png"
            alt="Director"
            className="w-full sm:h-[670px] rounded-xl"
          />
        </motion.div>

        <motion.div
          className="bg-amber-50 sm:p-8 p-4 text-center rounded-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1 className="sm:text-4xl text-2xl font-semibold py-6">
            Mohan Maghade
          </h1>
          <p className="sm:text-[20px] sm:leading-relaxed">
            Mohan Magade is the Director of Agro Asha, a leading company in the trade, finance, and storage sectors related to farming. With a profound understanding of the agricultural industry, Mohan has been at the forefront of innovating solutions that benefit farmers and agribusinesses alike. Under his leadership, Agro Asha has grown into a trusted partner for farmers across the region, providing essential services that streamline the process of getting farm products to market. His strategic initiatives in finance have empowered many small and medium-sized farms to access the capital they need to grow. Mohan's vision extends beyond just business; he is committed to enhancing the storage capabilities of Agro Asha, ensuring that farm produce remains fresh and marketable for longer periods. His dedication to the agricultural sector has positioned Agro Asha as a key player in driving growth and sustainability in farming.
          </p>
        </motion.div>
      </div>

      {/* Warehouse Section */}
      <motion.h1
        className="sm:text-5xl text-2xl font-semibold py-4 text-center mt-4 text-amber-950 sm:mx-36 mx-10 sm:my-16  my-6"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Some Photos Of Our Warehouse
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-14 sm:mx-36 mx-10 sm:my-16 my-6">
        <motion.img
          src="./assets/w1.jpg"
          alt="Warehouse"
          className="rounded-md"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <motion.img
          src="./assets/w3.jpg"
          alt="Warehouse"
          className="rounded-md"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <motion.img
          src="./assets/w4.jpg"
          alt="Warehouse"
          className="rounded-md"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <motion.img
          src="./assets/w5.jpg"
          alt="Warehouse"
          className="rounded-md"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </>
  );
};

export default MainAbout;
