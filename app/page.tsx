import Nav      from '@/components/Nav';
import Hero     from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills   from '@/components/Skills';
import About    from '@/components/About';
import Awards   from '@/components/Awards';
import Contact  from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Awards />
        <Contact />
      </main>
    </>
  );
}
