import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const checkTouch = window.matchMedia('(pointer: coarse)').matches;
    setIsTouch(checkTouch);
    if (checkTouch) return;

    const cursor = cursorRef.current;
    const textEl = textRef.current;
    if (!cursor || !textEl) return;

    const xTo = gsap.quickTo(cursor, 'x', { duration: 0.2, ease: 'power3.out' });
    const yTo = gsap.quickTo(cursor, 'y', { duration: 0.2, ease: 'power3.out' });

    let isHovering = false;
    let currentText = '';

    const onMove = (e: MouseEvent) => {
      const offset = isHovering && currentText ? 32 : 6;
      xTo(e.clientX - offset);
      yTo(e.clientY - offset);

      const target = e.target as HTMLElement;
      const interactiveEl = target.closest('a, button, [data-cursor-hover]') as HTMLElement | null;
      const newText = interactiveEl?.getAttribute('data-cursor-text') || '';

      if (interactiveEl) {
        if (!isHovering || currentText !== newText) {
          isHovering = true;
          currentText = newText;
          if (newText) {
            textEl.innerText = newText;
            gsap.to(cursor, {
              scale: 1,
              width: 64,
              height: 64,
              backgroundColor: 'hsl(var(--primary-teal))',
              borderColor: 'transparent',
              boxShadow: '0 0 20px hsl(var(--primary-teal) / 0.5)',
              duration: 0.3,
            });
            gsap.to(textEl, { opacity: 1, duration: 0.2, delay: 0.1 });
          } else {
            textEl.innerText = '';
            gsap.to(cursor, {
              scale: 1,
              width: 12,
              height: 12,
              backgroundColor: 'transparent',
              borderColor: 'hsl(var(--primary-teal))',
              boxShadow: 'none',
              duration: 0.2,
            });
            gsap.to(textEl, { opacity: 0, duration: 0.1 });
          }
        }
      } else {
        if (isHovering) {
          isHovering = false;
          currentText = '';
          textEl.innerText = '';
          gsap.to(cursor, {
            scale: 1,
            width: 12,
            height: 12,
            backgroundColor: 'transparent',
            borderColor: 'hsl(var(--primary-teal))',
            boxShadow: 'none',
            duration: 0.2,
          });
          gsap.to(textEl, { opacity: 0, duration: 0.1 });
        }
      }
    };

    window.addEventListener('mousemove', onMove);

    return () => {
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  if (isTouch) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-3 h-3 rounded-full border-[1.5px] border-primary-teal pointer-events-none z-[9999] flex items-center justify-center transition-colors"
      style={{ willChange: 'transform, width, height, background-color, border-color, box-shadow' }}
    >
      <span
        ref={textRef}
        className="text-[9px] font-bold text-stellar opacity-0 whitespace-nowrap tracking-wider pointer-events-none select-none"
      />
    </div>
  );
}
