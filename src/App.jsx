import {
    Hero,
    About,
    Projects,
    Skills,
    Testimonials,
    Contact,
    Footer,
} from "./components/index.js";

function App() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
            <Hero />
            <About />
            <Projects />
            <Skills />
            {/* <Testimonials /> */}
            <Contact />
            <Footer />
        </main>
    );
}

export default App;
