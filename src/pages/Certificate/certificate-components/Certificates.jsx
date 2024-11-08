import React from "react";
import { motion } from "framer-motion";
import "./Certificates.css";

const Certificates = () => {
  return (
    <div className="container">
      <div className="certificate-section">
        <motion.h1
          className="title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Udyam Registration Certificate
        </motion.h1>
        <motion.div
          className="certificate-card"
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img src="./assets/u3.jpg" alt="Udyam Registration" className="certificate-image" />
        </motion.div>
        <motion.div
          className="certificate-card"
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img src="./assets/u2.jpg" alt="Udyam Registration" className="certificate-image" />
        </motion.div>
      </div>

      <div className="certificate-section">
        <motion.h1
          className="title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Incorporation Certificate
        </motion.h1>
        <motion.div
          className="certificate-card"
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img src="./assets/i2.jpg" alt="Incorporation" className="certificate-image" />
        </motion.div>
      </div>

      <div className="certificate-section">
        <motion.h1
          className="title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Importer Exporter Code
        </motion.h1>
        <motion.div
          className="certificate-card"
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img src="./assets/u4.jpg" alt="Importer Exporter" className="certificate-image" />
        </motion.div>
      </div>
    </div>
  );
};

export default Certificates;
