import { motion } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { GlowButton } from "@/components/GlowButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import icon from "@/assets/icon-192.png";

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md"
      >
        <div className="flex justify-center mb-8">
          <img src={icon} alt="AI Control Money" className="w-20 h-20 animate-float" />
        </div>

        <GlassCard neonBorder="cyan">
          <h1 className="text-3xl font-bold text-center mb-2 gradient-text-cyan">Create Account</h1>
          <p className="text-center text-muted-foreground mb-8">Start your 14-day free trial</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                className="glass border-white/20 focus:border-[hsl(var(--neon-cyan))] transition-colors h-12"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="glass border-white/20 focus:border-[hsl(var(--neon-cyan))] transition-colors h-12"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="glass border-white/20 focus:border-[hsl(var(--neon-cyan))] transition-colors h-12"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirm">Confirm Password</Label>
              <Input
                id="confirm"
                type="password"
                placeholder="••••••••"
                className="glass border-white/20 focus:border-[hsl(var(--neon-cyan))] transition-colors h-12"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="plan">Select Plan</Label>
              <Select defaultValue="basic">
                <SelectTrigger className="glass border-white/20 focus:border-[hsl(var(--neon-cyan))] transition-colors h-12">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="glass border-white/20">
                  <SelectItem value="basic">Basic - $199/year</SelectItem>
                  <SelectItem value="business">Business - $499/year</SelectItem>
                  <SelectItem value="enterprise">Enterprise - $1,299/year</SelectItem>
                  <SelectItem value="lifetime">Lifetime - $399</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <GlowButton variant="cyan" size="lg" type="submit" className="w-full">
              Create Account
            </GlowButton>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => navigate("/login")}
              className="text-[hsl(var(--neon-cyan))] hover:underline"
            >
              Already have an account? Login
            </button>
          </div>

          <div className="mt-4 text-center">
            <button onClick={() => navigate("/")} className="text-muted-foreground hover:text-foreground text-sm">
              ← Back to home
            </button>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
};

export default Register;
