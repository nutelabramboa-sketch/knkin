import { motion } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { TopBar } from "@/components/TopBar";
import { MobileNav } from "@/components/MobileNav";
import { ArrowUpCircle, ArrowDownCircle, TrendingUp } from "lucide-react";

const CashFlow = () => {
  const cashData = [
    { month: "Jan", inflow: 85000, outflow: 62000 },
    { month: "Feb", inflow: 92000, outflow: 68000 },
    { month: "Mar", inflow: 88000, outflow: 65000 },
    { month: "Apr", inflow: 105000, outflow: 72000 },
    { month: "May", inflow: 98000, outflow: 70000 },
    { month: "Jun", inflow: 112000, outflow: 75000 },
  ];

  const maxValue = Math.max(...cashData.flatMap(d => [d.inflow, d.outflow]));

  return (
    <div className="min-h-screen pb-24 md:pb-8">
      <TopBar />
      
      <div className="container mx-auto px-4 pt-20 md:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-2 gradient-text-cyan">Cash Flow</h1>
          <p className="text-muted-foreground">Track your money in and out</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <GlassCard className="text-center p-6">
            <ArrowUpCircle className="w-12 h-12 mx-auto mb-3 text-[hsl(var(--neon-green))]" />
            <p className="text-sm text-muted-foreground mb-1">Total Inflow</p>
            <p className="text-3xl font-bold gradient-text-cyan">$580K</p>
          </GlassCard>
          
          <GlassCard className="text-center p-6">
            <ArrowDownCircle className="w-12 h-12 mx-auto mb-3 text-[hsl(var(--neon-cyan))]" />
            <p className="text-sm text-muted-foreground mb-1">Total Outflow</p>
            <p className="text-3xl font-bold gradient-text-cyan">$412K</p>
          </GlassCard>
          
          <GlassCard className="text-center p-6">
            <TrendingUp className="w-12 h-12 mx-auto mb-3 text-[hsl(var(--neon-blue))]" />
            <p className="text-sm text-muted-foreground mb-1">Net Cash Flow</p>
            <p className="text-3xl font-bold text-[hsl(var(--neon-green))]">+$168K</p>
          </GlassCard>
        </div>

        <GlassCard neonBorder="cyan" className="mb-8">
          <h3 className="font-bold text-lg mb-6">Monthly Cash Flow</h3>
          <div className="space-y-6">
            {cashData.map((data, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="space-y-2"
              >
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{data.month}</span>
                  <div className="flex gap-4">
                    <span className="text-[hsl(var(--neon-green))]">+${(data.inflow / 1000).toFixed(0)}K</span>
                    <span className="text-[hsl(var(--neon-cyan))]">-${(data.outflow / 1000).toFixed(0)}K</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="flex-1 bg-white/5 rounded-full overflow-hidden h-3">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(data.inflow / maxValue) * 100}%` }}
                      transition={{ delay: i * 0.1 + 0.2 }}
                      className="h-full bg-gradient-to-r from-[hsl(var(--neon-green))] to-[hsl(var(--neon-cyan))] rounded-full"
                    />
                  </div>
                  <div className="flex-1 bg-white/5 rounded-full overflow-hidden h-3">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(data.outflow / maxValue) * 100}%` }}
                      transition={{ delay: i * 0.1 + 0.2 }}
                      className="h-full bg-gradient-to-r from-[hsl(var(--neon-cyan))] to-[hsl(var(--neon-blue))] rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </GlassCard>

        <GlassCard neonBorder="green">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="w-6 h-6 text-[hsl(var(--neon-green))]" />
            <h3 className="font-bold text-lg">AI Insights</h3>
          </div>
          <div className="space-y-3">
            <div className="glass rounded-xl p-4">
              <p className="text-sm text-[hsl(var(--neon-green))] mb-1">Positive Trend</p>
              <p className="text-sm text-muted-foreground">
                Your cash flow has been consistently positive for 6 months. Net flow up 23% from Q1.
              </p>
            </div>
            <div className="glass rounded-xl p-4">
              <p className="text-sm text-[hsl(var(--neon-cyan))] mb-1">Forecast</p>
              <p className="text-sm text-muted-foreground">
                Based on current trends, expect +$45K net cash flow next month with 89% confidence.
              </p>
            </div>
          </div>
        </GlassCard>
      </div>

      <MobileNav />
    </div>
  );
};

export default CashFlow;
