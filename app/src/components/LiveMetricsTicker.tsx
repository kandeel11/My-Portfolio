import { useEffect, useRef, useState } from 'react';

interface TickerProps {
  items: string[];
  speed?: number;
}

export default function LiveMetricsTicker({ items, speed = 1 }: TickerProps) {
  const tickerRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);
  const [clonedItems, setClonedItems] = useState('');

  useEffect(() => {
    requestAnimationFrame(() => {
      const container = tickerRef.current;
      if (!container) return;
      const firstChild = container.firstElementChild as HTMLElement;
      if (!firstChild) return;
      const firstChildWidth = firstChild.getBoundingClientRect().width || 0;
      setContentWidth(firstChildWidth);
      const clone = container.innerHTML;
      setClonedItems(`${clone}${clone}${clone}`);
    });
  }, [items]);

  useEffect(() => {
    const container = tickerRef.current;
    if (!container) return;

    let animationId: number;
    let currentPosition = 0;

    function animate() {
      const container = tickerRef.current;
      if (!container) return;
      currentPosition += speed;
      if (contentWidth > 0 && currentPosition >= contentWidth) {
        currentPosition = 0;
      }
      container.style.transform = `translateX(-${currentPosition}px)`;
      animationId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [contentWidth, speed]);

  const itemHtml = items
    .map(
      (item) =>
        `<span class="inline-flex items-center px-5 py-0 text-sm font-mono text-primary-teal whitespace-nowrap">${item}<span class="text-muted-slate mx-2 text-xs">&#9670;</span></span>`
    )
    .join('');

  return (
    <div className="overflow-hidden whitespace-nowrap w-full">
      <div
        ref={tickerRef}
        className="inline-flex will-change-transform"
        dangerouslySetInnerHTML={{ __html: itemHtml }}
      />
      {clonedItems && (
        <div
          className="inline-flex will-change-transform"
          style={{ marginLeft: 0 }}
          dangerouslySetInnerHTML={{ __html: clonedItems }}
        />
      )}
    </div>
  );
}
