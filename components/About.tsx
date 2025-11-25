"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-20 bg-slate-900 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-slate-300 text-lg leading-relaxed space-y-6 text-center sm:text-left"
                >
                    <p>
                        I am a Data Analyst and Developer with 3.8+ years of experience in web analytics and front-end development.
                        My expertise lies in tracking and optimization using tools like GA4, GTM, Adobe Analytics, Looker Studio, and Adobe Target.
                    </p>
                    <p>
                        I am adept at building scalable Angular applications and delivering actionable insights through data-driven reporting.
                        Whether it&apos;s implementing complex tracking solutions or developing user-friendly interfaces, I strive for excellence in every project.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
