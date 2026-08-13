import { motion, MotionValue, useTransform } from 'framer-motion';
import LiveProjectButton from './LiveProjectButton';
import type { Project } from '../types/portfolio';

interface ProjectCardProps {
  project: Project & { number: string };
  index: number;
  totalCards: number;
  progress: MotionValue<number>;
}

export default function ProjectCard({ project, index, totalCards, progress }: ProjectCardProps) {
  const rangeStart = index / totalCards;
  const rangeEnd = 1;
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(progress, [rangeStart, rangeEnd], [1, targetScale]);
  const hasImage = Boolean(project.image);
  const imageHeights = ['clamp(130px, 16vw, 230px)', 'clamp(160px, 22vw, 340px)'];

  const renderPreview = (label: string, className: string, height?: string) => {
    if (hasImage) {
      return (
        <img
          src={project.image}
          alt={`${project.title} ${label}`}
          className={className}
          style={height ? { height } : undefined}
        />
      );
    }

    return (
      <div
        className={`${className} relative flex items-end overflow-hidden border border-[#D7E2EA]/20 bg-[#111111]`}
        style={height ? { height } : undefined}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(182,0,168,0.22),transparent_34%),linear-gradient(135deg,rgba(215,226,234,0.08),rgba(215,226,234,0.02))]" />
        <span className="relative p-5 text-[#D7E2EA] font-medium uppercase tracking-widest text-sm sm:text-base">
          {project.title}
        </span>
      </div>
    );
  };

  return (
    <div className="h-[92vh] sm:h-[90vh] flex items-start justify-center sticky top-24 md:top-32">
      <motion.div
        style={{
          scale,
          top: `${index * 28}px`,
          backgroundColor: '#0C0C0C',
        }}
        className="absolute w-full max-w-[1760px] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] p-4 sm:p-6 md:p-8 flex flex-col gap-6 sm:gap-8 md:gap-10 origin-top"
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex items-start gap-6 sm:gap-8 md:gap-10">
            <span
              className="text-[#D7E2EA] font-black uppercase leading-none flex-shrink-0"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col gap-2 sm:gap-4 md:gap-5">
              <span
                className="text-[#D7E2EA] font-medium uppercase"
                style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
              >
                {project.subtitle}
              </span>
              <span
                className="text-[#D7E2EA] font-light tracking-wide"
                style={{ fontSize: 'clamp(0.9rem, 2vw, 2rem)' }}
              >
                {project.title}
              </span>
              <span className="w-fit rounded-full border border-[#D7E2EA]/20 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-widest text-[#D7E2EA]/60 sm:text-xs">
                {project.role} · {project.year}
              </span>
            </div>
          </div>

          {project.link ? <LiveProjectButton href={project.link} /> : null}
        </div>

        <div className="grid gap-5 lg:grid-cols-[1fr_1.2fr] lg:gap-8">
          <div className="flex flex-col gap-4 sm:gap-5">
            <p
              className="font-light leading-relaxed text-[#D7E2EA]/75"
              style={{ fontSize: 'clamp(0.85rem, 1.5vw, 1.1rem)' }}
            >
              {project.description}
            </p>

            {project.features && project.features.length > 0 && (
              <ul className="flex flex-col gap-2 text-[#D7E2EA]/60">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="list-disc ml-4 font-light leading-relaxed"
                    style={{ fontSize: 'clamp(0.78rem, 1.1vw, 0.95rem)' }}
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            )}

            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-[#D7E2EA]/15 bg-[#D7E2EA]/5 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.12em] text-[#D7E2EA]/80 sm:text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.impact && (
              <p className="rounded-[20px] border border-[#B600A8]/30 bg-[#B600A8]/10 px-4 py-3 text-sm font-light leading-relaxed text-[#D7E2EA]/85 sm:text-base">
                <span className="font-medium uppercase tracking-widest text-[#D7E2EA]">Impact · </span>
                {project.impact}
              </p>
            )}
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-5 w-full">
            <div className="flex flex-col gap-4 md:gap-5 w-full md:w-[40%]">
              {renderPreview('preview 1', 'w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]', imageHeights[0])}
              {renderPreview('preview 2', 'w-full object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[60px]', imageHeights[1])}
            </div>

            {renderPreview('main', 'w-full md:w-[60%] object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[60px] md:h-auto self-stretch')}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
