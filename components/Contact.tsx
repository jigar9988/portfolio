"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

export default function Contact() {
    return (
        <footer id="contact" className="bg-slate-950 pt-20 pb-10 px-4 sm:px-6 lg:px-8 border-t border-slate-900">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Get In Touch</h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        I&apos;m currently open to new opportunities. Whether you have a question or just want to say hi,
                        feel free to reach out!
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col sm:flex-row justify-center gap-8 mb-16"
                >
                    <a
                        href="mailto:jigartrivedi503@gmail.com"
                        className="flex items-center justify-center gap-3 text-slate-300 hover:text-blue-400 transition-colors group"
                    >
                        <div className="p-3 bg-slate-900 rounded-full group-hover:bg-blue-500/10 transition-colors">
                            <Mail className="w-6 h-6" />
                        </div>
                        <span className="text-lg">jigartrivedi503@gmail.com</span>
                    </a>

                    <div className="flex items-center justify-center gap-3 text-slate-300">
                        <div className="p-3 bg-slate-900 rounded-full">
                            <MapPin className="w-6 h-6" />
                        </div>
                        <span className="text-lg">Ahmedabad</span>
                    </div>

                    <a
                        href="tel:+917285061265"
                        className="flex items-center justify-center gap-3 text-slate-300 hover:text-blue-400 transition-colors group"
                    >
                        <div className="p-3 bg-slate-900 rounded-full group-hover:bg-blue-500/10 transition-colors">
                            <span className="w-6 h-6 flex items-center justify-center font-bold">P</span>
                        </div>
                        <span className="text-lg">+91 7285061265</span>
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex justify-center gap-6 mb-12"
                >
                    <a
                        href="https://www.linkedin.com/in/jigar-trivedi-757972212/"
                        target="_blank"
                        className="p-4 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-blue-600 transition-all duration-300 hover:-translate-y-1"
                    >
                        <Linkedin className="w-6 h-6" />
                    </a>
                    <a
                        href="https://github.com/jigar9988"
                        target="_blank"
                        className="p-4 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-slate-700 transition-all duration-300 hover:-translate-y-1"
                    >
                        <Github className="w-6 h-6" />
                    </a>
                </motion.div>

                <div className="border-t border-slate-900 pt-8 text-slate-500 text-sm">
                    <p>© {new Date().getFullYear()} Jigar Trivedi. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
