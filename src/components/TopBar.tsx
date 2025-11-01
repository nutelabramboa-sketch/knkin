import { User, Bell, Settings, Mail, Download } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import icon from "@/assets/icon-192.png";

export const TopBar = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 md:left-[280px] right-0 z-40 glass border-b border-white/10 backdrop-blur-xl transition-all duration-300">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={icon} alt="AI Control Money" className="w-8 h-8 animate-float" />
          <div>
            <h2 className="text-sm font-bold gradient-text-cyan">AI CONTROL</h2>
            <h2 className="text-sm font-bold gradient-text-cyan -mt-1">MONEY</h2>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Install App */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate("/install")}
            className="glass rounded-full p-2 hover:bg-white/10 transition-colors"
            title="Stáhnout aplikaci"
          >
            <Download className="w-5 h-5 text-[hsl(var(--neon-green))]" />
          </motion.button>

          {/* Notifications */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="glass rounded-full p-2 hover:bg-white/10 transition-colors relative"
            title="Notifikace"
          >
            <Bell className="w-5 h-5 text-[hsl(var(--neon-cyan))]" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-[hsl(var(--neon-green))] rounded-full animate-pulse"></span>
          </motion.button>

          {/* Contact */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="glass rounded-full p-2 hover:bg-white/10 transition-colors"
            title="Kontakt"
          >
            <Mail className="w-5 h-5 text-[hsl(var(--neon-cyan))]" />
          </motion.button>

          {/* Settings */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate("/settings")}
            className="glass rounded-full p-2 hover:bg-white/10 transition-colors"
            title="Nastavení"
          >
            <Settings className="w-5 h-5 text-[hsl(var(--neon-cyan))]" />
          </motion.button>

          {/* User Profile */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="glass rounded-full p-2 hover:bg-white/10 transition-colors"
            title="Profil"
          >
            <User className="w-5 h-5 text-[hsl(var(--neon-cyan))]" />
          </motion.button>
        </div>
      </div>
    </div>
  );
};
