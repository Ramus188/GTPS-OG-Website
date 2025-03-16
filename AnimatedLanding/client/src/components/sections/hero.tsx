import { motion } from "framer-motion";
import { AnimatedText } from "@/components/ui/animated-text";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { PlatformDialog } from "@/components/ui/platform-dialog";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1620121692029-d088224ddc74')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.1
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <AnimatedText
            text="Welcome to GTPS OG"
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Experience the most advanced and stable Growtopia Private Server with amazing features and an active community.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <PlatformDialog
              trigger={
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-400 to-orange-500 hover:from-green-500 hover:to-orange-600"
                >
                  Start Playing Now
                </Button>
              }
            />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown className="w-8 h-8 text-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}