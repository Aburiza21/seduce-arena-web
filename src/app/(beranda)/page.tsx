import Hero from "./_sections/Hero";
import About from "./_sections/About";
import Simulasi from "./_sections/Simulasi";
import Testimoni from "./_sections/Testimoni";
import Faq from "./_sections/Faq";
import Offering from "./_sections/Offering";
import WelcomeModal from "./_components/WelcomeModal";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-black text-white relative">
      <WelcomeModal />
      <Hero />
      <About />
      <Simulasi />
      <Testimoni />
      <Faq />
      <Offering />
    </main>
  );
}
