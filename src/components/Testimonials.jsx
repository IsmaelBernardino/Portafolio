import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "María García",
        position: "CEO, TechStart",
        content:
            "Carlos transformó nuestra visión en una plataforma web excepcional. Su atención al detalle y conocimiento técnico superaron nuestras expectativas.",
        image: "/placeholder.svg?height=100&width=100",
    },
    {
        id: 2,
        name: "Alejandro Rodríguez",
        position: "Director de Marketing, InnovateCorp",
        content:
            "Trabajar con Carlos fue una experiencia increíble. Entendió perfectamente nuestras necesidades y entregó un producto que ha aumentado significativamente nuestra conversión.",
        image: "/placeholder.svg?height=100&width=100",
    },
    {
        id: 3,
        name: "Laura Martínez",
        position: "Fundadora, DesignHub",
        content:
            "La capacidad de Carlos para combinar diseño atractivo con funcionalidad es impresionante. Nuestra aplicación no solo se ve increíble, sino que también ofrece una experiencia de usuario excepcional.",
        image: "/placeholder.svg?height=100&width=100",
    },
];

export default function Testimonials() {
    const [current, setCurrent] = useState(0);
    const [autoplay, setAutoplay] = useState(true);

    useEffect(() => {
        let interval;

        if (autoplay) {
            interval = setInterval(() => {
                setCurrent((prev) => (prev + 1) % testimonials.length);
            }, 5000);
        }

        return () => clearInterval(interval);
    }, [autoplay]);

    const next = () => {
        setAutoplay(false);
        setCurrent((prev) => (prev + 1) % testimonials.length);
    };

    const prev = () => {
        setAutoplay(false);
        setCurrent(
            (prev) => (prev - 1 + testimonials.length) % testimonials.length
        );
    };

    return (
        <section
            id="testimonials"
            className="py-20 bg-gradient-to-b from-gray-900/50 to-black/50"
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
                        Testimonios
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-6"></div>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Lo que dicen mis clientes sobre mi trabajo y
                        colaboración.
                    </p>
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    <div className="absolute -top-10 -left-10 text-cyan-500/20">
                        <Quote className="w-20 h-20" />
                    </div>

                    <motion.div
                        key={current}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12"
                    >
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                            <div className="shrink-0">
                                <img
                                    src={
                                        testimonials[current].image ||
                                        "/placeholder.svg"
                                    }
                                    alt={testimonials[current].name}
                                    className="w-20 h-20 rounded-full border-4 border-cyan-500/30"
                                />
                            </div>
                            <div>
                                <p className="text-gray-300 text-lg italic mb-6">
                                    "{testimonials[current].content}"
                                </p>
                                <div>
                                    <h4 className="text-white font-bold text-lg">
                                        {testimonials[current].name}
                                    </h4>
                                    <p className="text-cyan-400">
                                        {testimonials[current].position}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <div className="flex justify-center mt-8 gap-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setAutoplay(false);
                                    setCurrent(index);
                                }}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    index === current
                                        ? "bg-cyan-500 w-8"
                                        : "bg-white/30"
                                }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>

                    <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12">
                        <button
                            onClick={prev}
                            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-cyan-500 transition-colors duration-300"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12">
                        <button
                            onClick={next}
                            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-cyan-500 transition-colors duration-300"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
