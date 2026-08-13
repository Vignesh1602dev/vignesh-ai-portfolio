import FadeIn from './FadeIn';
import { usePortfolio } from '../hooks/usePortfolio';

export default function EducationSection() {
  const { education = [], certifications = [] } = usePortfolio();

  return (
    <section
      id="education"
      className="scroll-mt-20 flex flex-col px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ backgroundColor: '#0C0C0C' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center w-full mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Education
        </h2>
      </FadeIn>

      <div className="mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-2">
        {education.map((item, index) => (
          <FadeIn key={`${item.institution}-${item.period}`} delay={index * 0.1} y={30}>
            <article className="flex h-full flex-col gap-3 rounded-[30px] border border-[#D7E2EA]/20 bg-[#111111] p-6 sm:p-7">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D7E2EA]/50">
                {item.period}
              </span>
              <h3 className="text-xl font-medium uppercase tracking-wide text-[#D7E2EA] sm:text-2xl">
                {item.degree}
              </h3>
              <p className="text-base font-light text-[#D7E2EA]/80">{item.institution}</p>
              <p className="text-sm uppercase tracking-[0.2em] text-[#D7E2EA]/60">{item.location}</p>
              {item.coursework && item.coursework.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {item.coursework.map((course) => (
                    <span
                      key={course}
                      className="rounded-full border border-[#D7E2EA]/15 bg-[#D7E2EA]/5 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.1em] text-[#D7E2EA]/70 sm:text-xs"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              )}
            </article>
          </FadeIn>
        ))}
      </div>

      {certifications.length > 0 && (
        <FadeIn delay={0.2} y={20} className="mx-auto mt-10 w-full max-w-6xl">
          <div className="rounded-[30px] border border-[#D7E2EA]/20 bg-[#111111] p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D7E2EA]/50">Certification</p>
            <p className="mt-4 text-2xl font-medium uppercase tracking-wide text-[#D7E2EA] sm:text-3xl">
              {certifications[0]}
            </p>
          </div>
        </FadeIn>
      )}
    </section>
  );
}
