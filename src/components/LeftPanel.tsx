import { Briefcase, GraduationCap } from 'lucide-react';
import GlowingBorder from './GlowingBorder';
import { experience, education } from '../data/portfolioData';

export default function LeftPanel() {
  return (
    <div className="space-y-4">
      <GlowingBorder>
        <div className="p-4 md:p-5">
          <div className="module-header-bar mb-4">
            <div className="module-header-label">
              <Briefcase className="w-4 h-4 text-[#00E5FF]" />
              <span>EXPERIENCE LOG</span>
            </div>
            <span className="blinking-indicator" aria-hidden="true" />
          </div>

          <div className="timeline-list">
            {experience.map((exp, idx) => (
              <div key={idx} className="timeline-segment">
                <div className="timeline-strip">
                  <div className="timeline-strip-left">
                    <Briefcase className="w-4 h-4 text-[#00E5FF]" />
                    <span>{exp.title}</span>
                  </div>
                  <div className="text-[#E0F7FF]/60 text-[11px] font-mono tracking-[0.12em]">
                    {exp.period}
                  </div>
                </div>

                <div className="timeline-meta">
                  <div style={{ color: 'rgba(0,229,255,0.85)' }}>{exp.company}</div>
                  <div>{exp.details}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </GlowingBorder>

      <GlowingBorder>
        <div className="p-4 md:p-5">
          <div className="module-header-bar mb-4">
            <div className="module-header-label">
              <GraduationCap className="w-4 h-4 text-[#00FF9C]" />
              <span>EDUCATION</span>
            </div>
            <span className="blinking-indicator" aria-hidden="true" />
          </div>

          <div className="timeline-list">
            {education.map((edu, idx) => (
              <div key={idx} className="timeline-segment">
                <div className="timeline-strip">
                  <div className="timeline-strip-left">
                    <GraduationCap className="w-4 h-4 text-[#00FF9C]" />
                    <span>{edu.degree}</span>
                  </div>
                  <div className="text-[#E0F7FF]/60 text-[11px] font-mono tracking-[0.12em]">
                    {edu.year}
                  </div>
                </div>

                <div className="timeline-meta">
                  <div style={{ color: 'rgba(0,255,156,0.85)' }}>{edu.institution}</div>
                  <div>{edu.specialization}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </GlowingBorder>
    </div>
  );
}
