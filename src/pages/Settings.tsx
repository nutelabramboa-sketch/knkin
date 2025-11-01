import { motion } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { GlowButton } from "@/components/GlowButton";
import { TopBar } from "@/components/TopBar";
import { MobileNav } from "@/components/MobileNav";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const Settings = () => {
  return (
    <div className="min-h-screen pb-24 md:pb-8">
      <TopBar />

      <div className="container mx-auto px-4 pt-20 md:pt-24 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-2 gradient-text-cyan">Settings</h1>
          <p className="text-muted-foreground">Manage your account and preferences</p>
        </motion.div>

        <div className="space-y-6">
          {/* Account Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <GlassCard>
              <h2 className="text-xl font-bold mb-4">Account Information</h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    defaultValue="John Doe"
                    className="glass border-white/20 h-12 mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    defaultValue="john@example.com"
                    className="glass border-white/20 h-12 mt-2"
                  />
                </div>
                <GlowButton variant="cyan">Save Changes</GlowButton>
              </div>
            </GlassCard>
          </motion.div>

          {/* Password */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <GlassCard>
              <h2 className="text-xl font-bold mb-4">Change Password</h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="current">Current Password</Label>
                  <Input
                    id="current"
                    type="password"
                    className="glass border-white/20 h-12 mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="new">New Password</Label>
                  <Input
                    id="new"
                    type="password"
                    className="glass border-white/20 h-12 mt-2"
                  />
                </div>
                <GlowButton variant="cyan">Update Password</GlowButton>
              </div>
            </GlassCard>
          </motion.div>

          {/* Preferences */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <GlassCard>
              <h2 className="text-xl font-bold mb-4">Preferences</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Email Notifications</p>
                    <p className="text-sm text-muted-foreground">Receive invoice updates via email</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Auto-save Invoices</p>
                    <p className="text-sm text-muted-foreground">Automatically save draft invoices</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">AI Suggestions</p>
                    <p className="text-sm text-muted-foreground">Get smart invoice suggestions</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Billing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <GlassCard>
              <h2 className="text-xl font-bold mb-4">Billing</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Current Plan</p>
                    <p className="text-sm text-muted-foreground">Business - $499/year</p>
                  </div>
                  <GlowButton variant="coral" size="sm">
                    Upgrade
                  </GlowButton>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-sm text-muted-foreground mb-2">Next billing date: March 1, 2025</p>
                  <GlowButton variant="cyan" size="sm">
                    View Invoices
                  </GlowButton>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>

      <MobileNav />
    </div>
  );
};

export default Settings;
