"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { MapPin, Activity, Shield, AlertTriangle } from "lucide-react";

const markers = [
  { id: 1, x: "45%", y: "30%", risk: "high", name: "Northern Slopes", activity: "2.4mm/h" },
  { id: 2, x: "65%", y: "45%", risk: "medium", name: "Eastern Ridge", activity: "0.8mm/h" },
  { id: 3, x: "35%", y: "60%", risk: "low", name: "Southern Valley", activity: "0.1mm/h" },
  { id: 4, x: "55%", y: "75%", risk: "high", name: "Reservoir Rim", activity: "3.1mm/h" },
];

export default function LandslideMap() {
  const [activeMarker, setActiveMarker] = useState<typeof markers[0] | null>(null);
  const [scanLineY, setScanLineY] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScanLineY((prev) => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[500px] bg-[#0a0f1c] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
      {/* Topographical Background Grid */}
      <div className="absolute inset-0 opacity-20" 
           style={{ backgroundImage: 'linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
      
      {/* Scanning Line Effect */}
      <motion.div 
        className="absolute w-full h-px bg-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.5)] z-10"
        style={{ top: `${scanLineY}%` }}
      />

      {/* Terrain Contours (Simulated with SVG) */}
      <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 800 500">
        <path d="M100,250 Q200,150 400,250 T700,250" fill="none" stroke="#10b981" strokeWidth="0.5" />
        <path d="M150,300 Q250,200 450,300 T750,300" fill="none" stroke="#10b981" strokeWidth="0.5" />
        <path d="M50,200 Q150,100 350,200 T650,200" fill="none" stroke="#10b981" strokeWidth="0.5" />
        <path d="M200,350 Q300,250 500,350 T800,350" fill="none" stroke="#10b981" strokeWidth="0.5" />
      </svg>

      {/* Markers */}
      {markers.map((marker) => (
        <div
          key={marker.id}
          className="absolute z-20 cursor-pointer"
          style={{ left: marker.x, top: marker.y }}
          onMouseEnter={() => setActiveMarker(marker)}
          onMouseLeave={() => setActiveMarker(null)}
        >
          <div className="relative">
            {/* Pulsing Aura */}
            <motion.div
              animate={{ scale: [1, 2, 1], opacity: [0.3, 0.1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
              className={`absolute -inset-4 rounded-full ${marker.risk === 'high' ? 'bg-red-500' : marker.risk === 'medium' ? 'bg-amber-500' : 'bg-emerald-500'}`}
            />
            {/* Core Marker */}
            <div className={`w-3 h-3 rounded-full border-2 border-white shadow-lg ${marker.risk === 'high' ? 'bg-red-500' : marker.risk === 'medium' ? 'bg-amber-500' : 'bg-emerald-500'}`} />
            
            {/* Tooltip on Hover or always for high risk */}
            {(activeMarker?.id === marker.id || marker.risk === 'high') && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#111827]/95 border border-white/10 p-2 rounded-lg backdrop-blur-md whitespace-nowrap z-30"
              >
                <div className="flex items-center gap-2 mb-1">
                  <Activity className={`w-3 h-3 ${marker.risk === 'high' ? 'text-red-400' : 'text-emerald-400'}`} />
                  <span className="text-[10px] font-bold text-white">{marker.name}</span>
                </div>
                <div className="text-[9px] text-[#94a3b8]">Movement: {marker.activity}</div>
              </motion.div>
            )}
          </div>
        </div>
      ))}

      {/* HUD Elements */}
      <div className="absolute top-4 left-4 z-30 space-y-2">
        <div className="px-3 py-1.5 rounded-full bg-black/40 border border-white/10 backdrop-blur-sm flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">Live Terrain Scan</span>
        </div>
        <div className="px-3 py-1.5 rounded-full bg-black/40 border border-white/10 backdrop-blur-sm flex items-center gap-2">
          <Shield className="w-3 h-3 text-sky-400" />
          <span className="text-[10px] font-mono text-sky-400 uppercase tracking-widest">Active Protection</span>
        </div>
      </div>

      <div className="absolute bottom-4 right-4 z-30">
        <div className="bg-black/60 backdrop-blur-md border border-white/10 p-3 rounded-xl flex items-center gap-4">
          <div className="flex flex-col items-center">
            <span className="text-[8px] text-[#94a3b8] uppercase mb-1">Sensors</span>
            <span className="text-sm font-bold text-white">1,248</span>
          </div>
          <div className="w-px h-8 bg-white/10" />
          <div className="flex flex-col items-center">
            <span className="text-[8px] text-[#94a3b8] uppercase mb-1">Alerts</span>
            <span className="text-sm font-bold text-red-400">03</span>
          </div>
        </div>
      </div>

      {/* Compass/Coordinates */}
      <div className="absolute top-4 right-4 z-30 text-[9px] font-mono text-white/30 text-right">
        30° 22&apos; 48&quot; N<br />
        78° 28&apos; 48&quot; E
      </div>
    </div>
  );
}
