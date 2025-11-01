import { motion } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { TopBar } from "@/components/TopBar";
import { MobileNav } from "@/components/MobileNav";
import { Building2, Plus, RefreshCw, CheckCircle2 } from "lucide-react";
import { GlowButton } from "@/components/GlowButton";

const BankIntegration = () => {
  const connectedBanks = [
    { name: "Chase Business", account: "****4521", balance: "$48,250", status: "connected", lastSync: "2m ago" },
    { name: "Wells Fargo", account: "****7834", balance: "$22,680", status: "connected", lastSync: "15m ago" },
    { name: "Bank of America", account: "****1092", balance: "$8,450", status: "syncing", lastSync: "Syncing..." },
  ];

  const availableBanks = [
    { name: "Capital One", logo: "🏦" },
    { name: "Citibank", logo: "🏦" },
    { name: "American Express", logo: "💳" },
    { name: "PayPal Business", logo: "💰" },
  ];

  return (
    <div className="min-h-screen pb-24 md:pb-8">
      <TopBar />
      
      <div className="container mx-auto px-4 pt-20 md:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-2 gradient-text-cyan">Bank Integration</h1>
          <p className="text-muted-foreground">Connect and sync your business accounts</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <GlassCard className="text-center p-6">
            <Building2 className="w-12 h-12 mx-auto mb-3 text-[hsl(var(--neon-cyan))]" />
            <p className="text-sm text-muted-foreground mb-1">Connected Banks</p>
            <p className="text-3xl font-bold gradient-text-cyan">3</p>
          </GlassCard>
          
          <GlassCard className="text-center p-6">
            <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
              <span className="text-3xl">💰</span>
            </div>
            <p className="text-sm text-muted-foreground mb-1">Total Balance</p>
            <p className="text-3xl font-bold text-[hsl(var(--neon-green))]">$79.4K</p>
          </GlassCard>
          
          <GlassCard className="text-center p-6">
            <RefreshCw className="w-12 h-12 mx-auto mb-3 text-[hsl(var(--neon-blue))]" />
            <p className="text-sm text-muted-foreground mb-1">Last Sync</p>
            <p className="text-3xl font-bold gradient-text-cyan">2m</p>
          </GlassCard>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold mb-4">Connected Accounts</h2>
            <div className="space-y-4">
              {connectedBanks.map((bank, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <GlassCard neonBorder="cyan" className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[hsl(var(--neon-cyan))] to-[hsl(var(--neon-blue))] flex items-center justify-center flex-shrink-0">
                        <Building2 className="w-7 h-7" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-bold text-lg">{bank.name}</h3>
                          {bank.status === "connected" && (
                            <CheckCircle2 className="w-5 h-5 text-[hsl(var(--neon-green))]" />
                          )}
                          {bank.status === "syncing" && (
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                            >
                              <RefreshCw className="w-5 h-5 text-[hsl(var(--neon-cyan))]" />
                            </motion.div>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">Account {bank.account}</p>
                      </div>
                      
                      <div className="flex flex-wrap gap-6 md:gap-8 items-center">
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Balance</p>
                          <p className="font-bold text-xl gradient-text-cyan">{bank.balance}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Last Sync</p>
                          <p className="font-medium">{bank.lastSync}</p>
                        </div>
                        <button className="px-4 py-2 glass rounded-xl hover:bg-white/10 transition-colors text-sm">
                          Sync Now
                        </button>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Add New Bank</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {availableBanks.map((bank, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <GlassCard hover className="p-6 text-center">
                    <div className="text-4xl mb-3">{bank.logo}</div>
                    <h3 className="font-bold mb-3">{bank.name}</h3>
                    <GlowButton variant="cyan" size="sm" className="w-full">
                      <Plus className="w-4 h-4 mr-2" />
                      Connect
                    </GlowButton>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>

          <GlassCard neonBorder="green">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle2 className="w-6 h-6 text-[hsl(var(--neon-green))]" />
              <h3 className="font-bold text-lg">Security & Privacy</h3>
            </div>
            <div className="space-y-3">
              <div className="glass rounded-xl p-4">
                <p className="text-sm mb-2 text-[hsl(var(--neon-green))]">🔒 Bank-Level Encryption</p>
                <p className="text-sm text-muted-foreground">
                  All connections use 256-bit encryption and are read-only. We never store your banking credentials.
                </p>
              </div>
              <div className="glass rounded-xl p-4">
                <p className="text-sm mb-2 text-[hsl(var(--neon-cyan))]">🔐 OAuth 2.0 Authentication</p>
                <p className="text-sm text-muted-foreground">
                  Secure authentication through official bank APIs. Revoke access anytime from your bank's settings.
                </p>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>

      <MobileNav />
    </div>
  );
};

export default BankIntegration;
