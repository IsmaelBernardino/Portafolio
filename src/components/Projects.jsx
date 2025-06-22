import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import weather from "../assets/weather.PNG";
import todolist from "../assets/todo-list.PNG";
import movieapp from "../assets/movieapp.PNG";
import media from "../assets/media.PNG";

// Datos de ejemplo para los proyectos
const projectsData = [
    {
        id: 1,
        title: "Media Social app",
        description:
            "Comparte y ve fotos como si fuera pinterest, con un diseño limpio y moderno.",
        image: media,
        tags: ["React.js", "Tailwind CSS", "Firebase"],
        demoUrl: "https://mediagallery.netlify.app/",
        githubUrl: "https://github.com/IsmaelBernardino/mediaGallery",
    },
    {
        id: 2,
        title: "Movie Entertainment App",
        description:
            "Aplicación para buscar y ver información de películas y series, con una interfaz intuitiva y moderna.",
        image: movieapp,
        tags: ["React", "Tailwind CSS", "Firebase", "TMDB API"],
        demoUrl: "https://my-entertainment.netlify.app/",
        githubUrl: "https://github.com/IsmaelBernardino/mymovies",
    },
    {
        id: 3,
        title: "Todolist App",
        description:
            "Aplicación de lista de tareas con funcionalidades de arrastrar y soltar, ideal para organizar tu día a día.",
        image: todolist,
        tags: [
            "React",
            "Tailwind",
            "Node js",
            "Express",
            "MongoDB",
            "React draggable",
        ],
        demoUrl: "https://todo-list-isma.netlify.app/",
        githubUrl: "https://github.com/IsmaelBernardino/toDoList_frontend",
    },
    {
        id: 4,
        title: "Clima App",
        description:
            "Aplicación web para consultar el clima actual y pronósticos con la API de OpenWeather.",
        image: weather,
        tags: ["React", "Tailwind CSS", "Weather API"],
        demoUrl: "https://theweatherflow.netlify.app/",
        githubUrl: "https://github.com/IsmaelBernardino/weather",
    },
];

export default function Projects() {
    return (
        <section
            id="projects"
            className="py-20 bg-gradient-to-b from-black/50 to-gray-900/50"
        >
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Mis Proyectos
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-6"></div>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Una selección de mis trabajos recientes en desarrollo
                        web
                    </p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group"
                        >
                            <div className="bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                                <div className="relative overflow-hidden">
                                    <img
                                        src={
                                            project.image || "/placeholder.svg"
                                        }
                                        alt={project.title}
                                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                        <div className="p-6 w-full">
                                            <div className="flex justify-between items-center">
                                                <a
                                                    href={project.demoUrl}
                                                    target="_blank"
                                                    className="flex items-center gap-1 text-white bg-cyan-500 px-4 py-2 rounded-full text-sm font-medium hover:bg-cyan-600 transition-colors"
                                                >
                                                    Demo{" "}
                                                    <ExternalLink className="w-4 h-4" />
                                                </a>
                                                <a
                                                    href={project.githubUrl}
                                                    target="_blank"
                                                    className="flex items-center gap-1 text-white bg-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-600 transition-colors"
                                                >
                                                    Código{" "}
                                                    <Github className="w-4 h-4" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 mb-4">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="text-xs px-3 py-1 rounded-full bg-white/10 text-gray-300"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href="https://github.com/IsmaelBernardino"
                        target="_blank"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-white/10 rounded-full text-white font-medium hover:bg-white/20 transition-all duration-300"
                        >
                            Ver Más Proyectos
                            <Github className="w-6 h-6 inline ml-2" />
                        </motion.button>
                    </a>
                </div>
            </div>
        </section>
    );
}
