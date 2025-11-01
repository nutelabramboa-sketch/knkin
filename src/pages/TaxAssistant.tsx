import { motion } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { TopBar } from "@/components/TopBar";
import { MobileNav } from "@/components/MobileNav";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Calculator, TrendingUp } from "lucide-react";

const TaxAssistant = () => {
  const taxData = [
    { label: "Sales Tax", value: "8.5%", amount: "$850" },
    { label: "Income Tax", value: "22%", amount: "$2,200" },
    { label: "VAT", value: "20%", amount: "$2,000" },
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
          <h1 className="text-3xl md:text-4xl font-bold mb-2 gradient-text-cyan">Tax Assistant AI</h1>
          <p className="text-muted-foreground">Smart tax calculations and insights</p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          <GlassCard neonBorder="green">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Country</Label>
                  <Select defaultValue="us">
                    <SelectTrigger className="glass border-white/20">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="eu">European Union</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label>State / Region</Label>
                  <Select defaultValue="ca">
                    <SelectTrigger className="glass border-white/20">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ca">California</SelectItem>
                      <SelectItem value="ny">New York</SelectItem>
                      <SelectItem value="tx">Texas</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="glass rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Calculator className="w-6 h-6 text-[hsl(var(--neon-green))]" />
                  <h3 className="font-bold">AI Tax Breakdown</h3>
                </div>
                
                <div className="space-y-4">
                  {taxData.map((tax, i) => (
                    <div key={i} className="flex justify-between items-center p-4 glass rounded-lg">
                      <div>
                        <p className="font-medium">{tax.label}</p>
                        <p className="text-sm text-muted-foreground">{tax.value}</p>
                      </div>
                      <p className="text-xl font-bold gradient-text-cyan">{tax.amount}</p>
                    </div>
                  ))}
                  
                  <div className="flex justify-between items-center p-4 bg-[hsl(var(--neon-green))]/10 rounded-lg border border-[hsl(var(--neon-green))]/30">
                    <p className="font-bold">Total Tax Estimate</p>
                    <p className="text-2xl font-bold text-[hsl(var(--neon-green))]">$5,050</p>
                  </div>
                </div>
              </div>

              <div className="glass rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-6 h-6 text-[hsl(var(--neon-cyan))]" />
                  <h3 className="font-bold">AI Insights</h3>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[hsl(var(--neon-green))]">•</span>
                    <span>You can save ~$450 by filing quarterly instead of annually</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[hsl(var(--neon-green))]">•</span>
                    <span>Consider deducting home office expenses (est. $120/month)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[hsl(var(--neon-green))]">•</span>
                    <span>Your effective tax rate is 2% lower than industry average</span>
                  </li>
                </ul>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>

      <MobileNav />
    </div>
  );
};

export default TaxAssistant;
