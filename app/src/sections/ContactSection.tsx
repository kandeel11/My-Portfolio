import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, Linkedin, Github, Download } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const contactItems = [
  {
    icon: Mail,
    label: 'kandeelmohamed241@gmail.com',
    href: 'mailto:kandeelmohamed241@gmail.com',
  },
  {
    icon: Phone,
    label: '+20 101 335 0442',
    href: 'tel:+201013350442',
  },
  {
    icon: MapPin,
    label: 'Tanta, Egypt (Ready to Relocate)',
    href: null,
  },
  {
    icon: Linkedin,
    label: 'linkedin.com/in/mohameed-khaleed',
    href: 'https://linkedin.com/in/mohameed-khaleed-16695a176',
  },
  {
    icon: Github,
    label: 'github.com/kandeel11',
    href: 'https://github.com/kandeel11',
  },
];

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com/in/mohameed-khaleed-16695a176', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/kandeel11', label: 'GitHub' },
  { icon: Mail, href: 'mailto:kandeelmohamed241@gmail.com', label: 'Email' },
];

export default function ContactSection() {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    gsap.fromTo(
      cardRef.current,
      { opacity: 0, scale: 0.95, y: 30 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section id="contact" className="bg-deep-space py-24 lg:py-32">
      <div className="max-w-[640px] mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-mono text-primary-teal uppercase tracking-[0.08em] mb-4 block">
            LET&apos;S CONNECT
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-stellar tracking-tight mb-4">
            Ready to Build Something Great?
          </h2>
          <p className="text-base text-muted-slate">
            I&apos;m open to full-time opportunities, freelance projects, and collaborations.
          </p>
        </div>

        {/* Contact Card */}
        <div
          ref={cardRef}
          className="bg-surface-raised border border-primary-teal/15 rounded-[20px] p-8 lg:p-12"
        >
          {/* Contact Items */}
          <div className="flex flex-col gap-6">
            {contactItems.map((item) => {
              const Icon = item.icon;
              const content = (
                <div className="flex items-center gap-4 group">
                  <Icon size={20} className="text-primary-teal shrink-0" />
                  <span className="text-base font-medium text-lunar group-hover:text-primary-teal transition-colors">
                    {item.label}
                  </span>
                </div>
              );

              if (item.href) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {content}
                  </a>
                );
              }

              return <div key={item.label}>{content}</div>;
            })}
          </div>

          {/* Social Row */}
          <div className="flex items-center justify-center gap-4 mt-8">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-surface-dark border border-charcoal flex items-center justify-center text-muted-slate hover:border-primary-teal hover:bg-primary-teal/10 hover:text-primary-teal transition-all duration-200"
                  aria-label={social.label}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>

          {/* CV Download */}
         <a
  href="/Mohamed_Khaled_CV.pdf"
  download="Mohamed_Khaled_CV.pdf"
  className="w-full mt-6 py-4 rounded-xl text-base font-semibold text-white flex items-center justify-center gap-3 transition-all duration-200 hover:scale-[1.02] hover:shadow-glow"
  style={{
    background: 'linear-gradient(90deg, #00897B 0%, #7C4DFF 100%)',
  }}
>
  <Download size={18} />
  Download My CV
</a>
        </div>
      </div>
    </section>
  );
}
