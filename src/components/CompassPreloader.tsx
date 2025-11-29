"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CompassPreloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3500); // Duration to allow full animation

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.8, delay: 0.2 } }}
                >
                    <div className="relative w-40 h-40 flex items-center justify-center">
                        {/* Compass Ring */}
                        <motion.div
                            className="absolute inset-0 border-4 border-gray-200 rounded-full"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            exit={{ scale: 0.8, opacity: 0, transition: { duration: 0.5 } }}
                        />

                        {/* Cardinal Directions */}
                        <motion.div
                            className="absolute inset-0 flex items-center justify-center font-bold text-gray-400 text-xs"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            exit={{ opacity: 0 }}
                        >
                            <span className="absolute top-2">N</span>
                            <span className="absolute bottom-2">S</span>
                            <span className="absolute right-3">E</span>
                            <span className="absolute left-3">W</span>
                        </motion.div>

                        {/* The Needle Container - Spins */}
                        <motion.div
                            className="w-full h-full flex items-center justify-center"
                            initial={{ rotate: 0 }}
                            animate={{ rotate: [0, 360, 720, 1080, 1440, 1440] }} // Spin multiple times then stop
                            transition={{
                                duration: 3,
                                ease: "easeInOut",
                                times: [0, 0.2, 0.4, 0.6, 0.8, 1], // Control pacing
                            }}
                        >
                            {/* The Needle Itself (SVG Line Style) */}
                            <motion.svg
                                width="100"
                                height="100"
                                viewBox="0 0 100 100"
                                className="w-full h-full"
                                exit={{
                                    y: -1000, // Fly North!
                                    transition: { duration: 0.8, ease: "easeIn" },
                                }}
                            >
                                {/* South Line (Gray) */}
                                <line x1="50" y1="50" x2="50" y2="85" stroke="#4b5563" strokeWidth="4" strokeLinecap="round" />

                                {/* North Line (Purple) */}
                                <line x1="50" y1="50" x2="50" y2="15" stroke="#931ee2" strokeWidth="4" strokeLinecap="round" />

                                {/* Arrow Head (Purple) */}
                                <path d="M40 25 L50 15 L60 25" stroke="#931ee2" strokeWidth="4" strokeLinecap="round" fill="none" />

                                {/* Center Pivot */}
                                <circle cx="50" cy="50" r="3" fill="white" stroke="#d1d5db" strokeWidth="2" />
                            </motion.svg>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
