import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Highlights from '@/components/Highlights';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Process from '@/components/Process';
import Experience from '@/components/Experience';
import Cases from '@/components/Cases';
import GithubProjects from '@/components/GithubProjects';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-base">
      <Nav />
      <Hero />
      <Highlights />
      <About />
      <Skills />
      <Process />
      <Experience />
      <Cases />
      <GithubProjects />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
