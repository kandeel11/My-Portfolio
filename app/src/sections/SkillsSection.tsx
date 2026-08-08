import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Server, Monitor, Database, BrainCircuit, Code2, Globe } from 'lucide-react';
import SkillCategory from '@/components/SkillCategory';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: 'Back-End & Architecture',
    icon: Server,
    iconColor: '#00897B',
    skills: [
      { name: 'C# / .NET Core', proficiency: 95 },
      { name: 'ASP.NET Core (Web API / MVC)', proficiency: 95 },
      { name: 'Entity Framework Core', proficiency: 95 },
      { name: 'LINQ', proficiency: 90 },
      { name: 'SignalR', proficiency: 85 },
      { name: 'Clean Architecture', proficiency: 90 },
      { name: 'CQRS & MediatR', proficiency: 85 },
      { name: 'RESTful APIs', proficiency: 95 },
    ],
    tags: [],
  },
  {
    title: 'Front-End Technologies',
    icon: Monitor,
    iconColor: '#7C4DFF',
    skills: [
      { name: 'Angular 21', proficiency: 95 },
      { name: 'TypeScript', proficiency: 95 },
      { name: 'JavaScript (ES6+)', proficiency: 90 },
      { name: 'HTML5 / CSS3', proficiency: 90 },
      { name: 'Bootstrap', proficiency: 85 },
    ],
    tags: [],
  },
  {
    title: 'Databases & DevOps',
    icon: Database,
    iconColor: '#80CBC4',
    skills: [
      { name: 'Microsoft SQL Server', proficiency: 95 },
      { name: 'MySQL', proficiency: 80 },
      { name: 'Redis', proficiency: 85 },
      { name: 'Git / GitHub', proficiency: 95 },
      { name: 'Docker', proficiency: 80 },
    ],
    tags: [],
  },
  {
    title: 'AI Integration',
    icon: BrainCircuit,
    iconColor: '#00897B',
    skills: [
      { name: 'Generative AI APIs', proficiency: 70 },
      { name: 'Prompt Engineering', proficiency: 65 },
      { name: 'RAG (Retrieval-Augmented Gen)', proficiency: 60 },
      { name: 'Semantic Kernel', proficiency: 70 },
      { name: 'n8n Automation', proficiency: 65 },
      { name: 'Agentic Software', proficiency: 60 },
    ],
    tags: [],
  },
  {
    title: 'Core Competencies',
    icon: Code2,
    iconColor: '#7C4DFF',
    skills: [],
    tags: [
      'OOP',
      'Data Structures',
      'Design Patterns',
      'Agile Methodologies',
      'Team Leadership',
      'Problem Solving',
      'Analytical Thinking',
      'RESTful APIs',
    ],
  },
  {
    title: 'Languages',
    icon: Globe,
    iconColor: '#80CBC4',
    skills: [
      { name: 'Arabic (Native)', proficiency: 100 },
      { name: 'English (Professional Working)', proficiency: 80 },
    ],
    tags: [],
  },
];

export default function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !cardsRef.current) return;

    const cards = cardsRef.current.querySelectorAll('.skill-card');
    gsap.fromTo(
      cards,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="bg-surface-dark py-24 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-primary-teal uppercase tracking-[0.08em] mb-4 block">
            WHAT I BRING
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-stellar tracking-tight mb-4">
            Technical Arsenal
          </h2>
          <p className="text-sm text-muted-slate max-w-[480px] mx-auto">
            Full stack expertise with AI-powered development
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="skill-card">
              <SkillCategory
                title={cat.title}
                icon={cat.icon}
                iconColor={cat.iconColor}
                skills={cat.skills}
                tags={cat.tags}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
