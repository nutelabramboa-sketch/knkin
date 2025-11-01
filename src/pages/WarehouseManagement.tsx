import { motion } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { TopBar } from "@/components/TopBar";
import { MobileNav } from "@/components/MobileNav";
import { Package, AlertTriangle, TrendingUp, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const WarehouseManagement = () => {
  const inventory = [
    { id: "SKU-001", name: "Office Desk Pro", stock: 45, min: 20, category: "Furniture", value: "$22,500" },
    { id: "SKU-002", name: "Ergonomic Chair", stock: 12, min: 15, category: "Furniture", value: "$3,600", alert: true },
    { id: "SKU-003", name: "Laptop Stand", stock: 156, min: 50, category: "Accessories", value: "$7,800" },
    { id: "SKU-004", name: "Monitor 27\"", stock: 8, min: 10, category: "Electronics", value: "$3,200", alert: true },
    { id: "SKU-005", name: "USB-C Hub", stock: 234, min: 100, category: "Accessories", value: "$11,700" },
  ];

  const stats = [
    { icon: Package, label: "Total Items", value: "455", color: "cyan" },
    { icon: AlertTriangle, label: "Low Stock", value: "2", color: "orange" },
    { icon: TrendingUp, label: "Inventory Value", value: "$48.8K", color: "green" },
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
          <h1 className="text-3xl md:text-4xl font-bold mb-2 gradient-text-cyan">Warehouse Management</h1>
          <p className="text-muted-foreground">Track and manage your inventory</p>
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
              placeholder="Search inventory..." 
              className="pl-10 glass border-white/20 h-12"
            />
          </div>
        </GlassCard>

        <div className="space-y-4">
          {inventory.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard 
                neonBorder={item.alert ? "none" : "none"}
                className={`p-6 ${item.alert ? 'border-[hsl(var(--neon-orange))]' : ''}`}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  {item.alert && (
                    <AlertTriangle className="w-6 h-6 text-[hsl(var(--neon-orange))] flex-shrink-0" />
                  )}
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-bold text-lg">{item.name}</h3>
                      <span className="text-xs px-2 py-1 rounded-full bg-white/10">
                        {item.id}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.category}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-6 md:gap-8">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Stock</p>
                      <p className={`font-bold text-lg ${
                        item.stock < item.min 
                          ? "text-[hsl(var(--neon-orange))]" 
                          : "text-[hsl(var(--neon-green))]"
                      }`}>
                        {item.stock}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Min. Required</p>
                      <p className="font-medium">{item.min}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Value</p>
                      <p className="font-bold gradient-text-cyan">{item.value}</p>
                    </div>
                  </div>
                </div>

                {item.alert && (
                  <div className="mt-4 p-3 bg-[hsl(var(--neon-orange))]/10 rounded-lg border border-[hsl(var(--neon-orange))]/30">
                    <p className="text-sm text-[hsl(var(--neon-orange))]">
                      ⚠️ Stock below minimum threshold. Consider reordering soon.
                    </p>
                  </div>
                )}
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <GlassCard neonBorder="green" className="mt-8">
          <h3 className="font-bold text-lg mb-4">Stock Usage Trend</h3>
          <div className="h-48 flex items-end justify-between gap-2">
            {[45, 52, 48, 58, 55, 62, 70, 68, 75, 72, 78, 80].map((height, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${height}%` }}
                transition={{ delay: i * 0.05 }}
                className="flex-1 bg-gradient-to-t from-[hsl(var(--neon-green))] to-[hsl(var(--neon-cyan))] rounded-t-lg"
              />
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-4 text-center">
            Last 12 months usage pattern
          </p>
        </GlassCard>
      </div>

      <MobileNav />
    </div>
  );
};

export default WarehouseManagement;
