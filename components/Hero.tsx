"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 -z-10" />

            {/* Decorative Circles */}
            <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

            <div className="max-w-7xl w-full flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-6 text-center lg:text-left"
                >
                    <h2 className="text-blue-400 font-medium text-xl tracking-wide">Hello, I&apos;m</h2>
                    <h1 className="text-5xl sm:text-7xl font-bold text-white tracking-tight">
                        Jigar Trivedi
                    </h1>
                    <h3 className="text-2xl sm:text-3xl text-slate-300 font-light">
                        Data Analyst & <span className="text-blue-400 font-semibold">Developer</span>
                    </h3>
                    <p className="text-slate-400 max-w-lg mx-auto lg:mx-0 text-lg leading-relaxed">
                        3.8+ years of experience in web analytics and front-end development.
                        Skilled in GA4, GTM, Adobe Analytics, and building scalable applications.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                        <a
                            href="#projects"
                            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors duration-300 shadow-lg shadow-blue-500/25 cursor-pointer"
                        >
                            View Work
                        </a>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            className="px-8 py-3 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white rounded-full font-medium transition-colors duration-300 cursor-pointer"
                        >
                            Download Resume
                        </a>
                    </div>
                </motion.div>

                {/* Image Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="relative pt-12 mx-auto lg:mx-0"
                >
                    <div className="relative  w-72 h-72 sm:w-96 sm:h-96">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full opacity-20 blur-2xl animate-pulse" />
                        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-slate-700/50 shadow-2xl">
                            <Image
                                src="/images/pic2.png?v=1"
                                alt="Jigar Trivedi"
                                fill
                                className="object-fill"
                                priority
                            />
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
            >
                <ArrowDown className="w-6 h-6" />
            </motion.div>
        </section>
    );
}
