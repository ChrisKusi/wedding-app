import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SplashScreen: React.FC = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 4000); // Show for 4 seconds
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="w-screen h-screen flex flex-col items-center justify-center bg-emerald-600"
      style={{
        background: "linear-gradient(to bottom right, #50C878, #CC5500)", // Emerald green to burnt orange
      }}
    >
      {/* Picture of Bride and Groom */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src="img\img1.jpg" // Replace with the actual image path
          alt="Louis & Magdalene"
          className="w-32 h-32 rounded-full object-cover shadow-md"
        />
      </motion.div>

      {/* Names with Animation */}
      <motion.h1
        className="text-4xl font-bold text-white mt-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        Louis & Magdalene
      </motion.h1>

      {/* Subheading */}
      <motion.p
        className="text-lg text-white mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        Welcome to our special day!
      </motion.p>
    </div>
  );
};

export default SplashScreen;
