import type { Project } from '@/types';
import TechPill from './TechPill';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  compact?: boolean;
}

export default function ProjectCard({ project, compact = false }: ProjectCardProps) {
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
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-slate hover:text-primary-teal transition-colors"
                aria-label={`${project.name} Live Demo`}
              >
                <ExternalLink size={18} />
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
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <h3 className="text-xl font-semibold text-stellar">{project.name}</h3>
          {project.badge && (
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-electric-violet text-stellar font-mono">
              {project.badge}
            </span>
          )}
        </div>
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tech.map((t) => (
            <TechPill key={t} tech={t} />
          ))}
        </div>
        <p className="text-sm text-muted-slate">{project.description}</p>
        <div className="flex gap-4 mt-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-slate hover:text-primary-teal transition-colors"
              aria-label={`${project.name} GitHub`}
            >
              <Github size={20} />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-slate hover:text-primary-teal transition-colors"
              aria-label={`${project.name} Live Demo`}
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
