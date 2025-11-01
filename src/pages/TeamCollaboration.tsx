import { motion } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { TopBar } from "@/components/TopBar";
import { MobileNav } from "@/components/MobileNav";
import { Users, UserPlus, MessageCircle, CheckCircle2 } from "lucide-react";
import { GlowButton } from "@/components/GlowButton";

const TeamCollaboration = () => {
  const members = [
    { name: "Sarah Chen", role: "CEO", status: "online", avatar: "SC" },
    { name: "Mike Johnson", role: "CTO", status: "online", avatar: "MJ" },
    { name: "Emily Davis", role: "CFO", status: "away", avatar: "ED" },
    { name: "Alex Martinez", role: "Designer", status: "offline", avatar: "AM" },
    { name: "Jordan Lee", role: "Developer", status: "online", avatar: "JL" },
  ];

  const recentActivity = [
    { user: "Sarah Chen", action: "created new invoice", time: "2m ago" },
    { user: "Mike Johnson", action: "updated customer data", time: "15m ago" },
    { user: "Emily Davis", action: "exported financial report", time: "1h ago" },
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
          <h1 className="text-3xl md:text-4xl font-bold mb-2 gradient-text-cyan">Team Collaboration</h1>
          <p className="text-muted-foreground">Work together seamlessly</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <GlassCard neonBorder="cyan">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-[hsl(var(--neon-cyan))]" />
                  <h2 className="text-xl font-bold">Team Members</h2>
                </div>
                <GlowButton variant="cyan" size="sm">
                  <UserPlus className="w-4 h-4 mr-2" />
                  Invite
                </GlowButton>
              </div>

              <div className="space-y-3">
                {members.map((member, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="glass rounded-xl p-4 flex items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[hsl(var(--neon-cyan))] to-[hsl(var(--neon-blue))] flex items-center justify-center font-bold">
                      {member.avatar}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold">{member.name}</h3>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${
                        member.status === "online" 
                          ? "bg-[hsl(var(--neon-green))]" 
                          : member.status === "away"
                          ? "bg-[hsl(var(--neon-orange))]"
                          : "bg-muted"
                      }`} />
                      <span className="text-xs text-muted-foreground capitalize">{member.status}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassCard>

            <GlassCard>
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle2 className="w-6 h-6 text-[hsl(var(--neon-green))]" />
                <h2 className="text-xl font-bold">Recent Activity</h2>
              </div>

              <div className="space-y-3">
                {recentActivity.map((activity, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="glass rounded-xl p-4"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-medium">{activity.user}</p>
                        <p className="text-sm text-muted-foreground">{activity.action}</p>
                      </div>
                      <span className="text-xs text-muted-foreground">{activity.time}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </div>

          <div className="space-y-6">
            <GlassCard neonBorder="blue">
              <div className="flex items-center gap-3 mb-6">
                <MessageCircle className="w-6 h-6 text-[hsl(var(--neon-blue))]" />
                <h2 className="text-xl font-bold">Team Chat</h2>
              </div>

              <div className="space-y-3 mb-4">
                <div className="glass rounded-xl p-3">
                  <p className="text-xs text-muted-foreground mb-1">Sarah Chen • 5m ago</p>
                  <p className="text-sm">Don't forget the quarterly review tomorrow!</p>
                </div>
                <div className="glass rounded-xl p-3">
                  <p className="text-xs text-muted-foreground mb-1">Mike Johnson • 12m ago</p>
                  <p className="text-sm">Just pushed the new dashboard updates</p>
                </div>
                <div className="glass rounded-xl p-3">
                  <p className="text-xs text-muted-foreground mb-1">Emily Davis • 1h ago</p>
                  <p className="text-sm">Revenue numbers looking great this month 📈</p>
                </div>
              </div>

              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="Type a message..." 
                  className="flex-1 glass border-white/20 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-[hsl(var(--neon-cyan))]"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-[hsl(var(--neon-cyan))] to-[hsl(var(--neon-blue))] rounded-xl font-semibold hover:shadow-lg transition-all">
                  Send
                </button>
              </div>
            </GlassCard>

            <GlassCard>
              <h3 className="font-bold mb-4">Team Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Active Members</span>
                  <span className="font-bold text-[hsl(var(--neon-green))]">3/5</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Tasks Completed</span>
                  <span className="font-bold">28</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Messages Today</span>
                  <span className="font-bold">142</span>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>

      <MobileNav />
    </div>
  );
};

export default TeamCollaboration;
