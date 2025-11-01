import { motion } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { TopBar } from "@/components/TopBar";
import { MobileNav } from "@/components/MobileNav";
import { Users, ShieldCheck, Building, CreditCard } from "lucide-react";

const AdminPanel = () => {
  const stats = [
    { icon: Users, label: "Total Users", value: "1,234", color: "cyan" },
    { icon: ShieldCheck, label: "Active Roles", value: "8", color: "green" },
    { icon: Building, label: "Tenants", value: "45", color: "blue" },
    { icon: CreditCard, label: "Subscriptions", value: "$45.2K", color: "cyan" },
  ];

  const recentUsers = [
    { name: "John Doe", email: "john@example.com", plan: "Business", status: "Active" },
    { name: "Jane Smith", email: "jane@example.com", plan: "Enterprise", status: "Active" },
    { name: "Bob Wilson", email: "bob@example.com", plan: "Basic", status: "Trial" },
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
          <h1 className="text-3xl md:text-4xl font-bold mb-2 gradient-text-cyan">Admin Panel</h1>
          <p className="text-muted-foreground">Manage users, roles, and subscriptions</p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <GlassCard neonBorder={stat.color as any}>
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        stat.color === "cyan"
                          ? "bg-[hsl(var(--neon-cyan))]/20"
                          : stat.color === "green"
                          ? "bg-[hsl(var(--neon-green))]/20"
                          : "bg-[hsl(var(--neon-blue))]/20"
                      }`}
                    >
                      <Icon
                        className={`w-6 h-6 ${
                          stat.color === "cyan"
                            ? "text-[hsl(var(--neon-cyan))]"
                            : stat.color === "green"
                            ? "text-[hsl(var(--neon-green))]"
                            : "text-[hsl(var(--neon-blue))]"
                        }`}
                      />
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold gradient-text-cyan">{stat.value}</p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {["Users", "Roles", "Tenants", "Subscriptions", "Logs"].map((tab, i) => (
            <button
              key={tab}
              className={`px-6 py-2 rounded-full glass transition-all whitespace-nowrap ${
                i === 0 ? "neon-border-cyan" : "border border-white/10"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Users Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <GlassCard neonBorder="cyan">
            <h2 className="text-xl font-bold mb-6">Recent Users</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Name</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Email</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Plan</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentUsers.map((user, i) => (
                    <motion.tr
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="border-b border-white/5 hover:bg-white/5 transition-colors cursor-pointer active:scale-[0.99]"
                    >
                      <td className="py-4 px-4 font-medium">{user.name}</td>
                      <td className="py-4 px-4 text-muted-foreground">{user.email}</td>
                      <td className="py-4 px-4">
                        <span className="px-3 py-1 rounded-full bg-[hsl(var(--neon-cyan))]/20 text-[hsl(var(--neon-cyan))] text-sm">
                          {user.plan}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <span
                          className={`px-3 py-1 rounded-full text-sm ${
                            user.status === "Active"
                              ? "bg-[hsl(var(--neon-green))]/20 text-[hsl(var(--neon-green))]"
                              : "bg-[hsl(var(--neon-orange))]/20 text-[hsl(var(--neon-orange))]"
                          }`}
                        >
                          {user.status}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlassCard>
        </motion.div>
      </div>

      <MobileNav />
    </div>
  );
};

export default AdminPanel;
