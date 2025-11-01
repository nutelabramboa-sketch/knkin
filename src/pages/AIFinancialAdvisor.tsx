import { motion } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { TopBar } from "@/components/TopBar";
import { MobileNav } from "@/components/MobileNav";
import { Brain, TrendingUp, AlertCircle, CheckCircle2 } from "lucide-react";
import { GlowButton } from "@/components/GlowButton";

const AIFinancialAdvisor = () => {
  const recommendations = [
    {
      title: "Optimize Billing Cycle",
      description: "Switch to quarterly billing to improve cash flow consistency. Expected improvement: +$12K/month.",
      impact: "High",
      savings: "$144K/year",
      status: "recommended",
    },
    {
      title: "Merge Duplicate Clients",
      description: "Found 8 duplicate client entries that can be consolidated. This will streamline reporting and reduce errors.",
      impact: "Medium",
      savings: "15hrs/month",
      status: "pending",
    },
    {
      title: "Adjust Pricing Margins",
      description: "AI analysis suggests 3-5% price increase on premium services is viable without affecting conversion.",
      impact: "High",
      savings: "$86K/year",
      status: "recommended",
    },
    {
      title: "Automate Tax Filing",
      description: "Enable automated quarterly tax filing to save time and reduce compliance risks.",
      impact: "Medium",
      savings: "$2.4K/year",
      status: "available",
    },
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
          <h1 className="text-3xl md:text-4xl font-bold mb-2 gradient-text-cyan">AI Financial Advisor</h1>
          <p className="text-muted-foreground">Intelligent recommendations to optimize your business</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <GlassCard className="text-center p-6">
            <Brain className="w-12 h-12 mx-auto mb-3 text-[hsl(var(--neon-cyan))]" />
            <p className="text-sm text-muted-foreground mb-1">AI Insights</p>
            <p className="text-3xl font-bold gradient-text-cyan">12</p>
          </GlassCard>
          
          <GlassCard className="text-center p-6">
            <TrendingUp className="w-12 h-12 mx-auto mb-3 text-[hsl(var(--neon-green))]" />
            <p className="text-sm text-muted-foreground mb-1">Potential Savings</p>
            <p className="text-3xl font-bold text-[hsl(var(--neon-green))]">$232K</p>
          </GlassCard>
          
          <GlassCard className="text-center p-6">
            <CheckCircle2 className="w-12 h-12 mx-auto mb-3 text-[hsl(var(--neon-blue))]" />
            <p className="text-sm text-muted-foreground mb-1">Implemented</p>
            <p className="text-3xl font-bold gradient-text-cyan">7</p>
          </GlassCard>
        </div>

        <div className="space-y-4">
          {recommendations.map((rec, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard 
                neonBorder={rec.impact === "High" ? "green" : "cyan"}
                className="p-6"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    rec.impact === "High" 
                      ? "bg-[hsl(var(--neon-green))]/20"
                      : "bg-[hsl(var(--neon-cyan))]/20"
                  }`}>
                    {rec.status === "recommended" ? (
                      <AlertCircle className={`w-6 h-6 ${
                        rec.impact === "High"
                          ? "text-[hsl(var(--neon-green))]"
                          : "text-[hsl(var(--neon-cyan))]"
                      }`} />
                    ) : (
                      <Brain className="w-6 h-6 text-[hsl(var(--neon-cyan))]" />
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="font-bold text-lg">{rec.title}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        rec.impact === "High"
                          ? "bg-[hsl(var(--neon-green))]/20 text-[hsl(var(--neon-green))]"
                          : "bg-[hsl(var(--neon-cyan))]/20 text-[hsl(var(--neon-cyan))]"
                      }`}>
                        {rec.impact} Impact
                      </span>
                      <span className="text-xs px-2 py-1 rounded-full bg-white/10 capitalize">
                        {rec.status}
                      </span>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4">{rec.description}</p>
                    
                    <div className="flex flex-wrap items-center gap-4">
                      <div className="glass rounded-lg px-4 py-2">
                        <span className="text-xs text-muted-foreground">Potential Savings</span>
                        <p className="font-bold text-[hsl(var(--neon-green))]">{rec.savings}</p>
                      </div>
                      
                      {rec.status === "recommended" && (
                        <GlowButton variant="green" size="sm">
                          Apply Recommendation
                        </GlowButton>
                      )}
                      
                      <button className="text-sm text-[hsl(var(--neon-cyan))] hover:underline">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <GlassCard className="mt-8">
          <div className="flex items-center gap-3 mb-4">
            <Brain className="w-6 h-6 text-[hsl(var(--neon-cyan))]" />
            <h3 className="font-bold text-lg">How AI Advisor Works</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="glass rounded-xl p-4">
              <p className="font-bold mb-2">1. Analyze Data</p>
              <p className="text-sm text-muted-foreground">
                AI continuously monitors your business metrics, transactions, and patterns.
              </p>
            </div>
            <div className="glass rounded-xl p-4">
              <p className="font-bold mb-2">2. Generate Insights</p>
              <p className="text-sm text-muted-foreground">
                Machine learning algorithms identify optimization opportunities unique to your business.
              </p>
            </div>
            <div className="glass rounded-xl p-4">
              <p className="font-bold mb-2">3. Track Results</p>
              <p className="text-sm text-muted-foreground">
                Measure the impact of implemented recommendations with detailed analytics.
              </p>
            </div>
          </div>
        </GlassCard>
      </div>

      <MobileNav />
    </div>
  );
};

export default AIFinancialAdvisor;
