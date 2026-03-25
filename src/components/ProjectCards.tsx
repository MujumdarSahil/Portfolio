import { Code2, AlertCircle, CheckCircle, Radar } from 'lucide-react';
import GlowingBorder from './GlowingBorder';
import { projects } from '../data/portfolioData';

export default function ProjectCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {projects.map((project) => (
        <GlowingBorder key={project.id} glowColor={project.status === 'ACTIVE' ? 'cyan' : 'green'}>
          <div className="p-6 h-full relative overflow-hidden project-panel">
            <div className="project-sweep" aria-hidden="true"></div>
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-2">
                <Code2 className="w-6 h-6 text-cyan-400" />
                <Radar className="w-4 h-4 text-green-300" />
              </div>
              <div className="flex flex-col items-end gap-1">
                <div className={`text-xs font-mono tracking-[0.12em] px-2 py-1 rounded-[3px] ${
                  project.status === 'ACTIVE'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40'
                    : 'bg-green-500/20 text-green-300 border border-green-400/40'
                }`}>
                  {project.status}
                </div>
                <div className="flex items-center gap-1 text-xs">
                  {project.threat === 'LOW' ? (
                    <CheckCircle className="w-3 h-3 text-green-400" />
                  ) : (
                    <AlertCircle className="w-3 h-3 text-[#FFB800]" />
                  )}
                  <span className={project.threat === 'LOW' ? 'text-green-400' : 'text-[#FFB800]'}>
                    {project.threat}
                  </span>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-bold text-cyan-200 mb-2 tracking-[0.12em]">{project.name}</h3>
            <p className="text-slate-300/85 text-sm mb-4 line-clamp-2 tracking-[0.06em]">{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2 py-1 bg-black/70 border border-green-400/35 text-green-300 rounded-[3px] font-mono tracking-[0.08em] hover-glow-expand"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </GlowingBorder>
      ))}
    </div>
  );
}
