"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
    {
        id: 1,
        role: "Web Analyst",
        company: "Saras Analytics",
        period: "Sept 2024 - Present",
        description: "Leveraged strong expertise in JavaScript, Angular, GA4, Adobe Target, and GTM to build data-driven tracking and reporting solutions. Designed Looker Studio dashboards and worked on Shopify Analytics.",
    },
    {
        id: 2,
        role: "Sr Technical Analyst",
        company: "Tatvic Pvt Ltd",
        period: "May 2023 - Aug 2024",
        description: "Built an online exam portal using Node.js, React.js, and MongoDB. Worked on CRO tools like Google Optimize, Adobe Target, VWO, and Convert for experimentation.",
    },
    {
        id: 3,
        role: "Technical Analyst",
        company: "Tatvic Pvt Ltd",
        period: "Jan 2022 - Apr 2023",
        description: "Provided analytics solutions for websites and applications using JavaScript, Node.js, GA, GTM, and Adobe Target. Automated tasks using Google Apps Script.",
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-20 bg-slate-800 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Experience</h2>
                    <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
                </motion.div>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="flex flex-col md:flex-row gap-4 md:gap-8 items-start"
                        >
                            <div className="hidden md:flex flex-col items-center mt-1">
                                <div className="w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_0_4px_rgba(59,130,246,0.2)]" />
                                {index !== experiences.length - 1 && (
                                    <div className="w-0.5 h-full bg-slate-700 mt-4 min-h-[100px]" />
                                )}
                            </div>

                            <div className="flex-1 bg-slate-900 p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors duration-300">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                        <Briefcase className="w-5 h-5 text-blue-400" />
                                        {exp.role}
                                    </h3>
                                    <span className="text-slate-400 text-sm flex items-center gap-2 bg-slate-800 px-3 py-1 rounded-full w-fit">
                                        <Calendar className="w-4 h-4" />
                                        {exp.period}
                                    </span>
                                </div>
                                <h4 className="text-lg text-blue-400 mb-3">{exp.company}</h4>
                                <p className="text-slate-300 leading-relaxed">
                                    {exp.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
