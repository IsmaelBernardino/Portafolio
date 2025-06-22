export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-8 bg-black border-t border-white/10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-gray-400">
                            © {currentYear} Ismael Bernardino. Todos los
                            derechos reservados.
                        </p>
                    </div>
                    <div>
                        <p className="text-gray-400">
                            Diseñado y desarrollado con{" "}
                            <span className="text-pink-500">♥</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
