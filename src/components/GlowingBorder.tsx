import { ReactNode } from 'react';

interface GlowingBorderProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

export default function GlowingBorder({
  children,
  className = '',
  glowColor = 'cyan'
}: GlowingBorderProps) {
  const glowClass = glowColor === 'cyan'
    ? 'shadow-[0_0_10px_rgba(0,229,255,0.22),0_0_30px_rgba(0,229,255,0.16),inset_0_0_10px_rgba(0,229,255,0.10)]'
    : 'green-glow';

  return (
    <div className={`relative ${className}`}>
      <div className={`absolute -inset-[1px] rounded-[3px] ${glowClass} opacity-90 pointer-events-none`}></div>
      <div className="command-card hover-glow-expand relative rounded-[3px]">
        <div className="tech-corners" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {children}
      </div>
    </div>
  );
}
