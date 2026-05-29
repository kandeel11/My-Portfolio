interface TechPillProps {
  tech: string;
  variant?: 'default' | 'small';
}

export default function TechPill({ tech, variant = 'default' }: TechPillProps) {
  const sizeClasses = variant === 'small'
    ? 'text-[10px] px-2 py-0.5'
    : 'text-xs px-2.5 py-1';

  return (
    <span
      className={`inline-block rounded-md bg-primary-teal/10 border border-primary-teal/20 text-primary-teal font-mono ${sizeClasses}`}
    >
      {tech}
    </span>
  );
}
