import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Linkedin, Github, LoaderCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    emailjs.init(import.meta.env.VITE_PUBLIC_KEY);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            await emailjs.send(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                formData
            );
            setIsSubmitting(false);
            setSubmitSuccess(true);
        } catch (error) {
            console.error("Error al enviar el formulario:", error);
            setIsSubmitting(false);
            return;
        } finally {
            // Resetear el formulario
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            });
            setTimeout(() => {
                setSubmitSuccess(false);
            }, 5000);
        }
    };

    return (
        <section id="contact" className="py-20 bg-black/50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Contacto
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-6"></div>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        ¿Tienes un proyecto en mente? ¡Hablemos! Estoy
                        disponible para trabajar en nuevos proyectos.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-bold mb-6 text-white">
                            Información de Contacto
                        </h3>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-gradient-to-br from-cyan-500 to-blue-500 p-3 rounded-lg">
                                    <Mail className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-medium text-white">
                                        Email
                                    </h4>
                                    <p className="text-gray-400">
                                        bernardinoabdalan@gmail.com
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <h3 className="text-xl font-bold mb-4 text-white">
                                Sígueme
                            </h3>
                            <div className="flex gap-4">
                                <a
                                    href="https://github.com/IsmaelBernardino"
                                    target="_blank"
                                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-cyan-500 transition-colors duration-300"
                                >
                                    <Github className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/ismael-bernardino/"
                                    target="_blank"
                                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-cyan-500 transition-colors duration-300"
                                >
                                    <Linkedin className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <form
                            onSubmit={handleSubmit}
                            className="bg-white/5 border border-white/10 rounded-2xl p-8"
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-gray-300 mb-2"
                                    >
                                        Nombre
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                                        placeholder="Tu nombre"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-300 mb-2"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                                        placeholder="tu@email.com"
                                    />
                                </div>
                            </div>

                            <div className="mb-6">
                                <label
                                    htmlFor="subject"
                                    className="block text-sm font-medium text-gray-300 mb-2"
                                >
                                    Asunto
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                                    placeholder="Asunto del mensaje"
                                />
                            </div>

                            <div className="mb-6">
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-300 mb-2"
                                >
                                    Mensaje
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                                    placeholder="Tu mensaje..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white font-medium flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                            >
                                {isSubmitting ? (
                                    <>
                                        <LoaderCircle className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" />
                                        Enviando...
                                    </>
                                ) : (
                                    <>
                                        Enviar Mensaje{" "}
                                        <Send className="w-5 h-5" />
                                    </>
                                )}
                            </button>

                            {submitSuccess && (
                                <div className="mt-4 p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-center">
                                    ¡Mensaje enviado con éxito! Me pondré en
                                    contacto contigo pronto.
                                </div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
