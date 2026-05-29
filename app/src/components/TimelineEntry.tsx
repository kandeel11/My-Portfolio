import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TimelineEntryProps {
  date: string;
  title: string;
  location: string;
  bullets: string[];
  highlights?: string[];
  isActive?: boolean;
}

export default function TimelineEntry({
  date,
  title,
  location,
  bullets,
  highlights,
  isActive = false,
}: TimelineEntryProps) {
  const entryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!entryRef.current) return;
    gsap.fromTo(
      entryRef.current,
      { opacity: 0, x: 30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: entryRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <div ref={entryRef} className="relative pl-10 pb-12 last:pb-0">
      {/* Timeline line */}
      <div className="absolute left-[7px] top-4 bottom-0 w-0.5 bg-charcoal" />

      {/* Timeline node */}
      <div
        className={`absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 ${
          isActive
            ? 'bg-primary-teal border-primary-teal'
            : 'bg-deep-space border-primary-teal'
        }`}
      />

      {/* Date */}
      <span className="text-xs font-mono text-primary-teal uppercase tracking-widest mb-2 block">
        {date}
      </span>

      {/* Title */}
      <h3 className="text-xl font-semibold text-stellar mb-1">{title}</h3>

      {/* Location */}
      <span className="text-sm text-muted-slate mb-4 block">{location}</span>

      {/* Bullets */}
      {bullets.length > 0 && (
        <ul className="space-y-2">
          {bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-teal mt-2 shrink-0" />
              <span className="text-sm text-lunar leading-relaxed">{bullet}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Highlights */}
      {highlights && highlights.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {highlights.map((h, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 rounded-full bg-electric-violet/10 border border-electric-violet/20 text-electric-violet"
            >
              {h}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
