import type { LucideIcon } from 'lucide-react';

interface Skill {
  name: string;
  proficiency: number;
}

interface SkillCategoryProps {
  title: string;
  icon: LucideIcon;
  iconColor: string;
  skills: Skill[];
  tags?: string[];
}

export default function SkillCategory({
  title,
  icon: Icon,
  iconColor,
  skills,
  tags = [],
}: SkillCategoryProps) {
  const allItems = [...skills.map((s) => s.name), ...tags];

  return (
    <div
      className="relative bg-surface-raised rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(0,0,0,0.18)] group border"
      style={{ borderColor: `${iconColor}55` }}
    >
      {/* Top accent bar */}
      <div
        className="h-[3px] w-full"
        style={{ background: `linear-gradient(90deg, ${iconColor} 0%, transparent 100%)` }}
      />

      {/* Header */}
      <div className="px-5 pt-5 pb-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
            style={{ backgroundColor: `${iconColor}22` }}
          >
            <Icon size={19} style={{ color: iconColor }} />
          </div>
          <h3 className="text-base font-semibold text-stellar leading-tight">{title}</h3>
        </div>
        <span
          className="text-xs font-mono px-2 py-0.5 rounded-full border shrink-0"
          style={{
            color: iconColor,
            borderColor: `${iconColor}55`,
            backgroundColor: `${iconColor}18`,
          }}
        >
          {allItems.length}
        </span>
      </div>

      {/* Divider */}
      <div className="mx-5 h-px mb-4" style={{ backgroundColor: `${iconColor}30` }} />

      {/* Skills */}
      <div className="px-5 pb-5 flex flex-wrap gap-2">
        {allItems.map((item) => (
          <span
            key={item}
            className="flex items-center gap-2 text-[13px] px-3 py-1.5 rounded-lg font-mono text-lunar transition-all duration-200 hover:scale-105 cursor-default border"
            style={{
              backgroundColor: `${iconColor}15`,
              borderColor: `${iconColor}45`,
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full shrink-0"
              style={{ backgroundColor: iconColor }}
            />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
