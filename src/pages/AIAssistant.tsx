import { motion } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { TopBar } from "@/components/TopBar";
import { MobileNav } from "@/components/MobileNav";
import { Send, Bot } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const AIAssistant = () => {
  const [messages] = useState([
    { role: "ai", text: "Hello! I'm your AI assistant. How can I help with your invoices today?" },
    { role: "user", text: "Show me today's invoices" },
    { role: "ai", text: "You have 12 invoices created today totaling $8,450. Would you like to see more details?" },
  ]);

  return (
    <div className="min-h-screen pb-24 md:pb-8 flex flex-col">
      <TopBar />

      <div className="container mx-auto px-4 pt-20 md:pt-24 flex-1 flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-2 gradient-text-cyan">AI Assistant</h1>
          <p className="text-muted-foreground">Get instant help with your business</p>
        </motion.div>

        {/* Chat Area */}
        <div className="flex-1 mb-6 overflow-y-auto">
          <div className="space-y-4 max-w-3xl mx-auto">
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: msg.role === "user" ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.role === "ai" && (
                  <div className="w-10 h-10 rounded-full bg-[hsl(var(--neon-cyan))]/20 flex items-center justify-center mr-3 flex-shrink-0">
                    <Bot className="w-5 h-5 text-[hsl(var(--neon-cyan))]" />
                  </div>
                )}
                <GlassCard
                  className={`max-w-[80%] ${
                    msg.role === "user"
                      ? "neon-border-cyan bg-[hsl(var(--neon-cyan))]/10"
                      : "border-white/20"
                  }`}
                >
                  <p className="text-sm md:text-base">{msg.text}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Input Bar */}
        <div className="max-w-3xl mx-auto w-full">
          <GlassCard className="flex items-center gap-3 p-3">
            <Input
              placeholder="Ask AI anything..."
              className="glass border-none bg-transparent focus-visible:ring-0 h-12"
            />
            <button className="w-12 h-12 rounded-full bg-gradient-to-r from-[hsl(var(--neon-cyan))] to-[hsl(var(--neon-blue))] flex items-center justify-center flex-shrink-0 glow-cyan active:scale-95 transition-transform">
              <Send className="w-5 h-5 text-[hsl(var(--primary-foreground))]" />
            </button>
          </GlassCard>
        </div>
      </div>

      <MobileNav />
    </div>
  );
};

export default AIAssistant;
