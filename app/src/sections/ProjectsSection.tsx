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
      'Modular monolith property management with an AI assistant and automated approval workflows.',
    image: './images/ai-realestate.jpg',
    github: 'https://github.com/kandeel11/Real-Estate-ITI-Graduation-Project',
    demo: 'https://real-estate-iti-graduation-project.vercel.app/',
    problem:
      'Real estate agencies approve property listings manually, so a property sits idle waiting for review. Their agents also spend the day answering the same questions about properties that are already fully documented somewhere.',
    solution:
      'Built a unified Modular Monolith in ASP.NET Core with CQRS and MediatR, keeping domains isolated while sharing infrastructure. I chose this over microservices deliberately: we were five junior developers on a short timeline, and the operational overhead of distributed services would have cost us the time we needed for features. Semantic Kernel powers a RAG assistant over listing documents, n8n automates the approval workflow, and Redis caches high-traffic listing endpoints with write-invalidation.',
    myRole:
      'Owned the architecture and led a five-developer team through Agile sprints, reviewing every pull request before merge. Personally built the Redis caching layer, the Semantic Kernel AI assistant, the admin dashboard, and the CI/CD pipeline deploying to Microsoft Azure through GitHub Actions.',
  },
  {
    name: 'Vortex E-Commerce',
    tech: ['ASP.NET Core', 'Angular 21', 'SQL Server', 'Stripe'],
    description:
      'Multi-vendor marketplace with role-based dashboards and secure payment processing.',
    image: './images/vortex-ecommerce.jpg',
    github: 'https://github.com/kandeel11/AngularProject',
    demo: '#',
    problem:
      'Multi-vendor platforms require complex role separation, real-time inventory management, and secure payment flows — difficult to build correctly without a solid architecture that scales cleanly.',
    solution:
      'A layered ASP.NET Core API with role-based dashboards (Admin, Seller, Customer), Stripe and PayPal integration for payments, JWT authentication over HttpOnly cookies, SignalR for real-time admin notifications, and a reactive Angular 21 SPA using standalone components and route guards.',
    myRole:
      'Built as part of a team. I designed the core database schema and built the full REST API for the product catalog, cart, and checkout pipeline, integrated Stripe and PayPal, and implemented the complete order lifecycle with automated stock deduction.',
  },
  {
    name: 'AI Floor Plan Generator',
    tech: ['Python', 'React', 'Three.js', 'GANs'],
    description:
      'University graduation project — a GAN-powered architectural layout generator with 3D visualisation.',
    image: './images/ai-floorplan.jpg',
    github: 'https://github.com/kandeel11/floorplan-AI-GP',
    demo: '#',
    badge: 'Graduation Project',
    problem:
      'Architectural floor plan drafting is a time-intensive, expert-driven process — inaccessible to non-professionals and slow even for experienced architects in the conceptual phase, creating a bottleneck early in the design cycle.',
    solution:
      'A GAN model trained on a curated architectural dataset generates floor plans from simple constraint inputs (room count, dimensions, style). The model is exposed through a REST API, and a Three.js viewer renders both a 2D plan and a 3D representation so users can visualise and iterate on results.',
    myRole:
      'Built with a team under Prof. Hany El-Ghaish, graded A+. I worked on the Python model pipeline and the REST API layer that serves it, plus the integration between the model output and the 3D front-end viewer.',
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
      'Blood inventory management with donor matching and expiration tracking.',
    image: './images/blood-bank.jpg',
    github: 'https://github.com/kandeel11/BLOODBANKMANAGMENTSYSTEM',
    demo: '#',
    problem:
      'Blood banks need real-time expiration tracking, accurate donor matching, and fast request management. Manual or slow systems directly put lives at risk.',
    solution:
      'An ASP.NET Core MVC application with automated expiration alerts, donor registration and matching, inventory management, and a reporting dashboard — all backed by a normalised SQL Server schema.',
    myRole:
      'Built independently — designed the inventory and donor schema, implemented expiration tracking with alert logic, built the donor management module, and created the reporting dashboard.',
  },
  {
    name: 'Ecobazar Store',
    tech: ['JavaScript (ES6+)', 'Bootstrap 5', 'HTML', 'CSS'],
    description:
      'Multi-role organic grocery store built in vanilla JavaScript — live and running.',
    image: './images/ecobazar-store.jpg',
    github: 'https://github.com/kandeel11/CST-E-commerce-Project',
    demo: 'https://kandeel11.github.io/CST-E-commerce-Project/Pages/Home.html',
    problem:
      'Building a complete, maintainable client-side e-commerce experience without a framework — three separate user roles, persistent cart and session state, and a codebase four developers could work in at once.',
    solution:
      'A three-role platform (Customer, Seller, Admin) with product browsing, cart and wishlist, checkout with order tracking, seller inventory management, and admin account controls. The domain is modelled with ES6 classes, and state persists across browser tabs through localStorage and sessionStorage so a cart stays consistent wherever the user opens it. Fully responsive with Bootstrap 5.',
    myRole:
      'Team Leader on a four-developer team — coordinated task distribution and delivery, personally built the Admin Dashboard, and implemented the full authentication flow (registration, login, and session management).',
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
