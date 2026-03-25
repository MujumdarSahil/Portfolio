import React from 'react';
import './index.css';
import { Mail, Phone, Fingerprint, Linkedin, Github, Globe as GlobeIcon, AtSign, CheckCircle2, ChevronRight, Mic, Play, ShieldAlert, Cpu, Network, Map, LayoutTemplate, Box, Database, Lock, Search } from 'lucide-react';
import GlobalOperationsGlobe from './components/GlobalOperationsGlobe';

function App() {
  return (
    <div className="cyber-root">
      {/* Background elements */}
      <div className="cyber-bg-grid"></div>
      <div className="cyber-bg-glow"></div>

      <div className="cyber-main-frame">
        {/* TOP HEADER */}
        <div className="cyber-header flex items-start justify-between">
          <div className="flex flex-col gap-3 z-10">
            {/* Profile Info bordered box */}
            <div className="profile-box flex items-center gap-4">
              <div className="profile-pic-container">
                <img src="https://i.pravatar.cc/150?img=11" alt="Sahil" className="profile-pic" />
              </div>
              <div>
                <h1 className="cyber-name text-2xl font-bold tracking-wide text-white">Sahil Nitin Mujumdar</h1>
                <p className="cyber-role text-[11px] tracking-[0.2em] text-[#00d2ff]">Data Scientist | Gen AI & Cyber Security Specialist</p>
              </div>
            </div>

            {/* Social Links Sub-bar */}
            <div className="social-bar flex items-center gap-2">
              <button className="social-btn"><Github className="w-4 h-4" /></button>
              <button className="social-btn"><Linkedin className="w-4 h-4" /></button>
              <button className="social-btn"><GlobeIcon className="w-4 h-4" /></button>
              <button className="email-pill flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="text-[10px] tracking-wider uppercase">Email</span>
              </button>
            </div>
          </div>

          <div className="header-center text-center -ml-16 mt-8 z-10">
            <div className="system-overview-title flex items-center justify-center gap-4">
              <div className="cyber-line-left"></div>
              <span className="text-[12px] uppercase tracking-[3px] text-white bg-[#030712] px-4 py-1 border border-[#00d2ff]/30 rounded-sm">System Overview</span>
              <div className="cyber-line-right"></div>
            </div>
          </div>

          <div className="header-right text-right z-10">
            <div className="contact-box flex items-center gap-4 text-[12px] text-[#a0aab0] font-mono">
              <span className="flex items-center gap-2"><Phone className="w-3 h-3 text-[#00d2ff]" /> +91 7588005913</span>
              <span className="h-4 w-[1px] bg-[#00d2ff]/30"></span>
              <span className="flex items-center gap-2">21107050.sahil.mujumdar@gmail.com</span>
            </div>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="cyber-grid mt-6">
          
          {/* LEFT COLUMN */}
          <div className="col-left flex flex-col gap-4">
            <div className="cyber-panel">
              <div className="panel-title flex items-center gap-2 text-[#00d2ff] uppercase text-[12px] tracking-wider mb-4 font-bold">
                <ChevronRight className="w-4 h-4" /> Experience Log
              </div>
              <div className="flex flex-col gap-4">
                <div className="exp-item pl-2 border-l border-[#00d2ff]/30 relative">
                  <div className="exp-dot"></div>
                  <h3 className="text-sm font-semibold text-white">Jr. Data Scientist</h3>
                  <p className="text-[10px] text-[#00d2ff] mb-2">Tobox Ventures</p>
                  <div className="h-[1px] w-full bg-gradient-to-r from-[#00d2ff]/20 to-transparent"></div>
                </div>
                <div className="exp-item pl-2 border-l border-[#00d2ff]/30 relative">
                  <div className="exp-dot"></div>
                  <h3 className="text-sm font-semibold text-white">Data Analyst Intern</h3>
                  <p className="text-[10px] text-[#00d2ff] mb-2">NIC</p>
                  <div className="h-[1px] w-full bg-gradient-to-r from-[#00d2ff]/20 to-transparent"></div>
                </div>
                <div className="exp-item pl-2 border-l border-[#00d2ff]/30 relative">
                  <div className="exp-dot"></div>
                  <h3 className="text-sm font-semibold text-white">Networking Intern</h3>
                  <p className="text-[10px] text-[#00d2ff]">Zscaler</p>
                </div>
              </div>
            </div>

            <div className="cyber-panel">
              <div className="panel-title flex items-center gap-2 text-[#00d2ff] uppercase text-[12px] tracking-wider mb-4 font-bold">
                <ChevronRight className="w-4 h-4" /> Education
              </div>
              <div className="exp-item pl-2 border-l border-[#00d2ff]/30 relative">
                <div className="exp-dot"></div>
                <h3 className="text-sm font-semibold text-white">B. E. Data Science</h3>
                <p className="text-[10px] text-[#00d2ff]">APSIT, Mumbai</p>
                <div className="text-[10px] text-[#00ff9c] mt-1">CGPA: 7.4</div>
              </div>
            </div>
          </div>

          {/* CENTER COLUMN */}
          <div className="col-center flex flex-col gap-4">
            {/* 4 Stats Boxes */}
            <div className="grid grid-cols-4 gap-3">
              <div className="stat-box text-center">
                <div className="text-[9px] uppercase tracking-wider text-[#a0aab0] mb-1 flex items-center justify-center gap-1"><Cpu className="w-3 h-3 text-[#00d2ff]" /> Active AI Models</div>
                <div className="text-xs font-mono text-white">RAG Engine</div>
              </div>
              <div className="stat-box stat-box-alert text-center">
                <div className="text-[9px] uppercase tracking-wider text-[#ffa500] mb-1 flex items-center justify-center gap-1"><ShieldAlert className="w-3 h-3" /> Threat Level</div>
                <div className="text-xs font-mono text-[#ffa500] font-bold">ELEVATED</div>
              </div>
              <div className="stat-box text-center">
                <div className="text-[9px] uppercase tracking-wider text-[#a0aab0] mb-1 flex items-center justify-center gap-1"><Network className="w-3 h-3 text-[#00d2ff]" /> Cloud Systems</div>
                <div className="text-xs font-mono text-white">AWS / GCP</div>
              </div>
              <div className="stat-box text-center">
                <div className="text-[9px] uppercase tracking-wider text-[#a0aab0] mb-1 flex items-center justify-center gap-1"><Database className="w-3 h-3 text-[#00ff9c]" /> Current Ops</div>
                <div className="text-xs font-mono text-[#00ff9c]">Data Analysis</div>
              </div>
            </div>

            {/* Map Area */}
            <div className="map-panel relative flex-1 min-h-[300px] bg-transparent mt-2">
              <GlobalOperationsGlobe />
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="col-right flex flex-col gap-4">
            <div className="cyber-panel">
              <div className="panel-title flex items-center justify-between text-[#00d2ff] uppercase text-[12px] tracking-wider mb-4 font-bold">
                 <div className="flex items-center gap-2"><ChevronRight className="w-4 h-4" /> AI Skill Matrix</div>
                 <div className="flex gap-1"><div className="w-2 h-1 bg-[#00d2ff]"></div><div className="w-8 h-1 bg-[#00d2ff]/30"></div></div>
              </div>
              <div className="flex flex-col gap-3">
                <SkillBar name="Python" level={90} color="#00ff9c" />
                <SkillBar name="TensorFlow" level={80} color="#ffa500" />
                <SkillBar name="Cyber Security" level={85} color="#00d2ff" />
                <SkillBar name="Cloud DevOps" level={75} color="#00ff9c" />
                <SkillBar name="RAG Systems" level={85} color="#00ff9c" />
              </div>
            </div>

            <div className="cyber-panel flex-1 flex flex-col">
              <div className="panel-title flex items-center justify-between text-[#00d2ff] uppercase text-[12px] tracking-wider mb-4 font-bold">
                 <div className="flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Command Interface</div>
                 <div className="flex gap-1"><div className="w-8 h-1 bg-[#00d2ff]/30"></div><div className="w-2 h-1 bg-[#00d2ff]"></div></div>
              </div>
              
              <div className="cmd-window flex-1 bg-[#030712] border border-[#00d2ff]/20 p-3 font-mono text-[11px] text-[#00ff9c] mb-4">
                <p>Welcome!</p>
                <p>How can I assist you today?</p>
                <span className="animate-pulse">_</span>
              </div>

              <div className="flex flex-col gap-2">
                <button className="cmd-btn">Show My Projects</button>
                <button className="cmd-btn">List My Skills</button>
                <button className="cmd-btn cmd-btn-active">Run Simulation</button>
              </div>
              
              <div className="flex items-center justify-between mt-4 border-t border-[#00d2ff]/20 pt-3">
                <button className="text-[#00d2ff] hover:text-white transition-colors"><Mic className="w-4 h-4" /></button>
                <button className="text-[#00d2ff] hover:text-white transition-colors"><Play className="w-4 h-4 fill-current" /></button>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM ROW */}
        <div className="bottom-grid mt-4">
          <div className="projects-grid">
            <ProjectCard 
              title="MedAgentX" 
              sub="Clinical AI Platform" 
              desc="Medical image processing pipeline for MRI scans..." 
              icon={<Search className="w-5 h-5 text-[#00d2ff]" />}
            />
            <ProjectCard 
              title="Blockchain" 
              sub="Ammunition System" 
              desc="Blockchain to securely track ammo supply..."
              icon={<Lock className="w-5 h-5 text-[#ffa500]" />}
              isAlert
            />
            <ProjectCard 
              title="OmniTutor AI" 
              sub="Learning Agent" 
              desc="Personalized learning agent for advanced subjects..."
              icon={<Box className="w-5 h-5 text-[#00ff9c]" />}
            />
          </div>

          <div className="certs-panel cyber-panel flex flex-col justify-center">
            <div className="panel-title flex items-center gap-2 text-[#00d2ff] uppercase text-[12px] tracking-wider mb-4 font-bold">
              <CheckCircle2 className="w-4 h-4" /> Certifications
            </div>
            <div className="flex items-center justify-between px-2">
               <div className="cert-item text-center">
                  <div className="w-12 h-12 border border-[#00d2ff] rounded bg-[#00d2ff]/10 mx-auto flex items-center justify-center text-[10px] font-bold text-white mb-2">INCET 23 Paper</div>
               </div>
               <div className="cert-item text-center">
                  <div className="w-12 h-12 border border-[#ffa500] rounded bg-[#ffa500]/10 mx-auto flex items-center justify-center mb-2"><span className="text-white text-xs font-bold">AWS</span></div>
                  <div className="text-[9px] text-[#ffa500]">Certified</div>
               </div>
               <div className="cert-item text-center">
                  <div className="w-12 h-12 border border-[#00d2ff] rounded bg-[#00d2ff]/10 mx-auto flex items-center justify-center mb-2"><div className="w-6 h-6 bg-[#00d2ff] rounded-full flex items-center justify-center text-black font-bold text-[8px]">Z</div></div>
                  <div className="text-[9px] text-[#00d2ff]">Zscaler</div>
               </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

function SkillBar({ name, level, color }: { name: string, level: number, color: string }) {
  // Determine full blocks (each 10%)
  const fullBlocks = Math.floor(level / 10);
  const blocks = Array.from({ length: 10 }).map((_, i) => i < fullBlocks);
  
  return (
    <div className="skill-item flex flex-col gap-1">
      <div className="flex justify-between text-[11px] font-mono">
        <span className="text-white">{name}</span>
      </div>
      <div className="flex gap-[2px]">
        {blocks.map((filled, i) => (
          <div key={i} className="flex-1 h-2 rounded-[1px] border border-black" 
               style={{ 
                 backgroundColor: filled ? color : '#0a1a22', 
                 boxShadow: filled ? `0 0 6px ${color}80` : 'none',
                 opacity: filled ? 1 : 0.3
               }}></div>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ title, sub, desc, icon, isAlert = false }: any) {
  const color = isAlert ? '#ffa500' : '#00d2ff';
  
  return (
    <div className="project-card cyber-panel flex flex-col relative overflow-hidden group hover:border-[#00d2ff] transition-colors cursor-pointer">
      <div className="absolute top-0 left-0 w-8 h-8 opacity-20" style={{ background: `radial-gradient(circle, ${color} 0%, transparent 70%)` }}></div>
      <div className="flex items-start gap-3 mb-2">
        <div className="w-10 h-10 border border-[#00d2ff]/30 rounded bg-black/40 flex items-center justify-center">
           {icon}
        </div>
        <div>
          <h3 className="text-sm font-bold text-white tracking-wider">{title}</h3>
          <p className="text-[10px] tracking-widest uppercase font-mono" style={{ color }}>{sub}</p>
        </div>
      </div>
      <p className="text-[10px] text-[#a0aab0] mt-2 mb-4 leading-relaxed flex-1">{desc}</p>
      
      <div className="flex items-center justify-between mt-auto pt-2 border-t border-[#00d2ff]/20">
        <span className="text-[10px] text-white uppercase tracking-wider bg-white/5 px-3 py-1 border border-white/10 rounded-sm group-hover:bg-[#00d2ff]/20 group-hover:border-[#00d2ff]/50 transition-all font-mono">View Project</span>
        <div className="flex gap-1">
           <div className="w-2 h-3 bg-white/20"></div>
           <div className="w-2 h-4 bg-white/40"></div>
           <div className="w-2 h-2 bg-white/10"></div>
        </div>
      </div>
    </div>
  )
}

export default App;
