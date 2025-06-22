import { motion } from "framer-motion";
import { Code, Palette, Globe, Award, Calendar, MapPin } from "lucide-react";

export default function About() {
    return (
        <section
            id="about"
            className="py-20 bg-black/50 relative overflow-hidden"
        >
            {/* Elementos decorativos de fondo */}
            <div className="absolute inset-0">
                <motion.div
                    className="absolute top-20 left-10 w-32 h-32 md:w-64 md:h-64 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-xl"
                    animate={{
                        x: [0, 100, 0],
                        y: [0, 80, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-20 right-10 w-32 h-32 md:w-64 md:h-64 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl"
                    animate={{
                        x: [0, -120, 0],
                        y: [0, 60, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Sobre Mí
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto"></div>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {/* Información principal */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-center mb-12"
                    >
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
                            <motion.div
                                initial={{ scale: 0.9 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="mb-8"
                            >
                                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center">
                                    <Code className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-4">
                                    Ingeniero en Sistemas Computacionales
                                </h3>
                            </motion.div>

                            <div className="space-y-6 text-gray-300 leading-relaxed">
                                <p className="text-lg">
                                    Soy un{" "}
                                    <span className="text-cyan-400 font-semibold">
                                        Ingeniero en Sistemas Computacionales
                                    </span>{" "}
                                    especializado en desarrollo web, con
                                    experiencia en proyectos de frontend y
                                    backend. Apasionado por la creación de
                                    aplicaciones funcionales y atractivas,
                                    utilizando tecnologías como{" "}
                                    <span className="text-purple-400 font-semibold">
                                        React, Node.js, PHP y MySQL
                                    </span>
                                    .
                                </p>
                                <p className="text-lg">
                                    Busco integrarme a un equipo dinámico donde
                                    pueda seguir aprendiendo y aportar mis
                                    conocimientos para resolver problemas
                                    reales, creando experiencias digitales que
                                    sean{" "}
                                    <span className="text-pink-400 font-semibold">
                                        funcionales, accesibles y optimizadas
                                    </span>
                                    .
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Áreas de especialización */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    >
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl backdrop-blur-sm group"
                        >
                            <div className="w-12 h-12 mb-4 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <Code className="w-6 h-6 text-white" />
                            </div>
                            <h4 className="text-lg font-semibold text-white mb-2">
                                Desarrollo Frontend
                            </h4>
                            <p className="text-gray-400 text-sm">
                                Creación de interfaces modernas y responsivas
                                con React, JavaScript y Tailwind CSS.
                            </p>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -10 }}
                            className="p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl backdrop-blur-sm group"
                        >
                            <div className="w-12 h-12 mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <Palette className="w-6 h-6 text-white" />
                            </div>
                            <h4 className="text-lg font-semibold text-white mb-2">
                                Desarrollo Backend
                            </h4>
                            <p className="text-gray-400 text-sm">
                                Implementación de APIs y sistemas robustos con
                                PHP, Node.js y bases de datos.
                            </p>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -10 }}
                            className="p-6 bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-xl backdrop-blur-sm group"
                        >
                            <div className="w-12 h-12 mb-4 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <Globe className="w-6 h-6 text-white" />
                            </div>
                            <h4 className="text-lg font-semibold text-white mb-2">
                                Soluciones Completas
                            </h4>
                            <p className="text-gray-400 text-sm">
                                Desarrollo full-stack desde la concepción hasta
                                la implementación final.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
