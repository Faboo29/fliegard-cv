import HeroBackground from '@/components/HeroBackground';
import HeroSection from '@/components/HeroSection';
import About from '@/components/About';
import SkillSection from '@/components/Skills';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-slate-950">
      <HeroBackground />
      <HeroSection />
      <About />
      <SkillSection />
      <Footer />
    </main>
  );
}
