import { useEffect, useRef, useState } from 'react';

export interface CountUpProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

const parseNumberParts = (value: string): { prefix: string; end: number; suffix: string } => {
  const m = value.trim().match(/^([^0-9]*)([0-9]+(?:\.[0-9]+)?)(.*)$/);
  if (!m) return { prefix: '', end: 0, suffix: '' };
  return { prefix: m[1] ?? '', end: parseFloat(m[2] ?? '0'), suffix: m[3] ?? '' };
};

export const CountUp: React.FC<CountUpProps> & { parseNumberParts?: typeof parseNumberParts } = ({ end, duration = 1500, prefix = '', suffix = '', className }) => {
  const [value, setValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!ref.current || hasAnimated) return;

    let frameId = 0;
    let observer: IntersectionObserver | null = null;

    const startAnimation = () => {
      const start = performance.now();
      const from = 0;
      const to = end;

      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const current = Math.floor(from + (to - from) * progress);
        setValue(current);
        if (progress < 1) {
          frameId = requestAnimationFrame(tick);
        } else {
          setHasAnimated(true);
        }
      };

      frameId = requestAnimationFrame(tick);
    };

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startAnimation();
            observer?.disconnect();
          }
        });
      },
      { root: null, threshold: 0.3, rootMargin: '0px 0px -80px 0px' }
    );

    observer.observe(ref.current);

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
      observer?.disconnect();
    };
  }, [end, duration, hasAnimated]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
};

CountUp.parseNumberParts = parseNumberParts;

export default CountUp;
