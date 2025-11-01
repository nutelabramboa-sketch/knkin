import { motion } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { TopBar } from "@/components/TopBar";
import { MobileNav } from "@/components/MobileNav";
import { Smartphone, Radio, CheckCircle2 } from "lucide-react";
import { GlowButton } from "@/components/GlowButton";
import { useState } from "react";

const NFCTerminal = () => {
  const [isActive, setIsActive] = useState(false);
  const [progress, setProgress] = useState(0);

  const startNFC = () => {
    setIsActive(true);
    setProgress(0);
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        return p + 10;
      });
    }, 200);
  };

  return (
    <div className="min-h-screen pb-24 md:pb-8">
      <TopBar />
      
      <div className="container mx-auto px-4 pt-20 md:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-2 gradient-text-cyan">NFC Terminal</h1>
          <p className="text-muted-foreground">Tap to pay & create instant invoices</p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <GlassCard neonBorder="cyan" className="text-center p-12">
            <motion.div
              animate={isActive ? { scale: [1, 1.1, 1] } : {}}
              transition={{ repeat: Infinity, duration: 2 }}
              className="mb-8"
            >
              {progress === 100 ? (
                <CheckCircle2 className="w-32 h-32 mx-auto text-[hsl(var(--neon-green))]" />
              ) : (
                <div className="relative">
                  <Smartphone className="w-32 h-32 mx-auto text-[hsl(var(--neon-cyan))]" />
                  {isActive && (
                    <Radio className="w-16 h-16 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[hsl(var(--neon-blue))] animate-pulse" />
                  )}
                </div>
              )}
            </motion.div>

            {progress === 100 ? (
              <>
                <h2 className="text-2xl font-bold mb-4 text-[hsl(var(--neon-green))]">Payment Received!</h2>
                <p className="text-muted-foreground mb-8">$125.00 processed successfully</p>
                <GlowButton variant="green" onClick={() => { setIsActive(false); setProgress(0); }}>
                  New Transaction
                </GlowButton>
              </>
            ) : isActive ? (
              <>
                <h2 className="text-2xl font-bold mb-4">Waiting for device...</h2>
                <div className="w-full bg-white/10 rounded-full h-2 mb-8">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-[hsl(var(--neon-cyan))] to-[hsl(var(--neon-blue))] rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <p className="text-sm text-muted-foreground">Place device near terminal</p>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-bold mb-4">Ready to Accept Payment</h2>
                <p className="text-muted-foreground mb-8">Start NFC session to accept contactless payments</p>
                <GlowButton variant="cyan" size="lg" onClick={startNFC}>
                  Start NFC Session
                </GlowButton>
              </>
            )}
          </GlassCard>

          <div className="grid grid-cols-3 gap-4 mt-8">
            <GlassCard className="text-center p-4">
              <p className="text-2xl font-bold gradient-text-cyan mb-1">24</p>
              <p className="text-sm text-muted-foreground">Today</p>
            </GlassCard>
            <GlassCard className="text-center p-4">
              <p className="text-2xl font-bold gradient-text-cyan mb-1">$3,240</p>
              <p className="text-sm text-muted-foreground">Volume</p>
            </GlassCard>
            <GlassCard className="text-center p-4">
              <p className="text-2xl font-bold gradient-text-cyan mb-1">100%</p>
              <p className="text-sm text-muted-foreground">Success</p>
            </GlassCard>
          </div>
        </div>
      </div>

      <MobileNav />
    </div>
  );
};

export default NFCTerminal;
