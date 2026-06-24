import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectCard from '@/components/ProjectCard';
import ProjectModal from '@/components/ProjectModal';
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
    problem:
      'Property management systems are traditionally siloed — listings, tenant communications, maintenance requests, and analytics each live in separate tools. This causes delays, data inconsistency, and high operational overhead for property managers.',
    solution:
      'Built a unified Modular Monolith with ASP.NET Core, isolating domains while sharing infrastructure. Semantic Kernel powers intelligent AI routing and automation, n8n orchestrates external workflows, and Redis caching keeps response times under 100ms at scale.',
    myRole:
      'Led AI integration using Semantic Kernel, designed the Modular Monolith architecture, built and integrated the Admin Dashboard, and owned the full integration cycle — connecting the Angular frontend, backend modules, AI services, and third-party APIs into one cohesive system.',
  },
  {
    name: 'Vortex E-Commerce',
    tech: ['ASP.NET Core', 'Angular 21', 'SQL Server', 'Stripe'],
    description:
      'Multi-vendor marketplace with role-based dashboards and secure payment processing.',
    image: './images/vortex-ecommerce.jpg',
    github: 'https://github.com/AhmedKhalil08/AngularProject',
    demo: 'https://tangerine-treacle-31c990.netlify.app/',
    problem:
      'Multi-vendor platforms require complex role separation, real-time inventory management, and secure payment flows — difficult to build correctly without a solid architecture that scales cleanly.',
    solution:
      'Designed a layered ASP.NET Core API with role-based dashboards (Admin, Vendor, Customer), integrated Stripe for PCI-compliant payment processing, and built a reactive Angular 21 SPA for a seamless, modern shopping experience.',
    myRole:
      'Built the entire system independently — designed the database schema, implemented the full REST API with clean architecture, integrated Stripe payment flow, and developed all three role-based dashboards on the frontend.',
  },
  {
    name: 'AI Floor Plan Generator',
    tech: ['Python', 'React', 'Three.js', 'GANs'],
    description:
      'Graduation project — GAN-powered architectural layout generator reducing drafting time by 40%.',
    image: './images/ai-floorplan.jpg',
    github: 'https://github.com/kandeel11/floorplan-AI-GP',
    demo: '#',
    badge: 'Graduation Project',
    problem:
      'Architectural floor plan drafting is a time-intensive, expert-driven process — inaccessible to non-professionals and slow even for experienced architects in the conceptual phase, creating a bottleneck early in the design cycle.',
    solution:
      'Trained a GAN model on a curated architectural dataset to generate realistic floor plans from simple constraint inputs (room count, dimensions, style). A Three.js-powered 3D viewer lets users visualize and iterate on results instantly, cutting drafting time by 40%.',
    myRole:
      'Built the entire project alone — collected and preprocessed training data, trained and tuned the GAN model in Python, developed the React frontend with Three.js 3D visualization, and integrated the full ML inference pipeline.',
  },
  {
    name: 'Student Management System',
    tech: ['ASP.NET Core MVC', 'SQL Server', 'EF Core', 'Identity'],
    description:
      'Centralized system managing 500+ student records with secure authentication.',
    image: './images/student-management.jpg',
    github: 'https://github.com/kandeel11/StudentsManagmentSystem',
    demo: '#',
    problem:
      'Educational institutions managing hundreds of students with spreadsheets and disconnected tools face data inconsistency, no audit trail, and security vulnerabilities — especially around sensitive student information.',
    solution:
      'Developed a full-featured MVC web application with ASP.NET Core Identity for role-based authentication, Entity Framework Core for data access, and a clean admin dashboard supporting CRUD operations across 500+ student records.',
    myRole:
      'Built the entire system independently — database schema design, Identity configuration with custom roles, all CRUD modules, and the complete UI with Bootstrap.',
  },
  {
    name: 'Blood Bank System',
    tech: ['ASP.NET Core MVC', 'EF Core', 'SQL Server', 'Bootstrap'],
    description:
      'Web app managing 1,000+ daily blood inventory units with expiration tracking.',
    image: './images/blood-bank.jpg',
    github: 'https://github.com/kandeel11/BLOODBANKMANAGMENTSYSTEM',
    demo: '#',
    problem:
      'Blood banks handling thousands of daily inventory units need real-time expiration tracking, accurate donor matching, and fast request management. Manual or slow systems directly put lives at risk.',
    solution:
      'Built a web application processing 1,000+ daily blood units with automated expiration alerts, donor registration and matching, inventory management, and a reporting dashboard — all backed by a normalized SQL Server database.',
    myRole:
      'Built the entire system independently — designed the inventory and donor schema, implemented expiration tracking with alert logic, built the donor management module, and created the reporting dashboard.',
  },
  {
    name: 'Ecobazar Store',
    tech: ['JavaScript', 'HTML', 'CSS', 'DOM'],
    description:
      'Client-side organic food store with optimized DOM manipulation, reducing load time by 35%.',
    image: './images/ecobazar-store.jpg',
    github: 'https://github.com/kandeel11/CST-E-commerce-Project',
    demo: 'https://kandeel11.github.io/CST-E-commerce-Project/Pages/Home.html',
    problem:
      'Building a performant, accessible client-side e-commerce experience for an organic food store without heavy frameworks — keeping load times fast and the codebase maintainable across a collaborative team.',
    solution:
      'Implemented an optimized vanilla JavaScript store with efficient DOM batching, lazy-loaded product images, and a clean CSS architecture — achieving a 35% reduction in page load time compared to the initial prototype.',
    myRole:
      'Served as Team Leader — coordinated the team and task distribution, personally built the Admin Dashboard, and implemented the full authentication flow (registration, login, and session management).',
  },
];

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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

      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 relative z-10">
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
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.name} className="project-grid-card">
              <ProjectCard
                project={project}
                onViewDetails={() => setSelectedProject(project)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
