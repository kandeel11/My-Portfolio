import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectCard from '@/components/ProjectCard';
import OrbitalTextRing from '@/components/OrbitalTextRing';
import type { Project } from '@/types';

gsap.registerPlugin(ScrollTrigger);

const projects: Project[] = [
  {
    name: 'AI Real Estate Platform',
    tech: ['ASP.NET Core', 'Angular 21', 'Redis', 'Semantic Kernel', 'n8n'],
    description:
      'Modular monolith property management with AI-powered automation workflows.',
    image: './images/ai-realestate.jpg',
    github: 'https://github.com/kandeel11/Real-Estate-ITI-Graduation-Project',
    demo: '#',
  },
  {
    name: 'Vortex E-Commerce',
    tech: ['ASP.NET Core', 'Angular 21', 'SQL Server', 'Stripe'],
    description:
      'Multi-vendor marketplace with role-based dashboards and secure payment processing.',
    image: './images/vortex-ecommerce.jpg',
    github: 'https://github.com/AhmedKhalil08/AngularProject',
    demo: 'https://tangerine-treacle-31c990.netlify.app/',
  },
  {
    name: 'AI Floor Plan Generator',
    tech: ['Python', 'React', 'Three.js', 'GANs'],
    description:
      'Graduation project \u2014 GAN-powered architectural layout generator reducing drafting time by 40%.',
    image: './images/ai-floorplan.jpg',
    github: 'https://github.com/kandeel11/floorplan-AI-GP',
    demo: '#',
    badge: 'Graduation Project',
  },
  {
    name: 'Student Management System',
    tech: ['ASP.NET Core MVC', 'SQL Server', 'EF Core', 'Identity'],
    description:
      'Centralized system managing 500+ student records with secure authentication.',
    image: './images/student-management.jpg',
    github: 'https://github.com/kandeel11/StudentsManagmentSystem',
    demo: '#',
  },
  {
    name: 'Blood Bank System',
    tech: ['ASP.NET Core MVC', 'EF Core', 'SQL Server', 'Bootstrap'],
    description:
      'Web app managing 1,000+ daily blood inventory units with expiration tracking.',
    image: './images/blood-bank.jpg',
    github: 'https://github.com/kandeel11/BLOODBANKMANAGMENTSYSTEM',
    demo: '#',
  },
  {
    name: 'Ecobazar Store',
    tech: ['JavaScript', 'HTML', 'CSS', 'DOM'],
    description:
      'Client-side organic food store with optimized DOM manipulation, reducing load time by 35%.',
    image: './images/ecobazar-store.jpg',
    github: 'https://github.com/kandeel11/CST-E-commerce-Project',
    demo: 'https://kandeel11.github.io/CST-E-commerce-Project/Pages/Home.html',
  },
];

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;

    const cards = gridRef.current.querySelectorAll('.project-grid-card');
    gsap.fromTo(
      cards,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="bg-surface-dark py-24 lg:py-32 relative overflow-hidden">
      {/* Orbital Text Ring Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.06] pointer-events-none z-0">
        <OrbitalTextRing />
      </div>

      <div className="max-w-[1080px] mx-auto px-6 lg:px-10 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-primary-teal uppercase tracking-[0.08em] mb-4 block">
            SELECTED WORK
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-stellar tracking-tight mb-4">
            Projects That Define Me
          </h2>
          <p className="text-sm text-muted-slate max-w-[520px] mx-auto">
            Real-world applications built with modern architecture and AI integration.
          </p>
        </div>

        {/* Project Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.name} className="project-grid-card">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
