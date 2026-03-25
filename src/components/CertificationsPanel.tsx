import { Award } from 'lucide-react';
import GlowingBorder from './GlowingBorder';
import { certifications } from '../data/portfolioData';

export default function CertificationsPanel() {
  return (
    <GlowingBorder glowColor="cyan">
      <div className="p-4 md:p-5">
        <div className="module-header-bar mb-4">
          <div className="module-header-label">
            <Award className="w-4 h-4 text-[#00E5FF]" />
            <span>Certifications</span>
          </div>
          <span className="blinking-indicator" aria-hidden="true" />
        </div>

        <div className="cert-grid">
          {certifications.map((c) => (
            <div key={c.id} className="cert-tile">
              <div className="cert-badge">{c.short}</div>
              <div className="cert-meta">
                <div className="cert-name">{c.name}</div>
                <div className="cert-sub">{c.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </GlowingBorder>
  );
}

