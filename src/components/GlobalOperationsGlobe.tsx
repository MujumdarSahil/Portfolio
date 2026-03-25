import { useEffect, useMemo, useRef } from 'react';
import Globe from 'react-globe.gl';
import type { GlobeMethods } from 'react-globe.gl';

type CityNode = {
  lat: number;
  lng: number;
  size: number;
  color: string;
  pulse: number;
};

type ArcLink = {
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  color: [string, string];
};

const cityNodes: CityNode[] = [
  { lat: 40.7128, lng: -74.006, size: 0.3, color: '#00E5FF', pulse: 1.5 },
  { lat: 51.5072, lng: -0.1276, size: 0.24, color: '#00FF9C', pulse: 1.2 },
  { lat: 35.6762, lng: 139.6503, size: 0.26, color: '#00E5FF', pulse: 1.1 },
  { lat: 1.3521, lng: 103.8198, size: 0.22, color: '#00FF9C', pulse: 1.35 },
  { lat: -33.8688, lng: 151.2093, size: 0.2, color: '#00E5FF', pulse: 1.05 },
  { lat: 28.6139, lng: 77.209, size: 0.2, color: '#00FF9C', pulse: 1.4 },
  { lat: -23.5505, lng: -46.6333, size: 0.2, color: '#00E5FF', pulse: 1.25 }
];

const arcLinks: ArcLink[] = [
  { startLat: 40.7128, startLng: -74.006, endLat: 51.5072, endLng: -0.1276, color: ['#00FFFF', '#00FF9C'] },
  { startLat: 51.5072, startLng: -0.1276, endLat: 35.6762, endLng: 139.6503, color: ['#00FFFF', '#00FF9C'] },
  { startLat: 35.6762, startLng: 139.6503, endLat: 1.3521, endLng: 103.8198, color: ['#00FFFF', '#00FF9C'] },
  { startLat: 1.3521, startLng: 103.8198, endLat: 28.6139, endLng: 77.209, color: ['#00FFFF', '#00FF9C'] },
  { startLat: 28.6139, startLng: 77.209, endLat: 40.7128, endLng: -74.006, color: ['#00FFFF', '#00FF9C'] },
  { startLat: -23.5505, startLng: -46.6333, endLat: 40.7128, endLng: -74.006, color: ['#00FFFF', '#00FF9C'] },
  { startLat: -33.8688, startLng: 151.2093, endLat: 35.6762, endLng: 139.6503, color: ['#00FFFF', '#00FF9C'] }
];

export default function GlobalOperationsGlobe() {
  const globeRef = useRef<GlobeMethods | undefined>(undefined);

  const ringData = useMemo(
    () =>
      cityNodes.map((node) => ({
        ...node,
        maxR: 3 + node.pulse,
        propagationSpeed: 1.5 + node.pulse,
        repeatPeriod: 700 + node.pulse * 350
      })),
    []
  );

  useEffect(() => {
    const globe = globeRef.current;
    if (!globe) {
      return;
    }

    globe.controls().enablePan = false;
    globe.controls().minDistance = 250;
    globe.controls().maxDistance = 310;
    globe.pointOfView({ altitude: 2.15 }, 1200);
    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 0.32;
  }, []);

  return (
    <div className="global-globe-shell">
      <div className="globe-aura"></div>
      <Globe
        ref={globeRef}
        width={640}
        height={420}
        backgroundColor="rgba(0,0,0,0)"
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        showAtmosphere={true}
        atmosphereColor="#00E5FF"
        atmosphereAltitude={0.24}
        arcsData={arcLinks}
        arcColor="color"
        arcAltitude={0.24}
        arcStroke={0.6}
        arcDashLength={0.55}
        arcDashGap={0.7}
        arcDashAnimateTime={1700}
        pointsData={cityNodes}
        pointLat="lat"
        pointLng="lng"
        pointAltitude={0.03}
        pointRadius="size"
        pointColor="color"
        ringsData={ringData}
        ringLat="lat"
        ringLng="lng"
        ringColor={() => '#00FFFF'}
        ringMaxRadius="maxR"
        ringPropagationSpeed="propagationSpeed"
        ringRepeatPeriod="repeatPeriod"
      />
      <div className="globe-scanline"></div>
      <div className="globe-noise"></div>
    </div>
  );
}
