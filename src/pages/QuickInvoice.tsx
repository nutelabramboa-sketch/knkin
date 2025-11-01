import { motion } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { TopBar } from "@/components/TopBar";
import { MobileNav } from "@/components/MobileNav";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GlowButton } from "@/components/GlowButton";
import { Plus, Trash2 } from "lucide-react";
import { useState } from "react";

const QuickInvoice = () => {
  const [items, setItems] = useState([{ desc: "", qty: 1, price: 0 }]);

  const addItem = () => setItems([...items, { desc: "", qty: 1, price: 0 }]);
  const removeItem = (i: number) => setItems(items.filter((_, idx) => idx !== i));
  
  const subtotal = items.reduce((sum, item) => sum + (item.qty * item.price), 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <div className="min-h-screen pb-24 md:pb-8">
      <TopBar />
      
      <div className="container mx-auto px-4 pt-20 md:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-2 gradient-text-cyan">Quick Invoice</h1>
          <p className="text-muted-foreground">Create invoices in seconds</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <GlassCard neonBorder="cyan">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Company</Label>
                  <Select defaultValue="acme">
                    <SelectTrigger className="glass border-white/20">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="acme">Acme Corp</SelectItem>
                      <SelectItem value="tech">Tech Solutions</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label>Customer</Label>
                  <Select defaultValue="john">
                    <SelectTrigger className="glass border-white/20">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="john">John Smith</SelectItem>
                      <SelectItem value="jane">Jane Doe</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label>Items</Label>
                  <button onClick={addItem} className="text-[hsl(var(--neon-cyan))] hover:underline text-sm flex items-center gap-1">
                    <Plus className="w-4 h-4" /> Add Item
                  </button>
                </div>
                
                {items.map((item, i) => (
                  <div key={i} className="glass rounded-xl p-4 space-y-3">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
                      <div className="md:col-span-6">
                        <Input 
                          placeholder="Description" 
                          className="glass border-white/20"
                          value={item.desc}
                          onChange={e => {
                            const newItems = [...items];
                            newItems[i].desc = e.target.value;
                            setItems(newItems);
                          }}
                        />
                      </div>
                      <div className="md:col-span-2">
                        <Input 
                          type="number" 
                          placeholder="Qty" 
                          className="glass border-white/20"
                          value={item.qty}
                          onChange={e => {
                            const newItems = [...items];
                            newItems[i].qty = Number(e.target.value);
                            setItems(newItems);
                          }}
                        />
                      </div>
                      <div className="md:col-span-3">
                        <Input 
                          type="number" 
                          placeholder="Price" 
                          className="glass border-white/20"
                          value={item.price}
                          onChange={e => {
                            const newItems = [...items];
                            newItems[i].price = Number(e.target.value);
                            setItems(newItems);
                          }}
                        />
                      </div>
                      <div className="md:col-span-1 flex items-center justify-center">
                        {items.length > 1 && (
                          <button onClick={() => removeItem(i)} className="text-destructive hover:text-destructive/80">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="glass rounded-xl p-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Tax (10%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-bold pt-2 border-t border-white/10">
                  <span>Total</span>
                  <span className="gradient-text-cyan">${total.toFixed(2)}</span>
                </div>
              </div>

              <GlowButton variant="cyan" size="lg" className="w-full">
                Generate Invoice
              </GlowButton>
            </div>
          </GlassCard>
        </div>
      </div>

      <MobileNav />
    </div>
  );
};

export default QuickInvoice;
