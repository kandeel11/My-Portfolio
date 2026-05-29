import type { LucideIcon } from 'lucide-react';
import SkillBar from './SkillBar';

interface Skill {
  name: string;
  proficiency: number;
}

interface SkillCategoryProps {
  title: string;
  icon: LucideIcon;
  iconColor: string;
  skills: Skill[];
  triggered: boolean;
  variant?: 'bars' | 'tags';
  tags?: string[];
}

export default function SkillCategory({
  title,
  icon: Icon,
  iconColor,
  skills,
  triggered,
  variant = 'bars',
  tags = [],
}: SkillCategoryProps) {
  return (
    <div
      className="bg-surface-raised border border-primary-teal/15 rounded-2xl p-8 transition-all duration-300 hover:border-primary-teal/30 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="flex items-center gap-3 mb-6">
        <Icon size={22} style={{ color: iconColor }} />
        <h3 className="text-lg font-semibold text-stellar">{title}</h3>
      </div>

      {variant === 'bars' && (
        <div>
          {skills.map((skill, i) => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              proficiency={skill.proficiency}
              delay={i * 100}
              triggered={triggered}
            />
          ))}
        </div>
      )}

      {variant === 'tags' && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-sm px-4 py-1.5 rounded-full bg-primary-teal/10 border border-primary-teal/20 text-primary-teal"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
