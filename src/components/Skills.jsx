import { motion } from "framer-motion";
import {
    Code,
    Database,
    Globe,
    Palette,
    Server,
    GitBranch,
} from "lucide-react";

const technicalSkills = [
    {
        name: "HTML5",
        icon: "🌐",
        category: "Frontend",
        color: "from-orange-500 to-red-500",
    },
    {
        name: "CSS3",
        icon: "🎨",
        category: "Frontend",
        color: "from-blue-500 to-cyan-500",
    },
    {
        name: "JavaScript",
        icon: "⚡",
        category: "Frontend",
        color: "from-yellow-400 to-yellow-600",
    },
    {
        name: "React JS",
        icon: "⚛️",
        category: "Frontend",
        color: "from-cyan-400 to-blue-500",
    },
    {
        name: "Tailwind CSS",
        icon: "💨",
        category: "Frontend",
        color: "from-cyan-500 to-blue-600",
    },
    {
        name: "PHP",
        icon: "🐘",
        category: "Backend",
        color: "from-purple-500 to-indigo-600",
    },
    {
        name: "Node.js",
        icon: "🟢",
        category: "Backend",
        color: "from-green-500 to-green-700",
    },
    {
        name: "MySQL",
        icon: "🗄️",
        category: "Database",
        color: "from-blue-600 to-blue-800",
    },
    {
        name: "MongoDB",
        icon: "🍃",
        category: "Database",
        color: "from-green-600 to-green-800",
    },
    {
        name: "Firebase",
        icon: "🔥",
        category: "Database",
        color: "from-orange-500 to-yellow-500",
    },
    {
        name: "Git",
        icon: "📝",
        category: "Tools",
        color: "from-orange-600 to-red-600",
    },
    {
        name: "GitHub",
        icon: "🐙",
        category: "Tools",
        color: "from-gray-600 to-gray-800",
    },
];

const softSkills = [
    {
        name: "Trabajo en equipo",
        icon: "🤝",
        color: "from-blue-500 to-purple-500",
    },
    { name: "Adaptabilidad", icon: "🔄", color: "from-green-500 to-teal-500" },
    {
        name: "Pensamiento crítico",
        icon: "🧠",
        color: "from-purple-500 to-pink-500",
    },
    { name: "Responsabilidad", icon: "✅", color: "from-cyan-500 to-blue-500" },
];

export default function Skills() {
    const categories = ["Frontend", "Backend", "Database", "Tools"];

    return (
        <section id="skills" className="py-20 bg-black/50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Habilidades Técnicas y Blandas
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-6"></div>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Tecnologías y herramientas con las que trabajo para
                        crear soluciones web excepcionales.
                    </p>
                </motion.div>

                {/* Habilidades Técnicas */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-center mb-12 text-white">
                        Habilidades Técnicas
                    </h3>

                    {categories.map((category, categoryIndex) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: categoryIndex * 0.1,
                            }}
                            className="mb-8"
                        >
                            <h4 className="text-lg font-semibold text-cyan-400 mb-4 flex items-center gap-2">
                                {category === "Frontend" && (
                                    <Globe className="w-5 h-5" />
                                )}
                                {category === "Backend" && (
                                    <Server className="w-5 h-5" />
                                )}
                                {category === "Database" && (
                                    <Database className="w-5 h-5" />
                                )}
                                {category === "Tools" && (
                                    <GitBranch className="w-5 h-5" />
                                )}
                                {category}
                            </h4>

                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {technicalSkills
                                    .filter(
                                        (skill) => skill.category === category
                                    )
                                    .map((skill, index) => (
                                        <motion.div
                                            key={skill.name}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{
                                                opacity: 1,
                                                scale: 1,
                                            }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 0.4,
                                                delay: index * 0.05,
                                            }}
                                            whileHover={{
                                                y: -8,
                                                scale: 1.05,
                                                transition: { duration: 0.2 },
                                            }}
                                            className="group"
                                        >
                                            <div
                                                className={`bg-gradient-to-br ${skill.color} p-1 rounded-xl`}
                                            >
                                                <div className="bg-black/80 rounded-lg p-4 h-full flex flex-col items-center justify-center text-center space-y-2 group-hover:bg-black/60 transition-all duration-300">
                                                    <div className="text-2xl mb-1">
                                                        {skill.icon}
                                                    </div>
                                                    <h5 className="font-medium text-white text-sm">
                                                        {skill.name}
                                                    </h5>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Habilidades Blandas */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <h3 className="text-2xl font-bold text-center mb-8 text-white flex items-center justify-center gap-2">
                        <Palette className="w-6 h-6 text-purple-400" />
                        Habilidades Blandas
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {softSkills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                whileHover={{
                                    y: -10,
                                    scale: 1.05,
                                    transition: { duration: 0.2 },
                                }}
                                className="group"
                            >
                                <div
                                    className={`bg-gradient-to-br ${skill.color} p-1 rounded-xl`}
                                >
                                    <div className="bg-black/80 rounded-lg p-6 h-full flex flex-col items-center justify-center text-center space-y-3 group-hover:bg-black/60 transition-all duration-300">
                                        <div className="text-3xl mb-2">
                                            {skill.icon}
                                        </div>
                                        <h5 className="font-medium text-white">
                                            {skill.name}
                                        </h5>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Sección adicional */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-16"
                >
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-2">
                            <Code className="w-6 h-6 text-cyan-400" />
                            Especialidades
                        </h3>
                        <div className="flex flex-wrap justify-center gap-4">
                            {[
                                "Desarrollo Full Stack",
                                "APIs REST",
                                "Responsive Design",
                                "CRUD Operations",
                                "Database Design",
                                "Problem Solving",
                                "System Integration",
                                "Web Performance",
                            ].map((specialty) => (
                                <motion.div
                                    key={specialty}
                                    whileHover={{ y: -5, scale: 1.05 }}
                                    className="px-6 py-3 bg-white/10 rounded-full text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 border border-white/20 hover:border-transparent"
                                >
                                    {specialty}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
