import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Animated background gradient */}
            <div
                className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-30"
                style={{
                    transform: `translate(${mousePosition.x * 0.01}px, ${
                        mousePosition.y * 0.01
                    }px)`,
                }}
            />

            {/* Animated circles */}
            <motion.div
                className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 blur-3xl opacity-20"
                animate={{
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-fuchsia-500 to-pink-500 blur-3xl opacity-20"
                animate={{
                    x: [0, -80, 0],
                    y: [0, 100, 0],
                }}
                transition={{
                    duration: 18,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
            />

            <div className="container mx-auto px-4 z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-xl md:text-2xl font-light text-cyan-400 mb-4"
                    >
                        Hola, soy
                    </motion.h2>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mb-6"
                    >
                        Ismael Bernardino
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10"
                    >
                        Ingeniero en Sistemas Computacionales especializado en
                        desarrollo web frontend y backend
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        <a
                            href="#projects"
                            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 mr-4"
                        >
                            Ver Proyectos
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 border border-white/20 rounded-full text-white font-medium hover:bg-white/10 transition-all duration-300"
                        >
                            Contacto
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{
                        duration: 1.5,
                        repeat: Number.POSITIVE_INFINITY,
                    }}
                >
                    <ArrowDown className="w-6 h-6 text-white/70" />
                </motion.div>
            </motion.div>
        </section>
    );
}
