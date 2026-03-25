import { Activity, Shield, Cpu, Layers, AlertTriangle, Cloud, Database } from 'lucide-react';
import GlowingBorder from './GlowingBorder';
import { personalInfo } from '../data/portfolioData';
import GlobalOperationsNetworkMap from './GlobalOperationsNetworkMap';

export default function CenterPanel() {
  return (
    <div className="space-y-4">
      <GlowingBorder glowColor="cyan">
        <div className="p-4 md:p-5">
          <div className="module-header-bar mb-4">
            <div className="module-header-label">
              <Layers className="w-4 h-4" />
              <span>AI GLOBAL NETWORK TRACKING</span>
            </div>
            <span className="blinking-indicator" aria-hidden="true" />
          </div>

          <div className="system-overview-strip mb-4">
            <div className="overview-block">
              <div className="overview-title">Active AI Models</div>
              <div className="overview-value">
                <span>RAG Engine</span>
                <Layers className="w-4 h-4 text-[#00E5FF]" />
              </div>
            </div>

            <div className="overview-block overview-block--warning">
              <div className="overview-title">Threat Level</div>
              <div className="overview-value" style={{ color: '#FFD166' }}>
                <span>ELEVATED</span>
                <AlertTriangle className="w-4 h-4" style={{ color: '#FFD166' }} />
              </div>
            </div>

            <div className="overview-block">
              <div className="overview-title">Cloud Systems</div>
              <div className="overview-value">
                <span>AWS/GCP</span>
                <Cloud className="w-4 h-4 text-[#00FF9C]" />
              </div>
            </div>

            <div className="overview-block">
              <div className="overview-title">Current Ops</div>
              <div className="overview-value">
                <span>Data Analysis</span>
                <Database className="w-4 h-4 text-[#00E5FF]" />
              </div>
            </div>
          </div>

          <div className="mb-3 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Activity className="w-4 h-4 status-dot text-[#00FF9C]" />
              <div className="text-xs font-mono tracking-[0.14em] text-[#E0F7FF]/70">
                OPERATOR: {personalInfo.name}
              </div>
            </div>
            <div className="flex items-center gap-3 text-xs font-mono tracking-[0.14em] text-[#E0F7FF]/70">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#00E5FF]" />
                CONNECTION: SECURE
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#00FF9C] animate-pulse" />
                CLEARANCE: {personalInfo.clearanceLevel}
              </div>
            </div>
          </div>

          <GlobalOperationsNetworkMap />
        </div>
      </GlowingBorder>
    </div>
  );
}
