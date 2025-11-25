"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
    {
        id: 1,
        title: "Analytics Implementation",
        description: "Setup and configuration of GA4 and GA3 for diverse clients in BFSI, Publishers, and E-commerce. Implemented AB tests using Adobe Target, Google Optimize, and VWO.",
        tags: ["GA4", "GTM", "Adobe Target", "VWO"],
        image: "/images/project1.png", // Placeholder
        github: "#",
        demo: "#",
    },
    {
        id: 2,
        title: "Server-Side GTM & FB CAPI",
        description: "Implemented server-side GTM configurations and integrated Facebook Conversion API for multiple clients to enhance tracking accuracy and data control.",
        tags: ["Server-side GTM", "FB CAPI", "Data Tracking"],
        image: "/images/project2.png", // Placeholder
        github: "#",
        demo: "#",
    },
    {
        id: 3,
        title: "Real-Time Data Integration",
        description: "Developed custom GTM tag templates to stream GA hits to BigQuery in real-time, reducing reporting latency by 40%.",
        tags: ["GTM", "BigQuery", "JavaScript", "Data Engineering"],
        image: "/images/project3.png", // Placeholder
        github: "#",
        demo: "#",
    },
    {
        id: 4,
        title: "Online Exam Portal",
        description: "Built a full-stack online exam portal to streamline company exams and deliver candidate insights.",
        tags: ["Node.js", "React.js", "MongoDB"],
        image: "/images/project4.png", // Placeholder
        github: "#",
        demo: "#",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-slate-900 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 cursor-pointer"
                        >
                            <div className="relative h-48 w-full bg-slate-700 overflow-hidden">
                                {/* Placeholder for project image */}
                                <div className="absolute inset-0 flex items-center justify-center text-slate-500 bg-slate-800">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center cursor-pointer justify-center gap-4">
                                    {/* <a
                                        href={project.github}
                                        className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-sm transition-colors"
                                        title="View Code"
                                    >
                                        <Github className="w-6 h-6" />
                                    </a>
                                    <a
                                        href={project.demo}
                                        className="p-3 bg-blue-600/80 hover:bg-blue-600 rounded-full text-white backdrop-blur-sm transition-colors"
                                        title="View Demo"
                                    >
                                        <ExternalLink className="w-6 h-6" />
                                    </a> */}
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 text-xs font-medium text-blue-300 bg-blue-500/10 rounded-full border border-blue-500/20"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
