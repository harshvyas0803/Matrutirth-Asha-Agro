import { motion } from 'framer-motion';

const PulseText = ({ children, delay }) => {
  return (
    <motion.span
      className="inline-block"
      initial={{ scale: 1 }}
      animate={{
        scale: [1, 1.2, 1],  // Slight pulse for a refined effect
        transition: {
          duration: 1.5,  // Longer duration for smoother pulsing
          repeat: Infinity,
          repeatDelay: delay, // Creates cascading pulse effect
          ease: "easeInOut",  // Smooth transition
        },
      }}
    >
      {children}
    </motion.span>
  );
};

const Hero = () => {
  const phoneNumber = "+91 7397986147".split("");

  return (
    <div
      className="relative h-[550px] bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/55766/pexels-photo-55766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
        <motion.p
          className="sm:text-8xl text-6xl text-white font-bold text-center mx-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1.5, ease: "easeInOut" }}
        >
          India’s Largest Integrated Grain Commerce Platform
        </motion.p>

        <motion.p
          className="sm:text-2xl text-xl text-white font-bold mt-4 px-6 sm:px-1 text-center mx-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1.5, ease: "easeInOut" }}
        >
          Warehouse located at Jalna & Jafrabad
        </motion.p>

        <motion.a
          href="tel:+917397986147"
          className="bg-amber-100 py-2 sm:px-20 px-4 mt-4 rounded-lg sm:text-xl text-amber-950 mx-4 flex justify-center items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.8, ease: "easeInOut" }}
        >
          <div className="flex space-x-1">
            {/* Apply refined Pulse effect to the 'Call Us at +91' text */}
            {[' Call', ' Us', ' at', ' '].map((word, wordIndex) => (
              <div className="flex space-x-1" key={wordIndex}>
                {word.split('').map((char, index) => (
                  <PulseText key={index} delay={index * 0.15 + wordIndex * 0.3}>
                    {char}
                  </PulseText>
                ))}
              </div>
            ))}

            {/* Apply refined Pulse effect to the phone number */}
            {phoneNumber.map((char, index) => (
              <PulseText key={index} delay={index * 0.15 + 1}>
                {char}
              </PulseText>
            ))}
          </div>
        </motion.a>
      </div>
    </div>
  );
};

export default Hero;
