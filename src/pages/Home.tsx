import Hero from '../components/sections/Hero';
import SeasonJourney from '../components/sections/SeasonJourney';
import SeasonFinder from '../components/sections/SeasonFinder';
import Stats from '../components/sections/Stats';
import Testimonials from '../components/sections/Testimonials';
import CTASection from '../components/sections/CTASection';

export default function Home() {
  return (
    <main>
      <Hero />
      <SeasonJourney />
      <SeasonFinder />
      <Stats />
      <Testimonials />
      <CTASection />
    </main>
  );
}
