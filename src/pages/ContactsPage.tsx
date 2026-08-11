import Navbar from '../components/Navbar';
import Particles from '../components/Particles';
import Contacts from '../components/Contacts';
import Footer from '../components/Footer';

export default function ContactsPage() {
  return (
    <div className="relative min-h-screen bg-dark-bg bg-grid text-white flex flex-col">
      <Navbar />
      <Particles />
      <main className="flex-1 flex flex-col items-center justify-center w-full">
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}
