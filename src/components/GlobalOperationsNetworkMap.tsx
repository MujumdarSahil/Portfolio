import { useMemo } from 'react';

type NodeColor = 'cyan' | 'green' | 'amber';

type NetworkNode = {
  id: string;
  x: number; // SVG coords in viewBox space
  y: number;
  r: number;
  color: NodeColor;
  delayS: number;
};

type NetworkLink = {
  from: string;
  to: string;
  delayS: number;
};

function quadArcPath(x1: number, y1: number, x2: number, y2: number, curve: number) {
  const cx = (x1 + x2) / 2;
  const cy = (y1 + y2) / 2 - Math.abs(x2 - x1) * curve;
  return `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`;
}

const colorToHex: Record<NodeColor, string> = {
  cyan: '#00E5FF',
  green: '#00FF9C',
  amber: '#FFD166',
};

export default function GlobalOperationsNetworkMap() {
  const nodes: NetworkNode[] = useMemo(
    () => [
      { id: 'ny', x: 270, y: 190, r: 4.2, color: 'cyan', delayS: 0.0 },
      { id: 'lon', x: 470, y: 155, r: 4.0, color: 'amber', delayS: 0.35 },
      { id: 'del', x: 630, y: 245, r: 3.7, color: 'cyan', delayS: 0.2 },
      { id: 'sg', x: 675, y: 285, r: 3.6, color: 'green', delayS: 0.55 },
      { id: 'tok', x: 785, y: 215, r: 4.1, color: 'green', delayS: 0.15 },
      { id: 'sp', x: 305, y: 335, r: 3.7, color: 'green', delayS: 0.6 },
      { id: 'jhb', x: 545, y: 315, r: 3.6, color: 'amber', delayS: 0.45 },
      { id: 'syd', x: 860, y: 365, r: 3.8, color: 'amber', delayS: 0.25 },
    ],
    [],
  );

  const links: NetworkLink[] = useMemo(
    () => [
      { from: 'ny', to: 'lon', delayS: 0.0 },
      { from: 'lon', to: 'del', delayS: 0.2 },
      { from: 'del', to: 'tok', delayS: 0.35 },
      { from: 'del', to: 'sg', delayS: 0.5 },
      { from: 'sg', to: 'syd', delayS: 0.65 },
      { from: 'ny', to: 'sp', delayS: 0.25 },
      { from: 'sp', to: 'jhb', delayS: 0.45 },
      { from: 'jhb', to: 'lon', delayS: 0.6 },
    ],
    [],
  );

  const nodeById = useMemo(() => new Map(nodes.map((n) => [n.id, n])), [nodes]);

  return (
    <div className="network-map-frame" aria-label="Global network tracking map">
      <div className="network-map-grid" />

      <div className="network-world-layer">
        <svg
          viewBox="0 0 1000 500"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid meet"
          style={{ position: 'absolute', inset: 0 }}
        >
          {/* Dark world outline (flat SVG) */}
          <g opacity={0.95}>
            {/* North America */}
            <path
              d="M125 190
                 Q155 120 240 135
                 Q295 145 325 190
                 Q335 220 300 240
                 Q250 265 200 255
                 Q150 240 125 190 Z"
              fill="rgba(0,229,255,0.06)"
              stroke="rgba(0,229,255,0.14)"
              strokeWidth="1"
            />
            {/* South America */}
            <path
              d="M275 285
                 Q315 265 350 290
                 Q380 315 365 350
                 Q345 395 305 395
                 Q265 380 255 340
                 Q245 305 275 285 Z"
              fill="rgba(0,229,255,0.05)"
              stroke="rgba(0,229,255,0.12)"
              strokeWidth="1"
            />
            {/* Europe + Africa */}
            <path
              d="M410 150
                 Q460 110 515 135
                 Q560 155 575 195
                 Q585 225 555 245
                 Q520 265 495 252
                 Q470 240 460 215
                 Q445 185 410 150 Z
                 M510 255
                 Q545 245 575 270
                 Q610 300 600 330
                 Q590 365 555 370
                 Q525 372 508 345
                 Q488 305 510 255 Z"
              fill="rgba(0,255,156,0.045)"
              stroke="rgba(0,255,156,0.10)"
              strokeWidth="1"
            />
            {/* Asia */}
            <path
              d="M560 145
                 Q615 100 690 105
                 Q770 112 820 155
                 Q875 205 840 245
                 Q805 285 735 280
                 Q660 275 610 245
                 Q560 215 560 145 Z"
              fill="rgba(0,229,255,0.05)"
              stroke="rgba(0,229,255,0.12)"
              strokeWidth="1"
            />
            {/* Australia */}
            <path
              d="M820 350
                 Q860 330 900 350
                 Q925 365 920 395
                 Q915 425 875 430
                 Q840 435 822 410
                 Q805 385 820 350 Z"
              fill="rgba(255,209,102,0.05)"
              stroke="rgba(255,209,102,0.12)"
              strokeWidth="1"
            />
          </g>

          {/* Connections */}
          <g>
            {links.map((l, idx) => {
              const a = nodeById.get(l.from);
              const b = nodeById.get(l.to);
              if (!a || !b) return null;

              const curve = 0.12 + idx * 0.004;
              const d = quadArcPath(a.x, a.y, b.x, b.y, curve);
              const strokeHex = idx % 2 === 0 ? '#00E5FF' : '#00FF9C';

              return (
                <path
                  key={`${l.from}-${l.to}`}
                  d={d}
                  className="network-connection"
                  style={{ stroke: strokeHex, animationDelay: `${l.delayS}s` }}
                />
              );
            })}
          </g>

          {/* Nodes */}
          <g>
            {nodes.map((n) => {
              const hex = colorToHex[n.color];
              return (
                <g key={n.id}>
                  <circle
                    cx={n.x}
                    cy={n.y}
                    r={n.r * 2.15}
                    fill="none"
                    stroke={hex}
                    strokeWidth="1"
                    opacity={0.28}
                    className="network-node-ring"
                    style={{ animationDelay: `${n.delayS}s` }}
                  />
                  <circle
                    cx={n.x}
                    cy={n.y}
                    r={n.r}
                    fill={hex}
                    opacity={0.95}
                    className="network-node"
                    style={{ animationDelay: `${n.delayS}s` }}
                  />
                </g>
              );
            })}
          </g>
        </svg>
      </div>
    </div>
  );
}

