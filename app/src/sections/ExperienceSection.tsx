import TimelineEntry from '@/components/TimelineEntry';

const experiences = [
  {
    date: 'Jan 2026 \u2013 Jul 2026',
    title: 'Full Stack .NET Trainee (ITP)',
    location: 'Information Technology Institute (ITI), Tanta',
    bullets: [
      'Developed back-end applications and RESTful APIs using C# and ASP.NET Core with Clean Architecture, CQRS, and MediatR',
      'Built dynamic front-end architectures with Angular 21 and TypeScript',
      'Integrated AI capabilities: Generative AI APIs, RAG pipelines, and agentic workflows with Semantic Kernel',
      'Managed SQL Server databases with Entity Framework Core and optimized LINQ queries and indexes',
      'Led a 5-developer Agile team on the graduation project, running a Git feature-branch workflow with pull-request reviews',
    ],
    highlights: [],
    isActive: false,
  },
  {
    date: 'May 2024 \u2013 Oct 2024',
    title: 'AI Model Trainer (Freelance)',
    location: 'Outlier \u2014 Remote',
    bullets: [
      'Evaluated generative AI model outputs across 50+ review cycles, scoring accuracy and logical reasoning against structured rubrics',
      'Produced training data for large-scale datasets through prompt engineering and precise data annotation',
      'Worked fully remotely over six months, managing my own schedule and delivery',
    ],
    highlights: [],
    isActive: false,
  },
  {
    date: 'Aug 2019 \u2013 Jul 2024',
    title: 'B.Sc. Computer and Control Engineering',
    location: 'Higher Institute of Engineering and Technology, Kafr-Elshiekh',
    bullets: [],
    highlights: [
      'Grade: Excellent with Honors',
      'Ranked 2nd among the 2024 graduating class',
      'Military Service: Completed',
    ],
    isActive: false,
  },
  {
    date: 'Jul 2023 \u2013 Aug 2023',
    title: 'Backend .NET Trainee (Summer Code Camp)',
    location: 'ITI Mansoura',
    bullets: [
      'Programmed RESTful APIs with ASP.NET Core and C#, integrated end to end with front-end components',
      'Implemented data access with Entity Framework Core, using projection and eager loading to reduce redundant queries',
      'Validated endpoints with Postman collections, catching integration defects before deployment',
    ],
    highlights: [],
    isActive: false,
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="bg-deep-space py-24 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Column - Sticky */}
          <div className="w-full lg:w-[40%] lg:sticky lg:top-32 lg:self-start">
            <span className="text-xs font-mono text-primary-teal uppercase tracking-[0.08em] mb-4 block">
              MY JOURNEY
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-stellar tracking-tight mb-4">
              Experience &amp; Education
            </h2>
            <p className="text-base text-muted-slate max-w-[360px] leading-relaxed">
              A timeline of professional growth and hands-on development.
            </p>
          </div>

          {/* Right Column - Timeline */}
          <div className="w-full lg:w-[60%]">
            {experiences.map((exp, i) => (
              <TimelineEntry
                key={i}
                date={exp.date}
                title={exp.title}
                location={exp.location}
                bullets={exp.bullets}
                highlights={exp.highlights}
                isActive={exp.isActive}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
