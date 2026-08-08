import { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

// كل كارت هنا لازم يكون مشروع حقيقي موجود تحت في قسم Projects.
const projects = [
  { name: 'AI Real Estate Platform', tech: 'ASP.NET Core • Angular • Semantic Kernel' },
  { name: 'Vortex E-Commerce (Multi-vendor)', tech: 'ASP.NET Core • Angular • Stripe' },
  { name: 'AI Floor Plan Generator', tech: 'Python • GANs • Three.js' },
  { name: 'Ecobazar Store', tech: 'JavaScript • Bootstrap 5 • DOM' },
  { name: 'Student Management System', tech: 'ASP.NET Core MVC • EF Core • Identity' },
  { name: 'Blood Bank System', tech: 'ASP.NET Core MVC • EF Core • SQL Server' },
];

export default function ProjectStackCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  // الكود ده بيخلي الكروت تتقلب أوتوماتيك كل 3 ثواني
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % projects.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Modern Stack Container */}
      <div className="relative w-[280px] sm:w-[320px] h-[200px]">
        {projects.map((project, index) => {
          const offset = (index - activeIndex + projects.length) % projects.length;
          const isFront = offset === 0;
          const isSecond = offset === 1;
          const isThird = offset === 2;
          const isLeaving = offset === projects.length - 1;

          let translateY = 0;
          let scale = 1;
          let rotateZ = 0;
          let zIndex = 0;
          let opacity = 0;

          if (isFront) {
            translateY = 0;
            scale = 1;
            rotateZ = 0;
            zIndex = 30;
            opacity = 1;
          } else if (isSecond) {
            translateY = 28;
            scale = 0.94;
            rotateZ = -2;
            zIndex = 20;
            opacity = 0.75;
          } else if (isThird) {
            translateY = 56;
            scale = 0.88;
            rotateZ = -4;
            zIndex = 10;
            opacity = 0.5;
          } else if (isLeaving) {
            translateY = -50;
            scale = 1.08;
            rotateZ = 8;
            zIndex = 40;
            opacity = 0;
          } else {
            translateY = 80;
            scale = 0.8;
            rotateZ = -6;
            zIndex = 0;
            opacity = 0;
          }

          return (
            <div
              key={index}
              data-cursor-hover
              data-cursor-text="EXPLORE"
              className="absolute top-0 left-0 w-full h-full transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] cursor-none group"
              style={{
                transform: `translateY(${translateY}px) scale(${scale}) rotateZ(${rotateZ}deg)`,
                zIndex: zIndex,
                opacity: opacity,
                pointerEvents: isFront ? 'auto' : 'none',
              }}
            >
              {/* Modern Card Design */}
              <div className="w-full h-full bg-surface-dark dark:bg-surface-raised rounded-2xl p-6 flex flex-col justify-between border border-charcoal dark:border-charcoal/50 shadow-lg dark:shadow-xl transition-all duration-300 hover:border-primary-teal/40 dark:hover:border-primary-teal/50 hover:shadow-[0_20px_40px_rgba(0,137,123,0.15)] dark:hover:shadow-[0_20px_40px_rgba(0,137,123,0.25)] relative overflow-hidden">
                
                {/* Gradient Background Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-teal/0 via-transparent to-electric-violet/0 group-hover:from-primary-teal/5 group-hover:to-electric-violet/5 transition-all duration-500 pointer-events-none" />
                
                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-teal to-electric-violet group-hover:w-full transition-all duration-500" />
                
                {/* Content */}
                <div className="relative z-10 flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-teal/15 dark:bg-primary-teal/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <ArrowUpRight className="w-6 h-6 text-primary-teal group-hover:text-electric-violet transition-colors duration-300" strokeWidth={2} />
                  </div>
                  <h4 className="text-[16px] sm:text-[17px] font-bold text-stellar dark:text-stellar leading-tight group-hover:text-primary-teal transition-colors duration-300">
                    {project.name}
                  </h4>
                </div>
                
                {/* Tech Stack Footer */}
                <div className="relative z-10 flex flex-col mt-2">
                  <span className="text-[10px] font-bold text-muted-slate dark:text-muted-slate uppercase tracking-widest mb-2">
                    Stack
                  </span>
                  <span className="text-[12px] font-semibold text-primary-teal dark:text-soft-mint truncate group-hover:text-electric-violet transition-colors duration-300">
                    {project.tech}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}