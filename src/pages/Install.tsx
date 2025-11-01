import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { GlowButton } from "@/components/GlowButton";
import { Download, Smartphone, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import icon from "@/assets/icon-192.png";

const Install = () => {
  const navigate = useNavigate();
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true);
    }

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) {
      return;
    }

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      setIsInstalled(true);
    }

    setDeferredPrompt(null);
    setIsInstallable(false);
  };

  return (
    <div className="min-h-screen pt-20 px-4 pb-10">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <img src={icon} alt="AI Control Money" className="w-24 h-24 mx-auto mb-4 animate-float" />
          <h1 className="text-4xl font-bold gradient-text-cyan mb-2">
            Download App
          </h1>
          <p className="text-muted-foreground">
            Install AI Control Money directly on your phone
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <GlassCard neonBorder="cyan" className="p-8 mb-6">
            {isInstalled ? (
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[hsl(var(--neon-green))]/20 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-[hsl(var(--neon-green))]" />
                </div>
                <h2 className="text-2xl font-bold mb-2">App is installed!</h2>
                <p className="text-muted-foreground mb-6">
                  Find it on your home screen
                </p>
                <GlowButton variant="cyan" onClick={() => navigate("/dashboard")}>
                  Open App
                </GlowButton>
              </div>
            ) : isInstallable ? (
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[hsl(var(--neon-cyan))]/20 flex items-center justify-center mx-auto mb-4">
                  <Download className="w-8 h-8 text-[hsl(var(--neon-cyan))]" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Ready to Install</h2>
                <p className="text-muted-foreground mb-6">
                  Click the button below to install the app
                </p>
                <GlowButton variant="cyan" onClick={handleInstall}>
                  <Download className="w-5 h-5 mr-2" />
                  Install App
                </GlowButton>
              </div>
            ) : (
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[hsl(var(--neon-blue))]/20 flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-8 h-8 text-[hsl(var(--neon-blue))]" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Manual Installation</h2>
                <div className="text-left space-y-4">
                  <div>
                    <h3 className="font-bold text-[hsl(var(--neon-cyan))] mb-2">📱 iPhone / iPad:</h3>
                    <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                      <li>Open this page in Safari</li>
                      <li>Click the "Share" button (arrow icon)</li>
                      <li>Select "Add to Home Screen"</li>
                      <li>Confirm by clicking "Add"</li>
                    </ol>
                  </div>
                  <div>
                    <h3 className="font-bold text-[hsl(var(--neon-green))] mb-2">🤖 Android:</h3>
                    <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                      <li>Open browser menu (three dots)</li>
                      <li>Select "Add to Home screen" or "Install app"</li>
                      <li>Confirm installation</li>
                    </ol>
                  </div>
                </div>
              </div>
            )}
          </GlassCard>

          <GlassCard className="p-6">
            <h3 className="font-bold mb-3 gradient-text-cyan">PWA App Benefits:</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-[hsl(var(--neon-cyan))] mt-0.5">✓</span>
                <span>Works offline - use without internet connection</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[hsl(var(--neon-cyan))] mt-0.5">✓</span>
                <span>Fast loading - data is stored locally</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[hsl(var(--neon-cyan))] mt-0.5">✓</span>
                <span>Home screen icon - quick access like a native app</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[hsl(var(--neon-cyan))] mt-0.5">✓</span>
                <span>Automatic updates - always have the latest version</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[hsl(var(--neon-cyan))] mt-0.5">✓</span>
                <span>Smaller size than native apps</span>
              </li>
            </ul>
          </GlassCard>

          <div className="text-center mt-6">
            <GlowButton variant="green" onClick={() => navigate("/")}>
              Back to Home
            </GlowButton>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Install;
