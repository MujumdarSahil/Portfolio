import { Mail, Phone, Fingerprint, Linkedin, Github, Globe, AtSign } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function TopIdentityBar() {
  return (
    <div className="hud-identity-bar">
      <div className="hud-identity-left">
        <div className="hud-avatar" aria-hidden="true">
          <div className="hud-avatar-inner">{personalInfo.initials}</div>
        </div>

        <div className="min-w-0">
          <div className="hud-identity-name">{personalInfo.name}</div>
          <div className="hud-identity-role">{personalInfo.role}</div>
        </div>

        <div className="hud-identity-actions">
          <button className="hud-icon-btn" aria-label="Website">
            <Globe className="w-4 h-4" />
          </button>
          <button className="hud-icon-btn" aria-label="LinkedIn">
            <Linkedin className="w-4 h-4" />
          </button>
          <button className="hud-icon-btn" aria-label="GitHub">
            <Github className="w-4 h-4" />
          </button>
          <button className="hud-icon-btn" aria-label="Email">
            <AtSign className="w-4 h-4" />
          </button>

          <button className="hud-email-pill" type="button">
            <Mail className="w-4 h-4" />
            <span>Email</span>
          </button>
        </div>
      </div>

      <div className="hud-identity-right">
        <div className="hud-identity-contact">
          <Phone className="w-4 h-4" />
          <span>{personalInfo.phone}</span>
        </div>
        <div className="hud-identity-divider" aria-hidden="true" />
        <div className="hud-identity-contact">
          <Fingerprint className="w-4 h-4" />
          <span>{personalInfo.operatorId}</span>
        </div>
        <div className="hud-identity-divider" aria-hidden="true" />
        <div className="hud-identity-contact">
          <Mail className="w-4 h-4" />
          <span>{personalInfo.email}</span>
        </div>
      </div>
    </div>
  );
}

