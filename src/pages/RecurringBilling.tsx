import { motion } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { TopBar } from "@/components/TopBar";
import { MobileNav } from "@/components/MobileNav";
import { RefreshCw, Pause, Play, DollarSign } from "lucide-react";

const RecurringBilling = () => {
  const subscriptions = [
    { 
      customer: "Acme Corp", 
      plan: "Enterprise", 
      amount: "$1,299", 
      frequency: "Monthly", 
      nextBill: "Feb 15, 2025",
      status: "active" 
    },
    { 
      customer: "Tech Solutions", 
      plan: "Business", 
      amount: "$499", 
      frequency: "Monthly", 
      nextBill: "Feb 10, 2025",
      status: "active" 
    },
    { 
      customer: "Global Industries", 
      plan: "Business", 
      amount: "$499", 
      frequency: "Monthly", 
      nextBill: "Feb 20, 2025",
      status: "paused" 
    },
    { 
      customer: "StartUp Inc", 
      plan: "Basic", 
      amount: "$199", 
      frequency: "Yearly", 
      nextBill: "Jun 1, 2025",
      status: "active" 
    },
  ];

  const stats = [
    { icon: RefreshCw, label: "Active Subscriptions", value: "3", color: "cyan" },
    { icon: DollarSign, label: "Monthly Recurring", value: "$2.3K", color: "green" },
    { icon: Pause, label: "Paused", value: "1", color: "orange" },
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
          <h1 className="text-3xl md:text-4xl font-bold mb-2 gradient-text-cyan">Recurring Billing</h1>
          <p className="text-muted-foreground">Manage subscription-based revenue</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <GlassCard className="p-6">
                  <Icon className={`w-8 h-8 mb-3 text-[hsl(var(--neon-${stat.color}))]`} />
                  <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold gradient-text-cyan">{stat.value}</p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        <div className="space-y-4">
          {subscriptions.map((sub, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard className="p-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-bold text-lg">{sub.customer}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        sub.status === "active" 
                          ? "bg-[hsl(var(--neon-green))]/20 text-[hsl(var(--neon-green))]"
                          : "bg-[hsl(var(--neon-orange))]/20 text-[hsl(var(--neon-orange))]"
                      }`}>
                        {sub.status}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{sub.plan} Plan</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-6 md:gap-8 items-center">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Amount</p>
                      <p className="font-bold text-xl gradient-text-cyan">{sub.amount}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Frequency</p>
                      <p className="font-medium">{sub.frequency}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Next Bill</p>
                      <p className="font-medium">{sub.nextBill}</p>
                    </div>
                    <div className="flex gap-2">
                      {sub.status === "active" ? (
                        <button className="p-2 glass rounded-lg hover:bg-white/10 transition-colors">
                          <Pause className="w-5 h-5 text-[hsl(var(--neon-orange))]" />
                        </button>
                      ) : (
                        <button className="p-2 glass rounded-lg hover:bg-white/10 transition-colors">
                          <Play className="w-5 h-5 text-[hsl(var(--neon-green))]" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <GlassCard neonBorder="cyan">
            <h3 className="font-bold text-lg mb-4">Revenue Forecast</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 glass rounded-lg">
                <span className="text-sm text-muted-foreground">February 2025</span>
                <span className="font-bold gradient-text-cyan">$2,297</span>
              </div>
              <div className="flex justify-between items-center p-3 glass rounded-lg">
                <span className="text-sm text-muted-foreground">March 2025</span>
                <span className="font-bold gradient-text-cyan">$2,297</span>
              </div>
              <div className="flex justify-between items-center p-3 glass rounded-lg">
                <span className="text-sm text-muted-foreground">April 2025</span>
                <span className="font-bold gradient-text-cyan">$2,297</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-[hsl(var(--neon-cyan))]/10 rounded-lg border border-[hsl(var(--neon-cyan))]/30">
                <span className="font-bold">Q1 2025 Total</span>
                <span className="font-bold text-lg gradient-text-cyan">$6,891</span>
              </div>
            </div>
          </GlassCard>

          <GlassCard neonBorder="green">
            <h3 className="font-bold text-lg mb-4">Upcoming Renewals</h3>
            <div className="space-y-3">
              {[
                { customer: "Tech Solutions", amount: "$499", date: "Feb 10" },
                { customer: "Acme Corp", amount: "$1,299", date: "Feb 15" },
                { customer: "Global Industries", amount: "$499", date: "Feb 20" },
              ].map((renewal, i) => (
                <div key={i} className="flex justify-between items-center p-3 glass rounded-lg">
                  <div>
                    <p className="font-medium">{renewal.customer}</p>
                    <p className="text-xs text-muted-foreground">{renewal.date}</p>
                  </div>
                  <span className="font-bold text-[hsl(var(--neon-green))]">{renewal.amount}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>

      <MobileNav />
    </div>
  );
};

export default RecurringBilling;
