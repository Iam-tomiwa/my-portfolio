"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = [
  "Hello", // English
  "Bonjour", // French
  "Hola", // Spanish
  "Ciao", // Italian
  "Nǐ Hǎo", // Chinese
  "Kedu", // Igbo (Nigerian)
  "Ẹ n lẹ", // Yoruba (Nigerian)
  "100%",
];

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [index, setIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (index === words.length - 1) {
      // Hold the 100% word for a brief moment, then slide up
      const timeout = setTimeout(() => {
        setIsFinished(true);
        // Wait for the slide-up animation to complete before removing from DOM
        setTimeout(onComplete, 1200);
      }, 1000);
      return () => clearTimeout(timeout);
    }

    // New slowed-down logic:
    const intervalTime = index < words.length - 4 ? 600 : 900;
    const timeout = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, intervalTime);

    return () => clearTimeout(timeout);
  }, [index, onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505]"
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: {
              duration: 1.2,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
        >
          {/* Subtle moving grid background in preloader */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

          <div className="relative flex flex-col items-center">
            {/* Greeting Words Container */}
            <div className="h-[80px] flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={index}
                  className="text-4xl sm:text-6xl font-bold tracking-tight text-white font-sans"
                  initial={{ y: 80, opacity: 0 }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.35,
                      ease: [0.215, 0.61, 0.355, 1],
                    },
                  }}
                  exit={{
                    y: -80,
                    opacity: 0,
                    transition: {
                      duration: 0.25,
                      ease: [0.215, 0.61, 0.355, 1],
                    },
                  }}
                >
                  {/* Neon Dot indicator */}
                  <span className="relative">
                    {words[index]}
                    {index >= words.length - 4 && (
                      <span className="absolute -right-3 bottom-1 sm:bottom-2 h-2 w-2 rounded-full bg-accent animate-pulse" />
                    )}
                  </span>
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Glowing Accent Ring Behind Text */}
            <div className="absolute -z-10 w-[200px] h-[200px] rounded-full bg-accent/5 blur-[60px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>

          {/* Simple progress bar indicator at bottom */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-slate-900 overflow-hidden">
            <motion.div
              className="h-full bg-accent"
              initial={{ width: "0%" }}
              animate={{
                width: `${((index + 1) / words.length) * 100}%`,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
