import { motion } from "framer-motion";
import { Code, Database, Server, Smartphone, Globe, Cpu, Cloud, Terminal, Wifi, Layers, Monitor, Layout } from "lucide-react";

interface AtomicOrbitProps {
    children: React.ReactNode;
}

const AtomicOrbit = ({ children }: AtomicOrbitProps) => {
    return (
        <div className="relative flex items-center justify-center w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
            {/* Center Content (Profile) */}
            <div className="z-10 relative">{children}</div>

            {/* Orbit 1 - Inner (3 Icons) */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full border border-blue-500/20"
            >
                {/* 0 deg (Top) */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 bg-[#0a0a0a] p-2 rounded-full border border-blue-500/30 text-blue-400">
                    <Code size={20} />
                </div>
                {/* 120 deg (Bottom Right) */}
                <div className="absolute bottom-[25%] right-[6%] bg-[#0a0a0a] p-2 rounded-full border border-blue-500/30 text-blue-400">
                    <Database size={20} />
                </div>
                {/* 240 deg (Bottom Left) */}
                <div className="absolute bottom-[25%] left-[6%] bg-[#0a0a0a] p-2 rounded-full border border-blue-500/30 text-blue-400">
                    <Terminal size={20} />
                </div>
            </motion.div>

            {/* Orbit 2 - Middle (Reverse, 4 Icons) */}
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full border border-purple-500/20"
            >
                {/* 0 deg (Right) */}
                <div className="absolute top-1/2 right-0 translate-x-4 -translate-y-1/2 bg-[#0a0a0a] p-2 rounded-full border border-purple-500/30 text-purple-400">
                    <Server size={20} />
                </div>
                {/* 180 deg (Left) */}
                <div className="absolute top-1/2 left-0 -translate-x-4 -translate-y-1/2 bg-[#0a0a0a] p-2 rounded-full border border-purple-500/30 text-purple-400">
                    <Smartphone size={20} />
                </div>
                {/* 90 deg (Bottom) */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4 bg-[#0a0a0a] p-2 rounded-full border border-purple-500/30 text-purple-400">
                    <Wifi size={20} />
                </div>
                {/* 270 deg (Top) */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 bg-[#0a0a0a] p-2 rounded-full border border-purple-500/30 text-purple-400">
                    <Monitor size={20} />
                </div>
            </motion.div>

            {/* Orbit 3 - Outer (4 Icons) */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-cyan-500/20"
            >
                <div className="absolute top-[15%] right-[15%] bg-[#0a0a0a] p-2 rounded-full border border-cyan-500/30 text-cyan-400">
                    <Globe size={20} />
                </div>
                <div className="absolute bottom-[15%] left-[15%] bg-[#0a0a0a] p-2 rounded-full border border-cyan-500/30 text-cyan-400">
                    <Cpu size={20} />
                </div>
                <div className="absolute top-[15%] left-[15%] bg-[#0a0a0a] p-2 rounded-full border border-cyan-500/30 text-cyan-400">
                    <Cloud size={20} />
                </div>
                <div className="absolute bottom-[15%] right-[15%] bg-[#0a0a0a] p-2 rounded-full border border-cyan-500/30 text-cyan-400">
                    <Layers size={20} />
                </div>
            </motion.div>
        </div>
    );
};

export default AtomicOrbit;
