import { motion } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { TopBar } from "@/components/TopBar";
import { MobileNav } from "@/components/MobileNav";
import { Key, Copy, Plus, Eye, EyeOff } from "lucide-react";
import { GlowButton } from "@/components/GlowButton";
import { useState } from "react";

const APIGateway = () => {
  const [showKeys, setShowKeys] = useState<{ [key: string]: boolean }>({});

  const apiKeys = [
    { id: 1, name: "Production API", key: "pk_live_51H7zPqJ9Xh2Xg8Y...", created: "2024-01-15", requests: "124.5K" },
    { id: 2, name: "Development API", key: "pk_test_51H7zPqJ9Xh2Xg8Y...", created: "2024-02-10", requests: "8.2K" },
    { id: 3, name: "Mobile App API", key: "pk_live_51H7zPqJ9Xh2Xg8Y...", created: "2024-03-05", requests: "56.8K" },
  ];

  const toggleKeyVisibility = (id: number) => {
    setShowKeys(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="min-h-screen pb-24 md:pb-8">
      <TopBar />
      
      <div className="container mx-auto px-4 pt-20 md:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-2 gradient-text-cyan">API Gateway</h1>
          <p className="text-muted-foreground">Manage your API keys and access</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <GlassCard className="text-center p-6">
            <Key className="w-12 h-12 mx-auto mb-3 text-[hsl(var(--neon-cyan))]" />
            <p className="text-sm text-muted-foreground mb-1">Active Keys</p>
            <p className="text-3xl font-bold gradient-text-cyan">3</p>
          </GlassCard>
          
          <GlassCard className="text-center p-6">
            <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
              <span className="text-3xl">📊</span>
            </div>
            <p className="text-sm text-muted-foreground mb-1">Total Requests</p>
            <p className="text-3xl font-bold gradient-text-cyan">189K</p>
          </GlassCard>
          
          <GlassCard className="text-center p-6">
            <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
              <span className="text-3xl">✅</span>
            </div>
            <p className="text-sm text-muted-foreground mb-1">Success Rate</p>
            <p className="text-3xl font-bold text-[hsl(var(--neon-green))]">99.8%</p>
          </GlassCard>
        </div>

        <div className="flex justify-end mb-6">
          <GlowButton variant="cyan">
            <Plus className="w-4 h-4 mr-2" />
            Generate New Key
          </GlowButton>
        </div>

        <div className="space-y-4">
          {apiKeys.map((api, i) => (
            <motion.div
              key={api.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard neonBorder="cyan" className="p-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Key className="w-5 h-5 text-[hsl(var(--neon-cyan))]" />
                      <h3 className="font-bold text-lg">{api.name}</h3>
                    </div>
                    
                    <div className="glass rounded-xl p-3 mb-3 flex items-center gap-2">
                      <code className="flex-1 text-sm font-mono">
                        {showKeys[api.id] ? api.key : api.key.replace(/./g, '•')}
                      </code>
                      <button 
                        onClick={() => toggleKeyVisibility(api.id)}
                        className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                      >
                        {showKeys[api.id] ? (
                          <EyeOff className="w-4 h-4" />
                        ) : (
                          <Eye className="w-4 h-4" />
                        )}
                      </button>
                      <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Created:</span>{" "}
                        <span className="font-medium">{api.created}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Requests:</span>{" "}
                        <span className="font-medium gradient-text-cyan">{api.requests}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button className="px-4 py-2 glass rounded-xl hover:bg-white/10 transition-colors text-sm">
                      Edit
                    </button>
                    <button className="px-4 py-2 glass rounded-xl hover:bg-red-500/10 text-red-400 transition-colors text-sm">
                      Revoke
                    </button>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <GlassCard neonBorder="green" className="mt-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">📚</span>
            <h3 className="font-bold text-lg">API Documentation</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Learn how to integrate our API into your applications with comprehensive guides and examples.
          </p>
          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-2 glass rounded-xl hover:bg-white/10 transition-colors text-sm">
              View Docs
            </button>
            <button className="px-4 py-2 glass rounded-xl hover:bg-white/10 transition-colors text-sm">
              Code Examples
            </button>
            <button className="px-4 py-2 glass rounded-xl hover:bg-white/10 transition-colors text-sm">
              Postman Collection
            </button>
          </div>
        </GlassCard>
      </div>

      <MobileNav />
    </div>
  );
};

export default APIGateway;
