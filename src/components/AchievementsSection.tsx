import FadeIn from './FadeIn';
import { usePortfolio } from '../hooks/usePortfolio';

export default function AchievementsSection() {
  const { achievements = [] } = usePortfolio();

  if (!achievements.length) return null;

  return (
    <section
      id="achievements"
      className="scroll-mt-20 flex flex-col px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ backgroundColor: '#0C0C0C' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center w-full mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Achievements
        </h2>
      </FadeIn>

      <div className="mx-auto grid w-full max-w-6xl gap-6 md:grid-cols-3">
        {achievements.map((achievement, index) => (
          <FadeIn key={achievement.title} delay={index * 0.1} y={30}>
            <article className="flex h-full flex-col gap-4 rounded-[30px] border border-[#D7E2EA]/20 bg-[#111111] p-6 sm:p-7">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D7E2EA]/50">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="text-xl font-medium uppercase tracking-wide text-[#D7E2EA] sm:text-2xl">
                {achievement.title}
              </h3>
              <p className="text-sm font-light leading-relaxed text-[#D7E2EA]/70 sm:text-base">
                {achievement.detail}
              </p>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
