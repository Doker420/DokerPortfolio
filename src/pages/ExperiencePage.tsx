import Navbar from '../components/Navbar';
import Particles from '../components/Particles';
import Experience from '../components/Experience';
import Footer from '../components/Footer';

export default function ExperiencePage() {
  return (
    <div className="relative min-h-screen bg-dark-bg bg-grid text-white flex flex-col">
      <Navbar />
      <Particles />
      <main className="flex-1 flex flex-col items-center justify-center w-full">
        <Experience />
      </main>
      <Footer />
    </div>
  );
}
