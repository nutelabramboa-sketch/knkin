import { motion } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { TopBar } from "@/components/TopBar";
import { MobileNav } from "@/components/MobileNav";
import { Shield, FileText, Clock, User } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const ComplianceAudit = () => {
  const logs = [
    { time: "2025-01-31 14:32", user: "Sarah Chen", action: "Created invoice #1245", ip: "192.168.1.1" },
    { time: "2025-01-31 14:28", user: "Mike Johnson", action: "Updated customer: Acme Corp", ip: "192.168.1.5" },
    { time: "2025-01-31 14:15", user: "Emily Davis", action: "Exported financial report", ip: "192.168.1.3" },
    { time: "2025-01-31 13:58", user: "Alex Martinez", action: "Modified user permissions", ip: "192.168.1.8" },
    { time: "2025-01-31 13:42", user: "Jordan Lee", action: "API key generated", ip: "192.168.1.12" },
    { time: "2025-01-31 13:20", user: "Sarah Chen", action: "Deleted invoice draft #1244", ip: "192.168.1.1" },
    { time: "2025-01-31 12:55", user: "Mike Johnson", action: "Login successful", ip: "192.168.1.5" },
  ];

  const stats = [
    { icon: FileText, label: "Total Logs", value: "12,456", color: "cyan" },
    { icon: Shield, label: "Security Events", value: "23", color: "green" },
    { icon: Clock, label: "Last Audit", value: "2 days ago", color: "blue" },
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
          <h1 className="text-3xl md:text-4xl font-bold mb-2 gradient-text-cyan">Compliance & Audit</h1>
          <p className="text-muted-foreground">Track all system activities and changes</p>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label>Time Range</Label>
              <Select defaultValue="today">
                <SelectTrigger className="glass border-white/20">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="week">Last 7 Days</SelectItem>
                  <SelectItem value="month">Last 30 Days</SelectItem>
                  <SelectItem value="custom">Custom Range</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Event Type</Label>
              <Select defaultValue="all">
                <SelectTrigger className="glass border-white/20">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Events</SelectItem>
                  <SelectItem value="auth">Authentication</SelectItem>
                  <SelectItem value="data">Data Changes</SelectItem>
                  <SelectItem value="security">Security</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>User</Label>
              <Select defaultValue="all">
                <SelectTrigger className="glass border-white/20">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Users</SelectItem>
                  <SelectItem value="sarah">Sarah Chen</SelectItem>
                  <SelectItem value="mike">Mike Johnson</SelectItem>
                  <SelectItem value="emily">Emily Davis</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </GlassCard>

        <GlassCard>
          <h3 className="font-bold text-lg mb-4">Audit Log</h3>
          <div className="space-y-2">
            {logs.map((log, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="glass rounded-xl p-4 hover:bg-white/10 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground min-w-[140px]">
                    <Clock className="w-4 h-4" />
                    <span>{log.time}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 min-w-[120px]">
                    <User className="w-4 h-4 text-[hsl(var(--neon-cyan))]" />
                    <span className="text-sm font-medium">{log.user}</span>
                  </div>
                  
                  <div className="flex-1">
                    <p className="text-sm">{log.action}</p>
                  </div>
                  
                  <div className="text-xs text-muted-foreground font-mono">
                    {log.ip}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </GlassCard>

        <GlassCard neonBorder="green" className="mt-8">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-6 h-6 text-[hsl(var(--neon-green))]" />
            <h3 className="font-bold text-lg">Compliance Status</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="glass rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">GDPR Compliance</span>
                <span className="text-xs px-2 py-1 rounded-full bg-[hsl(var(--neon-green))]/20 text-[hsl(var(--neon-green))]">
                  Active
                </span>
              </div>
              <p className="text-xs text-muted-foreground">
                All data processing activities are logged and compliant
              </p>
            </div>
            <div className="glass rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">SOC 2 Type II</span>
                <span className="text-xs px-2 py-1 rounded-full bg-[hsl(var(--neon-green))]/20 text-[hsl(var(--neon-green))]">
                  Certified
                </span>
              </div>
              <p className="text-xs text-muted-foreground">
                Security controls audited and verified
              </p>
            </div>
          </div>
        </GlassCard>
      </div>

      <MobileNav />
    </div>
  );
};

export default ComplianceAudit;
