import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SiDiscord } from "react-icons/si";

export function Contact() {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1627389955611-70c92a5d2e2b')`,
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
            Join Our Community
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with us on Discord and be part of our growing community!
          </p>
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a
              href="https://discord.gg/ugwUYzrCRw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-[#5865F2] hover:bg-[#4752C4] text-white flex items-center gap-2 px-8 py-6"
              >
                <SiDiscord className="w-6 h-6" />
                <span className="text-lg">Join our Discord</span>
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}