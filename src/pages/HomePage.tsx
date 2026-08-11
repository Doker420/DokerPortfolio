import Navbar from '../components/Navbar';
import Particles from '../components/Particles';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-dark-bg bg-grid text-white flex flex-col">
      <Navbar />
      <Particles />
      <main className="flex-1 flex flex-col items-center justify-center w-full">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
