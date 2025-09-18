import { Spotlight } from '@/components/ui/spotlight';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export const MouseSpotlight = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300 opacity-0 md:opacity-100"
      style={{
        background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.1), transparent 40%)`,
      }}
    />
  );
};

export const FullWidthGridPattern = () => {
  return (
    <div className="absolute inset-0 z-0 w-screen h-full overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#d1d1d1_1px,transparent_1px),linear-gradient(to_bottom,#d1d1d1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_15%,transparent_65%)] dark:bg-[linear-gradient(to_right,#404040_1px,transparent_1px),linear-gradient(to_bottom,#404040_1px,transparent_1px)] opacity-60 transition-opacity duration-300 pointer-events-none"
        style={{ left: '50%', transform: 'translateX(-50%)', width: '105vw' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background/90 opacity-70 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/90 opacity-70 pointer-events-none" />
    </div>
  );
};

export const HomeBackground = () => {
  const { theme } = useTheme();
  const isLightMode = theme === 'light';
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <MouseSpotlight />
      <Spotlight className="-top-40 left-0 md:-top-[300px] md:left-60" fill={isLightMode ? 'black' : 'white'} lightMode={isLightMode} />
      <Spotlight className="top-0 left-0" fill="black" lightMode={true} />
      <Spotlight className="" fill={isLightMode ? 'black' : 'white'} lightMode={isLightMode} />
      <FullWidthGridPattern />
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow delay-1000 pointer-events-none" />
    </div>
  );
};

export default HomeBackground;
