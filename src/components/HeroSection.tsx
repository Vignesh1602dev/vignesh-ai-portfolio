import Navbar from './Navbar';
import SocialLinks from './SocialLinks';
import FadeIn from './FadeIn';
import Magnet from './Magnet';
import ContactButton from './ContactButton';
import { usePortfolio } from '../hooks/usePortfolio';
import profileImage from '../assets/img/vignesh_profile.png';

export default function HeroSection() {
  const { profile } = usePortfolio();
  const resumePath = profile.resumePath ?? '/Vignesh_Yemul_Resume.pdf';

  return (
    <section id="home" className="h-screen scroll-mt-20 flex flex-col overflow-hidden relative">
      <div className="flex flex-col flex-1 px-5 sm:px-8 md:px-10 relative z-0">
        <FadeIn delay={0} y={-20}>
          <Navbar />
        </FadeIn>

        <FadeIn delay={0.15} y={40} className="mt-6 sm:mt-4 md:-mt-5 overflow-hidden">
          <h1
            className="hero-heading font-black uppercase leading-none tracking-tight whitespace-nowrap w-full"
            style={{ fontSize: 'clamp(3rem, 11vw, 12.5rem)' }}
          >
            {profile.role}
          </h1>
        </FadeIn>

        <FadeIn delay={0.3} y={20} className="mt-4 sm:mt-5 md:mt-6">
          <p
            className="text-[#D7E2EA] font-medium uppercase tracking-[0.2em] leading-snug"
            style={{ fontSize: 'clamp(0.68rem, 1.2vw, 1.15rem)' }}
          >
            {profile.specialization}
          </p>
        </FadeIn>

        <div className="flex-1" />

        <div className="relative flex justify-between items-end pb-7 sm:pb-8 md:pb-10">
          <FadeIn delay={0.35} y={20} className="max-w-[320px] sm:max-w-[420px] md:max-w-[540px]">
            <p
              className="text-[#D7E2EA] font-light leading-relaxed"
              style={{ fontSize: 'clamp(0.9rem, 1.7vw, 1.35rem)' }}
            >
              {profile.tagline}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4">
              <ContactButton href="#projects" label="View Projects" className="!px-5 !py-2.5 sm:!px-7 sm:!py-3" />
              <ContactButton href="#contact" label="Contact Me" className="!px-5 !py-2.5 sm:!px-7 sm:!py-3" />
              <a
                href={resumePath}
                download="Vignesh_Yemul_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                onClick={(event) => {
                  if (!resumePath) {
                    event.preventDefault();
                  }
                }}
                className="inline-flex items-center justify-center rounded-full border border-[#D7E2EA]/30 bg-transparent px-5 py-2.5 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-[#D7E2EA] transition duration-200 hover:border-[#D7E2EA]/60 hover:bg-[#D7E2EA]/5 sm:px-7 sm:py-3"
              >
                Download Resume
              </a>
            </div>
          </FadeIn>

          <FadeIn
            delay={0.5}
            y={20}
            className="absolute bottom-7 left-1/2 -translate-x-1/2 sm:static sm:translate-x-0"
          >
            <SocialLinks />
          </FadeIn>
        </div>
      </div>

      <Magnet
        padding={150}
        strength={3}
        activeTransition="transform 0.3s ease-out"
        inactiveTransition="transform 0.6s ease-in-out"
        className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0"
      >
        <FadeIn delay={0.6} y={30}>
          <img
            src={profileImage}
            alt={`${profile.name} portrait`}
            className="w-full h-auto object-contain"
          />
        </FadeIn>
      </Magnet>
    </section>
  );
}
