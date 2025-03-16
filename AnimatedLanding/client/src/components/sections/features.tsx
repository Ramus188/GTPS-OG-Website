import { motion } from "framer-motion";
import { BounceCard } from "@/components/ui/bounce-card";
import { Laptop, Shield, Zap, Users } from "lucide-react";

const features = [
  {
    icon: <Laptop className="w-8 h-8" />,
    title: "Modern Design",
    description: "Clean and intuitive interface built for the future"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Secure",
    description: "Enterprise-grade security for peace of mind"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Lightning Fast",
    description: "Optimized performance for the best experience"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Team Friendly",
    description: "Built for collaboration and productivity"
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1563089145-599997674d42')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.05
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-orange-500 text-transparent bg-clip-text">
            Amazing Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover what makes our platform unique and powerful
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <BounceCard className="h-full">
                <div className="p-6 text-center">
                  <div className="mb-4 inline-block text-primary">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </BounceCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
