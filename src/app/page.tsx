"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  AlertTriangle,
  Bell,
  MapPin,
  Activity,
  Shield,
  Users,
  Phone,
  Mail,
  Radio,
  Mountain,
  CloudRain,
  Gauge,
  Wifi,
  CheckCircle,
  ChevronRight,
  Menu,
  X,
  FileText,
  ExternalLink,
} from "lucide-react";

const riskZones = [
  { id: 1, name: "Northern Hills", risk: "high", rainfall: 245, soilMoisture: 87, movement: 2.3 },
  { id: 2, name: "Western Slopes", risk: "medium", rainfall: 180, soilMoisture: 65, movement: 0.8 },
  { id: 3, name: "Eastern Valley", risk: "low", rainfall: 95, soilMoisture: 42, movement: 0.1 },
  { id: 4, name: "Southern Ridge", risk: "medium", rainfall: 156, soilMoisture: 58, movement: 0.5 },
];

const features = [
  {
    icon: Activity,
    title: "Real-time Monitoring",
    description: "24/7 sensor networks track ground movement, rainfall, and soil conditions across high-risk zones.",
  },
  {
    icon: Bell,
    title: "Instant Alerts",
    description: "Multi-channel notifications via SMS, app, and sirens ensure everyone receives warnings in time.",
  },
  {
    icon: Shield,
    title: "AI Prediction",
    description: "Machine learning models analyze patterns to predict landslides up to 72 hours in advance.",
  },
  {
    icon: Users,
    title: "Community Network",
    description: "Connect with local emergency responders and neighbors for coordinated evacuation plans.",
  },
];

const stats = [
  { value: "2,847", label: "Active Sensors" },
  { value: "156K", label: "People Protected" },
  { value: "72h", label: "Advance Warning" },
  { value: "99.2%", label: "Prediction Accuracy" },
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && phone && location) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail("");
      setPhone("");
      setLocation("");
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "high":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      case "medium":
        return "bg-amber-500/20 text-amber-400 border-amber-500/30";
      default:
        return "bg-emerald-500/20 text-emerald-400 border-emerald-500/30";
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0f1c] text-[#e8edf5] overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[100px]" />
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#0a0f1c]/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
                  <Mountain className="w-5 h-5 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
              </div>
              <span className="text-xl font-bold tracking-tight">RESQ</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm text-[#94a3b8] hover:text-white transition-colors">Features</a>
              <a href="#monitoring" className="text-sm text-[#94a3b8] hover:text-white transition-colors">Live Monitor</a>
              <a href="#risk-map" className="text-sm text-[#94a3b8] hover:text-white transition-colors">Tehri Map</a>
              <a href="#alerts" className="text-sm text-[#94a3b8] hover:text-white transition-colors">Get Alerts</a>
              <a href="#emergency" className="text-sm text-[#94a3b8] hover:text-white transition-colors">Emergency</a>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs text-emerald-400 font-medium">System Active</span>
              </div>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-white/5"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-white/5 bg-[#0a0f1c]/95"
            >
              <div className="px-4 py-4 space-y-3">
                <a href="#features" className="block py-2 text-[#94a3b8]">Features</a>
                <a href="#monitoring" className="block py-2 text-[#94a3b8]">Live Monitor</a>
                <a href="#alerts" className="block py-2 text-[#94a3b8]">Get Alerts</a>
                <a href="#emergency" className="block py-2 text-[#94a3b8]">Emergency</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <section className="relative min-h-screen flex items-center pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-6 bg-amber-500/10 text-amber-400 border-amber-500/20 hover:bg-amber-500/20">
                <AlertTriangle className="w-3 h-3 mr-1" />
                Smart Early Warning System
              </Badge>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-sky-400">
                  Protecting Lives
                </span>
                <br />
                Before Disaster Strikes
              </h1>

              <p className="text-lg text-[#94a3b8] mb-8 max-w-xl leading-relaxed">
                Advanced AI-powered landslide prediction system that monitors terrain conditions 
                in real-time and alerts communities and emergency services before catastrophe.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 h-14 text-base font-semibold shadow-lg shadow-emerald-500/25"
                  onClick={() => document.getElementById("alerts")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <Bell className="w-5 h-5 mr-2" />
                  Get Alert Notifications
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/10 bg-white/5 hover:bg-white/10 h-14 text-base"
                  onClick={() => document.getElementById("monitoring")?.scrollIntoView({ behavior: "smooth" })}
                >
                  View Live Dashboard
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/5">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  >
                    <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-[#94a3b8]">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 rounded-full border border-emerald-500/20" />
                <div className="absolute inset-8 rounded-full border border-emerald-500/15" />
                <div className="absolute inset-16 rounded-full border border-emerald-500/10" />
                <div className="absolute inset-24 rounded-full border border-emerald-500/5" />

                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <div
                    className="absolute top-1/2 left-1/2 w-1/2 h-1 bg-gradient-to-r from-emerald-500/50 to-transparent origin-left animate-radar-sweep"
                    style={{ transformOrigin: "0% 50%" }}
                  />
                </div>

                <div className="absolute top-[20%] left-[15%] w-4 h-4 rounded-full bg-red-500 animate-pulse shadow-lg shadow-red-500/50" />
                <div className="absolute top-[35%] right-[20%] w-3 h-3 rounded-full bg-amber-500 animate-pulse shadow-lg shadow-amber-500/50" />
                <div className="absolute bottom-[30%] left-[25%] w-3 h-3 rounded-full bg-emerald-500 animate-pulse shadow-lg shadow-emerald-500/50" />
                <div className="absolute bottom-[20%] right-[30%] w-3 h-3 rounded-full bg-amber-500 animate-pulse shadow-lg shadow-amber-500/50" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-400 mb-1">ACTIVE</div>
                    <div className="text-sm text-[#94a3b8]">{currentTime.toLocaleTimeString()}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="features" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-sky-500/10 text-sky-400 border-sky-500/20">
              <Wifi className="w-3 h-3 mr-1" />
              Advanced Technology
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Comprehensive Protection System
            </h2>
            <p className="text-lg text-[#94a3b8] max-w-2xl mx-auto">
              Our integrated approach combines cutting-edge sensors, AI analysis, and rapid 
              communication to keep communities safe.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full bg-gradient-to-b from-white/5 to-transparent border-white/5 hover:border-emerald-500/30 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <feature.icon className="w-6 h-6 text-emerald-400" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-white">{feature.title}</h3>
                    <p className="text-sm text-[#94a3b8] leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="monitoring" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
              <Radio className="w-3 h-3 mr-1" />
              Live Monitoring
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Real-Time Risk Dashboard
            </h2>
            <p className="text-lg text-[#94a3b8] max-w-2xl mx-auto">
              Monitor landslide risk levels across all zones with live sensor data and AI predictions.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              {riskZones.map((zone, i) => (
                <motion.div
                  key={zone.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="bg-[#111827]/80 border-white/5 hover:border-white/10 transition-colors">
                    <CardContent className="p-5">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div className={`w-3 h-3 rounded-full ${zone.risk === "high" ? "bg-red-500" : zone.risk === "medium" ? "bg-amber-500" : "bg-emerald-500"} animate-pulse`} />
                          <div>
                            <h3 className="font-semibold text-white">{zone.name}</h3>
                            <div className="flex items-center gap-1 text-sm text-[#94a3b8]">
                              <MapPin className="w-3 h-3" />
                              Zone {zone.id}
                            </div>
                          </div>
                        </div>
                        <Badge className={`${getRiskColor(zone.risk)} uppercase text-xs font-semibold`}>
                          {zone.risk} Risk
                        </Badge>
                      </div>

                      <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-white/5">
                        <div className="text-center">
                          <div className="flex items-center justify-center gap-1 text-sky-400 mb-1">
                            <CloudRain className="w-4 h-4" />
                          </div>
                          <div className="text-lg font-bold text-white">{zone.rainfall}mm</div>
                          <div className="text-xs text-[#94a3b8]">24h Rainfall</div>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center gap-1 text-amber-400 mb-1">
                            <Gauge className="w-4 h-4" />
                          </div>
                          <div className="text-lg font-bold text-white">{zone.soilMoisture}%</div>
                          <div className="text-xs text-[#94a3b8]">Soil Moisture</div>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center gap-1 text-emerald-400 mb-1">
                            <Activity className="w-4 h-4" />
                          </div>
                          <div className="text-lg font-bold text-white">{zone.movement}mm</div>
                          <div className="text-xs text-[#94a3b8]">Ground Move</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-gradient-to-b from-[#111827] to-[#0d1321] border-white/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <Activity className="w-5 h-5 text-emerald-400" />
                    System Status
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[#94a3b8]">Sensor Network</span>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-emerald-400 font-medium">Online</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#94a3b8]">AI Analysis</span>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-emerald-400 font-medium">Active</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#94a3b8]">Alert System</span>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-emerald-400 font-medium">Ready</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#94a3b8]">Emergency Dispatch</span>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-emerald-400 font-medium">Standby</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/5">
                    <div className="text-sm text-[#94a3b8] mb-2">Last Data Sync</div>
                    <div className="text-lg font-semibold text-white">
                      {currentTime.toLocaleTimeString()}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/5">
                    <div className="text-sm text-[#94a3b8] mb-3">Risk Distribution</div>
                    <div className="flex gap-2">
                      <div className="flex-1 h-2 rounded-full bg-red-500" style={{ flex: 1 }} />
                      <div className="flex-1 h-2 rounded-full bg-amber-500" style={{ flex: 2 }} />
                      <div className="flex-1 h-2 rounded-full bg-emerald-500" style={{ flex: 1 }} />
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-[#94a3b8]">
                      <span>1 High</span>
                      <span>2 Medium</span>
                      <span>1 Low</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="risk-map" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-red-500/5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-red-500/10 text-red-400 border-red-500/20">
              <MapPin className="w-3 h-3 mr-1" />
              Focus Zone: Tehri Garhwal
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              High Risk Assessment Map
            </h2>
            <p className="text-lg text-[#94a3b8] max-w-2xl mx-auto">
              Detailed analysis of Tehri Garhwal, identified as one of the highest landslide-prone districts in India. 
              The map shows critical zones around the reservoir rim and steep terrains.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#111827] shadow-2xl"
          >
            <div className="aspect-[16/9] relative group">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=2000"
                alt="Tehri Garhwal Landslide Risk Map"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] via-transparent to-transparent" />
              
              <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                <div className="max-w-lg">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 border border-red-500/30 text-red-400 font-semibold mb-6">
                    <AlertTriangle className="w-5 h-5" />
                    High Vulnerability Index
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Interactive Terrain Risk View</h3>
                  <p className="text-[#94a3b8] mb-8">
                    The uploaded map highlights extreme risk zones (Very High/High) which cover 
                    approximately 18% of the reservoir rim area.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      className="bg-white text-black hover:bg-white/90"
                      onClick={() => window.parent.postMessage({ type: "OPEN_EXTERNAL_URL", data: { url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/7395f16f-75cd-43cc-80ea-e87f1fdc649e/Map-1769106959014.pdf" } }, "*")}
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      View Full PDF Map
                    </Button>
                    <Button variant="outline" className="border-white/20 bg-white/5 hover:bg-white/10">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Detailed Report
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 border-t border-white/10">
              {[
                { label: "District Rank", value: "#2 in India" },
                { label: "Risk Coverage", value: "18% Extreme" },
                { label: "Elevation Range", value: "600m - 2800m" },
                { label: "Critical Points", value: "32+ Zones" },
              ].map((item, i) => (
                <div key={i} className="p-6 border-r border-white/10 last:border-0 text-center">
                  <div className="text-sm text-[#94a3b8] mb-1">{item.label}</div>
                  <div className="text-xl font-bold text-white">{item.value}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="alerts" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 bg-amber-500/10 text-amber-400 border-amber-500/20">
                <Bell className="w-3 h-3 mr-1" />
                Alert Subscription
              </Badge>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Stay Informed, Stay Safe
              </h2>
              <p className="text-lg text-[#94a3b8] mb-8">
                Subscribe to receive instant alerts when landslide risk is detected in your area. 
                Get notifications via SMS and email so you can take action immediately.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <div className="font-medium text-white">Instant SMS Alerts</div>
                    <div className="text-sm text-[#94a3b8]">Receive immediate text notifications on your phone</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <div className="font-medium text-white">Email Reports</div>
                    <div className="text-sm text-[#94a3b8]">Detailed risk assessments sent to your inbox</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <div className="font-medium text-white">Location-Based Warnings</div>
                    <div className="text-sm text-[#94a3b8]">Alerts specific to your registered area</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="bg-[#111827]/80 border-white/5">
                <CardContent className="p-8">
                  <form onSubmit={handleSubscribe} className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-[#94a3b8]">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94a3b8]" />
                        <Input
                          type="email"
                          placeholder="your@email.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="pl-11 bg-white/5 border-white/10 focus:border-emerald-500/50 h-12"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-[#94a3b8]">Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94a3b8]" />
                        <Input
                          type="tel"
                          placeholder="+1 (555) 123-4567"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="pl-11 bg-white/5 border-white/10 focus:border-emerald-500/50 h-12"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-[#94a3b8]">Your Location</label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94a3b8]" />
                        <Input
                          type="text"
                          placeholder="City, Region or Address"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          className="pl-11 bg-white/5 border-white/10 focus:border-emerald-500/50 h-12"
                          required
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white h-12 text-base font-semibold"
                    >
                      {isSubscribed ? (
                        <>
                          <CheckCircle className="w-5 h-5 mr-2" />
                          Subscribed Successfully!
                        </>
                      ) : (
                        <>
                          <Bell className="w-5 h-5 mr-2" />
                          Subscribe to Alerts
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-center text-[#94a3b8]">
                      By subscribing, you agree to receive emergency alerts. Your data is protected.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="emergency" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-red-500/10 text-red-400 border-red-500/20">
              <Phone className="w-3 h-3 mr-1" />
              Emergency Services
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Emergency Contacts
            </h2>
            <p className="text-lg text-[#94a3b8] max-w-2xl mx-auto">
              In case of immediate danger, contact emergency services directly. 
              Our system automatically notifies first responders during high-risk events.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-b from-red-500/10 to-transparent border-red-500/20 hover:border-red-500/40 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-red-500/20 flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-red-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Emergency Hotline</h3>
                  <p className="text-3xl font-bold text-red-400 mb-2">911</p>
                  <p className="text-sm text-[#94a3b8]">24/7 Emergency Response</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="bg-gradient-to-b from-amber-500/10 to-transparent border-amber-500/20 hover:border-amber-500/40 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-amber-500/20 flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-amber-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Disaster Management</h3>
                  <p className="text-3xl font-bold text-amber-400 mb-2">1-800-RESQ</p>
                  <p className="text-sm text-[#94a3b8]">National Disaster Response</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="bg-gradient-to-b from-sky-500/10 to-transparent border-sky-500/20 hover:border-sky-500/40 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-sky-500/20 flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-sky-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Local Authorities</h3>
                  <p className="text-3xl font-bold text-sky-400 mb-2">311</p>
                  <p className="text-sm text-[#94a3b8]">Non-Emergency Services</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <Card className="bg-gradient-to-r from-red-500/5 via-[#111827] to-red-500/5 border-red-500/10">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                      <AlertTriangle className="w-6 h-6 text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Experiencing an Emergency?</h3>
                      <p className="text-[#94a3b8]">If you&apos;re in immediate danger, evacuate to higher ground and call emergency services.</p>
                    </div>
                  </div>
                  <Button
                    size="lg"
                    className="bg-red-500 hover:bg-red-600 text-white px-8 h-12 shrink-0"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Emergency
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <footer className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
                <Mountain className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold">RESQ</span>
                <p className="text-xs text-[#94a3b8]">Smart Landslide Early Warning System</p>
              </div>
            </div>

            <div className="flex items-center gap-6 text-sm text-[#94a3b8]">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>

            <div className="text-sm text-[#94a3b8]">
              &copy; {new Date().getFullYear()} RESQ. Protecting communities.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
