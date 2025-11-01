import { motion } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { TopBar } from "@/components/TopBar";
import { MobileNav } from "@/components/MobileNav";
import { DollarSign, Users, Calendar, Download } from "lucide-react";
import { GlowButton } from "@/components/GlowButton";

const PayrollSystem = () => {
  const employees = [
    { name: "Sarah Chen", role: "CEO", salary: "$12,000", status: "Paid", date: "Jan 31, 2025" },
    { name: "Mike Johnson", role: "CTO", salary: "$10,500", status: "Paid", date: "Jan 31, 2025" },
    { name: "Emily Davis", role: "CFO", salary: "$10,000", status: "Paid", date: "Jan 31, 2025" },
    { name: "Alex Martinez", role: "Designer", salary: "$6,500", status: "Pending", date: "Feb 15, 2025" },
    { name: "Jordan Lee", role: "Developer", salary: "$7,800", status: "Pending", date: "Feb 15, 2025" },
  ];

  const stats = [
    { icon: DollarSign, label: "Total Payroll", value: "$46.8K", color: "cyan" },
    { icon: Users, label: "Employees", value: "5", color: "green" },
    { icon: Calendar, label: "Next Payment", value: "Feb 15", color: "blue" },
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
          <h1 className="text-3xl md:text-4xl font-bold mb-2 gradient-text-cyan">Payroll System</h1>
          <p className="text-muted-foreground">Manage employee compensation</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <GlassCard className="p-6">
                  <Icon className={`w-8 h-8 mb-3 text-[hsl(var(--neon-${stat.color}))]`} />
                  <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold gradient-text-cyan">{stat.value}</p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        <div className="flex justify-end mb-6">
          <GlowButton variant="cyan">
            <Download className="w-4 h-4 mr-2" />
            Export Payroll CSV
          </GlowButton>
        </div>

        <div className="space-y-4">
          {employees.map((employee, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard className="p-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[hsl(var(--neon-cyan))] to-[hsl(var(--neon-blue))] flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {employee.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1">{employee.name}</h3>
                    <p className="text-sm text-muted-foreground">{employee.role}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-6 md:gap-8 items-center">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Monthly Salary</p>
                      <p className="font-bold text-lg gradient-text-cyan">{employee.salary}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Payment Date</p>
                      <p className="font-medium">{employee.date}</p>
                    </div>
                    <div>
                      <span className={`text-xs px-3 py-1 rounded-full ${
                        employee.status === "Paid" 
                          ? "bg-[hsl(var(--neon-green))]/20 text-[hsl(var(--neon-green))]"
                          : "bg-[hsl(var(--neon-orange))]/20 text-[hsl(var(--neon-orange))]"
                      }`}>
                        {employee.status}
                      </span>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <GlassCard neonBorder="cyan">
            <h3 className="font-bold text-lg mb-4">Payroll Breakdown</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 glass rounded-lg">
                <span className="text-sm text-muted-foreground">Base Salaries</span>
                <span className="font-bold">$46,800</span>
              </div>
              <div className="flex justify-between items-center p-3 glass rounded-lg">
                <span className="text-sm text-muted-foreground">Taxes (est.)</span>
                <span className="font-bold">$10,264</span>
              </div>
              <div className="flex justify-between items-center p-3 glass rounded-lg">
                <span className="text-sm text-muted-foreground">Benefits</span>
                <span className="font-bold">$3,740</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-[hsl(var(--neon-cyan))]/10 rounded-lg border border-[hsl(var(--neon-cyan))]/30">
                <span className="font-bold">Total Cost</span>
                <span className="font-bold text-lg gradient-text-cyan">$60,804</span>
              </div>
            </div>
          </GlassCard>

          <GlassCard neonBorder="green">
            <h3 className="font-bold text-lg mb-4">Payment History</h3>
            <div className="space-y-3">
              {[
                { month: "January 2025", amount: "$46,800", status: "Completed" },
                { month: "December 2024", amount: "$46,800", status: "Completed" },
                { month: "November 2024", amount: "$42,300", status: "Completed" },
              ].map((payment, i) => (
                <div key={i} className="flex justify-between items-center p-3 glass rounded-lg">
                  <div>
                    <p className="font-medium">{payment.month}</p>
                    <p className="text-xs text-muted-foreground">{payment.status}</p>
                  </div>
                  <span className="font-bold gradient-text-cyan">{payment.amount}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>

      <MobileNav />
    </div>
  );
};

export default PayrollSystem;
