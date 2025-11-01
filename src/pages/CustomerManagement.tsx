import { motion } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { TopBar } from "@/components/TopBar";
import { MobileNav } from "@/components/MobileNav";
import { Users, TrendingUp, DollarSign, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const CustomerManagement = () => {
  const customers = [
    { name: "Acme Corp", email: "contact@acme.com", plan: "Enterprise", revenue: "$12,500", growth: "+24%", status: "active" },
    { name: "Tech Solutions", email: "hello@techsol.com", plan: "Business", revenue: "$8,200", growth: "+18%", status: "active" },
    { name: "Global Industries", email: "info@global.com", plan: "Business", revenue: "$6,800", growth: "+12%", status: "active" },
    { name: "StartUp Inc", email: "team@startup.com", plan: "Basic", revenue: "$2,400", growth: "+31%", status: "trial" },
    { name: "Finance Group", email: "admin@finance.com", plan: "Enterprise", revenue: "$15,200", growth: "+15%", status: "active" },
  ];

  const stats = [
    { icon: Users, label: "Total Customers", value: "1,245", color: "cyan" },
    { icon: TrendingUp, label: "Growth Rate", value: "+18%", color: "green" },
    { icon: DollarSign, label: "Total Revenue", value: "$2.4M", color: "blue" },
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
          <h1 className="text-3xl md:text-4xl font-bold mb-2 gradient-text-cyan">Customer Management</h1>
          <p className="text-muted-foreground">Manage and grow your customer base</p>
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

        <GlassCard neonBorder="cyan" className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input 
              placeholder="Search customers..." 
              className="pl-10 glass border-white/20 h-12"
            />
          </div>
        </GlassCard>

        <div className="space-y-4">
          {customers.map((customer, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard hover className="p-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-bold text-lg">{customer.name}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        customer.status === "active" 
                          ? "bg-[hsl(var(--neon-green))]/20 text-[hsl(var(--neon-green))]"
                          : "bg-[hsl(var(--neon-cyan))]/20 text-[hsl(var(--neon-cyan))]"
                      }`}>
                        {customer.status}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{customer.email}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-6 md:gap-8">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Plan</p>
                      <p className="font-medium">{customer.plan}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Revenue</p>
                      <p className="font-medium gradient-text-cyan">{customer.revenue}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Growth</p>
                      <p className="font-medium text-[hsl(var(--neon-green))]">{customer.growth}</p>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>

      <MobileNav />
    </div>
  );
};

export default CustomerManagement;
