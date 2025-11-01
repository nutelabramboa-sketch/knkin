import { motion } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { TopBar } from "@/components/TopBar";
import { MobileNav } from "@/components/MobileNav";
import { Mic, MicOff, CheckCircle2 } from "lucide-react";
import { GlowButton } from "@/components/GlowButton";
import { useState } from "react";

const VoiceInvoice = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [completed, setCompleted] = useState(false);

  const toggleRecording = () => {
    if (!isRecording) {
      setIsRecording(true);
      setTimeout(() => {
        setTranscript("Invoice for Tech Solutions, three consulting hours at $150 per hour, total $450");
        setIsRecording(false);
      }, 3000);
    } else {
      setIsRecording(false);
    }
  };

  const createInvoice = () => {
    setCompleted(true);
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
          <h1 className="text-3xl md:text-4xl font-bold mb-2 gradient-text-cyan">Voice Invoice AI</h1>
          <p className="text-muted-foreground">Speak your invoice into existence</p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {!completed ? (
            <GlassCard neonBorder="blue" className="p-12">
              <div className="text-center">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleRecording}
                  className={`w-32 h-32 mx-auto mb-8 rounded-full flex items-center justify-center transition-all ${
                    isRecording 
                      ? "bg-red-500/20 shadow-[0_0_30px_rgba(239,68,68,0.5)]" 
                      : "bg-[hsl(var(--neon-blue))]/20 shadow-[0_0_30px_rgba(0,224,255,0.3)]"
                  }`}
                >
                  {isRecording ? (
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 1 }}
                    >
                      <MicOff className="w-16 h-16 text-red-400" />
                    </motion.div>
                  ) : (
                    <Mic className="w-16 h-16 text-[hsl(var(--neon-blue))]" />
                  )}
                </motion.button>

                <h2 className="text-2xl font-bold mb-4">
                  {isRecording ? "Listening..." : "Tap to Speak"}
                </h2>
                <p className="text-muted-foreground mb-8">
                  {isRecording 
                    ? "Speak clearly about your invoice details" 
                    : "Describe the invoice: client, items, amounts"}
                </p>

                {isRecording && (
                  <motion.div 
                    className="flex justify-center gap-2 mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    {[0, 1, 2, 3, 4].map(i => (
                      <motion.div
                        key={i}
                        className="w-2 bg-[hsl(var(--neon-blue))] rounded-full"
                        animate={{ height: [20, 40, 20] }}
                        transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.1 }}
                      />
                    ))}
                  </motion.div>
                )}

                {transcript && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass rounded-xl p-6 mb-6"
                  >
                    <p className="text-sm text-muted-foreground mb-2">Transcript</p>
                    <p className="text-left">{transcript}</p>
                  </motion.div>
                )}

                {transcript && !isRecording && (
                  <GlowButton variant="cyan" size="lg" onClick={createInvoice}>
                    Create Invoice from Voice
                  </GlowButton>
                )}
              </div>
            </GlassCard>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <GlassCard neonBorder="green" className="text-center p-12">
                <CheckCircle2 className="w-32 h-32 mx-auto text-[hsl(var(--neon-green))] mb-8" />
                <h2 className="text-2xl font-bold mb-4">Invoice Created!</h2>
                <p className="text-muted-foreground mb-8">Your voice invoice has been processed</p>
                
                <div className="glass rounded-xl p-6 mb-8 text-left">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Client</span>
                      <span className="font-medium">Tech Solutions</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Service</span>
                      <span className="font-medium">Consulting (3hrs)</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold pt-3 border-t border-white/10">
                      <span>Total</span>
                      <span className="gradient-text-cyan">$450.00</span>
                    </div>
                  </div>
                </div>

                <GlowButton 
                  variant="green" 
                  size="lg" 
                  onClick={() => { setCompleted(false); setTranscript(""); }}
                >
                  Create Another
                </GlowButton>
              </GlassCard>
            </motion.div>
          )}
        </div>
      </div>

      <MobileNav />
    </div>
  );
};

export default VoiceInvoice;
