"use client";

import { motion } from "framer-motion";
import { Home, User, Briefcase, Code, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import clsx from "clsx";

const navItems = [
    { name: "Home", href: "#", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Projects", href: "#projects", icon: Code },
    { name: "Contact", href: "#contact", icon: Mail },
];

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        document.querySelectorAll("section, footer").forEach((section) => {
            observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
            <motion.nav
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 bg-slate-900/80 backdrop-blur-lg border border-slate-800 rounded-full shadow-2xl shadow-black/50"
            >
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.href.replace("#", "");

                    return (
                        <a
                            key={item.name}
                            href={item.href}
                            className={clsx(
                                "relative p-3 rounded-full transition-colors duration-300 hover:text-blue-400",
                                isActive ? "text-blue-400" : "text-slate-400"
                            )}
                            title={item.name}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-blue-500/10 rounded-full"
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                            )}
                            <Icon className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" />
                        </a>
                    );
                })}
            </motion.nav>
        </div>
    );
}
