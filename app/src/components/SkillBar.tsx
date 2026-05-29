import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface SkillBarProps {
  name: string;
  proficiency: number;
  delay?: number;
  triggered: boolean;
}

export default function SkillBar({ name, proficiency, delay = 0, triggered }: SkillBarProps) {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!triggered || !barRef.current) return;
    gsap.fromTo(
      barRef.current,
      { width: '0%' },
      { width: `${proficiency}%`, duration: 0.8, ease: 'power2.out', delay: delay / 1000 }
    );
  }, [triggered, proficiency, delay]);

  return (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-lunar">{name}</span>
        <span className="text-xs text-muted-slate font-mono">{proficiency}%</span>
      </div>
      <div className="h-1.5 bg-charcoal rounded-full overflow-hidden">
        <div
          ref={barRef}
          className="h-full rounded-full"
          style={{
            width: '0%',
            background: 'linear-gradient(90deg, #00897B 0%, #7C4DFF 100%)',
            willChange: 'width',
          }}
        />
      </div>
    </div>
  );
}
