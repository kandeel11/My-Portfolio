import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface OrbitalTextRingProps {
  text?: string;
  duration?: number;
}

export default function OrbitalTextRing({
  text = 'FULL STACK DEVELOPER \u2022 .NET & ANGULAR SPECIALIST \u2022 AI INTEGRATION \u2022 CLEAN ARCHITECTURE \u2022 ',
  duration = 20,
}: OrbitalTextRingProps) {
  const textPathRef = useRef<SVGTextPathElement>(null);

  useEffect(() => {
    const textPath = textPathRef.current;
    if (!textPath) return;

    const tween = gsap.fromTo(
      textPath,
      { attr: { startOffset: '0%' } },
      { attr: { startOffset: '-100%' }, duration, ease: 'none', repeat: -1 }
    );

    return () => {
      tween.kill();
    };
  }, [text, duration]);

  return (
    <svg
      viewBox="0 0 300 300"
      className="w-full h-full"
      style={{ transform: 'rotate(-90deg)' }}
    >
      <defs>
        <path
          id="orbit-path"
          d="M 150, 150 m -120, 0 a 120,120 0 1,1 240,0 a 120,120 0 1,1 -240,0"
        />
      </defs>
      <text
        fill="#00897B"
        fontSize="14"
        fontFamily="var(--font-geist-mono), monospace"
        letterSpacing="0.05em"
      >
        <textPath ref={textPathRef} href="#orbit-path" startOffset="0%">
          {text}
        </textPath>
      </text>
    </svg>
  );
}
