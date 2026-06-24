import { useEffect } from 'react';
import { X, Github, User, Lightbulb, AlertCircle, Rocket } from 'lucide-react';
import type { Project } from '@/types';
import TechPill from './TechPill';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const hasLiveDemo = project.demo && project.demo !== '#';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/75 backdrop-blur-md" />

      {/* Modal */}
      <div
        className="relative z-10 w-full max-w-2xl bg-surface-raised border border-primary-teal/20 rounded-2xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.7)] animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image Header */}
        <div className="relative aspect-[16/7] overflow-hidden">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-raised via-surface-raised/40 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 bg-surface-dark/80 border border-white/10 rounded-full p-1.5 text-muted-slate hover:text-stellar hover:border-white/20 transition-all duration-200"
            aria-label="Close modal"
          >
            <X size={16} />
          </button>

          {/* Title overlay */}
          <div className="absolute bottom-4 left-6 flex items-center gap-2.5">
            <h2 className="text-xl sm:text-2xl font-semibold text-stellar">{project.name}</h2>
            {project.badge && (
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-electric-violet/80 text-stellar font-mono">
                {project.badge}
              </span>
            )}
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 space-y-5 max-h-[55vh] overflow-y-auto scrollbar-thin">
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <TechPill key={t} tech={t} />
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-primary-teal/10" />

          {/* Problem */}
          {project.problem && (
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-red-500/15 flex items-center justify-center">
                  <AlertCircle size={13} className="text-red-400" />
                </div>
                <span className="text-xs font-mono text-red-400/80 uppercase tracking-widest">Problem</span>
              </div>
              <p className="text-sm text-muted-slate leading-relaxed pl-8">{project.problem}</p>
            </div>
          )}

          {/* Solution */}
          {project.solution && (
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-primary-teal/15 flex items-center justify-center">
                  <Lightbulb size={13} className="text-primary-teal" />
                </div>
                <span className="text-xs font-mono text-primary-teal/80 uppercase tracking-widest">Solution</span>
              </div>
              <p className="text-sm text-muted-slate leading-relaxed pl-8">{project.solution}</p>
            </div>
          )}

          {/* My Role */}
          {project.myRole && (
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-amber-400/15 flex items-center justify-center">
                  <User size={13} className="text-amber-400" />
                </div>
                <span className="text-xs font-mono text-amber-400/80 uppercase tracking-widest">My Role</span>
              </div>
              <p className="text-sm text-muted-slate leading-relaxed pl-8">{project.myRole}</p>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="px-6 pb-6 pt-2 flex items-center gap-3 border-t border-primary-teal/10">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-primary-teal/25 text-sm text-primary-teal hover:bg-primary-teal/10 hover:border-primary-teal/40 transition-all duration-200"
            >
              <Github size={14} />
              Source Code
            </a>
          )}
          {hasLiveDemo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 rounded-xl bg-primary-teal text-white text-sm font-medium hover:bg-primary-teal/85 transition-all duration-200 shadow-glow"
            >
              <Rocket size={14} />
              Live Deploy
            </a>
          ) : (
            <span className="flex items-center gap-2 px-5 py-2 rounded-xl bg-surface-dark border border-white/8 text-sm text-muted-slate/40 cursor-not-allowed select-none">
              <Rocket size={14} />
              Deploy Soon
            </span>
          )}
          <button
            onClick={onClose}
            className="ml-auto text-xs text-muted-slate/50 hover:text-muted-slate transition-colors"
          >
            ESC to close
          </button>
        </div>
      </div>
    </div>
  );
}
