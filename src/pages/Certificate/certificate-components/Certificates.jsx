import { motion } from "framer-motion";

const Certificates = () => {
  return (
    <div className="sm:ml-40 sm:mr-40 sm:mt-6 m-6">
      <div>
        <motion.h1
          className="text-center sm:text-3xl text-xl"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Udyam Registration Certificate
        </motion.h1>
        <motion.div
          className="overflow-hidden rounded-xl"
          initial={{ borderWidth: "2px", borderColor: "#000" }}
          whileInView={{ borderWidth: "4px", borderColor: "#f59e0b" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.img
            src="./assets/u3.jpg"
            alt="Udyam Registration"
            className="w-full sm:h-[600px] h-[300px] object-contain"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{ scale: 1.1 }} // Zoom in effect on hover
          />
        </motion.div>
        <motion.div
          className="overflow-hidden rounded-xl mt-4"
          initial={{ borderWidth: "2px", borderColor: "#000" }}
          whileInView={{ borderWidth: "4px", borderColor: "#f59e0b" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.img
            src="./assets/u2.jpg"
            alt="Udyam Registration"
            className="w-full sm:h-[600px] h-[300px] object-contain"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{ scale: 1.1 }} // Zoom in effect on hover
          />
        </motion.div>
      </div>

      <div>
        <motion.h1
          className="text-center sm:text-3xl text-xl p-7"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Incorporation Certificate
        </motion.h1>
        <motion.div
          className="overflow-hidden rounded-xl"
          initial={{ borderWidth: "2px", borderColor: "#000" }}
          whileInView={{ borderWidth: "4px", borderColor: "#f59e0b" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.img
            src="./assets/i2.jpg"
            alt="Incorporation"
            className="w-full sm:h-[600px] h-[300px] object-contain"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{ scale: 1.1 }} // Zoom in effect on hover
          />
        </motion.div>
      </div>

      <div>
        <motion.h1
          className="text-center sm:text-3xl text-xl p-7"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Importer Exporter Code
        </motion.h1>
        <motion.div
          className="overflow-hidden rounded-xl"
          initial={{ borderWidth: "2px", borderColor: "#000" }}
          whileInView={{ borderWidth: "4px", borderColor: "#f59e0b" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.img
            src="./assets/u4.jpg"
            alt="Importer Exporter"
            className="w-full sm:h-[600px] h-[300px] object-contain"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{ scale: 1.1 }} // Zoom in effect on hover
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Certificates;
