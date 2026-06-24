import type { Project } from '@/types';
import TechPill from './TechPill';
import { Github, Eye, Rocket } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  compact?: boolean;
  onViewDetails?: () => void;
}

export default function ProjectCard({ project, compact = false, onViewDetails }: ProjectCardProps) {
  const hasLiveDemo = project.demo && project.demo !== '#';

  if (compact) {
    return (
      <div
        data-cursor-hover
        data-cursor-text="VIEW"
        className="bg-surface-raised border border-primary-teal/15 rounded-2xl overflow-hidden transition-all duration-400 hover:border-primary-teal/30 hover:-translate-y-1.5 hover:shadow-card-hover cursor-none"
      >
        <div className="aspect-video overflow-hidden relative">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="p-5">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-lg font-semibold text-stellar">{project.name}</h3>
            {project.badge && (
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-electric-violet text-stellar font-mono">
                {project.badge}
              </span>
            )}
          </div>
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.tech.slice(0, 4).map((t) => (
              <TechPill key={t} tech={t} variant="small" />
            ))}
          </div>
          <p className="text-sm text-muted-slate line-clamp-2">{project.description}</p>
          <div className="flex gap-3 mt-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-slate hover:text-primary-teal transition-colors"
                aria-label={`${project.name} GitHub`}
              >
                <Github size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      data-cursor-hover
      data-cursor-text="EXPLORE"
      className="bg-surface-raised border border-primary-teal/15 rounded-2xl overflow-hidden transition-all duration-400 hover:border-primary-teal/30 hover:-translate-y-1.5 hover:shadow-card-hover cursor-none flex flex-col"
    >
      {/* Image */}
      <div className="aspect-video overflow-hidden relative">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
        {project.badge && (
          <span className="absolute top-3 left-3 text-[10px] px-2.5 py-1 rounded-full bg-electric-violet/90 text-stellar font-mono backdrop-blur-sm">
            {project.badge}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-xl font-semibold text-stellar leading-tight">{project.name}</h3>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 mt-0.5 text-muted-slate hover:text-primary-teal transition-colors"
              aria-label={`${project.name} GitHub`}
            >
              <Github size={18} />
            </a>
          )}
        </div>

        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tech.map((t) => (
            <TechPill key={t} tech={t} />
          ))}
        </div>

        <p className="text-sm text-muted-slate leading-relaxed flex-1">{project.description}</p>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5 mt-5 pt-4 border-t border-primary-teal/10">
          {/* View Details */}
          <button
            onClick={onViewDetails}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-primary-teal/25 text-sm text-primary-teal font-medium hover:bg-primary-teal/10 hover:border-primary-teal/40 transition-all duration-200 active:scale-95"
          >
            <Eye size={14} />
            View Details
          </button>

          {/* Deploy / Live */}
          {hasLiveDemo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary-teal/15 border border-primary-teal/30 text-sm text-primary-teal font-medium hover:bg-primary-teal hover:text-white hover:shadow-glow transition-all duration-200 active:scale-95"
            >
              <Rocket size={14} />
              Deploy
            </a>
          ) : (
            <span
              title="Live deployment coming soon"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface-dark border border-white/8 text-sm text-muted-slate/35 cursor-not-allowed select-none"
            >
              <Rocket size={14} />
              Deploy
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
