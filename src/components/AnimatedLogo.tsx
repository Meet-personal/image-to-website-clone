"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AnimatedLogo() {
    return (
        <Link href="/" className="flex items-center" aria-label="ThinkNorth Services LLP">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
                className="relative"
            >
                <Image
                    src="/TN Logo-02.png"
                    alt="ThinkNorth Services LLP"
                    width={185}
                    height={45}
                    priority
                    className="h-10 w-auto"
                />
                <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    style={{ skewX: -20 }}
                />
            </motion.div>
        </Link>
    );
}
