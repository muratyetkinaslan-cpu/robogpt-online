import { useReveal } from './useReveal';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Kits from './components/Kits';
import LMS from './components/LMS';
import StudentProjects from './components/StudentProjects';
import Testimonial from './components/Testimonial';
import About from './components/About';
import TechCapabilities from './components/TechCapabilities';
import Certificate from './components/Certificate';
import Journey from './components/Journey';
import Platform from './components/Platform';
import LiveShare from './components/LiveShare';
import ParentPanel from './components/ParentPanel';
import Hardware from './components/Hardware';
import AgeGroups from './components/AgeGroups';
import HowOnline from './components/HowOnline';
import Demo from './components/Demo';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';
import PromoPopup from './components/PromoPopup';

export default function App() {
  useReveal();

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Kits />
        <LMS />
        <StudentProjects />
        <Testimonial />
        <About />
        <TechCapabilities />
        <Certificate />
        <Journey />
        <Platform />
        <LiveShare />
        <ParentPanel />
        <Hardware />
        <AgeGroups />
        <HowOnline />
        <Demo />
        <FAQ />
      </main>
      <Footer />
      <DemoModal />
      <PromoPopup />
    </>
  );
}
