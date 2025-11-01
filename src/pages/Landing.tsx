import { motion } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { GlowButton } from "@/components/GlowButton";
import { useNavigate } from "react-router-dom";
import { Mic, Camera, Smartphone, Linkedin, Twitter, Github } from "lucide-react";
import icon from "@/assets/icon-192.png";
import voiceImg from "@/assets/voice-new.png";
import photoImg from "@/assets/photo.png";
import nfcImg from "@/assets/nfc.png";

const Landing = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Mic,
      title: "Voice Invoice AI",
      description: "Speak your invoice, AI writes it instantly",
      color: "cyan",
    },
    {
      icon: Camera,
      title: "Photo Invoice AI",
      description: "Snap a photo, invoice created automatically",
      color: "green",
    },
    {
      icon: Smartphone,
      title: "NFC Tap-to-Pay",
      description: "Customer taps phone → instant payment & invoice",
      color: "blue",
    },
  ];

  const pricing = [
    { 
      name: "Starter", 
      price: "$199", 
      period: "/year", 
      features: [
        "AI Photo & Voice Invoices",
        "Quick Invoice Creation",
        "Basic Accounting & Reports",
        "AI Financial Assistant",
        "Customer Management (CRM)",
        "Mobile & PWA Support",
        "5 Users",
        "Email Support"
      ],
      description: "Perfect for freelancers and solo businesses"
    },
    { 
      name: "Business", 
      price: "$499", 
      period: "/year", 
      features: [
        "Everything in Starter",
        "NFC Tap-to-Pay Terminal",
        "Bank Integration (Auto-sync)",
        "Multi-Company Support",
        "Advanced Analytics & Forecasting",
        "Cash Flow Predictions",
        "Recurring Billing",
        "Warehouse Management",
        "20 Users",
        "Priority Email Support"
      ],
      description: "Ideal for growing businesses"
    },
    { 
      name: "Lifetime", 
      price: "$399", 
      period: "one-time", 
      features: [
        "Everything in Enterprise",
        "Lifetime Access (No recurring fees)",
        "All Future Updates Included",
        "Priority Support Forever",
        "Early Access to New Features",
        "Exclusive Beta Programs"
      ],
      badge: "🔥 Best Value",
      highlight: true,
      description: "Limited-time offer - Pay once, use forever"
    },
    { 
      name: "Enterprise", 
      price: "$1,299", 
      period: "/year", 
      features: [
        "Everything in Business",
        "Multi-Tenant Management",
        "RBAC & SSO (Single Sign-On)",
        "API Gateway & Webhooks",
        "SOC 2, GDPR, HIPAA Compliance",
        "Executive Dashboards (CEO, CFO, CTO)",
        "Team Collaboration Tools",
        "Payroll System",
        "Unlimited Users",
        "24/7 Phone & Chat Support",
        "Dedicated Account Manager"
      ],
      description: "Complete solution for enterprises"
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden relative">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10 backdrop-blur-xl relative"
      >
        <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={icon} alt="AI Control Money" className="w-10 h-10 animate-float" />
            <h2 className="text-xl md:text-2xl font-bold text-[hsl(var(--neon-cyan))]">
              AI CONTROL MONEY
            </h2>
          </div>

          <div className="hidden md:flex gap-3">
            <GlowButton variant="cyan" size="sm" onClick={() => navigate("/login")}>
              Login
            </GlowButton>
            <GlowButton variant="cyan" size="sm" onClick={() => navigate("/register")}>
              Register
            </GlowButton>
          </div>

          <div className="flex md:hidden gap-2">
            <button
              onClick={() => navigate("/login")}
              className="px-4 py-2 text-sm rounded-full border-2 border-[hsl(var(--neon-cyan))] text-black font-bold bg-[hsl(var(--neon-cyan))] shadow-[0_0_20px_hsl(var(--neon-cyan))]"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/register")}
              className="px-4 py-2 text-sm rounded-full bg-[hsl(var(--neon-cyan))] text-black font-bold border-2 border-white/30 shadow-[0_0_20px_hsl(var(--neon-cyan))]"
            >
              Register
            </button>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-6 relative z-10">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <div className="glass px-4 py-2 rounded-full flex items-center gap-2">
              <span className="text-[hsl(var(--neon-cyan))]">🚀</span>
              <span className="text-sm">World's First NFC Tap-to-Invoice System</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            <span className="gradient-text-cyan">AI CONTROL</span>
            <br />
            <span className="gradient-text-cyan">MONEY</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            The intelligent business companion for your financial world.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <GlowButton variant="cyan" size="lg" onClick={() => navigate("/login")}>
              Login
            </GlowButton>
            <GlowButton variant="cyan" size="lg" onClick={() => navigate("/register")}>
              Register
            </GlowButton>
            <GlowButton variant="green" size="lg" onClick={() => navigate("/dashboard")}>
              Demo
            </GlowButton>
            <GlowButton variant="blue" size="lg" onClick={() => navigate("/install")}>
              📱 Download App
            </GlowButton>
          </motion.div>

          {/* Feature Cards Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <GlassCard neonBorder="cyan" className="p-8">
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <div className="w-16 h-16 rounded-full bg-[hsl(var(--neon-blue))] flex items-center justify-center animate-glow-pulse">
                  <Smartphone className="w-8 h-8 text-[hsl(var(--primary-foreground))]" />
                </div>
                <div className="text-4xl">→</div>
                <div className="w-16 h-16 rounded-full bg-[hsl(var(--neon-green))] flex items-center justify-center animate-glow-pulse">
                  <span className="text-3xl">✓</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mt-6 mb-2">Tap Phone → Get Paid → Auto Invoice!</h3>
              <p className="text-[hsl(var(--neon-green))]">No email, no typing, no waiting.</p>
              <p className="text-muted-foreground mt-2">
                Customer taps their card, invoice sent instantly via NFC. Fully automated accounting & graphs.
              </p>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 md:px-6 bg-gradient-to-b from-transparent via-[hsl(var(--neon-cyan))]/5 to-transparent relative z-10">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text-cyan"
          >
            Powered by Advanced AI
          </motion.h2>
          <p className="text-center text-muted-foreground mb-4 text-lg">
            Three revolutionary ways to create invoices in seconds
          </p>
          <p className="text-center text-sm text-muted-foreground mb-16 max-w-2xl mx-auto">
            Using Claude 3.5 Sonnet, GPT-4 Vision & OpenAI Whisper for 99.2% accuracy
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 max-w-4xl mx-auto">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <GlassCard 
                    neonBorder={feature.color as any} 
                    hover 
                    className="h-full p-4 border-2"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 ${
                        feature.color === "cyan"
                          ? "bg-[hsl(var(--neon-cyan))]/20"
                          : feature.color === "green"
                          ? "bg-[hsl(var(--neon-green))]/20"
                          : "bg-[hsl(var(--neon-blue))]/20"
                      }`}
                    >
                      <Icon
                        className={`w-6 h-6 ${
                          feature.color === "cyan"
                            ? "text-[hsl(var(--neon-cyan))]"
                            : feature.color === "green"
                            ? "text-[hsl(var(--neon-green))]"
                            : "text-[hsl(var(--neon-blue))]"
                        }`}
                      />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground mb-3 text-xs md:text-sm">{feature.description}</p>
                    <img
                      src={i === 0 ? voiceImg : i === 1 ? photoImg : nfcImg}
                      alt={feature.title}
                      className="w-full max-w-full rounded-lg mt-3 border border-white/10"
                      style={{
                        aspectRatio: '1.6/1',
                        objectFit: 'cover',
                        objectPosition: 'center center',
                        imageRendering: 'crisp-edges',
                        filter: 'drop-shadow(0 0 8px rgba(0,255,255,0.3))'
                      }}
                    />
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing - Moved higher up */}
      <section className="py-20 px-4 md:px-6 bg-gradient-to-b from-transparent via-[hsl(var(--neon-blue))]/5 to-transparent relative z-10">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text-cyan"
          >
            Transparent Pricing
          </motion.h2>
          <p className="text-center text-muted-foreground mb-4 text-lg">
            Choose the plan that fits your business - Start with 14-day free trial
          </p>
          <p className="text-center text-sm text-[hsl(var(--neon-green))] mb-16">
            💡 Save 40-50% compared to QuickBooks + CRM + Inventory subscriptions
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {pricing.map((plan, i) => {
              const neonColor = i === 0 ? "cyan" : i === 1 ? "green" : i === 2 ? "cyan" : "blue";
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: plan.highlight ? 1.05 : 1.02, y: -10 }}
                  className={`${plan.highlight || i === 3 ? "md:col-span-2 lg:col-span-1" : ""} group`}
                >
                  <GlassCard
                    neonBorder={neonColor as any}
                    className={`h-full relative flex flex-col p-6 border-2 transition-all duration-500 ${
                      plan.highlight 
                        ? "scale-100 lg:scale-105 border-[hsl(var(--neon-cyan))] shadow-[0_0_40px_hsl(var(--neon-cyan)/0.6)] group-hover:shadow-[0_0_60px_hsl(var(--neon-cyan)/0.8)]" 
                        : `${
                          i === 0 ? "border-[hsl(var(--neon-cyan))]/50 group-hover:border-[hsl(var(--neon-cyan))] group-hover:shadow-[0_0_40px_hsl(var(--neon-cyan)/0.5)]" :
                          i === 1 ? "border-[hsl(var(--neon-green))]/50 group-hover:border-[hsl(var(--neon-green))] group-hover:shadow-[0_0_40px_hsl(var(--neon-green)/0.5)]" :
                          "border-[hsl(var(--neon-blue))]/50 group-hover:border-[hsl(var(--neon-blue))] group-hover:shadow-[0_0_40px_hsl(var(--neon-blue)/0.5)]"
                        }`
                    }`}
                  >
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl ${
                      i === 0 ? "bg-gradient-to-br from-[hsl(var(--neon-cyan))]/5 to-transparent" :
                      i === 1 ? "bg-gradient-to-br from-[hsl(var(--neon-green))]/5 to-transparent" :
                      i === 2 ? "bg-gradient-to-br from-[hsl(var(--neon-cyan))]/5 to-transparent" :
                      "bg-gradient-to-br from-[hsl(var(--neon-blue))]/5 to-transparent"
                    }`} />
                    
                    {plan.badge && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[hsl(var(--neon-cyan))] to-[hsl(var(--neon-blue))] text-xs font-bold animate-glow-pulse shadow-[0_0_20px_hsl(var(--neon-cyan))]">
                        {plan.badge}
                      </div>
                    )}
                    <div className="text-center mb-4 relative z-10">
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-[hsl(var(--neon-cyan))] transition-colors">{plan.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                    </div>
                    <div className="text-center mb-6 pb-6 border-b border-white/10 relative z-10">
                      <span className="text-4xl font-bold gradient-text-cyan group-hover:scale-110 inline-block transition-transform">{plan.price}</span>
                      <span className="text-muted-foreground text-sm">/{plan.period}</span>
                    </div>
                    <ul className="space-y-3 mb-6 flex-grow relative z-10">
                      {plan.features.map((feature, j) => (
                        <motion.li
                          key={j}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + j * 0.05 }}
                          className={`flex items-start gap-2 ${plan.highlight || i === 3 ? "justify-center" : ""}`}
                        >
                          <span className={`mt-0.5 flex-shrink-0 ${
                            i === 0 ? "text-[hsl(var(--neon-cyan))]" :
                            i === 1 ? "text-[hsl(var(--neon-green))]" :
                            i === 2 ? "text-[hsl(var(--neon-cyan))]" :
                            "text-[hsl(var(--neon-blue))]"
                          }`}>✓</span>
                          <span className={`text-sm ${plan.highlight || i === 3 ? "text-center" : "text-left"}`}>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                    <GlowButton
                      variant={neonColor as any}
                      size="md"
                      className="w-full mt-auto relative z-10"
                      onClick={() => navigate("/register")}
                    >
                      {plan.highlight ? "🚀 Claim Lifetime Deal" : "Buy"}
                    </GlowButton>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 md:px-6 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text-cyan"
          >
            How It Works
          </motion.h2>

          <div className="space-y-6">
            {[
              { step: 1, title: "Speak, Scan, or Tap", desc: "Choose your preferred method", color: "cyan" },
              { step: 2, title: "AI Processes Instantly", desc: "Our AI understands and creates the invoice", color: "green" },
              { step: 3, title: "Invoice Ready", desc: "Export, send, or get paid immediately", color: "blue" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <GlassCard 
                  neonBorder={item.color as any}
                  className="flex flex-col sm:flex-row items-center gap-6 p-6 border-2"
                >
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${
                    item.color === "cyan" ? "from-[hsl(var(--neon-cyan))] to-[hsl(var(--neon-blue))]" :
                    item.color === "green" ? "from-[hsl(var(--neon-green))] to-[hsl(var(--neon-cyan))]" :
                    "from-[hsl(var(--neon-blue))] to-[hsl(var(--neon-cyan))]"
                  } flex items-center justify-center flex-shrink-0 glow-cyan`}>
                    <span className="text-2xl font-bold">{item.step}</span>
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-xl md:text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm md:text-base">{item.desc}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Accounting Features */}
      <section className="py-20 px-4 md:px-6 bg-gradient-to-b from-transparent via-[hsl(var(--neon-green))]/5 to-transparent relative z-10">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text-cyan"
          >
            Advanced Accounting System
          </motion.h2>
          <p className="text-center text-muted-foreground mb-16 text-lg max-w-3xl mx-auto">
            Automatic double-entry bookkeeping that handles everything for you
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Automatic General Ledger",
                description: "Every invoice and payment automatically posts to the ledger with double-entry bookkeeping (DR/CR)",
                icon: "📖",
                features: ["Chart of Accounts (COA)", "General Ledger", "Automatic posting"],
                color: "cyan"
              },
              {
                title: "Financial Statements",
                description: "Profit & Loss, Balance Sheet, and Cash Flow reports in real-time",
                icon: "📊",
                features: ["P&L Statement", "Balance Sheet", "Cash Flow Analysis"],
                color: "green"
              },
              {
                title: "Tax Assistant",
                description: "Automatic tax calculation (Federal, State, Local) with AI optimization",
                icon: "🧾",
                features: ["Auto calculation", "Quarterly estimates", "Deduction identification"],
                color: "blue"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <GlassCard 
                  neonBorder={item.color as any} 
                  hover 
                  className="h-full p-6 border-2"
                >
                  <div className="text-4xl md:text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm md:text-base">{item.description}</p>
                  <ul className="space-y-2">
                    {item.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm">
                        <span className="text-[hsl(var(--neon-green))]">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 px-4 md:px-6 relative z-10">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text-cyan"
          >
            Enterprise-Grade Security
          </motion.h2>
          <p className="text-center text-muted-foreground mb-16 text-lg max-w-3xl mx-auto">
            Bank-level encryption and certifications for maximum data protection
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto mb-12">
            {[
              {
                title: "🔐 SOC 2 & GDPR Compliance",
                description: "Fully certified with SOC 2, GDPR, and HIPAA standards for financial data protection",
                features: ["Audit logs", "Compliance reports", "Legal compliance rules"],
                color: "cyan"
              },
              {
                title: "🛡️ Encryption & Security",
                description: "256-bit AES encryption, TLS 1.3, RBAC and SSO for maximum protection",
                features: ["End-to-end encryption", "Role-Based Access Control", "Single Sign-On"],
                color: "green"
              },
              {
                title: "🔑 Advanced Authentication",
                description: "Multi-factor authentication (MFA), biometric login and SSO integration",
                features: ["MFA authentication", "Biometric login", "OAuth2 & SAML"],
                color: "blue"
              },
              {
                title: "📋 Audit Trail & Monitoring",
                description: "Complete history of all actions with real-time security event monitoring",
                features: ["Complete audit trail", "Real-time monitoring", "Security alerts"],
                color: "cyan"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <GlassCard 
                  neonBorder={item.color as any} 
                  hover 
                  className="h-full p-6 border-2"
                >
                  <h3 className="text-xl md:text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm md:text-base">{item.description}</p>
                  <ul className="space-y-2">
                    {item.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm">
                        <span className="text-[hsl(var(--neon-cyan))]">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Complete Business Suite */}
      <section className="py-20 px-4 md:px-6 bg-gradient-to-b from-transparent via-[hsl(var(--neon-cyan))]/5 to-transparent relative z-10">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text-cyan"
          >
            Complete Business Suite
          </motion.h2>
          <p className="text-center text-muted-foreground mb-16 text-lg max-w-3xl mx-auto">
            Everything you need to run your business, all in one place
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 max-w-6xl mx-auto">
            {[
              { icon: "🏦", title: "Bank Integration", desc: "Auto-sync all bank accounts", color: "cyan" },
              { icon: "📊", title: "AI Analytics", desc: "Revenue & cash flow predictions", color: "green" },
              { icon: "🔄", title: "Recurring Billing", desc: "Automatic monthly invoices", color: "blue" },
              { icon: "📦", title: "Warehouse Management", desc: "Inventory & purchase orders", color: "cyan" },
              { icon: "👥", title: "CRM System", desc: "Customer & contact management", color: "green" },
              { icon: "💼", title: "Payroll System", desc: "Payroll runs & tax withholding", color: "blue" },
              { icon: "🌐", title: "API Gateway", desc: "Integration with other systems", color: "cyan" },
              { icon: "📱", title: "Mobile App", desc: "iOS & Android with offline mode", color: "green" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <GlassCard 
                  neonBorder={item.color as any} 
                  hover 
                  className="text-center h-full p-4 border-2"
                >
                  <div className="text-3xl md:text-4xl mb-3">{item.icon}</div>
                  <h3 className="font-bold mb-2 text-sm md:text-base">{item.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">{item.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}

      {/* Footer */}
      <footer className="py-8 px-4 md:px-6 border-t border-white/10 relative z-10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src={icon} alt="AI Control Money" className="w-8 h-8" />
              <span className="text-sm text-muted-foreground">© 2025 AI Control Money - Dušan Urban</span>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-[hsl(var(--neon-cyan))] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-[hsl(var(--neon-cyan))] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-[hsl(var(--neon-cyan))] transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Customer tagline */}
      <div className="text-center py-6 text-sm text-muted-foreground relative z-10">
        Your customers tap their phone. They're paid. Invoice in their pocket.
      </div>
    </div>
  );
};

export default Landing;
