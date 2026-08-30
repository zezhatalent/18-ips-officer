import Navbar from './components/Navbar';
import Hero from './Hero';
import BackgroundFx from './components/BackgroundFx';
import { TickerMarquee, AboutSection, Services, StatCounters, MeterSkills, IconSkillTiles, Timeline, Education, Projects, CertGrid, Awards, Hobbies, TestimonialSection, ContactShell, BlogSection, FAQSection, EnhancedTimeline, SkillsDetailedGrid, ContactMethodsGrid, WaveDivider } from './components/Sections';
import { content } from './content';

export default function App() {
  return (
    <div className="relative min-h-screen">
      <BackgroundFx />
      <Navbar content={content} />
      <Hero />
      <WaveDivider />
      <TickerMarquee items={content.ticker ?? [content.role, content.tagline]} />
      <AboutSection content={content} />
      <WaveDivider flip />
      <Services content={content} />
      <WaveDivider />
      <StatCounters content={content} />
      <WaveDivider flip />
      <MeterSkills content={content} />
      <IconSkillTiles content={content} />
      <WaveDivider />
      <SkillsDetailedGrid content={content} />
      <WaveDivider flip />
      <EnhancedTimeline content={content} />
      <Timeline content={content} />
      <WaveDivider />
      <Education content={content} />
      <WaveDivider flip />
      <Projects content={content} />
      <CertGrid content={content} />
      <WaveDivider />
      <Awards content={content} />
      <Hobbies content={content} />
      <WaveDivider flip />
      <BlogSection content={content} />
      <FAQSection content={content} />
      <WaveDivider />
      <TestimonialSection content={content} />
      <WaveDivider flip />
      <ContactMethodsGrid content={content} />
      <ContactShell content={content} />
    </div>
  );
}
