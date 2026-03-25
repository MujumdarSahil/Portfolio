import { Radar, ArrowRight } from 'lucide-react';
import GlowingBorder from './GlowingBorder';
import { projects } from '../data/portfolioData';

export default function BottomRow() {
  const featured = projects.slice(0, 3);

  return (
    <div className="bottom-row">
      <GlowingBorder glowColor="cyan">
        <div className="p-4 md:p-5">
          <div className="module-header-bar mb-3">
            <div className="module-header-label">
              <Radar className="w-4 h-4 text-[#00E5FF]" />
              <span>Telemetry</span>
            </div>
            <span className="blinking-indicator" aria-hidden="true" />
          </div>

          <div className="radar-panel">
            <div className="radar-grid" />
            <svg viewBox="0 0 100 60" width="100%" height="100%" preserveAspectRatio="none">
              <path
                d="M0,42 C10,35 20,38 30,28 C40,18 50,25 60,20 C72,14 82,18 92,8 L100,10"
                fill="none"
                stroke="rgba(0,229,255,0.85)"
                strokeWidth="1.6"
              />
              <path
                d="M0,49 C12,42 20,46 30,35 C40,25 52,30 62,26 C72,22 82,27 92,18 L100,18"
                fill="none"
                stroke="rgba(0,255,156,0.75)"
                strokeWidth="1.4"
              />
              <circle cx="60" cy="20" r="2" fill="#00E5FF" opacity="0.95" />
              <circle cx="92" cy="8" r="2" fill="#00FF9C" opacity="0.95" />
              <circle cx="30" cy="28" r="2" fill="#FFD166" opacity="0.95" />
            </svg>
            <div className="radar-sweep" />
          </div>
        </div>
      </GlowingBorder>

      <div className="bottom-projects">
        {featured.map((p) => (
          <GlowingBorder key={p.id} glowColor="cyan">
            <div className="p-4 md:p-5 project-module">
              <div className="project-module-top">
                <div className="project-module-title">{p.name}</div>
                <div className="project-module-sub">{p.subtitle}</div>
              </div>

              <div className="project-module-body">{p.description}</div>

              <button className="project-view-btn" type="button">
                <span>View Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </GlowingBorder>
        ))}
      </div>
    </div>
  );
}

