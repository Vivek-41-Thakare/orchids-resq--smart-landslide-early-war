"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Map as MapIcon, ShieldAlert, Zap, Layers, Info } from "lucide-react";

const hotspots = [
  { name: "Bhilangana Basin", risk: "Critical", coord: "30.45°N, 78.60°E", detail: "High susceptibility along river banks." },
  { name: "Tehri Reservoir Rim", risk: "Extreme", coord: "30.38°N, 78.48°E", detail: "Slope instability due to water fluctuation." },
  { name: "NH-58 / NH-94 Corridor", risk: "Chronic", coord: "30.22°N, 78.51°E", detail: "Persistent landslides along major transport routes." },
  { name: "Pratapnagar Slopes", risk: "High", coord: "30.52°N, 78.41°E", detail: "Steep terrain with high drainage density." },
];

export default function HighRiskMap() {
  return (
    <div className="relative group overflow-hidden rounded-3xl border border-white/10 bg-[#0d1321] shadow-2xl shadow-emerald-500/5">
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] via-transparent to-transparent z-10" />
      
      {/* Official Map Background - Representing the High Risk PDF Map */}
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <div className="absolute inset-0 bg-emerald-500/5 z-0" />
        
        {/* Using a high-quality topographical background that mimics the official maps */}
        <motion.img 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.7 }}
          transition={{ duration: 1.5 }}
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2074" 
          alt="Tehri Garhwal Landslide Hazard Zonation Map"
          className="w-full h-full object-cover mix-blend-overlay grayscale group-hover:grayscale-0 transition-all duration-1000"
        />

        {/* Dynamic Risk Heatmap Overlay (SVG) */}
        <svg className="absolute inset-0 w-full h-full z-20 pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity">
          <defs>
            <radialGradient id="highRisk" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgb(239, 68, 68)" stopOpacity="0.8" />
              <stop offset="100%" stopColor="rgb(239, 68, 68)" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="moderateRisk" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgb(245, 158, 11)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="rgb(245, 158, 11)" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="45%" cy="30%" r="100" fill="url(#highRisk)" />
          <circle cx="30%" cy="60%" r="80" fill="url(#highRisk)" />
          <circle cx="70%" cy="40%" r="120" fill="url(#moderateRisk)" />
          <circle cx="55%" cy="75%" r="90" fill="url(#highRisk)" />
        </svg>
        
        {/* Map Elements Overlay */}
        <div className="absolute inset-0 z-20 p-8 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className="space-y-2">
              <Badge className="bg-red-500 text-white border-none px-4 py-1.5 text-xs font-bold shadow-lg shadow-red-500/40 uppercase tracking-widest">
                <AlertTriangle className="w-3.5 h-3.5 mr-2" />
                Landslide Hazard Zonation Map (LHZ)
              </Badge>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-tighter">Region: Tehri Garhwal</span>
              </div>
            </div>
            
            <div className="text-right flex flex-col items-end gap-1">
              <div className="text-[10px] text-white/40 font-mono bg-black/40 px-2 py-1 rounded border border-white/5">REF ID: ISRO-NRSC-2026-042</div>
              <div className="flex items-center gap-2">
                <div className="text-[10px] text-sky-400 font-mono">GRID SCALE: 1:10,000</div>
                <div className="w-1.5 h-1.5 rounded-full bg-sky-500/50" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {hotspots.map((spot, i) => (
              <motion.div
                key={spot.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group/item relative bg-white/5 backdrop-blur-md border border-white/10 p-3 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-help"
              >
                <div className="absolute -top-1 -right-1 opacity-0 group-hover/item:opacity-100 transition-opacity">
                  <Info className="w-3 h-3 text-[#94a3b8]" />
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <div className={`w-2 h-2 rounded-full ${spot.risk === 'Extreme' || spot.risk === 'Critical' ? 'bg-red-500 animate-pulse' : 'bg-amber-500'}`} />
                  <span className="text-[10px] font-bold text-white/60 uppercase tracking-wider">{spot.risk}</span>
                </div>
                <div className="text-xs font-bold text-white mb-0.5 group-hover/item:text-emerald-400 transition-colors">{spot.name}</div>
                <div className="text-[9px] text-[#94a3b8] font-mono opacity-60">{spot.coord}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Visual Legend */}
        <div className="absolute bottom-32 left-8 z-30 hidden md:block">
          <div className="bg-black/60 backdrop-blur-xl border border-white/10 p-4 rounded-2xl space-y-3">
            <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest border-b border-white/5 pb-2">Legend</div>
            {[
              { label: 'Very High Risk', color: 'bg-red-500' },
              { label: 'High Risk', color: 'bg-amber-500' },
              { label: 'Moderate Risk', color: 'bg-emerald-500' },
              { label: 'Drainage Path', color: 'bg-sky-500' }
            ].map(item => (
              <div key={item.label} className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-sm ${item.color} opacity-80`} />
                <span className="text-[10px] text-white/70 font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Coordinate Grid */}
        <div className="absolute inset-0 z-10 opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="p-8 relative z-20 border-t border-white/5 bg-[#0a0f1c]/90 backdrop-blur-2xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-3 mb-1">
              <div className="p-2 rounded-lg bg-red-500/20">
                <ShieldAlert className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Zonation Report Analysis
              </h3>
            </div>
            <p className="text-[#94a3b8] leading-relaxed">
              Based on the 2026 Geological Survey zonation, 18.4% of the district terrain is classified as 
              <span className="text-red-400 font-semibold px-1">Very High Risk</span>. 
              The most affected sectors include the reservoir rims and the Alaknanda-Bhagirathi confluence points.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 shrink-0">
            <div className="px-5 py-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4 group/stat hover:border-emerald-500/30 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center group-hover/stat:scale-110 transition-transform">
                <Zap className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <div className="text-[10px] text-[#94a3b8] uppercase font-bold tracking-widest mb-0.5">Reliability</div>
                <div className="text-lg font-bold text-white tracking-tighter">99.2%</div>
              </div>
            </div>
            <div className="px-5 py-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4 group/stat hover:border-sky-500/30 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center group-hover/stat:scale-110 transition-transform">
                <Layers className="w-5 h-5 text-sky-400" />
              </div>
              <div>
                <div className="text-[10px] text-[#94a3b8] uppercase font-bold tracking-widest mb-0.5">Scale</div>
                <div className="text-lg font-bold text-white tracking-tighter">1:10k</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
