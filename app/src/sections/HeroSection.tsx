import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ProjectStackCarousel from '@/components/ProjectStackCarousel';

export default function HeroSection() {
  const labelRef = useRef<HTMLSpanElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const bioRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

    tl.to(labelRef.current, { opacity: 1, y: 0, duration: 0.6, delay: 0.2 })
      .to(nameRef.current, { opacity: 1, y: 0, duration: 0.8 }, '-=0.3')
      .to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
      .to(bioRef.current, { opacity: 1, y: 0, duration: 0.6 }, '-=0.3')
      .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.5 }, '-=0.2');

    return () => { tl.kill(); };
  }, []);

  const scrollToProjects = () => {
    const el = document.querySelector('#projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 50% 0%, rgba(0,137,123,0.06) 0%, transparent 60%)',
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 w-full pt-20 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          {/* Text Zone - 55% */}
          <div className="w-full lg:w-[55%] text-center lg:text-left">
            <span
              ref={labelRef}
              className="inline-block text-xs font-mono text-primary-teal uppercase tracking-[0.08em] mb-4 opacity-0 translate-y-5"
            >
              FULL STACK DEVELOPER
            </span>

            <h1
              ref={nameRef}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-stellar leading-[1.1] tracking-tight mb-2 opacity-0 translate-y-8"
            >
              Mohamed Khaled
            </h1>

            <h2
              ref={subtitleRef}
              className="text-xl sm:text-2xl lg:text-3xl font-normal mb-6 opacity-0 translate-y-5"
              style={{
                background: 'linear-gradient(135deg, #80CBC4 0%, #7C4DFF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              .NET &bull; Angular &bull; AI Integration
            </h2>

            <p
              ref={bioRef}
              className="text-base text-muted-slate max-w-[520px] mx-auto lg:mx-0 leading-relaxed mb-10 opacity-0 translate-y-5"
            >
              Building web applications end to end with C#, ASP.NET Core, Angular, and SQL Server.
              ITI Full Stack .NET graduate. Ranked 2nd in my Computer Engineering class.
              I care about clean architecture, CQRS, and putting AI to work inside real products.
            </p>

            <div
              ref={ctaRef}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start opacity-0 translate-y-4"
            >
              <button
                onClick={scrollToProjects}
                data-cursor-hover
                data-cursor-text="PROJECTS"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-base font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:shadow-glow cursor-none"
                style={{
                  background: 'linear-gradient(90deg, #00897B 0%, #7C4DFF 100%)',
                }}
              >
                View My Projects
              </button>
              <button
                onClick={scrollToContact}
                data-cursor-hover
                data-cursor-text="CONNECT"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-base font-medium text-lunar border border-charcoal hover:border-primary-teal transition-all duration-200 cursor-none"
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* Visual Zone - 45% */}
          <div className="w-full lg:w-[45%] h-[400px] lg:h-[500px] relative hidden md:block">
            <ProjectStackCarousel />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs font-mono text-muted-slate uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-primary-teal to-transparent" />
      </div>
    </section>
  );
}
