import { motion } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { GlowButton } from "@/components/GlowButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import icon from "@/assets/icon-192.png";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md"
      >
        <div className="flex justify-center mb-8">
          <img src={icon} alt="AI Control Money" className="w-20 h-20 animate-float" />
        </div>

        <GlassCard neonBorder="cyan">
          <h1 className="text-3xl font-bold text-center mb-2 gradient-text-cyan">Welcome Back</h1>
          <p className="text-center text-muted-foreground mb-8">Login to your account</p>

          <form onSubmit={handleSubmit} className="space-y-6">
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

            <GlowButton variant="cyan" size="lg" type="submit" className="w-full">
              Login
            </GlowButton>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => navigate("/register")}
              className="text-[hsl(var(--neon-cyan))] hover:underline"
            >
              Don't have an account? Register
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

export default Login;
