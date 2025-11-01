import { motion } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { TopBar } from "@/components/TopBar";
import { MobileNav } from "@/components/MobileNav";
import { Upload, Camera, FileCheck } from "lucide-react";
import { GlowButton } from "@/components/GlowButton";
import { useState } from "react";

const PhotoInvoice = () => {
  const [uploaded, setUploaded] = useState(false);
  const [processing, setProcessing] = useState(false);

  const handleUpload = () => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setUploaded(true);
    }, 2000);
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
          <h1 className="text-3xl md:text-4xl font-bold mb-2 gradient-text-cyan">Photo Invoice AI</h1>
          <p className="text-muted-foreground">Snap a photo, AI creates the invoice</p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {!uploaded ? (
            <GlassCard neonBorder="green" className="p-12">
              <div className="text-center">
                {processing ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    className="mb-8"
                  >
                    <Camera className="w-32 h-32 mx-auto text-[hsl(var(--neon-green))]" />
                  </motion.div>
                ) : (
                  <Upload className="w-32 h-32 mx-auto text-[hsl(var(--neon-green))] mb-8" />
                )}
                
                <h2 className="text-2xl font-bold mb-4">
                  {processing ? "AI Processing..." : "Upload Receipt or Document"}
                </h2>
                <p className="text-muted-foreground mb-8">
                  {processing ? "Extracting data from image" : "Drag & drop or click to select"}
                </p>
                
                {!processing && (
                  <GlowButton variant="green" size="lg" onClick={handleUpload}>
                    Select Image
                  </GlowButton>
                )}
              </div>
            </GlassCard>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <GlassCard neonBorder="green">
                <div className="flex items-center gap-3 mb-6">
                  <FileCheck className="w-8 h-8 text-[hsl(var(--neon-green))]" />
                  <div>
                    <h3 className="font-bold">AI Extraction Complete</h3>
                    <p className="text-sm text-muted-foreground">Review extracted data</p>
                  </div>
                </div>

                <div className="glass rounded-xl p-4 space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Vendor</span>
                    <span className="font-medium">Office Supplies Co.</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Date</span>
                    <span className="font-medium">Jan 15, 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Items</span>
                    <span className="font-medium">3 products</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold pt-3 border-t border-white/10">
                    <span>Total</span>
                    <span className="gradient-text-cyan">$247.50</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <GlowButton variant="green" size="lg" className="flex-1">
                    Create Invoice
                  </GlowButton>
                  <button 
                    onClick={() => setUploaded(false)}
                    className="px-6 py-3 glass rounded-full hover:bg-white/10 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </GlassCard>
            </motion.div>
          )}
        </div>
      </div>

      <MobileNav />
    </div>
  );
};

export default PhotoInvoice;
