"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [title, setTitle] = useState("");
  const fullText = "🚀 Coming Soon (sbrosenterpriseerp.com)";

  // Typing animation effect
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTitle(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 150);
    return () => clearInterval(interval);
  }, []);

  const floating = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 10, -10, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden text-white bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 animate-gradient">
      {/* Animated rotating background shapes */}
      <motion.div
        className="absolute w-72 h-72 bg-blue-400 rounded-full mix-blend-overlay filter blur-3xl opacity-40"
        animate={{
          x: [0, 200, -200, 0],
          y: [0, -150, 150, 0],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute w-80 h-80 bg-green-400 rounded-full mix-blend-overlay filter blur-3xl opacity-40"
        animate={{
          x: [100, -150, 200],
          y: [50, -100, 100],
          rotate: [0, -180, -360],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute w-60 h-60 bg-red-400 rounded-full mix-blend-overlay filter blur-3xl opacity-40"
        animate={{
          x: [-200, 150, -100],
          y: [-100, 100, -50],
          rotate: [0, 90, 270],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />

      {/* Content */}
      <div className="relative z-10 text-center p-6">
        <motion.h1
          className="text-6xl md:text-7xl font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-300 animate-pulse"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {title}
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-xl text-gray-100 max-w-lg mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          🌈 Get ready for a vibrant experience! We are launching something
          magical very soon.
        </motion.p>

        {/* Floating + Shimmering Button */}

<motion.div
  animate={{
    y: [0, -20, 0],
    rotate: [0, 10, -10, 0],
  }}
  transition={{
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="mt-10"
>
  <button className="relative px-8 py-3 text-lg font-semibold text-white rounded-full overflow-hidden shadow-lg">
    <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-yellow-400 to-purple-500 animate-gradient-x"></span>
    <span className="absolute inset-0 bg-white opacity-10 blur-sm"></span>
    <span className="relative z-10">✨ Notify Me ✨</span>
  </button>
</motion.div>


      </div>

      {/* Extra Tailwind animations */}
      <style jsx global>{`
        .animate-gradient {
          background-size: 400% 400%;
          animation: gradientShift 15s ease infinite;
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradientX 3s linear infinite;
        }
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        @keyframes gradientX {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }
      `}</style>
    </div>
  );
}
