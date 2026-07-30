import About from './components/About';
import Achievements from './components/Achievements';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Skills from './components/Skills';

function App() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center overflow-x-hidden bg-[#0d0d0d]">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Achievements />
      <Footer />
    </div>
  );
}

export default App;
