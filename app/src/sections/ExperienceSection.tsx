import TimelineEntry from '@/components/TimelineEntry';

const experiences = [
  {
    date: 'Jan 2026 \u2013 Present',
    title: 'Full Stack Developer Trainee',
    location: 'Information Technology Institute (ITI), Tanta',
    bullets: [
      'Developed back-end applications and RESTful APIs using C# and ASP.NET Core with Clean Architecture, CQRS, and MediatR',
      'Built dynamic front-end architectures with Angular 21 and TypeScript',
      'Integrated AI capabilities: Generative AI APIs, RAG, and Agentic Software workflows',
      'Managed SQL Server databases with Entity Framework Core and optimized LINQ queries',
      'Worked in Agile teams with Git and Docker deployment',
    ],
    highlights: [],
    isActive: true,
  },
  {
    date: 'May 2024 \u2013 Oct 2024',
    title: 'AI Linguistic Model Trainer (Freelance)',
    location: 'Outlier \u2014 Remote',
    bullets: [
      'Evaluated Generative AI language models across 50+ iterative cycles, improving accuracy by 25%',
      'Applied advanced prompt engineering for large-scale dataset optimization',
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
    title: 'Backend Web Development (SCC)',
    location: 'ITI Mansoura',
    bullets: [
      'Programmed RESTful APIs with ASP.NET Core and C#',
      'Applied Entity Framework Core, improving query execution by 15%',
      'Tested APIs with Postman, ensuring zero critical failures',
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
