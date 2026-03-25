import { useEffect, useRef, useState } from 'react';
import { Brain, MessageSquare, Layers, Shield, Cloud, Wrench } from 'lucide-react';
import GlowingBorder from './GlowingBorder';
import { skills, chatResponses } from '../data/portfolioData';

const activityEvents = [
  'Initializing RAG pipeline...',
  'Threat detected...',
  'Model optimized...',
  'Telemetry stream synchronized...',
  'Signal integrity confirmed...',
  'Inference cache refreshed...'
];

export default function RightPanel() {
  const [skillsPulse, setSkillsPulse] = useState(false);
  const [chatMessages, setChatMessages] = useState<Array<{ text: string; type: 'user' | 'ai' }>>([
    { text: "AI ASSISTANT ONLINE. How can I assist you?", type: 'ai' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [systemLogs, setSystemLogs] = useState<string[]>([
    '[SYS] Initializing RAG pipeline...',
    '[ALERT] Threat detected...',
    '[OPT] Model optimized...'
  ]);
  const timersRef = useRef<number[]>([]);

  useEffect(() => {
    const logInterval = window.setInterval(() => {
      const nextEvent = activityEvents[Math.floor(Math.random() * activityEvents.length)];
      const stamp = new Date().toLocaleTimeString('en-US', { hour12: false });
      setSystemLogs((prev) => [`[${stamp}] ${nextEvent}`, ...prev].slice(0, 6));
    }, 2600);

    // Capture the current timer list reference so cleanup doesn't rely on a mutable ref.
    const timers = timersRef.current;

    return () => {
      window.clearInterval(logInterval);
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  const handleCommand = (command: keyof typeof chatResponses) => {
    setChatMessages(prev => [
      ...prev,
      { text: command.toUpperCase(), type: 'user' }
    ]);

    if (command === 'projects') {
      document.getElementById('projects-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    if (command === 'skills') {
      setSkillsPulse(true);
      const pulseTimer = window.setTimeout(() => setSkillsPulse(false), 1400);
      timersRef.current.push(pulseTimer);
    }

    if (command === 'simulation') {
      const stagedMessages = ['Initializing AI engine...', 'Processing data...', 'Prediction complete: Optimized'];
      setIsTyping(true);
      const first = window.setTimeout(() => {
        setChatMessages((prev) => [...prev, { text: stagedMessages[0], type: 'ai' }]);
      }, 800);
      const second = window.setTimeout(() => {
        setChatMessages((prev) => [...prev, { text: stagedMessages[1], type: 'ai' }]);
      }, 1500);
      const third = window.setTimeout(() => {
        setChatMessages((prev) => [...prev, { text: stagedMessages[2], type: 'ai' }]);
        setIsTyping(false);
      }, 2200);
      timersRef.current.push(first, second, third);
      return;
    }

    setIsTyping(true);
    const responseTimer = window.setTimeout(() => {
      setChatMessages((prev) => [...prev, { text: chatResponses[command], type: 'ai' }]);
      setIsTyping(false);
    }, 1000 + Math.floor(Math.random() * 1000));
    timersRef.current.push(responseTimer);
  };

  return (
    <div className="space-y-4">
      <GlowingBorder glowColor="green" className={skillsPulse ? 'panel-highlight' : ''}>
        <div className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <Brain className="w-6 h-6 text-[#00FF9C]" />
            <h2 className="hud-header text-xl font-bold text-[#00FF9C] tracking-[0.2em]">
              AI Skill Matrix
            </h2>
          </div>

          <div className="space-y-4">
            {skills.map((skill, idx) => (
              <div key={idx}>
                <div className="flex justify-between mb-1">
                  <div className="flex items-center gap-2 min-w-0">
                    {skill.category === 'AI' ? (
                      <Layers className="w-3 h-3 text-[#00E5FF]" />
                    ) : skill.category === 'Security' ? (
                      <Shield className="w-3 h-3 text-[#00FF9C]" />
                    ) : skill.category === 'Cloud' ? (
                      <Cloud className="w-3 h-3 text-[#FFD166]" />
                    ) : (
                      <Wrench className="w-3 h-3 text-[#FFD166]" />
                    )}
                    <span className="text-xs text-[#E0F7FF]/70 tracking-[0.08em] truncate">{skill.name}</span>
                  </div>
                  <span className="text-xs text-[#E0F7FF]/85 tracking-[0.1em]">{skill.level}%</span>
                </div>
                {(() => {
                  const segments = 20;
                  const filled = Math.max(0, Math.min(segments, Math.round((skill.level / 100) * segments)));
                  const filledClass =
                    skill.category === 'AI'
                      ? 'segmented-segment--filled-cyan'
                      : skill.category === 'Security'
                        ? 'segmented-segment--filled-green'
                        : 'segmented-segment--filled-amber';

                  return (
                    <div
                      className="segmented-progress"
                      style={{ gridTemplateColumns: `repeat(${segments}, minmax(0, 1fr))` }}
                      aria-label={`${skill.name} skill level ${skill.level}%`}
                      role="img"
                    >
                      {Array.from({ length: segments }).map((_, sIdx) => (
                        <div
                          key={sIdx}
                          className={`segmented-segment ${sIdx < filled ? filledClass : ''}`}
                          style={{ animationDelay: `${(idx + sIdx) * 0.03}s` }}
                        />
                      ))}
                    </div>
                  );
                })()}
              </div>
            ))}
          </div>
        </div>
      </GlowingBorder>

      <GlowingBorder glowColor="cyan">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <MessageSquare className="w-6 h-6 text-[#00E5FF]" />
            <h2 className="hud-header text-xl font-bold text-[#E0F7FF] tracking-[0.2em]">
              AI INTERFACE
            </h2>
          </div>

          <div className="terminal-window p-4 h-48 overflow-y-auto mb-4 text-xs space-y-2">
            {chatMessages.map((msg, idx) => (
              <div key={idx} className={msg.type === 'user' ? 'text-[#00FF9C]' : 'text-[#00E5FF]'}>
                <span className="text-[#E0F7FF]/45">{msg.type === 'user' ? '> ' : '$ '}</span>
                {msg.text}
              </div>
            ))}
            {isTyping && (
              <div className="text-[#00E5FF] typing-dots terminal-cursor">
                <span className="text-[#E0F7FF]/45">$ </span>
                Thinking
              </div>
            )}
          </div>

          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => handleCommand('projects')}
              className="control-switch"
            >
              <div className="control-switch__row">
                <span className="control-switch__label">Show My Projects</span>
                <span className="control-switch__led" aria-hidden="true" />
              </div>
            </button>
            <button
              onClick={() => handleCommand('skills')}
              className="control-switch control-switch--green"
            >
              <div className="control-switch__row">
                <span className="control-switch__label">List My Skills</span>
                <span className="control-switch__led" aria-hidden="true" />
              </div>
            </button>
            <button
              onClick={() => handleCommand('simulation')}
              className="control-switch control-switch--amber"
            >
              <div className="control-switch__row">
                <span className="control-switch__label">Run Simulation</span>
                <span className="control-switch__led" aria-hidden="true" />
              </div>
            </button>
          </div>
        </div>
      </GlowingBorder>

      <GlowingBorder glowColor="green">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="hud-header text-lg font-bold text-[#00FF9C] tracking-[0.18em]">
              SYSTEM ACTIVITY
            </h2>
            <div className="flex items-center gap-2">
              <div className="status-dot w-2.5 h-2.5 bg-[#00FF9C] rounded-full"></div>
              <div className="alert-flash w-2 h-2 bg-[#FF3B3B] rounded-full"></div>
            </div>
          </div>

          <div className="bg-black/65 border border-cyan-400/30 p-3 h-28 overflow-hidden font-mono text-xs space-y-1 mb-4">
            {systemLogs.map((log, idx) => (
              <div
                key={`${log}-${idx}`}
                className={log.toLowerCase().includes('threat') ? 'text-[#FF3B3B] status-blink' : 'text-cyan-200/85'}
              >
                {log}
              </div>
            ))}
          </div>

          <div className="space-y-2 mb-3">
            <div className="load-bar-track"><div className="load-bar-fill" style={{ animationDelay: '0s' }}></div></div>
            <div className="load-bar-track"><div className="load-bar-fill" style={{ animationDelay: '0.6s' }}></div></div>
            <div className="load-bar-track"><div className="load-bar-fill" style={{ animationDelay: '1.2s' }}></div></div>
          </div>

          <div className="data-stream text-[11px] text-cyan-200/75 font-mono px-3 py-2 border border-cyan-400/20 bg-black/55">
            DATA BUS: 11001010 00111001 11100010 01001101
          </div>
        </div>
      </GlowingBorder>
    </div>
  );
}
